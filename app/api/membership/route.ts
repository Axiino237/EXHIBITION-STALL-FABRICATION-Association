import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      designation,
      mobileNumber,
      email,
      city,
      state,
      businessCategory,
      experienceYears,
      website,
      gstNumber,
      message,
      docUrl
    } = body;

    if (!fullName || !companyName || !mobileNumber || !email || !businessCategory) {
      return NextResponse.json(
        { error: 'Full Name, Company Name, Mobile Number, Email, and Business Category are required.' },
        { status: 400 }
      );
    }

    const application = {
      id: 'app-' + Date.now(),
      fullName,
      companyName,
      designation: designation || 'Representative',
      mobileNumber,
      email,
      city: city || 'Unspecified',
      state: state || 'India',
      businessCategory,
      experienceYears: Number(experienceYears) || 0,
      website: website || '',
      gstNumber: gstNumber || '',
      message: message || '',
      docUrl: docUrl || '',
      status: 'PENDING' as const,
      createdAt: new Date().toISOString()
    };

    if (db) {
      db.applications.unshift(application);
    }

    // Email notification to Admin Secretariat
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0B1220; color: #FFFFFF; padding: 24px; border-radius: 8px;">
        <h2 style="color: #F59E0B; margin-top: 0; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">
          New Membership Application Received
        </h2>
        <p><strong>Applicant Name:</strong> ${fullName} (${designation || 'Proprietor'})</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Category:</strong> <span style="background: #F59E0B; color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${businessCategory}</span></p>
        <p><strong>Contact:</strong> ${mobileNumber} | <a href="mailto:${email}" style="color: #F59E0B;">${email}</a></p>
        <p><strong>Location:</strong> ${city}, ${state}</p>
        <p><strong>Years in Industry:</strong> ${experienceYears || 'N/A'}</p>
        <p><strong>GST Number:</strong> ${gstNumber || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website ? `<a href="${website}" style="color: #F59E0B;">${website}</a>` : 'N/A'}</p>
        <div style="background: #111827; padding: 16px; border-left: 4px solid #F59E0B; margin: 16px 0; border-radius: 4px;">
          <p style="margin: 0;"><strong>Message / Background:</strong></p>
          <p style="margin-top: 6px; white-space: pre-wrap;">${message || 'No additional comments provided.'}</p>
        </div>
        <p style="font-size: 12px; color: #94A3B8;">Review and approve this application in the ESFA Admin Portal.</p>
      </div>
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'secretariat@esfa-india.org',
      subject: `[ESFA Membership Application] ${companyName} (${fullName})`,
      replyTo: email,
      html: adminEmailHtml
    });

    // Confirmation email to Applicant
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0B1220; color: #FFFFFF; padding: 24px; border-radius: 8px;">
        <h2 style="color: #F59E0B; margin-top: 0; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">
          Thank You for Applying to ESFA India
        </h2>
        <p>Dear ${fullName},</p>
        <p>We have successfully received your membership application for <strong>${companyName}</strong> in the category <strong>${businessCategory}</strong>.</p>
        <p>Our Membership Scrutiny Committee is currently reviewing your application details. A representative from the Secretariat will get in touch with you via phone or WhatsApp at <strong>${mobileNumber}</strong> within 1-2 business days to complete the onboarding verification.</p>
        <div style="background: #111827; padding: 16px; border-left: 4px solid #F59E0B; margin: 16px 0; border-radius: 4px;">
          <p style="margin: 0; font-size: 14px; color: #CBD5E1;">
            "Uniting the Exhibition Stall & Fabrication Industry — Building a stronger, connected and professional future together."
          </p>
        </div>
        <p>Warm regards,<br><strong>Membership Committee</strong><br>Expo & Stall Fabricators Association (ESFA)</p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `ESFA India: Application Received for ${companyName}`,
      html: userEmailHtml
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your membership application has been received. Our team will contact you shortly.',
      id: application.id
    });
  } catch (error: any) {
    console.error('Membership API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your application.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    applications: db?.applications || []
  });
}

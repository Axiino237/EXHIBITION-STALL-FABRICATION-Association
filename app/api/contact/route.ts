import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are mandatory fields.' },
        { status: 400 }
      );
    }

    const newMessage = {
      id: 'msg-' + Date.now(),
      name,
      company: company || 'Individual / Freelance',
      email,
      phone: phone || 'Not provided',
      subject: subject || 'General Inquiry via TNSFA Website',
      message,
      isRead: false,
      createdAt: new Date().toISOString()
    };

    if (db) {
      db.messages.unshift(newMessage);
    }

    // Dispatch email notification to Secretariat
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0B1220; color: #FFFFFF; padding: 24px; border-radius: 8px;">
        <h2 style="color: #F59E0B; margin-top: 0; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">
          New Contact Message — TNSFA Secretariat
        </h2>
        <p><strong>From:</strong> ${name} (${company || 'Individual'})</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #F59E0B;">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <div style="background: #111827; padding: 16px; border-left: 4px solid #F59E0B; margin: 16px 0; border-radius: 4px;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #94A3B8;">Received via Tamil Nadu Stall Fabrication Association Web Portal</p>
      </div>
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'secretariat@tnsfa.org',
      subject: `[TNSFA Contact] ${subject || 'New Message from ' + name}`,
      replyTo: email,
      html: emailHtml
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. The association secretariat will reach out shortly.',
      id: newMessage.id
    });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    messages: db?.messages || []
  });
}

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventId, name, company, mobile, email, attendees } = body;

    if (!eventId || !name || !email || !mobile) {
      return NextResponse.json(
        { error: 'Event ID, Name, Mobile, and Email are required.' },
        { status: 400 }
      );
    }

    const event = db?.events.find(e => e.id === eventId || e.slug === eventId);
    const eventTitle = event ? event.title : 'ESFA Industry Event';

    const registration = {
      id: 'reg-' + Date.now(),
      eventId,
      name,
      company: company || 'Independent',
      mobile,
      email,
      attendees: Number(attendees) || 1,
      createdAt: new Date().toISOString()
    };

    if (db) {
      db.eventRegistrations.unshift(registration);
    }

    // Confirmation email to attendee
    const attendeeEmailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0B1220; color: #FFFFFF; padding: 24px; border-radius: 8px;">
        <h2 style="color: #F59E0B; margin-top: 0; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">
          Event Registration Confirmed
        </h2>
        <p>Dear ${name},</p>
        <p>You have successfully registered for:</p>
        <h3 style="color: #FBBF24; margin: 8px 0;">${eventTitle}</h3>
        <p><strong>Date & Time:</strong> ${event?.timeString || 'TBA'}</p>
        <p><strong>Venue:</strong> ${event?.venue || 'TBA'}, ${event?.city || ''}</p>
        <p><strong>Confirmed Delegates:</strong> ${attendees || 1}</p>
        <p style="margin-top: 16px;">Please present this confirmation email or your mobile number at the delegate check-in desk upon arrival.</p>
        <p>Looking forward to seeing you there!</p>
        <p>Warm regards,<br><strong>Events Committee</strong><br>Expo & Stall Fabricators Association (ESFA)</p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `RSVP Confirmed: ${eventTitle}`,
      html: attendeeEmailHtml
    });

    return NextResponse.json({
      success: true,
      message: 'Registration successful! A confirmation ticket has been dispatched to your email.',
      id: registration.id
    });
  } catch (error: any) {
    console.error('Event Registration API error:', error);
    return NextResponse.json(
      { error: 'Failed to process event registration.' },
      { status: 500 }
    );
  }
}

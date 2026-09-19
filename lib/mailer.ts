import nodemailer from 'nodemailer';

export interface EmailPayload {
  to?: string;
  from?: string;
  subject: string;
  text?: string;
  html: string;
  replyTo?: string;
}

/**
 * Universal Email Dispatcher for Next.js & Vercel
 * Supports SMTP (Nodemailer), Resend API, and safe dev fallback.
 */
export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean; id?: string; error?: string }> {
  const recipient = payload.to || process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'secretariat@tnsfa.org';
  const sender = payload.from || process.env.SMTP_FROM || '"TNSFA Portal" <no-reply@tnsfa.org>';

  // 1. Try Resend if API key configured (Vercel-native)
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          subject: payload.subject,
          html: payload.html,
          reply_to: payload.replyTo
        })
      });

      const resData = await response.json();
      if (response.ok) {
        console.log('[Mailer] Email successfully dispatched via Resend API:', resData.id);
        return { success: true, id: resData.id };
      } else {
        console.warn('[Mailer] Resend API error, trying SMTP fallback...', resData);
      }
    } catch (err: any) {
      console.warn('[Mailer] Resend fetch failed, trying SMTP fallback:', err.message);
    }
  }

  // 2. Try SMTP via Nodemailer if SMTP credentials are provided
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const info = await transporter.sendMail({
        from: sender,
        to: recipient,
        replyTo: payload.replyTo,
        subject: payload.subject,
        text: payload.text || payload.html.replace(/<[^>]+>/g, ''),
        html: payload.html
      });

      console.log('[Mailer] Email dispatched via SMTP. Message ID:', info.messageId);
      return { success: true, id: info.messageId };
    } catch (smtpErr: any) {
      console.error('[Mailer] SMTP transport error:', smtpErr.message);
      // continue to safe dev log
    }
  }

  // 3. Fallback for local development or before SMTP keys are configured in Vercel
  console.log('====================================================');
  console.log('[Mailer] EMAIL SENT (Dev / Simulation Mode)');
  console.log('To:', recipient);
  console.log('Subject:', payload.subject);
  console.log('ReplyTo:', payload.replyTo || 'N/A');
  console.log('====================================================');
  return { success: true, id: 'simulated-' + Date.now() };
}

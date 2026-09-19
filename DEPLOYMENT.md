# Hosting & Deployment Guide: Vercel + Email Service + Database

This application is built with **Next.js (App Router)** and is 100% architected for direct 1-click deployment on **Vercel**, including active **Email Service** dispatch (from the Contact form, Membership Application form, and Event RSVP registration).

---

## 1. Quick Deploy to Vercel

### Option A: Using GitHub / GitLab / Bitbucket (Recommended)
1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: ESFA National Association Portal"
   git push origin main
   ```
2. Open [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** &bull; **"Import"** your repository.
4. Next.js is auto-detected. Leave the build settings as default (`npm run build`).
5. In the **Environment Variables** section, configure your email settings (see Section 2 below).
6. Click **"Deploy"**. Your website will be live in under 2 minutes!

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

---

## 2. Email Service Setup (Contact & Application Notifications)

The application features a universal dual email service (`lib/mailer.ts`) supporting both **Resend** (Vercel-native) and standard **SMTP (Gmail / Zoho / Hostinger / Brevo)**.

In your Vercel Project Dashboard (**Settings &rarr; Environment Variables**), add either of the following configurations:

### Choice 1: Resend (Fastest & Native for Vercel)
1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Add the following Environment Variables in Vercel:
   ```env
   RESEND_API_KEY=re_123456789...
   ADMIN_EMAIL=secretariat@esfa-india.org
   SMTP_FROM="ESFA Secretariat <onboarding@resend.dev>"
   ```

### Choice 2: Standard SMTP (e.g., Gmail App Password or Custom Domain Webmail)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourassociation@gmail.com
SMTP_PASS=your-16-character-app-password
SMTP_FROM="ESFA India <yourassociation@gmail.com>"
ADMIN_EMAIL=secretariat@esfa-india.org
```

> **Note**: Even if you deploy without setting any environment variables immediately, the website will work safely in **Preview Mode** without crashing or throwing errors; submissions are saved and printed to the server console.

---

## 3. Database Setup (Prisma & PostgreSQL)

The project includes a complete 19-table PostgreSQL schema in `prisma/schema.prisma`.

You can connect it with any free hosted PostgreSQL provider:
- **Vercel Postgres** (1-click in Vercel Storage tab)
- **Supabase** ([supabase.com](https://supabase.com))
- **Neon Serverless Postgres** ([neon.tech](https://neon.tech))

### Setting `DATABASE_URL` in Vercel:
```env
DATABASE_URL=postgres://user:password@host:5432/dbname?sslmode=require
```

To push tables to your production PostgreSQL database:
```bash
npx prisma db push
```

---

## 4. Admin CMS Access

- Admin Portal route: `https://your-domain.com/admin`
- Manage:
  - Leadership Committee designations, biographies, and upload actual portraits (automatically replacing the neutral silhouette placeholders).
  - Member Directory and verification badges.
  - Review incoming Membership Applications with Approve/Contacted/Reject actions.
  - Events schedule and RSVP delegate counts.
  - Photo Gallery with masonry view and fullscreen lightbox.
  - Live homepage statistics (`500+`, `100+`, `1000+`, `20+`).
  - Secretariat Contact Messages Inbox.

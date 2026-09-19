# ESFA INDIA — EXPO & STALL FABRICATORS ASSOCIATION

Official web portal and landing page for **ESFA India (Expo & Stall Fabricators Association)**, the premier national professional association / sangam representing stall designers, fabrication workshops, turnkey event contractors, and exhibition service providers across India.

---

## 🌟 Key Features

- **Single Landing Page Architecture**:
  - Smooth anchor navigation across all sections (`#about`, `#ecosystem`, `#leadership`, `#events`, `#gallery`, `#membership`, `#contact`).
- **Interactive Popup Modal for Membership**:
  - Direct digital application modal with backdrop blur, scroll locking, category selection, and instant confetti on submission.
- **Photo Gallery Lightbox**:
  - Full-screen interactive modal lightbox for high-resolution project showcases.
- **Leadership Profiles Modal**:
  - Detailed bio viewer for national committee members.
- **Serverless Email Integration**:
  - Dual-support email dispatch system ready for Vercel Serverless (Resend API & Nodemailer SMTP).
  - In local development without credentials, simulates and logs submissions cleanly.
- **Branded Vector Logo**:
  - Custom geometric gold shield emblem and typography rendered via React SVG for crisp 4K display.
- **Footer Attribution**:
  - Developed by Axiino redirect badge.

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables (Vercel / Production)

Create a `.env.local` file or configure these in your **Vercel Project Settings > Environment Variables**:

| Variable | Description |
|---|---|
| `SECRETARIAT_EMAIL` | Destination email to receive membership and contact submissions (e.g., `secretariat@esfa-india.org`) |
| `RESEND_API_KEY` | *(Option A - Recommended)* Resend API key from [resend.com](https://resend.com) |
| `RESEND_FROM_EMAIL` | Verified sender address (e.g. `onboarding@resend.dev` or `noreply@yourdomain.com`) |
| `SMTP_HOST` | *(Option B)* SMTP server hostname |
| `SMTP_PORT` | SMTP server port (usually `587`) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password or app-specific password |
| `SMTP_FROM` | SMTP sender header |

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. Set your environment variables (like `RESEND_API_KEY` and `SECRETARIAT_EMAIL`).
4. Click **Deploy**.

---

## 🏛️ Developed by
**Axiino** — [https://axiino.com](https://axiino.com)

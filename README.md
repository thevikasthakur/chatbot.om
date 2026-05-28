# chatbot.om

Modern Next.js SSR landing page for chatbot.om, built with Tailwind and a Vercel Function for install-request emails.

## Local setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` before testing the CTA email flow.

## Email CTA

The hero and final CTA post to `/api/install-request`. The route uses SMTP settings and `CTA_OWNER_EMAILS` to email the owner with the submitted website.

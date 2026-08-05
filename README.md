# chatbot.om

Modern Next.js landing page for chatbot.om, built with Tailwind and a
server-side route handler for install-request emails.

## Local setup

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` before testing the CTA email flow.

## Email CTA

The hero and final CTA post to `/api/install-request`. The route uses SMTP settings and `CTA_OWNER_EMAILS` to email the owner with the submitted website.

## Deploy to Netlify

This repository includes `netlify.toml` with the production build settings:

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js: 22

Import the repository in Netlify and leave framework detection enabled. Netlify
automatically applies its current OpenNext adapter, so the App Router API route
is deployed as a serverless function without a separately pinned plugin.

Before the first production deploy, add these environment variables in
**Project configuration → Environment variables**:

```text
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASS
SMTP_FROM
CTA_OWNER_EMAILS
```

Use the values from your SMTP provider. `CTA_OWNER_EMAILS` accepts one address
or a comma-separated list. Keep `NEXT_PUBLIC_API_URL` unset so the form calls
the same Netlify origin; only set it when intentionally hosting the API on a
different domain.

After deployment, submit the install form once and confirm that the Netlify
function logs show a successful request and that the owner email arrives.

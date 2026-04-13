# Gaia Nexus

A premium `Next.js` landing page starter for:

- product or services storytelling
- contact enquiries
- brochure requests
- future AI assistant expansion

## Recommended stack

- `Next.js` App Router
- `TypeScript`
- `Zod`
- `Resend` for email delivery
- `Vercel` for deployment
- `OpenAI Responses API` later for the AI assistant layer

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

```bash
cp .env.example .env.local
```

3. Start development:

```bash
npm run dev
```

## Email setup

The contact form posts to `app/api/contact/route.ts`.

Required environment variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Optional:

- `BROCHURE_URL`

If `BROCHURE_URL` is set and the visitor ticks the brochure option, the app also sends them an email with that brochure link.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

Vercel will auto-detect `Next.js` with the default build settings.
# gaianexus

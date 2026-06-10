# CR Vertex

Network & Systems Integration

Premium marketing website for **CR Vertex**, the founder-led network and
systems integration practice of Christian "Reichi" Reichinger.

The site is built with:

- Next.js 15
- React
- TypeScript
- TailwindCSS
- Framer Motion
- GSAP
- Three.js

## Recommended hosting setup

For this project, the recommended setup is:

1. **Host the website on Vercel**
2. **Manage the domain and DNS in Cloudflare**
3. **Point `crvertex.com` and `www.crvertex.com` from Cloudflare to Vercel**

Why Vercel is the recommended host:

- It is the simplest and most reliable platform for Next.js.
- Builds, previews, HTTPS certificates, rollbacks, and GitHub deployments are
  handled automatically.
- The current app does not need a custom server.
- Cloudflare can still be used for DNS, security, redirects, and domain
  management.

Cloudflare Pages is also a possible option if you want hosting and DNS under
one vendor, but Vercel is the smoother default choice for a modern Next.js 15
site.

## Prerequisites

Install the following locally:

- Node.js 20 or newer
- npm
- Git

You will also need:

- Access to the GitHub repository
- A Vercel account
- A Cloudflare account
- The domain `crvertex.com` added to Cloudflare

## Local development

Clone the repository:

```bash
git clone <repository-url>
cd CR-Network
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality checks

Before deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

Expected result:

- Lint passes
- TypeScript passes
- Production build succeeds
- Runtime audit reports no vulnerabilities

## Deploying to Vercel

### 1. Import the project

1. Go to [vercel.com](https://vercel.com).
2. Select **Add New Project**.
3. Import the GitHub repository.
4. Use the default framework detection:
   - Framework Preset: **Next.js**
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave default

### 2. Environment variables

No environment variables are required for the current static marketing site.

If a real contact form backend is added later, configure any required API keys
or email service credentials in Vercel under:

```text
Project Settings -> Environment Variables
```

### 3. Deploy

After importing, Vercel will build and deploy the site automatically.

Every push to the production branch can trigger a production deployment,
depending on the Vercel project settings. Pull requests will also receive
preview deployment URLs.

## Connecting `crvertex.com` with Cloudflare DNS

### 1. Add the domain in Vercel

In Vercel:

1. Open the project.
2. Go to **Settings -> Domains**.
3. Add:
   - `crvertex.com`
   - `www.crvertex.com`

Vercel will show the DNS records it expects.

### 2. Configure DNS records in Cloudflare

In Cloudflare:

1. Open the `crvertex.com` zone.
2. Go to **DNS -> Records**.
3. Add or update these records:

| Type  | Name | Target                 | Proxy status |
| ----- | ---- | ---------------------- | ------------ |
| A     | `@`  | `76.76.21.21`          | DNS only     |
| CNAME | `www`| `cname.vercel-dns.com` | DNS only     |

Use **DNS only** at first. This makes Vercel domain verification and certificate
issuance straightforward.

After Vercel confirms the domain is valid and HTTPS is active, you can keep the
records as DNS only or enable the Cloudflare proxy if you specifically want
Cloudflare features in front of Vercel. If proxying is enabled, use Cloudflare
SSL mode **Full (strict)**.

### 3. SSL/TLS settings in Cloudflare

In Cloudflare, go to **SSL/TLS** and configure:

- SSL/TLS encryption mode: **Full (strict)**
- Always Use HTTPS: **On**
- Automatic HTTPS Rewrites: **On**

Only enable HSTS after confirming the site works correctly over HTTPS.

### 4. Redirect `www` to apex domain

Recommended primary domain:

```text
https://crvertex.com
```

In Vercel, set `crvertex.com` as the primary domain. Vercel can redirect
`www.crvertex.com` to the apex domain automatically.

Alternatively, create a Cloudflare Redirect Rule:

```text
If hostname equals www.crvertex.com
Forwarding URL: 301
Destination URL: Dynamic
Expression: concat("https://crvertex.com", http.request.uri.path)
```

## Cloudflare security recommendations

Suggested Cloudflare settings:

- Enable **Always Use HTTPS**
- Use **Full (strict)** SSL
- Enable basic bot protection if needed
- Keep DNS records minimal
- Add a redirect from `www` to `crvertex.com`
- Consider HSTS only after the production domain is confirmed stable

Avoid aggressive caching rules for the full site unless you understand the
impact on future dynamic features. Vercel already handles optimized static
assets and cache headers well.

## Contact form note

The current contact form is a front-end form only. It is ready visually, but it
does not yet submit messages to an email inbox or CRM.

Recommended future options:

- Vercel Serverless Function plus an email provider
- Resend
- Postmark
- Formspree
- HubSpot form embed

For a premium site, the best long-term option is usually a small API route that
sends mail through Resend or Postmark and includes spam protection.

## Deployment checklist

Before going live:

- [ ] Verify `crvertex.com` is added to Cloudflare.
- [ ] Verify Vercel has both `crvertex.com` and `www.crvertex.com`.
- [ ] Add Cloudflare DNS records for Vercel.
- [ ] Confirm HTTPS works on the apex domain.
- [ ] Confirm `www.crvertex.com` redirects to `crvertex.com`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --omit=dev`.
- [ ] Test the site on desktop, tablet, and mobile.
- [ ] Replace the portrait placeholder with a final professional image when
      available.
- [ ] Connect the contact form to a backend before relying on it for leads.

## Useful commands

```bash
# Start local development
npm run dev

# Run linting
npm run lint

# Run TypeScript checks
npm run typecheck

# Build for production
npm run build

# Start the production build locally
npm run start

# Check runtime dependency audit
npm audit --omit=dev
```

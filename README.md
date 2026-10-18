# Demo-Boyz

Kelowna general contracting site. Houses and commercial work. Phone (250) 681-0511. Email kyle@demo-boyz.com.

## Deploy on Vercel

1. Import this GitHub repo in Vercel. Framework is Next.js. Leave the build command as `next build`.
2. Add the domain when you have one, then point its DNS at the records Vercel shows.
3. Set `NEXT_PUBLIC_SITE_URL` to that domain, for example `https://demoboyz.ca`, and redeploy so share cards and the sitemap use it.
4. The request form emails kyle@demo-boyz.com through [Resend](https://resend.com). Verify the domain there, then set these environment variables and redeploy:

   - `RESEND_API_KEY`
   - `RESEND_FROM` — for example `Demo-Boyz <hello@demo-boyz.com>`

Until those two variables are set, the form tells the visitor to call.

## Local

```bash
npm install
npm run dev
```

# Environment Variables Security Guide for Next.js & Vercel

## Overview
This guide shows how to securely manage Gmail credentials in a Next.js project deployed on Vercel.

## Security Best Practices

### 1. Types of Environment Variables in Next.js

```bash
# .env.local (Local development only - NEVER commit)
# Only available on server-side (Node.js)
GMAIL_USER=altheacambray04@gmail.com
GMAIL_PASSWORD=your-app-password

# .env.local (Client-side - prefixed with NEXT_PUBLIC_)
# WARNING: These are exposed to browser, don't put secrets here!
NEXT_PUBLIC_API_URL=https://yourdomain.com

# .env.production.local (For production build locally)
GMAIL_USER=altheacambray04@gmail.com
GMAIL_PASSWORD=your-app-password
```

### 2. Gitignore Configuration

Ensure `.gitignore` contains:
```
.env.local
.env.*.local
.env.production.local
node_modules/
.next/
dist/
build/
```

### 3. Gmail App Password Setup (Required)

**Never use your main Gmail password!**

Steps:
1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Go to App passwords (search in security settings)
3. Select: Mail + Windows Computer
4. Copy the 16-character password
5. Paste into `.env.local`

## Vercel Deployment Setup

### Step 1: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add each variable:
   - **Name:** `GMAIL_USER`
   - **Value:** `altheacambray04@gmail.com`
   - **Environments:** Production, Preview, Development
5. Add password variable:
   - **Name:** `GMAIL_PASSWORD`
   - **Value:** (your 16-char app password)
   - **Environments:** Production, Preview, Development

### Step 2: Verify in Vercel

```bash
# Your environment variables are now available to your API routes
# Vercel automatically injects them at build time
```

## API Route Security

### ✅ Correct: Server-Side Only

```javascript
// pages/api/contact.js (runs on server, safe for secrets)
export default async function handler(req, res) {
  // These are ONLY available server-side
  const user = process.env.GMAIL_USER      // ✅ Safe
  const password = process.env.GMAIL_PASSWORD // ✅ Safe
  
  // Never expose these to client!
}
```

### ❌ Incorrect: Exposed to Browser

```javascript
// DO NOT DO THIS!
const config = {
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD // ❌ Exposed to client if imported in browser!
}
export default config
```

## Testing Locally

### Development Environment

```bash
# 1. Create .env.local (git ignored)
# GMAIL_USER=altheacambray04@gmail.com
# GMAIL_PASSWORD=your-16-char-password

# 2. Run development server
npm run dev

# 3. Test contact form
# Should work on http://localhost:3000
```

### Verification Checklist

```bash
# Verify variables are NOT in .next build
cat .next/[build-id]/server/pages/api/contact.js | grep GMAIL_PASSWORD
# Should return nothing (not exposed)

# Verify variables ARE available at runtime
node -e "console.log(process.env.GMAIL_USER)"
# Should show: altheacambray04@gmail.com
```

## Production Deployment Checklist

- [ ] App password generated and stored securely
- [ ] Environment variables added to Vercel dashboard
- [ ] `.env.local` added to `.gitignore`
- [ ] No hardcoded credentials in code
- [ ] API route only accesses secrets server-side
- [ ] Test form on Vercel deployment
- [ ] Monitor Vercel logs for errors

## Security Monitoring

### Vercel Logs
```bash
# View real-time logs
vercel logs

# Search for errors
vercel logs | grep "Gmail"
```

### What to Watch For

⚠️ **401 Unauthorized** - Check Gmail App Password
⚠️ **Rate Limit** - Gmail SMTP limits ~300 emails/hour
⚠️ **TLS Error** - Ensure Gmail App Password (not regular password)

## Rotating Credentials

If credentials are compromised:

1. **Immediately:**
   - Remove from Vercel environment variables
   - Revoke app password in Google Account
   - Generate new app password

2. **Update Vercel:**
   - Add new password to environment variables
   - Trigger redeploy (or wait for next deploy)
   - Delete old password from Google Account

3. **Code Review:**
   - Check git history for accidental commits
   - Use `git log -p` to verify no credentials were exposed

## Environment Variables Checklist

### Before Committing
- [ ] `.env.local` is in `.gitignore`
- [ ] No credentials in `.js`, `.jsx`, `.env` files
- [ ] Verify with `git status` (should not show `.env.local`)

### Before Deploying to Vercel
- [ ] All variables added to Vercel dashboard
- [ ] Variables set for all environments (Production, Preview, Development)
- [ ] Test deployment sends real emails

### After Deployment
- [ ] Test contact form on production URL
- [ ] Verify auto-reply email received
- [ ] Check Vercel logs for errors

## Complete Example: Secure Setup

### Local Development
```bash
# .env.local (NOT committed to git)
GMAIL_USER=altheacambray04@gmail.com
GMAIL_PASSWORD=abcd efgh ijkl mnop
```

### Vercel Configuration
```
Dashboard → Settings → Environment Variables
├── GMAIL_USER = altheacambray04@gmail.com
└── GMAIL_PASSWORD = abcdefghijklmnop (no spaces)
    Environments: ✓ Production ✓ Preview ✓ Development
```

### API Route (Safe)
```javascript
// api/contact.js
export default async function handler(req, res) {
  // Never exposed to browser
  const auth = {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
  // ... use auth safely
}
```

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Wrong app password | Generate new app password, no spaces |
| Variables undefined | Not in Vercel dashboard | Add to environment variables |
| Works locally, fails on Vercel | Missing from Vercel env vars | Add all variables, redeploy |
| Can see password in browser | Using NEXT_PUBLIC_ prefix | Remove prefix, keep server-only |

## Additional Resources

- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Google App Passwords](https://support.google.com/accounts/answer/185833)
- [Nodemailer Gmail Config](https://nodemailer.com/smtp/gmail/)

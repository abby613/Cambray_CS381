# Complete Contact Form & Email Integration Guide

This guide walks through the complete implementation of a professional contact form with email integration using Nodemailer and Gmail SMTP.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Component Architecture](#component-architecture)
3. [Email Templates](#email-templates)
4. [Environment Security](#environment-security)
5. [CSS & Styling](#css--styling)
6. [Deployment](#deployment)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

### 1. Install Dependencies
```bash
npm install nodemailer
```

### 2. Generate Gmail App Password
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Search for "App passwords"
4. Select Mail + Device
5. Copy the 16-character password (remove spaces)

### 3. Configure Environment Variables

Create `.env.local` in project root:
```env
GMAIL_USER=altheacambray04@gmail.com
GMAIL_PASSWORD=your16characterpasswordhere
```

**Never commit this file!** Add to `.gitignore`:
```
.env.local
```

### 4. Deploy to Vercel

Push code to GitHub, then:
1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repo
4. Go to Settings → Environment Variables
5. Add `GMAIL_USER` and `GMAIL_PASSWORD`
6. Deploy!

---

## Component Architecture

### Contact.jsx
**Purpose:** React form component with Framer Motion animations

**Key Features:**
- Name, Email, Message fields
- Real-time validation
- Loading state during submission
- Success/Error feedback
- Disabled inputs while sending
- Hover animations on contact links
- Button scale animation on interact

**State Management:**
```javascript
formState = {name, email, message}    // Form data
loading                               // Submission in progress
status = {type, message}              // Success/Error feedback
```

**Animations:**
- Section header slides in from top
- Contact info slides in from left
- Form slides in from right
- Links have hover-right motion
- Status messages fade in
- Button scales on hover/tap

### API Route: api/contact.js
**Purpose:** Node.js server handling email logic

**Flow:**
1. Validate POST request
2. Check all fields present
3. Create two email objects (admin + user)
4. Send via Nodemailer
5. Return JSON response

**Security:**
- Only accepts POST requests
- Validates required fields
- Uses environment variables (never hardcoded)
- Error handling with try/catch
- No sensitive data in response

---

## Email Templates

### Admin Email (altheacambray04@gmail.com receives)
```
Subject: New Contact Form Submission from [Name]

Content:
- Sender's name, email
- Full message
- Professional styling
- Reply button
- Auto-generated notice
```

**Template File:** `emailTemplates.js` → `adminEmailTemplate()`

### User Auto-Reply (Sender receives)
```
Subject: Thank you for contacting me! - Althea Abbygail Cambray

Content:
- Thank you message
- Message summary
- Response time expectation (24-48 hours)
- Specialties list
- Contact links (Email, Phone, LinkedIn, GitHub)
- Professional signature
```

**Template File:** `emailTemplates.js` → `userReplyTemplate()`

---

## Environment Security

### Variable Types

**Server-Side Only (Secure):**
```javascript
// In api/contact.js - Never exposed to browser
const user = process.env.GMAIL_USER
const password = process.env.GMAIL_PASSWORD
```

**Client-Side (Use only for non-secrets):**
```javascript
// In .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
// Prefixed with NEXT_PUBLIC_, exposed to browser - OK for public data only
```

### Vercel Deployment Checklist
- [ ] Environment variables added to Vercel dashboard
- [ ] Set for Production, Preview, AND Development
- [ ] `.env.local` in `.gitignore`
- [ ] No credentials in git history
- [ ] Test on Vercel deployment URL

### Local Development
```bash
# 1. Create .env.local (git ignored)
echo "GMAIL_USER=altheacambray04@gmail.com" > .env.local
echo "GMAIL_PASSWORD=yourpassword" >> .env.local

# 2. Verify it's ignored
git status # Should NOT show .env.local

# 3. Run development server
npm run dev

# 4. Test contact form
# Visit http://localhost:3000/#contact
```

---

## CSS & Styling

### Form Fields
```css
.form-input {
  background: rgba(0,217,255,0.05);
  border: 1px solid rgba(0,217,255,0.2);
  color: var(--text);
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-input:focus {
  background: rgba(0,217,255,0.08);
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0,217,255,0.1);
}
```

**Key Features:**
- Dark mode friendly with cyan accent
- Focus state with glow effect
- Smooth transitions
- Consistent with portfolio brand colors
- Accessible labels

### Status Messages
```css
.form-status.success {
  background: rgba(34,197,94,0.15);
  border: 1px solid rgba(34,197,94,0.5);
  color: #22c55e;
}

.form-status.error {
  background: rgba(239,68,68,0.15);
  border: 1px solid rgba(239,68,68,0.5);
  color: #ef4444;
}
```

### Button
```css
.submit-btn {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,217,255,0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

---

## Deployment

### Vercel (Recommended)

**Why Vercel?**
- Automatic `/api` route handling
- Environment variable management
- Serverless functions (Node.js compatible)
- Built-in monitoring & logs
- Free tier with custom domain

**Steps:**
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Settings
4. Deploy!

**Verify Deployment:**
```bash
# Test the deployed API
curl -X POST https://your-domain/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### Alternative: AWS Lambda

**Setup:**
1. Use Serverless Framework
2. Deploy function
3. Set environment variables in AWS
4. Test via API Gateway

```bash
npm install -g serverless
serverless deploy function -f contact
```

---

## Testing

### Local Testing

**1. Start Dev Server:**
```bash
npm run dev
```

**2. Fill Contact Form:**
- Name: John Doe
- Email: john@example.com
- Message: Test message

**3. Check Emails:**
- Gmail: Verify email sent to altheacambray04@gmail.com
- Test email: Check for auto-reply

**4. Verify Console:**
```bash
# Should see success message
# No errors in browser console
# API response: {success: true, message: "Emails sent successfully!"}
```

### Testing Error Cases

**Invalid Email:**
```javascript
// Should show error: "Invalid email address"
```

**Missing Fields:**
```javascript
// Should show error: "Missing required fields"
```

**Gmail Auth Error:**
```javascript
// Check: Is app password correct?
// Check: Is Gmail SMTP enabled?
// Check: 2-Step Verification enabled?
```

---

## Troubleshooting

### Email Not Sending

**Check 1: Credentials**
```bash
# Verify in .env.local
cat .env.local
# Should show: GMAIL_USER and GMAIL_PASSWORD
```

**Check 2: Gmail Settings**
- [ ] 2-Step Verification enabled
- [ ] App password (NOT regular password)
- [ ] Correct email address
- [ ] No spaces in password

**Check 3: Error Logs**
```bash
# Check browser console
# Check Vercel logs (if deployed)
vercel logs
```

### 401 Unauthorized

**Solution:**
1. Generate new app password
2. Update `.env.local`
3. Or update Vercel environment variables
4. Restart dev server / redeploy

### Form Submission Hangs

**Check:**
- Network tab → is request sending?
- Is API endpoint correct? (`/api/contact`)
- Is server running? (`npm run dev`)
- Check browser console for errors

### Emails in Spam Folder

**Add SPF/DKIM Records:**
```
SPF: v=spf1 include:google.com ~all
DKIM: Check Gmail settings for DKIM key
```

This improves email deliverability.

---

## Performance Tips

1. **Minimize email template HTML** - Reduces payload
2. **Use short response messages** - Faster rendering
3. **Add request timeout:**
```javascript
// In api/contact.js
const timeoutPromise = new Promise((_, reject) =>
  setTimeout(() => reject('Timeout'), 5000)
)
await Promise.race([sendEmails(), timeoutPromise])
```

4. **Rate limit submissions:**
```javascript
// Prevent spam
const recentSubmissions = {}
if (recentSubmissions[email] && Date.now() - recentSubmissions[email] < 60000) {
  return res.status(429).json({error: 'Too many submissions'})
}
recentSubmissions[email] = Date.now()
```

---

## Security Checklist

- [ ] `.env.local` added to `.gitignore`
- [ ] No credentials in source code
- [ ] API validates all inputs
- [ ] HTTPS enforced in production
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Error messages don't expose system details
- [ ] Nodemailer using app password (not main password)
- [ ] Environment variables in Vercel dashboard
- [ ] Gmail 2-Step Verification enabled

---

## Next Steps

1. **Deploy to Vercel** - Follow deployment section
2. **Monitor form submissions** - Check email inbox
3. **Optimize email templates** - Customize with your branding
4. **Add analytics** - Track form submissions
5. **Scale to multiple recipients** - BCC other emails if needed

---

## Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail SMTP Configuration](https://support.google.com/accounts/answer/185833)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [React Hook Form](https://react-hook-form.com/) - Alternative form library


# Email Integration Setup Guide

## Overview
Your contact form now integrates with Gmail SMTP using Nodemailer to send emails directly to your inbox and auto-reply to users.

## Installation

### 1. Install Nodemailer
```bash
npm install nodemailer
```

### 2. Configure Gmail App Password

**Important:** You need to create a Gmail App Password (not your regular password).

**Steps:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Search for and select **App passwords** (you'll only see this if 2-Step Verification is enabled)
4. Select:
   - **App:** Mail
   - **Device:** Windows Computer (or your device type)
5. Google will generate a **16-character password**
6. Copy this password (it will have spaces - remove them)

### 3. Add Environment Variables

Open `.env.local` in your project root and update:

```env
GMAIL_USER=altheacambray04@gmail.com
GMAIL_PASSWORD=your-16-character-app-password-here
```

**Replace** `your-16-character-app-password-here` with the password generated in step 2.

### 4. Server Setup

Since this is a Vite/React project, you need to run your API in one of these ways:

**Option A: Using a Node.js server**
```bash
npm install express cors body-parser
```

Then create a simple Express server to run the `/api/contact.js` route.

**Option B: Deploy to a serverless platform**
- Vercel (automatically handles `/api` routes)
- Netlify Functions
- AWS Lambda

**Option C: Run locally with a proxy**
Update your `package.json` dev script to proxy API requests.

## How It Works

1. **User submits form** → Data sent to `/api/contact`
2. **Validation** → Checks all required fields are present
3. **Send to admin** → Email sent to `altheacambray04@gmail.com` with user's message
4. **Send to user** → Auto-reply sent to the user's email with confirmation
5. **Return response** → Success message displayed on form

## Email Template

**Admin Email includes:**
- User's name, email, and message
- Professional formatting with your branding color (#00d9ff)

**User Auto-Reply includes:**
- Thank you message
- Their message summary
- Your contact links (Email, LinkedIn, GitHub, Phone)
- Professional signature

## Testing Locally

To test with a local server, you can:

```bash
# Install Express (if not already done)
npm install express cors body-parser

# Create a simple server file: server.js
```

Create `server.js` in project root:

```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const handler = require('./api/contact.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  await handler({ method: 'POST', body: req.body }, res);
});

app.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});
```

Then update `.env.local`:
```env
VITE_API_URL=http://localhost:3001
```

## Security Notes

- ✅ Never commit `.env.local` to version control
- ✅ App passwords are safer than your main Gmail password
- ✅ Environment variables are only accessible server-side
- ✅ Add `.env.local` to `.gitignore`

## Troubleshooting

**"Less secure app access" error:**
- Use an App Password (not regular password)
- Enable 2-Step Verification first

**"Invalid credentials" error:**
- Check `GMAIL_PASSWORD` has no spaces
- Verify email is `altheacambray04@gmail.com`

**"Cannot find module 'nodemailer'":**
- Run `npm install nodemailer`

**Emails not sending:**
- Check internet connection
- Verify Gmail credentials in `.env.local`
- Check Gmail account for security alerts

## Recommended Deployment

For production, deploy to **Vercel** (recommended):
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel settings
4. Deploy automatically

Vercel automatically handles `/api` routes as serverless functions!

## Support

For help with Nodemailer, visit: https://nodemailer.com/
For Gmail App Passwords: https://support.google.com/accounts/answer/185833

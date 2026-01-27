import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Email to admin (Althea)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d9ff;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated email from your portfolio contact form.
          </p>
        </div>
      `,
    }

    // Auto-reply email to user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me! - Althea Abbygail Cambray',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d9ff;">Thank You, ${name}!</h2>
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your Message Summary:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p>In the meantime, feel free to connect with me on:</p>
          <ul style="list-style: none; padding: 0;">
            <li>📧 <a href="mailto:altheacambray04@gmail.com" style="color: #00d9ff;">Email</a></li>
            <li>💼 <a href="https://www.linkedin.com/in/althea-abbygail-cambray-7116a0382" style="color: #00d9ff;">LinkedIn</a></li>
            <li>🐙 <a href="https://github.com/abby613" style="color: #00d9ff;">GitHub</a></li>
            <li>📱 09274863190</li>
          </ul>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Best regards,<br>
            Althea Abbygail Cambray<br>
            Software Engineer | AI/ML | DevOps | Cloud Architecture
          </p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully!',
    })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to send emails. Please try again later.',
    })
  }
}

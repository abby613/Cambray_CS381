/*
  Professional Email Templates for Software Engineer Portfolio
  These templates are used in api/contact.js for admin and user emails
*/

// Admin Email Template - New Contact Submission
export const adminEmailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; }
      .header { background: linear-gradient(135deg, #00d9ff 0%, #6c5ce7 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
      .header h1 { margin: 0; font-size: 24px; }
      .header p { margin: 5px 0 0 0; opacity: 0.9; font-size: 14px; }
      .content { background: white; padding: 30px; border-bottom: 1px solid #eee; }
      .info { background: #f0f3f8; padding: 15px; border-radius: 6px; margin: 20px 0; }
      .info-row { margin: 10px 0; }
      .info-label { font-weight: 600; color: #00d9ff; }
      .message-box { background: #f8f9fa; padding: 20px; border-left: 4px solid #00d9ff; border-radius: 4px; margin: 20px 0; white-space: pre-wrap; word-wrap: break-word; }
      .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
      .footer a { color: #00d9ff; text-decoration: none; }
      .action-btn { display: inline-block; background: #00d9ff; color: #0f1419; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin: 20px 0; }
      @media (max-width: 600px) {
        .container { padding: 10px; }
        .content { padding: 20px; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>✉️ New Contact Form Submission</h1>
        <p>Althea Abbygail Cambray Portfolio</p>
      </div>
      
      <div class="content">
        <p>You have received a new message through your portfolio contact form:</p>
        
        <div class="info">
          <div class="info-row">
            <span class="info-label">From:</span> ${name}
          </div>
          <div class="info-row">
            <span class="info-label">Email:</span> <a href="mailto:${email}">${email}</a>
          </div>
          <div class="info-row">
            <span class="info-label">Submitted:</span> ${new Date().toLocaleString()}
          </div>
        </div>
        
        <h3 style="color: #0f1419; margin-top: 25px;">Message:</h3>
        <div class="message-box">${message}</div>
        
        <div style="text-align: center;">
          <a href="mailto:${email}" class="action-btn">Reply to ${name}</a>
        </div>
      </div>
      
      <div class="footer">
        <p>
          <strong>Auto-Generated Email</strong><br>
          This is an automated notification from your portfolio contact form.<br>
          An auto-reply has been sent to the user.
        </p>
        <p style="margin-top: 15px; border-top: 1px solid #ddd; padding-top: 15px;">
          🟢 Status: Active for freelance/Contract work<br>
          📧 <a href="mailto:altheacambray04@gmail.com">altheacambray04@gmail.com</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;

// User Auto-Reply Email Template
export const userReplyTemplate = (name, message) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; }
      .header { background: linear-gradient(135deg, #00d9ff 0%, #6c5ce7 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
      .header h1 { margin: 0; font-size: 24px; }
      .content { background: white; padding: 30px; }
      .greeting { font-size: 18px; color: #00d9ff; font-weight: 600; margin-bottom: 15px; }
      .section { margin: 25px 0; }
      .section h3 { color: #0f1419; margin: 15px 0 10px 0; font-size: 16px; }
      .message-box { background: #f0f3f8; padding: 20px; border-left: 4px solid #00d9ff; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word; line-height: 1.6; }
      .contact-section { background: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; }
      .contact-item { display: flex; align-items: center; margin: 12px 0; }
      .contact-icon { font-size: 20px; margin-right: 12px; min-width: 30px; }
      .contact-info { color: #333; }
      .contact-info a { color: #00d9ff; text-decoration: none; }
      .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
      .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
      .signature-name { font-weight: 600; color: #0f1419; }
      .signature-title { color: #666; font-size: 14px; }
      .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
      .footer a { color: #00d9ff; text-decoration: none; }
      @media (max-width: 600px) {
        .container { padding: 10px; }
        .content { padding: 20px; }
        .header { padding: 20px; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Thank You! 🚀</h1>
        <p>Your message has been received</p>
      </div>
      
      <div class="content">
        <div class="greeting">Hi ${name},</div>
        
        <p>Thank you for reaching out through my portfolio! I appreciate your interest and will review your message shortly.</p>
        
        <div class="section">
          <h3>📝 Your Message Summary</h3>
          <div class="message-box">${message}</div>
        </div>
        
        <p>I typically respond to inquiries within <strong>24-48 hours</strong>. If your matter is urgent, feel free to reach out directly using the contact methods below.</p>
        
        <div class="contact-section">
          <h3 style="margin-top: 0;">🔗 Connect With Me</h3>
          
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span class="contact-info"><a href="mailto:altheacambray04@gmail.com">altheacambray04@gmail.com</a></span>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <span class="contact-info"><a href="tel:09274863190">+63 927 486 3190</a></span>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">💼</span>
            <span class="contact-info"><a href="https://www.linkedin.com/in/althea-abbygail-cambray-7116a0382" target="_blank">LinkedIn Profile</a></span>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">🐙</span>
            <span class="contact-info"><a href="https://github.com/abby613" target="_blank">GitHub Portfolio</a></span>
          </div>
        </div>
        
        <div class="section">
          <h3>💡 What I Specialize In</h3>
          <p>
            • Cloud Solutions (GCP, AWS, Azure)<br>
            • Data & Analytics (ETL/ELT pipelines, real-time insights)<br>
            • AI/ML Integration & Infrastructure<br>
            • Backend Development (Java, Python, Go, C#)<br>
            • DevOps & CI/CD Pipeline Optimization<br>
            • Security & Performance Optimization
          </p>
        </div>
        
        <div class="signature">
          <p>
            <span class="signature-name">Althea Abbygail Cambray</span><br>
            <span class="signature-title">Software Engineer | AI/ML | DevOps | Cloud Architecture</span><br>
            <span class="signature-title">🟢 Available for freelance/contract work</span>
          </p>
        </div>
      </div>
      
      <div class="footer">
        <p>
          This is an automated response confirming receipt of your message.<br>
          You'll receive a personalized reply soon.
        </p>
        <p style="margin-top: 15px;">
          <a href="https://altheacambray.com">Visit My Portfolio</a> • 
          <a href="https://altheacambray.com#privacy">Privacy Policy</a> • 
          <a href="https://altheacambray.com#terms">Terms of Service</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;

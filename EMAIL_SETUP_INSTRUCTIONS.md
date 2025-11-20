# Email Setup Instructions for Contact Form

To enable direct email delivery to **mihirpatel7960@gmail.com**, follow these simple steps:

## Step 1: Create EmailJS Account (Free)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (mihirpatel7960@gmail.com)
5. Copy the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these settings:
   - **Template Name**: Contact Form Template
   - **Subject**: New Contact Form Submission - Ganesh Exports
   - **Content** (copy this exactly):

```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Product Interest: {{product}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Click **Save**
5. Copy the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find **Public Key** section
3. Copy your **Public Key** (it will look like `xxxxxxxxxxxxx`)

## Step 5: Update Your Code

Open `script.js` file and replace these values:

1. Line 344: Replace `"YOUR_PUBLIC_KEY"` with your EmailJS Public Key
2. Line 368: Replace `'service_ganesh_export'` with your Service ID
3. Line 369: Replace `'template_contact_form'` with your Template ID

Example:
```javascript
emailjs.init("abc123xyz789");  // Your Public Key

await emailjs.send(
    'service_abc123',      // Your Service ID
    'template_xyz789',     // Your Template ID
    {
        to_email: 'mihirpatel7960@gmail.com',
        // ... rest of the code
    }
);
```

## Step 6: Test

1. Save all files
2. Open your website
3. Fill out the contact form
4. Submit it
5. Check your email inbox at **mihirpatel7960@gmail.com**

## That's It!

Once configured, all form submissions will be sent directly to your email inbox without opening any email client.

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Perfect for small to medium websites

If you need more, you can upgrade to a paid plan.


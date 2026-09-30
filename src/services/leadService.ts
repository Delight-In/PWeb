/**
 * PrishiTech Solutions - Lead & Demo Email Dispatch Service
 * 
 * Target Mailbox: admin.dm26@gmail.com (Configurable via VITE_NOTIFICATION_EMAIL)
 */

export interface DemoSubmission {
  name: string;
  workEmail: string;
  company: string;
  phone: string;
  facilitySize: string;
  pillars: string[];
  notes?: string;
}

export interface ContactSubmission {
  name: string;
  company: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
}

export const TARGET_EMAIL = import.meta.env.VITE_NOTIFICATION_EMAIL || 'admin.dm26@gmail.com';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

/**
 * Generates a pre-filled mailto: link for instant manual email dispatch
 */
export function getMailtoUrlForDemo(data: DemoSubmission): string {
  const subject = encodeURIComponent(`PrishiTech Demo Request: ${data.company} (${data.name})`);
  const body = encodeURIComponent(
    `Hello PrishiTech Solutions Team,\n\n` +
    `I would like to request a live Resource Intelligence demo with the following details:\n\n` +
    `• Name: ${data.name}\n` +
    `• Company: ${data.company}\n` +
    `• Work Email: ${data.workEmail}\n` +
    `• Phone / WhatsApp: ${data.phone}\n` +
    `• Facility Scale: ${data.facilitySize}\n` +
    `• Pillars of Interest: ${data.pillars.join(', ')}\n` +
    `• Notes: ${data.notes || 'None'}\n\n` +
    `Please connect with us for the walkthrough.\n\n` +
    `Best regards,\n${data.name}`
  );
  return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Generates a pre-filled mailto: link for contact inquiry
 */
export function getMailtoUrlForContact(data: ContactSubmission): string {
  const subject = encodeURIComponent(`PrishiTech Inquiry: ${data.company} - ${data.areaOfInterest}`);
  const body = encodeURIComponent(
    `Hello PrishiTech Solutions Team,\n\n` +
    `• Name: ${data.name}\n` +
    `• Company: ${data.company}\n` +
    `• Email: ${data.email}\n` +
    `• Phone: ${data.phone}\n` +
    `• Area of Interest: ${data.areaOfInterest}\n\n` +
    `Message:\n${data.message}\n\n` +
    `Best regards,\n${data.name}`
  );
  return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Generates a WhatsApp direct link
 */
export function getWhatsAppUrl(text: string): string {
  return `https://wa.me/919810012345?text=${encodeURIComponent(text)}`;
}

/**
 * Submits an HTML form via standard browser POST in a hidden iframe to trigger
 * the 1-time FormSubmit activation or bypass CORS/AJAX errors.
 */
function submitViaHiddenForm(endpoint: string, fields: Record<string, string>) {
  try {
    const iframe = document.createElement('iframe');
    iframe.name = 'lead_dispatch_frame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = endpoint;
    form.target = 'lead_dispatch_frame';

    Object.entries(fields).forEach(([key, val]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = val;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      form.remove();
      iframe.remove();
    }, 4000);
  } catch (err) {
    console.warn('Hidden form submission fallback failed:', err);
  }
}

export async function sendDemoRequest(data: DemoSubmission): Promise<{ success: boolean; message?: string }> {
  try {
    // 1. If Web3Forms key is configured
    if (WEB3FORMS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `⚡ New PrishiTech Demo Request: ${data.company} (${data.name})`,
          from_name: 'PrishiTech Platform',
          replyto: data.workEmail,
          ...data,
          pillars: data.pillars.join(', '),
        }),
      });
      const result = await response.json();
      return { success: result.success, message: result.message };
    }

    // 2. If Formspree ID is configured
    if (FORMSPREE_ID) {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `⚡ New PrishiTech Demo Request: ${data.company}`,
          ...data,
          pillars: data.pillars.join(', '),
        }),
      });
      return { success: response.ok };
    }

    // 3. FormSubmit AJAX
    const payload = {
      _subject: `⚡ New Demo Request: ${data.company} - ${data.name}`,
      _replyto: data.workEmail,
      _template: 'table',
      'Visitor Name': data.name,
      'Corporate Email': data.workEmail,
      'Company / Plant': data.company,
      'Phone / WhatsApp': data.phone,
      'Facility Size': data.facilitySize,
      'Pillars of Interest': data.pillars.join(', '),
      'Notes & Requirements': data.notes || 'None specified',
      'Source': 'PrishiTech Website - Request Demo Modal',
    };

    let ajaxSucceeded = false;
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        ajaxSucceeded = true;
      }
    } catch {
      ajaxSucceeded = false;
    }

    // If AJAX didn't return 200 (e.g. form pending initial activation for admin.dm26@gmail.com),
    // trigger background HTML post so FormSubmit sends the activation email immediately!
    if (!ajaxSucceeded) {
      submitViaHiddenForm(`https://formsubmit.co/${TARGET_EMAIL}`, payload);
    }

    return { success: true };
  } catch (error) {
    console.error('Lead dispatch error:', error);
    // Graceful fallback to avoid blocking user flow
    return { success: true };
  }
}

export async function sendContactInquiry(data: ContactSubmission): Promise<{ success: boolean; message?: string }> {
  try {
    if (WEB3FORMS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `📩 New Contact Inquiry: ${data.company} (${data.name})`,
          from_name: 'PrishiTech Website',
          replyto: data.email,
          ...data,
        }),
      });
      const result = await response.json();
      return { success: result.success, message: result.message };
    }

    const payload = {
      _subject: `📩 PrishiTech Contact Form: ${data.company} - ${data.name}`,
      _replyto: data.email,
      _template: 'table',
      'Contact Name': data.name,
      'Company': data.company,
      'Email Address': data.email,
      'Phone Number': data.phone,
      'Area of Interest': data.areaOfInterest,
      'Facility Message': data.message,
      'Source': 'PrishiTech Website - Contact Us Page',
    };

    let ajaxSucceeded = false;
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        ajaxSucceeded = true;
      }
    } catch {
      ajaxSucceeded = false;
    }

    if (!ajaxSucceeded) {
      submitViaHiddenForm(`https://formsubmit.co/${TARGET_EMAIL}`, payload);
    }

    return { success: true };
  } catch (error) {
    console.error('Contact inquiry error:', error);
    return { success: true };
  }
}

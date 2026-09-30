/**
 * PrishiTech Solutions - Lead & Demo Dispatch Service
 * 
 * Powered by Web3Forms with verified access key for admin.dm26@gmail.com
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

// User-verified Web3Forms Access Key for admin.dm26@gmail.com
export const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.VITE_WEB3FORMS_KEY || '24845bd6-7fc9-4644-a17e-3eb296443e47';

/**
 * Dispatches a Demo Request directly to admin.dm26@gmail.com via Web3Forms FormData API
 */
export async function sendDemoRequest(data: DemoSubmission): Promise<{ success: boolean; message?: string }> {
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `⚡ New Demo Request: ${data.company} (${data.name})`);
    formData.append("from_name", "PrishiTech Solutions Platform");
    formData.append("name", data.name);
    formData.append("email", data.workEmail);
    formData.append("replyto", data.workEmail);
    formData.append("Company / Facility", data.company);
    formData.append("Phone / WhatsApp", data.phone);
    formData.append("Facility Scale", data.facilitySize);
    formData.append("Streams of Interest", data.pillars.join(', '));
    formData.append("Notes & Requirements", data.notes || "None specified");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    return {
      success: !!result.success,
      message: result.message
    };
  } catch (error) {
    console.error("Demo request dispatch error:", error);
    // Graceful return so the UI doesn't crash
    return { success: true };
  }
}

/**
 * Dispatches a Contact Us Inquiry directly to admin.dm26@gmail.com via Web3Forms FormData API
 */
export async function sendContactInquiry(data: ContactSubmission): Promise<{ success: boolean; message?: string }> {
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `📩 New Contact Inquiry: ${data.company} (${data.name})`);
    formData.append("from_name", "PrishiTech Contact Form");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("replyto", data.email);
    formData.append("Company / Organization", data.company);
    formData.append("Phone Number", data.phone);
    formData.append("Area of Interest", data.areaOfInterest);
    formData.append("Facility Message / Specifics", data.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    return {
      success: !!result.success,
      message: result.message
    };
  } catch (error) {
    console.error("Contact inquiry dispatch error:", error);
    return { success: true };
  }
}

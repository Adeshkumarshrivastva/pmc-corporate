// Zoho CRM Configuration and Utilities

const ZOHO_CONFIG = {
  clientId: import.meta.env.VITE_ZOHO_CLIENT_ID || '1000.5FV78YYNCNL8REP454U48415E8GGVN',
  clientSecret: import.meta.env.ZOHO_CLIENT_SECRET,
  refreshToken: import.meta.env.ZOHO_REFRESH_TOKEN,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002',
};

/**
 * Get Zoho Access Token
 * This should be called from your backend API
 */
export async function getZohoAccessToken() {
  try {
    const response = await fetch(`${ZOHO_CONFIG.apiBaseUrl}/api/zoho/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get Zoho access token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Zoho token error:', error);
    throw error;
  }
}

/**
 * Submit Contact Form to Zoho CRM
 */
export async function submitToZohoCRM(formData) {
  try {
    const response = await fetch(`${ZOHO_CONFIG.apiBaseUrl}/api/zoho/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Zoho CRM');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Zoho CRM submission error:', error);
    throw error;
  }
}

/**
 * Create Lead in Zoho CRM
 */
export async function createZohoLead(leadData) {
  const payload = {
    data: [
      {
        Company: leadData.company || 'N/A',
        Last_Name: leadData.name || leadData.lastName,
        First_Name: leadData.firstName || '',
        Email: leadData.email,
        Phone: leadData.phone,
        Lead_Source: leadData.source || 'Website',
        Description: leadData.message || leadData.description,
      },
    ],
  };

  return await submitToZohoCRM(payload);
}

/**
 * Check if Zoho is configured
 */
export function isZohoConfigured() {
  return !!(ZOHO_CONFIG.clientId && ZOHO_CONFIG.apiBaseUrl);
}

export default ZOHO_CONFIG;

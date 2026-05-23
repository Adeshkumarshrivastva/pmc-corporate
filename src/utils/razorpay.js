// Razorpay Configuration and Utilities

const RAZORPAY_CONFIG = {
  keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_JNSOKgtrfEng3Y',
  keySecret: import.meta.env.RAZORPAY_KEY_SECRET, // Never expose in frontend
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3002',
};

/**
 * Load Razorpay Script
 */
export function loadRazorpayScript() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Create Razorpay Order
 * This should call your backend API
 */
export async function createRazorpayOrder(amount, currency = 'INR') {
  try {
    const response = await fetch(`${RAZORPAY_CONFIG.apiBaseUrl}/api/razorpay/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paise
        currency,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create Razorpay order');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    throw error;
  }
}

/**
 * Display Razorpay Checkout
 */
export async function displayRazorpay(orderData, options = {}) {
  const res = await loadRazorpayScript();

  if (!res) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  const paymentOptions = {
    key: RAZORPAY_CONFIG.keyId,
    amount: orderData.amount,
    currency: orderData.currency || 'INR',
    name: options.name || 'Positive Mind Care',
    description: options.description || 'Payment',
    order_id: orderData.id,
    handler: function (response) {
      if (options.onSuccess) {
        options.onSuccess(response);
      }
    },
    prefill: {
      name: options.prefill?.name || '',
      email: options.prefill?.email || '',
      contact: options.prefill?.contact || '',
    },
    theme: {
      color: options.themeColor || '#2d5f5d',
    },
    modal: {
      ondismiss: function () {
        if (options.onDismiss) {
          options.onDismiss();
        }
      },
    },
  };

  const paymentObject = new window.Razorpay(paymentOptions);
  paymentObject.open();
}

/**
 * Verify Payment
 */
export async function verifyPayment(paymentData) {
  try {
    const response = await fetch(`${RAZORPAY_CONFIG.apiBaseUrl}/api/razorpay/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Payment verification failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment verification error:', error);
    throw error;
  }
}

export default RAZORPAY_CONFIG;

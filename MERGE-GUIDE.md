# Corporate App - Test Integration Guide

## 🎯 Overview

Yeh guide aapko batayega ki Test aur Advanced Test ko corporate app mein kaise merge karein.

## 📋 What's Already Done

✅ Backend server created (`server/server.js`)
✅ Package.json updated with dependencies
✅ .env file created
✅ Components created (TestCompleteButton, TestBackButton)
✅ HiddenLossHome page created

## 🚀 Step-by-Step Integration

### Step 1: Install Dependencies

```bash
cd corporate/corporate-app
npm install
```

### Step 2: Copy Test Pages

**Hidden Loss Calculator pages ko copy karein:**

From `Test/hidden-loss-calculator/src/pages/` to `corporate/corporate-app/src/pages/`:

1. **Details.jsx** → Rename to **HiddenLossDetails.jsx**
2. **Start.jsx** → Rename to **HiddenLossStart.jsx**
3. **Dialog.jsx** → Rename to **HiddenLossDialog.jsx**

**Advanced Test pages ko copy karein:**

From `Advanced_Test/advanced_test/src/pages/` to `corporate/corporate-app/src/pages/`:

1. **Home.jsx** → Rename to **AdvancedTestHome.jsx**
2. **Details.jsx** → Rename to **AdvancedTestDetails.jsx**
3. **Start.jsx** → Rename to **AdvancedTestStart.jsx**
4. **Solution.jsx** → Keep as **Solution.jsx**
5. **BookDemo.jsx** → Keep as **BookDemo.jsx**
6. **ContactExpert.jsx** → Keep as **ContactExpert.jsx**

### Step 3: Copy Assets

**Test assets:**
Copy from `Test/hidden-loss-calculator/src/assets/` to `corporate/corporate-app/src/assets/test/`:
- Dial.jpeg
- Loss1.jpeg to Loss8.jpeg
- All other test images

**Advanced Test assets:**
Copy from `Advanced_Test/advanced_test/src/assets/` to `corporate/corporate-app/src/assets/advanced/`:
- advance1.jpeg to advance4.jpeg
- dial.png
- All other advanced test images

### Step 4: Update App.jsx Routes

Add these routes to `src/App.jsx`:

```jsx
// Hidden Loss Calculator Routes
<Route path="/hidden-loss" element={<HiddenLossHome />} />
<Route path="/hidden-loss/start" element={<HiddenLossStart />} />
<Route path="/hidden-loss/details" element={<HiddenLossDetails />} />
<Route path="/hidden-loss/dialog" element={<HiddenLossDialog />} />

// Advanced Test Routes
<Route path="/advanced-test" element={<AdvancedTestHome />} />
<Route path="/advanced-test/start" element={<AdvancedTestStart />} />
<Route path="/advanced-test/details" element={<AdvancedTestDetails />} />
<Route path="/advanced-test/solution" element={<Solution />} />
<Route path="/advanced-test/book-demo" element={<BookDemo />} />
<Route path="/advanced-test/contact-expert" element={<ContactExpert />} />
```

### Step 5: Update Import Statements

In all copied pages, update imports:

**Change:**
```jsx
import BackButton from "../components/BackButton";
```

**To:**
```jsx
import TestBackButton from "../components/TestBackButton";
```

**And update usage:**
```jsx
<BackButton /> → <TestBackButton />
```

### Step 6: Update API Endpoints

In all Details pages, change API endpoint:

**Change:**
```jsx
const response = await fetch("http://localhost:3001/api/test-details", {
```

**To:**
```jsx
const response = await fetch("http://localhost:3002/api/test-details", {
```

### Step 7: Update Navigation Routes

**In HiddenLossHome.jsx:**
```jsx
navigate("/hidden-loss/start");
```

**In HiddenLossStart.jsx:**
```jsx
navigate("/hidden-loss/details");
```

**In HiddenLossDetails.jsx:**
```jsx
navigate("/hidden-loss/dialog");
```

**In AdvancedTestHome.jsx:**
```jsx
navigate("/advanced-test/details");
```

**In AdvancedTestDetails.jsx:**
```jsx
navigate("/advanced-test/solution");
```

### Step 8: Add testType Parameter

**In HiddenLossDetails.jsx:**
```jsx
body: JSON.stringify({ ...formData, testType: 'hidden-loss' }),
```

**In AdvancedTestDetails.jsx:**
```jsx
body: JSON.stringify({ ...formData, testType: 'advanced-test' }),
```

### Step 9: Update Corporate Advanced Tab

In `src/components/CorporateAdvanced.jsx`, add buttons:

```jsx
<button onClick={() => navigate('/hidden-loss')}>
  Hidden Loss Calculator
</button>

<button onClick={() => navigate('/advanced-test')}>
  Advanced Productivity Test
</button>
```

## 🎨 Quick Copy-Paste Files

Main aapko ready files de raha hoon jo aap directly use kar sakte hain.

### File 1: HiddenLossDetails.jsx

```jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

function HiddenLossDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3002/api/test-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, testType: 'hidden-loss' }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("testUserDetails", JSON.stringify(formData));
        navigate("/hidden-loss/dialog");
      } else {
        setError(data.message || "Failed to submit details");
      }
    } catch (err) {
      console.error("Error submitting details:", err);
      setError("Failed to submit. Please check if server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef2ff, #f8fbff)", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "650px", margin: "auto", background: "#fff", borderRadius: "28px", padding: "45px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
        <div style={{ marginBottom: "24px" }}>
          <TestBackButton />
        </div>

        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ color: "#047857", marginBottom: "12px", fontSize: "36px" }}>Your Details</h1>
          <p style={{ color: "#047857", fontSize: "16px", lineHeight: "1.6", fontWeight: "600" }}>Please fill these details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600", fontSize: "15px" }}>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600", fontSize: "15px" }}>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@company.com" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600", fontSize: "15px" }}>Phone Number *</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="+91 98765 43210" pattern="[0-9+\s-]+" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#333", fontWeight: "600", fontSize: "15px" }}>Company Name *</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Your company name" style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px", outline: "none", boxSizing: "border-box" }} />
            </div>
          </div>

          {error && <p style={{ color: "#b91c1c", marginTop: "16px", fontSize: "15px", textAlign: "center" }}>{error}</p>}

          <button type="submit" disabled={loading} style={{ width: "100%", marginTop: "28px", padding: "16px", border: "none", borderRadius: "14px", background: loading ? "#94a3b8" : "linear-gradient(135deg, #1e3a8a, #2563eb)", color: "#fff", fontSize: "18px", fontWeight: "bold", cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}>
            {loading ? "Submitting..." : "Continue to Test"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default HiddenLossDetails;
```

## 🎉 Final Steps

1. Copy all pages as mentioned above
2. Update all imports and routes
3. Run `npm install`
4. Run `npm run dev`
5. Test both calculators

## 📝 Testing

- **Hidden Loss:** http://localhost:5173/hidden-loss
- **Advanced Test:** http://localhost:5173/advanced-test
- **Backend API:** http://localhost:3002/api/health

## 🐛 Troubleshooting

### MongoDB Connection Error
Ensure MongoDB is running on localhost:27017

### Port Already in Use
Change PORT in .env file

### CORS Error
Check CORS_ORIGIN in .env matches frontend URL

---

**Yeh guide follow karke aap easily dono tests ko corporate app mein merge kar sakte hain!** 🚀

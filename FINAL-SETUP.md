# 🎯 Corporate App - Final Setup Guide

## ✅ What's Already Created

### Backend & Configuration
- ✅ `server/server.js` - Complete backend server
- ✅ `package.json` - Updated with dependencies
- ✅ `.env` - Environment configuration
- ✅ Components: TestCompleteButton, TestBackButton

### Pages Created
- ✅ HiddenLossHome.jsx
- ✅ HiddenLossStart.jsx
- ✅ HiddenLossDetails.jsx

## 📋 Remaining Tasks

### Step 1: Install Dependencies

```bash
cd corporate/corporate-app
npm install
```

### Step 2: Copy Remaining Pages

Manually copy these files aur rename karein:

**From Test folder:**
```
Test/hidden-loss-calculator/src/pages/Dialog.jsx
  → corporate/corporate-app/src/pages/HiddenLossDialog.jsx
```

**From Advanced_Test folder:**
```
Advanced_Test/advanced_test/src/pages/Home.jsx
  → corporate/corporate-app/src/pages/AdvancedTestHome.jsx

Advanced_Test/advanced_test/src/pages/Details.jsx
  → corporate/corporate-app/src/pages/AdvancedTestDetails.jsx

Advanced_Test/advanced_test/src/pages/Start.jsx
  → corporate/corporate-app/src/pages/AdvancedTestStart.jsx

Advanced_Test/advanced_test/src/pages/Solution.jsx
  → corporate/corporate-app/src/pages/Solution.jsx

Advanced_Test/advanced_test/src/pages/BookDemo.jsx
  → corporate/corporate-app/src/pages/BookDemo.jsx

Advanced_Test/advanced_test/src/pages/ContactExpert.jsx
  → corporate/corporate-app/src/pages/ContactExpert.jsx
```

### Step 3: Copy Assets

**Create folders:**
```bash
mkdir -p src/assets/test
mkdir -p src/assets/advanced
```

**Copy Test assets:**
```
Test/hidden-loss-calculator/src/assets/Dial.jpeg → src/assets/test/
Test/hidden-loss-calculator/src/assets/Loss1.jpeg → src/assets/test/
Test/hidden-loss-calculator/src/assets/Loss2.jpeg → src/assets/test/
... (Loss3 to Loss8)
```

**Copy Advanced Test assets:**
```
Advanced_Test/advanced_test/src/assets/advance1.jpeg → src/assets/advanced/
Advanced_Test/advanced_test/src/assets/advance2.jpeg → src/assets/advanced/
Advanced_Test/advanced_test/src/assets/advance3.jpeg → src/assets/advanced/
Advanced_Test/advanced_test/src/assets/advance4.jpeg → src/assets/advanced/
Advanced_Test/advanced_test/src/assets/dial.png → src/assets/advanced/
```

### Step 4: Update Copied Files

**In HiddenLossDialog.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";
import dialImg from "../assets/test/Dial.jpeg";
import Loss1 from "../assets/test/Loss1.jpeg";
// ... etc

// Change component:
<BackButton /> → <TestBackButton />
```

**In AdvancedTestHome.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";

// Change component:
<BackButton /> → <TestBackButton />

// Change navigation:
navigate("/advanced-test/details");
```

**In AdvancedTestDetails.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";

// Change component:
<BackButton /> → <TestBackButton />

// Change API endpoint:
fetch("http://localhost:3002/api/test-details", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...formData, testType: 'advanced-test' }),
});

// Change navigation:
navigate("/advanced-test/solution");
```

**In AdvancedTestStart.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";
import TestCompleteButton from "../components/TestCompleteButton";

// Change components:
<BackButton /> → <TestBackButton />

// Change navigation:
navigate("/advanced-test/details");
```

**In Solution.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";
import advance1 from "../assets/advanced/advance1.jpeg";
import advance2 from "../assets/advanced/advance2.jpeg";
import advance3 from "../assets/advanced/advance3.jpeg";
import advance4 from "../assets/advanced/advance4.jpeg";

// Change component:
<BackButton /> → <TestBackButton />

// Change navigation:
navigate("/advanced-test/book-demo");
navigate("/advanced-test/contact-expert");
```

**In BookDemo.jsx & ContactExpert.jsx:**
```jsx
// Change imports:
import TestBackButton from "../components/TestBackButton";

// Change component:
<BackButton /> → <TestBackButton />

// Change API endpoint (if any):
fetch("http://localhost:3002/api/test-details"
```

### Step 5: Update App.jsx

Add imports at top:
```jsx
import HiddenLossHome from "./pages/HiddenLossHome";
import HiddenLossStart from "./pages/HiddenLossStart";
import HiddenLossDetails from "./pages/HiddenLossDetails";
import HiddenLossDialog from "./pages/HiddenLossDialog";

import AdvancedTestHome from "./pages/AdvancedTestHome";
import AdvancedTestStart from "./pages/AdvancedTestStart";
import AdvancedTestDetails from "./pages/AdvancedTestDetails";
import Solution from "./pages/Solution";
import BookDemo from "./pages/BookDemo";
import ContactExpert from "./pages/ContactExpert";
```

Add routes inside `<Routes>`:
```jsx
{/* Hidden Loss Calculator */}
<Route path="/hidden-loss" element={<HiddenLossHome />} />
<Route path="/hidden-loss/start" element={<HiddenLossStart />} />
<Route path="/hidden-loss/details" element={<HiddenLossDetails />} />
<Route path="/hidden-loss/dialog" element={<HiddenLossDialog />} />

{/* Advanced Test */}
<Route path="/advanced-test" element={<AdvancedTestHome />} />
<Route path="/advanced-test/start" element={<AdvancedTestStart />} />
<Route path="/advanced-test/details" element={<AdvancedTestDetails />} />
<Route path="/advanced-test/solution" element={<Solution />} />
<Route path="/advanced-test/book-demo" element={<BookDemo />} />
<Route path="/advanced-test/contact-expert" element={<ContactExpert />} />
```

### Step 6: Update CorporateAdvanced Component

In `src/components/CorporateAdvanced.jsx`, add navigation buttons:

```jsx
import { useNavigate } from "react-router-dom";

function CorporateAdvanced() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Your existing content */}
      
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => navigate('/hidden-loss')}
          style={{
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)'
          }}
        >
          📊 Hidden Loss Calculator
        </button>

        <button 
          onClick={() => navigate('/advanced-test')}
          style={{
            padding: '16px 32px',
            background: 'linear-gradient(135deg, #047857, #10b981)',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(4, 120, 87, 0.3)'
          }}
        >
          📈 Advanced Productivity Test
        </button>
      </div>
    </div>
  );
}

export default CorporateAdvanced;
```

### Step 7: Run Application

```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:3002

## 🎯 Testing URLs

- **Hidden Loss Calculator:** http://localhost:5173/hidden-loss
- **Advanced Test:** http://localhost:5173/advanced-test
- **Corporate Advanced:** http://localhost:5173/corporate/advanced
- **Backend Health:** http://localhost:3002/api/health

## ✅ Final Checklist

- [ ] Dependencies installed
- [ ] All pages copied and renamed
- [ ] All assets copied to correct folders
- [ ] All `BackButton` changed to `TestBackButton`
- [ ] All API endpoints changed to port 3002
- [ ] testType added in Details pages
- [ ] All navigation routes updated
- [ ] All asset import paths updated
- [ ] App.jsx updated with routes
- [ ] CorporateAdvanced updated with buttons
- [ ] Application running successfully

## 🎉 Success!

Agar sab steps complete ho gaye hain, toh:
- Hidden Loss Calculator fully functional hoga
- Advanced Test fully functional hoga
- Dono tests Corporate Advanced tab se accessible honge
- Sab data MongoDB mein save hoga
- Zoho CRM integration ready hoga (optional)

---

**Ab bas manually pages copy karni hain aur changes karne hain!** 🚀

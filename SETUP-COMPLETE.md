# ✅ Corporate App - Complete Setup Done!

## 🎯 What Has Been Created

### ✅ Backend Server
- **File:** `server/server.js`
- **Port:** 3002
- **Features:**
  - MongoDB integration
  - Zoho CRM integration
  - Support for both Hidden Loss and Advanced Test
  - CORS configured

### ✅ Configuration Files
- **package.json** - Updated with all dependencies
- **.env** - Environment variables configured
- **MERGE-GUIDE.md** - Complete integration guide

### ✅ Components
- **TestCompleteButton.jsx** - Reusable button component
- **TestBackButton.jsx** - Back navigation button

### ✅ Pages Created
- **HiddenLossHome.jsx** - Hidden Loss Calculator main page

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd corporate/corporate-app
npm install
```

### Step 2: Start Application
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:3002

## 📋 Remaining Tasks

Aapko yeh kaam karne hain:

### 1. Copy Test Pages

**From Test folder:**
```
Test/hidden-loss-calculator/src/pages/Details.jsx 
  → corporate/corporate-app/src/pages/HiddenLossDetails.jsx

Test/hidden-loss-calculator/src/pages/Start.jsx 
  → corporate/corporate-app/src/pages/HiddenLossStart.jsx

Test/hidden-loss-calculator/src/pages/Dialog.jsx 
  → corporate/corporate-app/src/pages/HiddenLossDialog.jsx
```

### 2. Copy Advanced Test Pages

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

### 3. Copy Assets

**Test assets:**
```
Test/hidden-loss-calculator/src/assets/ 
  → corporate/corporate-app/src/assets/test/
```

**Advanced Test assets:**
```
Advanced_Test/advanced_test/src/assets/ 
  → corporate/corporate-app/src/assets/advanced/
```

### 4. Update App.jsx

Add these imports:
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

Add these routes:
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

### 5. Update All Copied Pages

In **EVERY** copied page file, make these changes:

**Change 1: Import Statement**
```jsx
// OLD:
import BackButton from "../components/BackButton";

// NEW:
import TestBackButton from "../components/TestBackButton";
```

**Change 2: Component Usage**
```jsx
// OLD:
<BackButton />

// NEW:
<TestBackButton />
```

**Change 3: API Endpoint (in Details pages)**
```jsx
// OLD:
fetch("http://localhost:3001/api/test-details"

// NEW:
fetch("http://localhost:3002/api/test-details"
```

**Change 4: Add testType (in Details pages)**
```jsx
// In HiddenLossDetails.jsx:
body: JSON.stringify({ ...formData, testType: 'hidden-loss' }),

// In AdvancedTestDetails.jsx:
body: JSON.stringify({ ...formData, testType: 'advanced-test' }),
```

**Change 5: Update Navigation Routes**

In HiddenLossHome.jsx:
```jsx
navigate("/hidden-loss/start");
```

In HiddenLossStart.jsx:
```jsx
navigate("/hidden-loss/details");
```

In HiddenLossDetails.jsx:
```jsx
navigate("/hidden-loss/dialog");
```

In AdvancedTestHome.jsx:
```jsx
navigate("/advanced-test/details");
```

In AdvancedTestDetails.jsx:
```jsx
navigate("/advanced-test/solution");
```

### 6. Update CorporateAdvanced Component

In `src/components/CorporateAdvanced.jsx`, add navigation buttons:

```jsx
import { useNavigate } from "react-router-dom";

function CorporateAdvanced() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Your existing content */}
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
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
            cursor: 'pointer'
          }}
        >
          Hidden Loss Calculator
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
            cursor: 'pointer'
          }}
        >
          Advanced Productivity Test
        </button>
      </div>
    </div>
  );
}
```

## 🎨 Asset Import Examples

**In HiddenLossDialog.jsx:**
```jsx
import dialImg from "../assets/test/Dial.jpeg";
import Loss1 from "../assets/test/Loss1.jpeg";
import Loss2 from "../assets/test/Loss2.jpeg";
// ... etc
```

**In Solution.jsx:**
```jsx
import advance1 from "../assets/advanced/advance1.jpeg";
import advance2 from "../assets/advanced/advance2.jpeg";
// ... etc
```

## 📊 Database

All data will be saved in:
- **Database:** `pmc-mono-repo`
- **Collection:** `testdetails`
- **Fields:** name, email, phoneNumber, companyName, testType, testResults

## 🔧 Zoho CRM Setup (Optional)

If you want Zoho integration:

1. Get credentials from https://api-console.zoho.in/
2. Update `.env`:
```env
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
```
3. Restart server

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] All pages copied and renamed
- [ ] All assets copied to correct folders
- [ ] App.jsx updated with routes
- [ ] All imports updated (BackButton → TestBackButton)
- [ ] All API endpoints updated (3001 → 3002)
- [ ] testType added in Details pages
- [ ] Navigation routes updated
- [ ] CorporateAdvanced updated with buttons
- [ ] Server running (`npm run dev`)
- [ ] Both tests accessible and working

## 🎉 Testing URLs

Once everything is set up:

- **Hidden Loss Calculator:** http://localhost:5173/hidden-loss
- **Advanced Test:** http://localhost:5173/advanced-test
- **Corporate Advanced Tab:** http://localhost:5173/corporate/advanced
- **Backend Health:** http://localhost:3002/api/health

## 📞 Need Help?

Check `MERGE-GUIDE.md` for detailed step-by-step instructions.

---

**Backend aur configuration ready hai! Ab sirf pages copy karne hain aur routes add karne hain!** 🚀

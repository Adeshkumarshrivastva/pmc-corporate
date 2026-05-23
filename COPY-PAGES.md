# 📋 Pages Copy Guide

## Yeh file manually copy karni hain:

### 1. Test (Hidden Loss Calculator) Pages

**Source:** `Test/hidden-loss-calculator/src/pages/`
**Destination:** `corporate/corporate-app/src/pages/`

Copy aur rename karein:

1. **Details.jsx** → **HiddenLossDetails.jsx**
2. **Dialog.jsx** → **HiddenLossDialog.jsx**

### 2. Advanced Test Pages

**Source:** `Advanced_Test/advanced_test/src/pages/`
**Destination:** `corporate/corporate-app/src/pages/`

Copy aur rename karein:

1. **Home.jsx** → **AdvancedTestHome.jsx**
2. **Details.jsx** → **AdvancedTestDetails.jsx**
3. **Start.jsx** → **AdvancedTestStart.jsx**
4. **Solution.jsx** → **Solution.jsx** (same name)
5. **BookDemo.jsx** → **BookDemo.jsx** (same name)
6. **ContactExpert.jsx** → **ContactExpert.jsx** (same name)

### 3. Assets Copy

**Test Assets:**
```
Source: Test/hidden-loss-calculator/src/assets/
Destination: corporate/corporate-app/src/assets/test/

Files to copy:
- Dial.jpeg
- Loss1.jpeg
- Loss2.jpeg
- Loss3.jpeg
- Loss4.jpeg
- Loss5.jpeg
- Loss6.jpeg
- Loss7.jpeg
- Loss8.jpeg
```

**Advanced Test Assets:**
```
Source: Advanced_Test/advanced_test/src/assets/
Destination: corporate/corporate-app/src/assets/advanced/

Files to copy:
- advance1.jpeg
- advance2.jpeg
- advance3.jpeg
- advance4.jpeg
- dial.png
```

## ⚠️ Important Changes in Copied Files

Har copied file mein yeh changes karne hain:

### Change 1: Import Statement
```jsx
// OLD:
import BackButton from "../components/BackButton";

// NEW:
import TestBackButton from "../components/TestBackButton";
```

### Change 2: Component Usage
```jsx
// OLD:
<BackButton />

// NEW:
<TestBackButton />
```

### Change 3: API Endpoint (Details pages only)
```jsx
// OLD:
fetch("http://localhost:3001/api/test-details"

// NEW:
fetch("http://localhost:3002/api/test-details"
```

### Change 4: Add testType (Details pages only)

**In HiddenLossDetails.jsx:**
```jsx
body: JSON.stringify({ ...formData, testType: 'hidden-loss' }),
```

**In AdvancedTestDetails.jsx:**
```jsx
body: JSON.stringify({ ...formData, testType: 'advanced-test' }),
```

### Change 5: Navigation Routes

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

**In HiddenLossDialog.jsx:**
```jsx
// Import paths for images:
import dialImg from "../assets/test/Dial.jpeg";
import Loss1 from "../assets/test/Loss1.jpeg";
// ... etc
```

**In AdvancedTestHome.jsx:**
```jsx
navigate("/advanced-test/details");
```

**In AdvancedTestDetails.jsx:**
```jsx
navigate("/advanced-test/solution");
```

**In Solution.jsx:**
```jsx
// Import paths for images:
import advance1 from "../assets/advanced/advance1.jpeg";
import advance2 from "../assets/advanced/advance2.jpeg";
// ... etc

// Navigation:
navigate("/advanced-test/book-demo");
navigate("/advanced-test/contact-expert");
```

## 🎯 Quick Checklist

- [ ] Test pages copied and renamed
- [ ] Advanced Test pages copied and renamed
- [ ] Test assets copied to `src/assets/test/`
- [ ] Advanced Test assets copied to `src/assets/advanced/`
- [ ] All `BackButton` changed to `TestBackButton`
- [ ] All API endpoints changed to port 3002
- [ ] testType added in Details pages
- [ ] All navigation routes updated
- [ ] All asset import paths updated

---

**Yeh sab manually copy karna padega kyunki automated file copy tools available nahi hain!** 📝

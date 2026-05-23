import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import PoshPolicy from "./components/PoshPolicy"; 
import ExternalCommete from "./components/ExternalCommete";
import Training from "./components/Training"
import PoshLearning from "./components/PoshLearnig"
import PoshCloud from "./components/PoshCloud"
import PoshAnnual from "./components/PoshAnnual"
import CorporateService from "./components/CorporateService"
import CorporateEssential from "./components/CorporateEssential";
import CorporateIntermideate from "./components/CorporateIntermideate";
import CorporateAdvanced from "./components/CorporateAdvanced";
import SchoolService from "./components/SchoolService";
import UniversityService from "./components/UniversityService";
import CoachingService from "./components/CoachingService";
import PmcAcademy from "./components/PmcAcademy";
import PmcFranchise from "./components/PmcFranchise";
import AdvancedTestDashboard from "./pages/AdvancedTestDashboard";
import AdvancedTestYourTest from "./pages/AdvancedTestYourTest";

// Hidden Loss Calculator Pages
import HiddenLossHome from "./pages/HiddenLossHome";
import HiddenLossStart from "./pages/HiddenLossStart";
import HiddenLossDetails from "./pages/HiddenLossDetails";
import HiddenLossDialog from "./pages/HiddenLossDialog";

// Advanced Test Pages
import AdvancedTestHome from "./pages/AdvancedTestHome";
import AdvancedTestStart from "./pages/AdvancedTestStart";
import AdvancedTestDetails from "./pages/AdvancedTestDetails";
import Solution from "./pages/Solution";
import BookDemo from "./pages/BookDemo";
import ContactExpert from "./pages/ContactExpert";
import Dialog from "./pages/Dialog";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posh-policy" element={<PoshPolicy />} />
        <Route path="/external" element={<ExternalCommete />} />
         <Route path="/training" element={<Training />} />
           <Route path="/posh-elearning" element={<PoshLearning />} />
             <Route path="/posh-cloud" element={<PoshCloud />} />
   <Route path="/corporate-service" element={<CorporateService />} />
 <Route path="/corporate/essential" element={<CorporateEssential />} />
 <Route path="/corporate/intermediate" element={< CorporateIntermideate />} />
 <Route path="/corporate/advanced" element={< CorporateAdvanced />} />
 <Route path="/posh-filing" element={<PoshAnnual />} />
  <Route path="/school-service" element={<SchoolService />} />
  <Route path="/university-service" element={<UniversityService />} />
   <Route path="/coaching-service" element={<CoachingService />} />
    <Route path="/pmc-academy" element={<PmcAcademy/>} />
    <Route path="/pmc-franchise" element={<PmcFranchise />} />
    <Route path="/advanced-test/dashboard" element={<AdvancedTestDashboard />} />
    <Route path="/advanced-test/test" element={<AdvancedTestYourTest />} />

    {/* Hidden Loss Calculator Routes */}
    <Route path="/hidden-loss" element={<HiddenLossHome />} />
    <Route path="/hidden-loss/start" element={<HiddenLossStart />} />
    <Route path="/hidden-loss/details" element={<HiddenLossDetails />} />
    <Route path="/hidden-loss/dialog" element={<HiddenLossDialog />} />

    {/* Advanced Test Routes */}
    <Route path="/advanced-test" element={<AdvancedTestHome />} />
    <Route path="/advanced-test/start" element={<AdvancedTestStart />} />
    <Route path="/advanced-test/details" element={<AdvancedTestDetails />} />
    <Route path="/advanced-test/dialog" element={<Dialog />} />
    <Route path="/advanced-test/solution" element={<Solution />} />
    <Route path="/advanced-test/book-demo" element={<BookDemo />} />
    <Route path="/advanced-test/contact-expert" element={<ContactExpert />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
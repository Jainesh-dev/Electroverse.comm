import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Loading from "./components/ui/Loading";
import EventDetails from "./pages/EventDetails";
import Team from "./pages/Team";
import Techathon from "./pages/Techathon";

const ContactUs = lazy(() => import("./pages/ContactUs"));
const FullTimeline = lazy(() => import("./pages/FullTimeline"));

// --- UPDATED DOMAINS COMPONENT (Strictly matching image text) ---
const DomainsSection = () => {
  const domains = [
    "HEALTHCARE AND BIOMEDICAL TECHNOLOGY",
    "AGRICULTURAL AND RURAL DEVELOPMENT",
    "DEFENSE AND SECURITY SYSTEMS",
    "ROBOTICS AND AUTONOMOUS SYSTEMS",
    "IMMERSIVE AND EDUCATIONAL TECHNOLOGY",
    "ENERGY AND ENVIRONMENTAL STABILITY",
    "INDUSTRIAL AUTOMATION AND CONTROL SYSTEMS",
    "STUDENT INNOVATION"
  ];

  return (
    <section className="unified-domains-layout">
      <h2 className="unified-domains-title">EVENT DOMAINS</h2>
      <div className="unified-domains-list">
        {domains.map((item, index) => (
          <div key={index} className="unified-domain-item">
            <span className="unified-bullet">•</span>
            <span className="unified-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => setShowLoader(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [location.pathname]);

  if (showLoader && location.pathname === "/") {
    return <Loading />;
  }

  return (
    <Suspense fallback={null}>
      <Routes>
        {/* HOMEPAGE: Index + Domains added together */}
        <Route 
          path="/" 
          element={
            <>
              <Index />
              <DomainsSection />
            </>
          } 
        />

        <Route path="/event/:slug" element={<EventDetails />} />
        <Route path="/event/techathon-2026" element={<Techathon />} />
        <Route path="/timeline" element={<FullTimeline />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
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
        <Route path="/" element={<Index />} />

        {/* Normal event pages */}
        <Route path="/event/:slug" element={<EventDetails />} />

        {/* SPECIAL CYBERPUNK STORY PAGE */}
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

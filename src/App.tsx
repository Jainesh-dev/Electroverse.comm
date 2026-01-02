import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Loading from "./components/ui/Loading";
import EventDetails from './pages/EventDetails';
import FullTimeline from "@/pages/FullTimeline";
import Team from "./pages/Team";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  after 5 seconds
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/event/:eventName" element={<EventDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/timeline" element={<FullTimeline />} />
        <Route path="/team" element={<Team />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

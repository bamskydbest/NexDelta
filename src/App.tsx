import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import HeroCard from "./pages/Preview";
import Mainsite from "./pages/Mainsite";
import About from "./pages/About";
import Strategy from "./pages/Strategy";
import Businesses from "./pages/Business";
import LeadershipSection from "./components/LeadershipSection";
import Insights from "./pages/Insight";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<HeroCard />} />
    <Route path="/home" element={<Mainsite />} />
    <Route path="/about" element={<About />} />
    <Route path="/our-businesses" element={<Businesses />} />
    <Route path="/strategy-impact" element={<Strategy />} />
    <Route path="/leadership" element={<LeadershipSection />} />
    <Route path="/insights-news" element={<Insights />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>

  );
}

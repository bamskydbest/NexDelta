import { Routes, Route } from "react-router-dom";
import Mainsite from "./pages/Mainsite";
import HeroCard from "./pages/Preview";
import ScrollToTop from "./components/ScrollToTop";
// import MainSite from "./pages/MainSite"; 
// import Preview from "./pages/Preview";

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HeroCard />} />
      <Route path="/main" element={<Mainsite />} />
    </Routes>
    </>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Push content below fixed navbar */}
      <main className="flex-1 pt-[5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

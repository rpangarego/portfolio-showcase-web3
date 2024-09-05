"use client";

import { useEffect, useState } from "react";
import { SelectedPage } from "./constants/types";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Welcome
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar selectedPage={selectedPage} handleSidebar={handleSidebar} />
      <Sidebar
        selectedPage={selectedPage}
        handleSidebar={handleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <Hero setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

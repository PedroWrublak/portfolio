"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar 
      isSidebarOpen={isSidebarOpen} 
      toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      >
      </Navbar>
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}></SideBar>
      <HomePage></HomePage>
    </>
  );
}

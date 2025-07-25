"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>

      <Navbar onMenuClick={() => setIsSidebarOpen(true)} isSidebarOpen={isSidebarOpen}></Navbar>

      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}></SideBar>
    </>
  );
}

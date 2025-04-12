import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="sidebar-wrap">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

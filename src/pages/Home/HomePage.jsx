import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import "./homepage.css";
import Footer from "../../components/Footer/Footer";
import TopNav from "../../components/TopNav/TopNav";

const HomePage = () => {
  return (
    <div className="home_main">
      <Sidebar />
      <div className="home_main_content">
        <TopNav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

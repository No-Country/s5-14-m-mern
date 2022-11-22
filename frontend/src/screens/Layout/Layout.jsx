import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/PagesComponents/Footer/Footer";
import Header from "../../components/PagesComponents/Header/Header";
import { Navbar } from "../../components/PagesComponents/Navbar/Navbar";
import "./layout.sass";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navD">
        <Navbar />
      </div>
      <div className="layout-content">
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
        <div className="navM">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;

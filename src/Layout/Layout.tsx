import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../Components/Header/Header";
import BottomNav from "../Components/BottomNav/BottomNav";
const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout;

import React from "react";
import hamburger from "../assets/icons/hamburger.svg";
import search from "../assets/icons/search.svg";
import help from "../assets/icons/help.svg";
import notifications from "../assets/icons/notifications.svg";
import "../styles/navbar.css";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={hamburger} alt="hamburger icon" />
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <img src={search} alt="search" className="search-icon" />
        </div>
      </div>
      <div className="right">
        <div>
          <img src={help} alt="help" />
        </div>
        <div className="notifications">
          <img src={notifications} alt="notifications" />
          <div className="red-dot"></div>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;

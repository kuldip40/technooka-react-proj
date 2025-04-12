import React from "react";
import "../styles/sidebar.css";
import dashboard from "../assets/icons/dashboard.svg";
import bos from "../assets/icons/bos.svg";
import program from "../assets/icons/program.svg";
import feesCreation from "../assets/icons/fees_creation.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="item">
          <a href="/">
            <img src={dashboard} alt="dashboard" /> <span>Dashboard</span>
          </a>
        </li>
        <li className="item">
          <a href="/">
            <img src={bos} alt="bos" /> <span>BOS</span>
          </a>
        </li>
        <li className="item">
          <a href="/">
            <img src={program} alt="program" /> <span>Program</span>
          </a>
        </li>
        <li className="item active">
          <a href="/">
            <img src={feesCreation} alt="feesCreation" />
            <span>Fees Creation</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

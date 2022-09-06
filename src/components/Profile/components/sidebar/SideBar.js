import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = ({ setActiveTab, activeTab }) => {
  return (
    <>
      <ul>
        <li
          onClick={() => setActiveTab("transactions")}
          className={activeTab == "transactions" ? "active" : ""}
        >
          Transaction
        </li>
        <li>
          <Link to="/exchange"> Echange</Link>
        </li>
        <li
          onClick={() => setActiveTab("info")}
          className={activeTab == "info" ? "active" : ""}
        >
          <a href="#">Profile info</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </>
  );
};

export default SideBar;

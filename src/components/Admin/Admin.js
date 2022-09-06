import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Clients from "./Clients";
import Currencies from "./Currencies";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Transactions from "./Transactions";

const Admin = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("dashboard");
  useEffect(() => {
    if (role != "admin") {
      navigate("/profile");
    }
  }, [role]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{
            backgroundColor: "#0955B5",
            height: "700px",
            padding: "2rem",
          }}
          className="col col-2 text-center fs-5 text-light"
        >
          <SideBar setActiveTab={setActiveTab} />
        </div>
        <div className="col col-10 fs-5 text-black">
          <TopBar />
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "currencies" && <Currencies />}
          {activeTab === "transactions" && <Transactions />}
          {activeTab === "clients" && <Clients />}
        </div>
      </div>
    </div>
  );
};

export default Admin;

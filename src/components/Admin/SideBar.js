import React from "react";

const SideBar = ({ setActiveTab }) => {
  return (
    <>
      <div className="row mb-5">
        <div className="col">
          {" "}
          <a class="navbar-brand d-flex" href="#">
            <img src={require("../../assets/images/logo1.png")} alt="logo" />
            <h1
              style={{ marginTop: "15px", marginLeft: "15px" }}
              className="fs-3 text-light"
            >
              DFBS
            </h1>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col text-start">
          <ul
            style={{
              listStyle: "none",
              cursor: "pointer",
            }}
          >
            <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
            <li onClick={() => setActiveTab("currencies")}>Currencies</li>
            <li onClick={() => setActiveTab("transactions")}>Transactions</li>
            <li onClick={() => setActiveTab("clients")}>Clients</li>
            <li onClick={() => (window.location = "/logout")}>Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

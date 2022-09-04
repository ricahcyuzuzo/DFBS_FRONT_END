import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col">
          {" "}
          <a class="navbar-brand d-flex" href="#">
            <img src={require("../../../assets/images/logo1.png")} alt="logo" />
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
            <li>Dashboard</li>
            <li>Currencies</li>
            <li>Transactions</li>
            <li>Clients</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

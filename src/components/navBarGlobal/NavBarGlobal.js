import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./navBarGlobal.css";
const NavBarGlobal = () => {
  return (
    <>
      {" "}
      <nav
        style={{ padding: "2rem" }}
        className="navbar fs-5 navbar-expand-lg navBg"
      >
        <div className="container-fluid">
          <a class="navbar-brand d-flex" href="#">
            <img src={require("../../assets/images/logo1.png")} alt="logo" />
            <h1
              style={{ marginTop: "15px", marginLeft: "15px" }}
              className="fs-3 text-light"
            >
              DFBS
            </h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="#">
                About us
              </a>
              <a class="nav-link " href="#">
                Contuct us
              </a>
              <a class="nav-link " href="#">
                Login
              </a>
              <a class="nav-link  ">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarGlobal;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./NavbarHome.css";
const Header = () => {
  return (
    <>
      <nav style={{ padding: "2rem" }} class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand d-flex" href="#">
            <img src={require("../../../assets/images/logo1.png")} alt="logo" />
            <h1
              style={{ marginTop: "15px", marginLeft: "15px" }}
              className="fs-3"
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
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                About us
              </a>
              <a class="nav-link text-black" href="#">
                Contuct us
              </a>
              <a class="nav-link RegisterBtn" href="#">
                Login
              </a>
              <a class="nav-link RegisterBtn ">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

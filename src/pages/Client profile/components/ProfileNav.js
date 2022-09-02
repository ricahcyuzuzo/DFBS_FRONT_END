import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./profileNav.css";
const ProfileNav = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav
            style={{ padding: "2rem" }}
            className="navbar fs-5 navbar-expand-lg "
          >
            <div className="container-fluid">
              <a class="navbar-brand d-flex" href="#">
                <img
                  src={require("../../../assets/images/logo1.png")}
                  alt="logo"
                />
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
                  <a class="nav-link  ">Logout</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;

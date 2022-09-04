import React from "react";
import SideBar from "./components/SideBar";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{
            backgroundColor: "#0955B5",
            height: "700px",
            padding: "2rem",
          }}
          className="col col-3 text-center fs-5 text-light"
        >
          <SideBar />
        </div>
        <div className="col col-9 fs-5 text-black">
          <div
            style={{
              height: "700px",
            }}
            className="row"
          >
            <div className="container">
              <div
                style={{ borderBottom: "1px solid #000", padding: "2rem" }}
                className="row"
              >
                <div className="col col-4 fs-5 text-start">
                  <h4>DFS Admin Panel</h4>
                </div>
                <div className="col col-8 fs-5 text-end">
                  <h4>Logout</h4>
                </div>
              </div>
              <div className="row">
                <div style={{ padding: "2rem" }} className="container">
                  <h4 className="text-start">DASHBOARD</h4>
                  <div style={{ cursor: "pointer" }} className="col col-12">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                      <div class="col col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">3</h5>
                            <p class="card-text">Currencies</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">6</h5>
                            <p class="card-text">Clients</p>
                          </div>
                        </div>
                      </div>
                      <div class="col col-lg-12">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">6</h5>
                            <p class="card-text">Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

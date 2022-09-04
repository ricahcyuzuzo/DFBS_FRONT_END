import React from "react";

const Content = () => {
  return (
    <>
      {" "}
      <div style={{ padding: "2rem" }} className="container">
        <h4 className="text-start">DASHBOARD</h4>
        <div style={{ cursor: "pointer" }} className="col col-12">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col col-lg-6">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">3</h5>
                  <p class="card-text">Currencies</p>
                </div>
              </div>
            </div>
            <div class="col col-lg-6">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">6</h5>
                  <p class="card-text">Clients</p>
                </div>
              </div>
            </div>
            <div class="col col-lg-12">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">6</h5>
                  <p class="card-text">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

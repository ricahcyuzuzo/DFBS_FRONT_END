import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

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
          className="col col-2 text-center fs-5 text-light"
        >
          <SideBar />
        </div>
        <div className="col col-10 fs-5 text-black">
          <div
            style={{
              height: "700px",
            }}
            className="row"
          >
            <div className="container">
              <TopBar />
              <div className="row">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React, { useState, useEffect } from "react";
import Contents from "./components/contents/Contents";
import ProfileNav from "./components/ProfileNav";
import SideBar from "./components/sidebar/SideBar";
import Footer from "../../components/Footer/Footer";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  return (
    <>
      <div className="container-fluid section">
        <div className="row mb-5">
          <div className="col col-lg-12">
            <ProfileNav />
          </div>
        </div>
        <div className="row ">
          <div className="row mt-5 text-center">
            <h1 className="fs-2 fw-normal text-light">My Profile</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div
            style={{ borderRight: "2px solid #0955B5", height: "400px" }}
            className="col col-3 d-flex text-start fs-5 p-2  text-black"
          >
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="col col-9">
            <Contents activeTab={activeTab} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

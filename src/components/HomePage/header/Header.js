import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="container-fluid header">
        <div className="row ">
          <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
            <h3 className="mb-4">Digital Forex Bureau System</h3>
            <p className="fs-4">
              Find the solution of the problems in exchanging currency and
              transferring money digitally to meet your needs and satisfaction.
            </p>
            <button className="btn fs-5 text-light exchangebtn">
              EXCHANGE NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

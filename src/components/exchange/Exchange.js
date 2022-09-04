import React from "react";
import "../styles/exchange.scss";
import HomeHeader from "../Headers/HomeHeader";
import Footer from "../Footer/Footer";
function Exchange() {
  return (
    <>
      <div className="headerr">
        <img src={require("../../assets/images/bgheader.png")} />
        <div className="header-contents">
          <HomeHeader />
        </div>
      </div>
      <div className="form-container">
        <h1 className="text-center text-white">Exchange</h1>
        <div className="exchange-container">
          <div className="inputs-container">
            <div className="input">
              <input type="text" />
              <div className="select">
                <select>
                  <option>RWF</option>
                </select>
              </div>
            </div>
            <div className="input">
              <input type="text" />
              <div className="select">
                <select>
                  <option>RWF</option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-3">
            <input
              className="form-control"
              placeholder="Enter account number or phone number for us to transfer the exchange"
            />
          </div>
          <small>
            NB: After successful payment, we will transfer the exchange amount
            to the account number of phone number specified.
          </small>
          <div>
            <button className="btn">PAY NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Exchange;

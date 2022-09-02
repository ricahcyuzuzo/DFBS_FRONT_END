import React from "react";
import "./exchangeTarif.css";
const ExchangeTarif = () => {
  return (
    <>
      <div className="container-fluid terifExchange">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
              <div className="row">
                <div className="col text-start fs-5 text-black currency">
                  RWF/USD
                </div>
              </div>
              <div className="row fw-bold fs-5">
                <div className="col col-6 text-warning text-start">Buy</div>
                <div className="col col-6 text-start">Sell</div>
                <div className="row fw-bold fs-5 text-start">
                  <div className="col col-6 text-dark">1,023.04</div>
                  <div className="col col-6 text-dark">1,043.50</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col text-start fs-5 text-black currency">
                  RWF/EURO
                </div>
              </div>
              <div className="row fw-bold fs-5">
                <div className="col col-6 text-warning text-start">Buy</div>
                <div className="col col-6 text-start">Sell</div>
                <div className="row fw-bold fs-5 text-start">
                  <div className="col col-6 text-dark">1,023.04</div>
                  <div className="col col-6 text-dark">1,043.50</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col text-start fs-5 text-black currency">
                  RWF/GBP
                </div>
              </div>
              <div className="row fw-bold fs-5">
                <div className="col col-6 text-warning text-start">Buy</div>
                <div className="col col-6 text-start">Sell</div>
                <div className="row fw-bold fs-5 text-start">
                  <div className="col col-6 text-dark">1,023.04</div>
                  <div className="col col-6 text-dark">1,043.50</div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col text-start fs-5 text-black currency">
                  RWF/KES
                </div>
              </div>
              <div className="row fw-bold fs-5">
                <div className="col col-6 text-warning text-start">Buy</div>
                <div className="col col-6 text-start">Sell</div>
                <div className="row fw-bold fs-5 text-start">
                  <div className="col col-6 text-dark">1,023.04</div>
                  <div className="col col-6 text-dark">1,043.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeTarif;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../constansts";
import { errorHandler } from "../../helpers";
import Footer from "../Footer/Footer";
import HomeHeader from "../Headers/HomeHeader";
import "../styles/home.scss";

function Home() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = () => {
    axios
      .get(backendUrl + "/currencies/all/")
      .then((res) => {
        setCurrencies(res.data.result);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };
  const returnCurrencies = () => {
    for (let i = 0; i < 4; i++) {
      return (
        <div className="currencyContainer">
          <h2>RWF/{currencies[i]?.code}</h2>
          <div className="buySellContainer">
            <div>
              <p>BUY</p>
              <p>{currencies[i]?.buyPrice}</p>
            </div>
            <div>
              <p>SELL</p>
              <p>{currencies[i]?.sellPrice}</p>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <HomeHeader />
      <div className="introContainer">
        <img
          src={require("../../assets/images/headerImg.jpg")}
          className="w-100"
        />
        <div className="contents">
          <h2>Digital Forex Bureau System</h2>
          <p>
            Find the solution of the problems in exchanging currency and
            transferring money digitally to meet your needs and satisfaction.
          </p>
          <a href="exchange">
            <button>EXCHANGE NOW</button>
          </a>
        </div>
      </div>
      <div className="currencies">{returnCurrencies()}</div>
      <div className="container">
        <div className="body">
          <p>
            Probally, you must be familiar with exchanging through banks and
            traditional providers. That is the samething we are doing but
            online!. Our smart tech means are more efficient which means you get
            a great rate. Every time.
          </p>
          <a href="exchange">
            <button>GET STARTED</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

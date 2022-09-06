import React, { useEffect, useState } from "react";
import "../styles/exchange.scss";
import HomeHeader from "../Headers/HomeHeader";
import Footer from "../Footer/Footer";
import { backendUrl } from "../../constansts";
import { errorHandler } from "../../helpers";
import { setCurrencies } from "../../actions/currencies";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function Exchange() {
  const dispatch = useDispatch();
  const { currencies } = useSelector((state) => state.currencies);
  const [amountToGet, setAmountToGet] = useState(0);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrenyc] = useState("");

  const fetchCurrencies = () => {
    axios
      .get(backendUrl + "/currencies/all/")
      .then((res) => {
        dispatch(setCurrencies(res.data.result));
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  useEffect(() => {
    calculateAmountToGet();
  }, [toCurrency, amount]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const calculateAmountToGet = () => {
    // const from = currencies.find((item) => item.code == fromCurrency);
    const to = currencies.find((item) => item.code == toCurrency);
    console.log("to", to);
    setAmountToGet(amount / to?.sellPrice);
  };

  function compare(a, b) {
    if (a.code < b.code) {
      return -1;
    }
    if (a.code > b.code) {
      return 1;
    }
    return 0;
  }
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
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <div className="select">
                <select onChange={(e) => setFromCurrency(e.target.value)}>
                  {/* {currencies.map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code}
                    </option>
                  ))} */}
                  <option>RWF</option>
                </select>
              </div>
            </div>
            <div className="input">
              <input type="text" disabled value={amountToGet} />
              <div className="select">
                <select onChange={(e) => setToCurrenyc(e.target.value)}>
                  <option disabled selected></option>
                  {currencies.sort(compare).map((item, i) => (
                    <option key={i} value={item.code}>
                      {item.code}
                    </option>
                  ))}
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

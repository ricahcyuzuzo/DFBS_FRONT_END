import React, { useEffect, useState } from "react";
import "../styles/exchange.scss";
import HomeHeader from "../Headers/HomeHeader";
import Footer from "../Footer/Footer";
import { backendUrl } from "../../constansts";
import { errorHandler, toastMessage } from "../../helpers";
import { setCurrencies } from "../../actions/currencies";
import { useDispatch, useSelector } from "react-redux";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
function Exchange() {
  const navigate = useNavigate();
  const { email, fullName, phone, role, token, address } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { currencies } = useSelector((state) => state.currencies);
  const [amountToGet, setAmountToGet] = useState(0);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrenyc] = useState("");
  const [phoneOrAccount, setPhoneOrAccount] = useState("");
  const [showLoader, setShowLoader] = useState(false);

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
    setAmountToGet((amount / to?.sellPrice).toFixed(2));
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

  const config = {
    public_key: "FLWPUBK-0cfa7cdb33ef479ec93b717156b7b779-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "RWF",
    payment_options: "card,mobilemoney",
    customer: {
      email,
      phonenumber: "0" + phone,
      name: fullName,
    },
    customizations: {
      title: "Exchange Berau - Checkout Page",
      description: "",
      logo: process.env.REACT_APP_PROJECT_LOGO,
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const handlePay = () => {
    if (email == "") {
      toastMessage("error", "You must be logged in, inorder to exchange ");
    } else {
      if (amount.trim() === "" || phoneOrAccount === "") {
        toastMessage("error", "All fields are required");
      } else {
        setShowLoader(true);
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            setShowLoader(false);
            if (response.status !== "successful") {
              toastMessage("Error", "Transaction failed!");
              saveTransaction("Failed");
            } else {
              closePaymentModal();
              toastMessage("success", "Transaction paid successfull!");
              saveTransaction("Paid");
            }
          },
          onClose: () => {
            saveTransaction("Cancelled");
            setShowLoader(false);
          },
        });
      }
    }
  };

  const saveTransaction = (status) => {
    setShowLoader(true);
    axios
      .post(backendUrl + "/transactions/save/", {
        fromCurrency: "RWF",
        toCurrency,
        amountPaid: amount,
        amountToGet,
        phoneOrAccount,
        status,
        token,
      })
      .then((res) => {
        console.log(res.data);
        setShowLoader(false);
        navigate("/profile");
      })
      .catch((error) => {
        setShowLoader(false);
        errorHandler(error);
      });
  };

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
              type="number"
              className="form-control"
              value={phoneOrAccount}
              onChange={(e) => setPhoneOrAccount(e.target.value)}
              placeholder="Enter account number or phone number for us to transfer the exchange"
            />
          </div>
          <small>
            NB: After successful payment, we will transfer the exchange amount
            to the account number or phone number specified.
          </small>
          <div>
            <button className="btn" onClick={() => handlePay()}>
              PAY NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Loader showLoader={showLoader} />
    </>
  );
}

export default Exchange;

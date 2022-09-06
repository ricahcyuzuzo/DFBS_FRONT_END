import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { backendUrl } from "../../constansts";
import { errorHandler } from "../../helpers";

const Dashboard = () => {
  const { token } = useSelector((state) => state.user);
  const [clients, setClients] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchCurrencies();
    fetchClients();
  }, []);

  const fetchClients = () => {
    axios
      .post(backendUrl + "/users/getAll", { token })
      .then((res) => {
        setClients(res.data.users);
      })
      .catch((e) => {
        errorHandler(e);
      });
  };

  const fetchCurrencies = () => {
    axios
      .get(backendUrl + "/currencies/all/?token=" + token)
      .then((res) => {
        setCurrencies(res.data.result);
      })
      .catch((error) => {
        errorHandler(error);
      });
  };
  return (
    <>
      <div style={{ padding: "2rem" }} className="container">
        <h4 className="text-start">DASHBOARD</h4>
        <div style={{ cursor: "pointer" }} className="col col-12">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col col-lg-6">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">{currencies.length}</h5>
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
                  <h5 class="card-title">{transactions.length}</h5>
                  <p class="card-text">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

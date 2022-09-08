import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { backendUrl } from "../../../../constansts";
import { errorHandler } from "../../../../helpers";
import Loader from "../../../Loader/Loader";
import "./contents.css";
const Contents = ({ activeTab }) => {
  const { token } = useSelector((state) => state.user);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(backendUrl + "/transactions/all/?token=" + token)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setTransactions(res.data.transactions);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
        {activeTab == "transactions" && (
          <>
            <h1 className="text-black fs-3 text-start">My Transactions</h1>
            <div className="container">
              <table className="table table-bordered">
                <thead>
                  <th>Amount Paid</th>
                  <th>Amount To Received</th>
                  <th>Date</th>
                  <th>Account to receive Exchange.</th>
                  <th>Status</th>
                </thead>
                <tbody>
                  {transactions.length == 0 ? (
                    <>
                      <tr>
                        <td colSpan={5}>
                          <span>No trasactions found</span>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {transactions.map((item, i) => (
                        <tr>
                          <td>
                            {item.amountPaid} {item.fromCurrency}
                          </td>
                          <td>
                            {item.amountToGet} {item.toCurrency}
                          </td>
                          <td>{new Date(item.createdAt).toDateString()}</td>
                          <td>{item.toAccount}</td>
                          <td
                            className={
                              item.status == "Paid"
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            <td>{item.status}</td>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <Loader showLoader={loading} />
    </>
  );
};

export default Contents;

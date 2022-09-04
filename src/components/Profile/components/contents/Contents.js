import React from "react";
import "./contents.css";
const Contents = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-black fs-3 text-start">My Transactions</h1>
        <div className="container">
          <table style={{ padding: "2rem" }} border="0">
            <th>Amount paid</th>
            <th>Amount received</th>
            <th>Date</th>
            <th>Status</th>
            <tr>
              <td>1032 RWF</td>
              <td>1 USD</td>
              <td>13/07/2022 14:45</td>
              <td>completed</td>
            </tr>
            <tr>
              <td>2064 RWF</td>
              <td>2 USD</td>
              <td>22/07/2022 12:05</td>
              <td>failed</td>
            </tr>
            <tr>
              <td>2064 RWF</td>
              <td>2 USD</td>
              <td>13/08/2022 11:50</td>
              <td>pending</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contents;

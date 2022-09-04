import React from "react";
import "../styles/homeHeader.scss";

function HomeHeader() {
  return (
    <div className="header-container">
      <table>
        <tr>
          <td>
            <img src={require("../../assets/images/logo1.png")} />
          </td>
          <td>
            <h1>DFBS</h1>
          </td>
        </tr>
      </table>
      <div>
        <ul>
          <li>About us</li>
          <li>Contact us </li>
          <li>
            <a href="login">
              <button>Login</button>
            </a>
          </li>
          <li>
            <a href="register">
              <button> Register</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;

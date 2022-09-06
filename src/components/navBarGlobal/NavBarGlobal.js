import React from "react";
import "../styles/homeHeader.scss";

function HomeHeader() {
  return (
    <div
      className="header-container"
      style={{ backgroundColor: "#0955B5", color: "#FDDC86" }}
    >
      <table>
        <tr>
          <td>
            <a href="/">
              <img src={require("../../assets/images/logo1.png")} />
            </a>
          </td>
          <td>
            <h1>DFBS</h1>
          </td>
        </tr>
      </table>
      <div>
        <ul className="fs-5">
          <li>
            <a style={{ color: "#FDDC86" }} href="#">
              About us
            </a>
          </li>
          <li>
            <a style={{ color: "#FDDC86" }} href="#">
              Contact us
            </a>
          </li>
          <li>
            <a style={{ color: "#FDDC86" }} href="/login">
              Login
            </a>
          </li>
          <li>
            <a style={{ color: "#FDDC86" }} href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;

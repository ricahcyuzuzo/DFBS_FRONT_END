import React from "react";
import { useSelector } from "react-redux";
import "../styles/homeHeader.scss";

function HomeHeader() {
  const { email } = useSelector((state) => state.user);
  return (
    <div className="header-container">
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
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          {email != "" ? (
            <>
              <li>
                <a href="/profile">
                  <button>Profile</button>
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">
                  <button>Login</button>
                </a>
              </li>
              <li>
                <a href="/register">
                  <button> Register</button>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HomeHeader;

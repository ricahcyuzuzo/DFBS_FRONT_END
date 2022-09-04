import React from "react";
import "../../../src/components/styles/homeHeader.scss";

function TopBar() {
  return (
    <div className="header-container">
      <table>
        <tr>
          <td>
            <h4>DFBS Admin Panel</h4>
          </td>
        </tr>
      </table>
      <div>
        <ul>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;

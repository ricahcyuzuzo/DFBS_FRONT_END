import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import { backendUrl } from "../../constansts";
import { useSelector } from "react-redux";
import { errorHandler } from "../../helpers";
function Clients() {
  const { token } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .post(backendUrl + "/users/getAll", { token })
      .then((res) => {
        setLoading(false);
        setUsers(res.data.users);
      })
      .catch((e) => {
        setLoading(false);
        errorHandler(e);
      });
  }, []);
  return (
    <>
      <div className="container" style={{ padding: "2rem" }}>
        <h4 className="text-start">Clients</h4>
        <div className="mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Names</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Loader showLoader={loading} />
    </>
  );
}

export default Clients;

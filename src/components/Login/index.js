import React, { useState } from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import Axios from "axios";
import { backendUrl } from "../../constansts";
import { errorHandler } from "../../helpers";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setAddress,
  setUserEmail,
  setUserFullName,
  setUserPhone,
  setUserRole,
  setUserToken,
} from "../../actions/user";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    Axios.post(backendUrl + "/users/login", { email, password })
      .then((res) => {
        dispatch(setUserFullName(res.data.fullName));
        dispatch(setUserPhone(res.data.phone));
        dispatch(setUserEmail(res.data.email));
        dispatch(setUserRole(res.data.role));
        dispatch(setAddress(res.data.token));
        dispatch(setUserToken(res.data.token));
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        errorHandler(error);
      });
  };
  return (
    <>
      <NavBarGlobal />
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-12 col-sm-12"></div>
          <div className="col col-lg-4 col-md-12 col-sm-12">
            <form className="login" onSubmit={handleSubmit}>
              <div class="mb-3">
                <h3 className=" fs-6 text-black mb-4 text-start">
                  LOG INTO YOUR ACCOUNT
                </h3>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" class="btn">
                LOGIN
              </button>
            </form>
          </div>
          <div className="col col-lg-4 col-md-12 col-sm-12"></div>
        </div>
      </div>
      <Footer />
      <Loader showLoader={loading} />
    </>
  );
};

export default Login;

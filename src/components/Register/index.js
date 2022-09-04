import React, { useEffect, useState } from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import Footer from "../../components/Footer/Footer";
import "./index.css";
import Axios from "axios";
import { errorHandler, toastMessage } from "../../helpers";
import { backendUrl } from "../../constansts";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAddress,
  setUserEmail,
  setUserFullName,
  setUserPhone,
  setUserRole,
  setUserToken,
} from "../../actions/user";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      password2.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      toastMessage("error", "All fields are required");
    } else if (password !== password2) {
      toastMessage("error", "Passwords do not match");
    } else {
      setLoading(true);
      Axios.post(backendUrl + "/users/register/", {
        fullName,
        email,
        password,
        phone,
        address,
      })
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
    }
  };
  return (
    <>
      <NavBarGlobal />
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-12 col-sm-12"></div>
          <div className="col col-lg-4 col-md-12 col-sm-12">
            <form className="login" onSubmit={(e) => handleSubmit(e)}>
              <div class="mb-3">
                <h3 className=" fs-6 text-black mb-4 text-start">
                  CREATE NEW ACCOUNT
                </h3>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Full name"
                  required
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone number (07...)"
                  pattern="07[2,3,8,9]{1}[0-9]{7}"
                  title="Invalid Phone (use MTN or AIRTEL-TIGO mobile number)"
                  required
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  required
                  value={password2}
                  onChange={(e) => setpassword2(e.target.value)}
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

export default Register;

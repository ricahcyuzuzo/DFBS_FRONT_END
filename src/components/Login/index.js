import React from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import Footer from "../../components/Footer/Footer";
import "./index.css";
const Login = () => {
  return (
    <>
      <NavBarGlobal />
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-12 col-sm-12"></div>
          <div className="col col-lg-4 col-md-12 col-sm-12">
            <form className="login">
              <div class="mb-3">
                <h3 className=" fs-6 text-black mb-4 text-start">
                  LOG INTO YOUR ACCOUNT
                </h3>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
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
    </>
  );
};

export default Login;

import React from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import Footer from "../../components/Footer/Footer";
import "./index.css";
const Register = () => {
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
                  CREATE NEW ACCOUNT
                </h3>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Full name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email address"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Phone number"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Address"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
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

export default Register;

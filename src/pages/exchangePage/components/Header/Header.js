import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./header.css";
import Footer from "../../../../components/Footer/Footer";
import NavBarGlobal from "../../../../components/navBarGlobal/NavBarGlobal";
const Header = () => {
  return (
    <>
      <div className="container-fluid navContainer">
        <NavBarGlobal />
      </div>
      <section>
        <div className="justify-content-center exchangeForm">
          <div className="row">
            <div className="col">
              <form
                style={{
                  border: "2px solid #fff",
                  padding: "2rem",
                  backgroundColor: "#F2F2F2",
                  borderRadius: "20px",
                  border: "2px solid #0955B5",
                  marginTop: "0px",
                }}
                className="m-2"
                action=""
              >
                <div className="row">
                  <div className="col col-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with segmented dropdown button"
                      />
                      <button type="button" className="btn btn-primary">
                        RWF
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with segmented dropdown button"
                      />
                      <button type="button" className="btn btn-primary">
                        USD
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control mt-5 text-center"
                        placeholder="Enter account number or phone number for us to transfer the exchange"
                      />
                      <p className="fs-5">
                        NB: After successful payment, we will transfer the
                        exchange amount to the account number of phone number
                        specified.
                      </p>
                    </div>
                  </div>
                  <row className="col">
                    <button className="btn btn-primary form-control fs-5">
                      PAY NOW
                    </button>
                  </row>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Header;

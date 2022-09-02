import React from "react";
import "./body.css";
const Body = () => {
  return (
    <>
      <div className="container-fluid bg-light body">
        <div className="container justify-content-center text-center fs-6 text-dark">
          <p>
            Probally, you must be familiar with exchanging through banks and
            traditional providers. That is the samething we are doing but
            online!. Our smart tech means are more efficient which means you get
            a great rate. Every time.
          </p>
          <button
            style={{
              backgroundColor: "#FF8C0F",
              color: "#fff",
              padding: "1rem",
              width: "250px",
              borderRadius: "20px !important",
            }}
            className="btn fs-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;

import React from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import RegisterForm from "./components/RegisterForm";
import Footer from "../../components/Footer/Footer";
const LoginPage = () => {
  return (
    <>
      <NavBarGlobal />
      <div className="container">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

import React from "react";
import NavBarGlobal from "../../components/navBarGlobal/NavBarGlobal";
import LoginForm from "./components/LoginForm";
import Footer from "../../components/Footer/Footer";
const LoginPage = () => {
  return (
    <>
      <NavBarGlobal />
      <div className="container">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

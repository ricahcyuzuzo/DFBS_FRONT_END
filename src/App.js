import React from "react";
import "./App.css";
import Exchange from "./pages/exchangePage/Exchange";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import IndexPage from "./pages/Index/IndexPage";
import ClientProfile from "./pages/Client profile/ClientProfile";

function App() {
  return (
    <div className="App">
      {/* <IndexPage /> */}
      {/* <Exchange /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <ClientProfile />
    </div>
  );
}

export default App;

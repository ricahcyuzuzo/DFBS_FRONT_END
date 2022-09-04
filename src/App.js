import React from "react";
<<<<<<< HEAD
import "./App.css";
import Exchange from "./pages/exchangePage/Exchange";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import IndexPage from "./pages/Index/IndexPage";
import ClientProfile from "./pages/Client profile/ClientProfile";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      {/* <IndexPage /> */}
      {/* <Exchange /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <ClientProfile /> */}
      <Admin />
    </div>
=======
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedRoute from "./controller/ProtectedRoute";
import UnProtectedRoute from "./controller/UnProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/:id" element={<Facility />} /> */}
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <UnProtectedRoute>
                <Register />
              </UnProtectedRoute>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
>>>>>>> 7134dfc782f17032e37fefa0e8816197207e30f3
  );
}

export default App;

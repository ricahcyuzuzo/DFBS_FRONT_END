import React from "react";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedRoute from "./controller/ProtectedRoute";
import UnProtectedRoute from "./controller/UnProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Exchange from "./components/exchange/Exchange";
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/:id" element={<Login />} /> */}
          <Route exact path="/exchange" element={<Exchange />} />
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
          <Route
            exact
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

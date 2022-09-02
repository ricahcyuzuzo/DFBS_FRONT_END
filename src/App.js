import React from "react";
import "./App.css";
import ExchangeTarif from "./components/HomePage/exchangeTarif/ExchangeTarif";
import Header from "./components/HomePage/header/Header";
import NavbarHome from "./components/HomePage/Navbar/NavbarHome";
import Body from "./components/HomePage/body/Body";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavbarHome />
      <Header />
      <ExchangeTarif />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

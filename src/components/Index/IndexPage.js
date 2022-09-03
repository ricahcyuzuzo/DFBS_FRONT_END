import React from "react";
import ExchangeTarif from "../../components/HomePage/exchangeTarif/ExchangeTarif";
import Header from "../../components/HomePage/header/Header";
import NavbarHome from "../../components/HomePage/Navbar/NavbarHome";
import Body from "../../components/HomePage/body/Body";
import Footer from "../../components/Footer/Footer";
const IndexPage = () => {
  return (
    <>
      <NavbarHome />
      <Header />
      <ExchangeTarif />
      <Body />
      <Footer />
    </>
  );
};

export default IndexPage;

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/comLand/Header";
import Main from "../components/comLand/Main";
import Feature from "../components/comLand/Feature";
import Offer from "../components/comLand/Offer";
import About from "../components/About";

export default function LandPage() {
  return (
    <>
      <Nav />
      <div className="bg-white">
        <Header />
        <Feature />
        <Main />
      </div>
      <Offer />
      <About />
      <Footer />
    </>
  );
}

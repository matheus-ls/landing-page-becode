import React from "react";
import Footer from "../../components/Features/LadingPage/footer/Footer";
import Guide from "../../components/Features/LadingPage/guide/Guide";
import Header from "../../components/Features/LadingPage/header/Header";
import Home from "../../components/Features/LadingPage/home/Home";
import Platforms from "../../components/Features/LadingPage/platforms/Platforms";
import Services from "../../components/Features/LadingPage/services/Services";

const LandingPage = () => {
  return (
    <div>
      <Home />
      <Guide />
      <Services />
      <Platforms />
      <Footer />
    </div>
  );
};

export default LandingPage;

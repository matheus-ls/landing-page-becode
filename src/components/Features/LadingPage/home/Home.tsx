import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import "./home.scss";
import arrow from '../../.././../assets/images/arrow.svg';

function Home() {
  return (
    <div id="home" className="home">
      <img className="arrow" src={arrow} alt="" />
      <Header />
      <Hero />
    </div>
  );
}

export default Home;

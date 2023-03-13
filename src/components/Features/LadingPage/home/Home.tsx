import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import "./home.scss";

function Home() {
  return (
    <div id="home" className="home">
      <Header />
      <Hero />
    </div>
  );
}

export default Home;

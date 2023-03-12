import React from "react";
import images from "./../../../../assets/";
import './location.scss';

function Location() {
  return (
    <div className="location container">
      <h2>Aprenda em qualquer lugar do mundo</h2>
      <img src={images.map} alt="" />
    </div>
  );
}

export default Location;

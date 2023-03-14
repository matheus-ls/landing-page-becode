import React from "react";
import map from "./../../../../assets/images/mapa.svg";
import './location.scss';

function Location() {
  return (
    <div className="location container">
      <h2>Aprenda em qualquer lugar do mundo</h2>
      <img src={map} alt="" />
    </div>
  );
}

export default Location;

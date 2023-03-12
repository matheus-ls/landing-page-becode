import React from "react";
import "./card.scss";

interface Props {
  icon: string;
  title: string;
  content: string;
}

function Card({ icon, content, title }: Props) {
  return (
    <div className="card">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;

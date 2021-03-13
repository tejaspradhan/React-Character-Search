import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.character.id}?set=set1`}
        alt="character"
      />
      <h2>{props.character.name}</h2>
      <p>
        <span className="email">Contact : </span>
        {props.character.email}
      </p>
    </div>
  );
};

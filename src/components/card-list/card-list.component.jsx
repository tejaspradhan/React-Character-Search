import React from "react";
import "./card-list.styles.css";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.characters.map((chars) => (
        <h1 key={chars.id}>{chars.name}</h1>
      ))}
    </div>
  );
};

import React from "react";
import { Outlet, Link } from "react-router-dom";

function Cards(props) {
  //console.log(props);
  fetch("src/images/appartements.json")
    .then((res) => res.json())
    //.then((response) => console.log(response))
    .catch(console.error);

  return (
    <div className="card">
      <Link to="/apparts">
        <img src={props.img} className="app__img" alt="image" />
        <p className="card__text">{props.title}</p>
      </Link>
    </div>
  );
}

export default Cards;

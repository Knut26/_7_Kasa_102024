import React from "react";
import { Outlet, Link } from "react-router-dom";

function Cards(props) {
  fetch("src/images/appartements.json")
    .then((res) => res.json())
    .catch(console.error);

  const flatId = {
    appartId: props.id,
  };
  console.log(flatId);
  return (
    <div className="card">
      <Link to={`/apparts/${props.id}`} state={flatId}>
        <img src={props.img} className="app__img" alt="image" />
        <p className="card__text">{props.title}</p>
      </Link>
    </div>
  );
}

export default Cards;

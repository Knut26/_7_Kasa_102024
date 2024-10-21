import React from "react";
import { Outlet, Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards__container">
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <p className="card__text">Titre de la location</p>
      </div>
      <div className="card">
        <p className="card__text">Titre de la location</p>
      </div>
      <div className="card">
        <p className="card__text">Titre de la location</p>
      </div>
      <div className="card">
        <p className="card__text">Titre de la location</p>
      </div>
      <div className="card">
        <p className="card__text">Titre de la location</p>
      </div>
    </div>
  );
}

export default Cards;

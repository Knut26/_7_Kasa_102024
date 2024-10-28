import React from "react";
import { Outlet, Link } from "react-router-dom";

function Cards() {
  fetch("src/images/appartements.json")
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch(console.error);

  return (
    <div className="cards__container">
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/apparts">
          <p className="card__text">Titre de la location</p>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
/*import React from "react";
import { Outlet, Link } from "react-router-dom";

function Cards() {
  fetch("src/images/appartements.json")
    .then((res) => res.json())
    .then((data) => {
      //.catch(console.error);
      for (let i = 0; i < data.length; i++) {
        const appartsTitle = data[i].title;

        return (
          <div className="cards__container">
            <div className="card">
              <Link to="/apparts">{appartsTitle}</Link>
            </div>
          </div>
        );
      }
    });
}

export default Cards;
 */

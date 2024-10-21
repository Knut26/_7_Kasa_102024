import React from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import Footer from "./footer";

function Error404() {
  return (
    <div>
      <Navbar />
      <div className="error404">
        <div className="error404__number">404</div>
      </div>
      <div className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="backToIndex">
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <div className="error404__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Error404;

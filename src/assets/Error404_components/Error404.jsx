import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../NavbarAndBanner_components/navbar.jsx";

import Footer from "../Footer_components/footer.jsx";

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
      <Footer />
    </div>
  );
}

export default Error404;

import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img
            className="navbar__logo__kasa"
            src="src/images/Logo Kasa.png"
            alt="Logo Kasa"
          />
        </div>
      </NavLink>
      <div className="navbar__access">
        <NavLink to="/">
          <div className="navbar__access__accueil">Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div className="navbar__access__a-propos">A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

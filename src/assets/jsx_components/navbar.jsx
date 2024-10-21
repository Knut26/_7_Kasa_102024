import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          className="navbar__logo__kasa"
          src="src/images/Logo Kasa.png"
          alt="Logo Kasa"
        />
      </div>
      <div className="navbar__access">
        <Link to="/">
          <div className="navbar__access__accueil">Accueil</div>
        </Link>
        <Link to="/about">
          <div className="navbar__access__a-propos">A propos</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

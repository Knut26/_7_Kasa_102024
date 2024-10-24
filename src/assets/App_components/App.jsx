import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App_components/app.scss";

import Banner from "../NavbarAndBanner_components/banner.jsx";

import Navbar from "../NavbarAndBanner_components/navbar.jsx";
import "../NavbarAndBanner_components/navbar.scss";

import Cards from "../Cards_components/cards.jsx";
import "../Cards_components/cards.scss";

import Footer from "../Footer_components/footer.jsx";
import "../Footer_components/footer.scss";

function App() {
  return (
    <div>
      <div className="body">
        <Navbar />
        <Banner />
        <Cards />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

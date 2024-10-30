import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App_components/app.scss";
import Banner from "../NavbarAndBanner_components/banner.jsx";
import Navbar from "../NavbarAndBanner_components/navbar.jsx";
import "../NavbarAndBanner_components/navbar.scss";
import Cards from "../Cards_components/cards.jsx";
import "../Cards_components/cards.scss";
import slides from "../../images/appartements.json";
import Footer from "../Footer_components/footer.jsx";
import "../Footer_components/footer.scss";

function App(props) {
  //console.log(props);
  return (
    <div>
      <div className="body">
        <Navbar />
        <Banner />
        <div className="cards__container">
          {slides.map((slide, index1) => (
            <Cards title={slide.title} img={slide.cover} key={index1} />
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

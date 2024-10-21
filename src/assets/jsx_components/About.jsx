import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about__banner"></div>
      <div className="about__footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;

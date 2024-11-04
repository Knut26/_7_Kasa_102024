import React, { useState, useEffect } from "react";
import Navbar from "../NavbarAndBanner_components/navbar";
import Footer from "../Footer_components/footer";
import Carousel from "../Carousel_components/carousel.jsx";
import "../Carousel_components/carousel.scss";
import "../Apparts_components/apparts.scss";
import slides from "../../images/appartements.json";
import { Accordion, AccordionItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

function Apparts() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("src/images/appartements.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(console.error);
  });

  return (
    <div>
      <Navbar />
      {/* {console.log(images)} */}
      {images.map((item, index) => (
        <div className="apparts__main">
          <div className="apparts__image__container">
            <Carousel data={slides} />
          </div>
          <div className="apparts__title__and__owner">
            <div className="apparts__title__subtitle">
              <h1 className="apparts__title" key={index}>
                {item.title}
              </h1>
              <p className="apparts__subtitle">{item.location}</p>
            </div>
            <div className="apparts__owner__and__rating">
              <div className="apparts__owner_and__picture">
                <h4 className="apparts__owner">{item.host.name}</h4>
                <div className="apparts__owner__picture"></div>
              </div>
              <div className="apparts__owner__and__rating__itself">
                <FontAwesomeIcon
                  icon={faStarSolid}
                  size="xl"
                  className="apparts__owner__rating__stars"
                />
                <FontAwesomeIcon
                  icon={faStarSolid}
                  size="xl"
                  className="apparts__owner__rating__stars"
                />
                <FontAwesomeIcon
                  icon={faStarSolid}
                  size="xl"
                  className="apparts__owner__rating__stars"
                />
                <FontAwesomeIcon
                  icon={faStarSolid}
                  size="xl"
                  className="apparts__owner__rating__stars__grey"
                />
                <FontAwesomeIcon
                  icon={faStarSolid}
                  size="xl"
                  className="apparts__owner__rating__stars__grey"
                />
              </div>
            </div>
          </div>
          <div className="apparts__owner__tag">
            <div className="apparts__owner__tag__itself">{item.tags}</div>
          </div>
          <div className="apparts__accordion">
            <Accordion defaultActiveKey={0} key={index}>
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="apparts__accordion__header">
                  Description
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item className="about__accordion__content">
                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="apparts__accordion">
            <Accordion defaultActiveKey={0} key={index}>
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="apparts__accordion__header">
                  Equipements
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item className="about__accordion__content">
                <Accordion.Body>{item.equipments}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Apparts;

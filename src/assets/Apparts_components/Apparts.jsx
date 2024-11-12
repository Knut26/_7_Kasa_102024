import React, { useState, useEffect } from "react";
import Navbar from "../NavbarAndBanner_components/navbar";
import Footer from "../Footer_components/footer";
import Carousel from "../Carousel_components/carousel.jsx";
import "../Carousel_components/carousel.scss";
import "../Apparts_components/apparts.scss";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import appartments from "../../images/appartements.json";

function Apparts() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [appartment, setAppartment] = useState(null);

  console.log(location);

  const [selectedFlat, setSelectedFlat] = useState();

  useEffect(fetchAppartment, []);

  function fetchAppartment() {
    const flat = appartments.find((flat) => flat.id === id);
    if (!flat) navigate("/404");
    setAppartment(flat);
    console.log("appartement selectionné : ", selectedFlat);
  }

  return appartment ? (
    <div>
      <Navbar />
      {JSON.stringify(selectedFlat)}
      <div className="apparts__main">
        <div className="apparts__image__container">
          {<Carousel images={appartment.pictures} title={appartment.title} />}
        </div>
        <div className="apparts__title__and__owner">
          <div className="apparts__title__subtitle">
            <h1 className="apparts__title">{appartment.title}</h1>
            <p className="apparts__subtitle">{appartment.location}</p>
          </div>
          <div className="apparts__owner__and__rating">
            <div className="apparts__owner_and__picture">
              <h4 className="apparts__owner">{appartment.host.name}</h4>
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
          <div className="apparts__owner__tag__itself">{appartment.tags}</div>
        </div>
        <div className="accordionAll">
          <div className="apparts__accordion">
            <Accordion defaultActiveKey={0}>
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="apparts__accordion__header">
                  Description
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item className="about__accordion__content">
                <Accordion.Body>{appartment.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="apparts__accordion">
            <Accordion defaultActiveKey={0}>
              <Accordion.Item className="accordion-item">
                <Accordion.Header className="apparts__accordion__header">
                  Equipements
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item className="about__accordion__content">
                <Accordion.Body>{appartment.equipments}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <p>error</p>
  );
}

export default Apparts;

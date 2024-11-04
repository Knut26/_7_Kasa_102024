import React, { useState, useEffect } from "react";
import "./carousel.scss";
//import { slides } from "../../images/appartements.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// export const Carousel = ({ data }) => {
const Carousel = ({ images, title }) => {
  // console.log(data);
  const [carousel__slides, carousel__setSlides] = useState(0);

  const nextSlide = () => {
    carousel__setSlides((carousel__slides) =>
      carousel__slides === images.length - 1 ? 0 : carousel__slides + 1
    );
  };

  const prevSlide = () => {
    carousel__setSlides((carousel__slides) =>
      carousel__slides === 0 ? images.length - 1 : carousel__slides - 1
    );
  };

  return (
    <div className="carousel">
      <IoIosArrowBack className="carousel__leftArrow" onClick={prevSlide} />
      {images.map((item, index) => {
        return (
          <img
            key={index}
            className={
              carousel__slides === index
                ? "carousel__slides"
                : "carousel__slides carousel__slides__hidden"
            }
            src={item}
            alt={title}
          />
        );
      })}
      <IoIosArrowForward className="carousel__rightArrow" onClick={nextSlide} />
      <span className="carousel__indicators">
        {carousel__slides + 1} / {images.length}
      </span>
    </div>
  );
};

export default Carousel;

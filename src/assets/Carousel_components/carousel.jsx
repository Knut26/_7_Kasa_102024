import React, { useState } from "react";
import "./carousel.scss";
import { slides } from "../../images/appartements.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Carousel = ({ data }) => {
  console.log(data);
  const [carousel__slides, carousel__setSlides] = useState(0);

  return (
    <div className="carousel">
      <IoIosArrowBack className="carousel__leftArrow" />
      {data.map((item, index) => {
        return (
          <img
            className={
              carousel__slides === index
                ? "carousel__slides"
                : "carousel__slides carousel__slides__hidden"
            }
            src={item.cover}
            alt={item.title}
          />
        );
      })}
      <IoIosArrowForward className="carousel__rightArrow" />
      <span className="carousel__indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={null}
              className="carousel__indicator"
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;

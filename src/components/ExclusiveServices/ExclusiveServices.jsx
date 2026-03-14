import React, { useState } from "react";
import "./ExclusiveServices.css";

const slides = [
  "/services-slider/banner1.jpg",
  "/services-slider/banner2.jpg"
];

const ExclusiveServices = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <section className="exclusive-section">

      <h2 className="exclusive-title">
        Our Exclusive Services
      </h2>

      <div className="exclusive-slider">

        <button className="slider-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="slider-image">
          <img src={slides[index]} alt="service"/>
        </div>

        <button className="slider-btn right" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </section>
  );
};

export default ExclusiveServices;
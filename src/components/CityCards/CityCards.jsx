import React from "react";
import "./CityCards.css";

const cities = [
  {
    name: "Bangalore",
    jobs: "2 Jobs Available",
    img: "/cityimages/bangalore.jpg"
  },
  {
    name: "Hyderabad",
    jobs: "12 Jobs Available",
    img: "/cityimages/hyderabad.jpg"
  },
  {
    name: "Mumbai",
    jobs: "7 Jobs Available",
    img: "/cityimages/mumbai.jpg"
  },
  {
    name: "Kolkata",
    jobs: "2 Jobs Available",
    img: "/cityimages/kolkata.jpg"
  },
  {
    name: "Delhi NCR",
    jobs: "2 Jobs Available",
    img: "/cityimages/delhi.jpg"
  },
  {
    name: "Chennai",
    jobs: "5 Jobs Available",
    img: "/cityimages/chennai.jpg"
  }
];

const CityCards = () => {
  return (
    <section className="city-section">

      <div className="city-container">

        <p className="city-top">TOP CITIES</p>
        <h2 className="city-heading">Explore Jobs by City</h2>

        <div className="city-grid">

          {cities.map((city, index) => (
            <div className="city-card" key={index}>

              <img src={city.img} alt={city.name} />

              <div className="city-overlay">
                <h3>{city.name}</h3>
                <p>{city.jobs}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CityCards;
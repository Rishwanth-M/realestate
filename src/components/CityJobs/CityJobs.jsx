import React from "react";
import "./CityJobs.css";

const cities = [
  { name: "Hyderabad", icon: "/cities/hyderabad.png" },
  { name: "Bangalore", icon: "/cities/bangalore.png" },
  { name: "Mumbai", icon: "/cities/mumbai.png" },
  { name: "Delhi NCR", icon: "/cities/delhi.png" },
  { name: "Chennai", icon: "/cities/chennai.png" },
  { name: "Kolkata", icon: "/cities/kolkata.png" }
];

const CityJobs = () => {
  return (
    <section className="city-section">

      <h2 className="city-title">
        Explore Jobs by City
      </h2>

      <div className="city-grid">
        {cities.map((city, index) => (
          <div
            className="city-card"
            key={index}
            onClick={() => alert(city.name)}
          >
            <img src={city.icon} alt={city.name} />
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CityJobs;
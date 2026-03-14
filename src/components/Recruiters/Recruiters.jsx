import React from "react";
import "./Recruiters.css";

const logos = [
  "/recruiters/alpha.png",
  "/recruiters/alpha.png",
  "/recruiters/alpha.png",
  "/recruiters/alpha.png",
  "/recruiters/alpha.png",
  "/recruiters/alpha.png"
];

const Recruiters = () => {
  return (
    <section className="recruiters-section">

      <h2 className="recruiters-title">
        Our Top Recruiters
      </h2>

      <div className="logo-slider">

        <div className="logo-track">

          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt="company"/>
            </div>
          ))}

          {/* duplicate logos for infinite loop */}
          {logos.map((logo, index) => (
            <div className="logo-item" key={"dup"+index}>
              <img src={logo} alt="company"/>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Recruiters;
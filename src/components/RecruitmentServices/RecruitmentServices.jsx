import React from "react";
import "./RecruitmentServices.css";

const services = [
  {
    title: "Ai Talent Pool",
    desc: "Procurement of talent as per market Predictions.",
    img: "/services/ai-talent.jpg"
  },
  {
    title: "AI Recruit",
    desc: "real time Ai Recruitor to Increase Accuracy for hire.",
    img: "/services/ai-recruit.jpg"
  },
  {
    title: "Ai Jobs Search",
    desc: "For better enhanced recruitment services.",
    img: "/services/ai-search.jpg"
  }
];

const RecruitmentServices = () => {
  return (
    <section className="services-section">

      <div className="services-container">

        <h2 className="services-title">Our Recruitment Services</h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <img src={service.img} alt={service.title} />

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <button className="service-btn">
                  More Info
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default RecruitmentServices;
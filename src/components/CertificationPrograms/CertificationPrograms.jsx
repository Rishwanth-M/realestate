import React from "react";
import "./CertificationPrograms.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const programs = [
  {
    title: "Post Graduate Certificate in Machine Learning",
    inst: "IITB",
    duration: "8 Months",
    img: "/certificates/cert1.jpg"
  },
  {
    title: "Advanced Certificate In Digital Marketing",
    inst: "MICA",
    duration: "31 Weeks",
    img: "/certificates/cert2.jpg"
  },
  {
    title: "Post Graduate Certificate in Data Science & AI",
    inst: "IITB",
    duration: "8 Months",
    img: "/certificates/cert3.jpg"
  },
  {
    title: "AI & Machine Learning Program",
    inst: "IITB",
    duration: "6 Months",
    img: "/certificates/cert4.jpg"
  }
];

const CertificationPrograms = () => {
  return (
    <section className="cert-section">

      <h2 className="cert-title">
        Real Estate Certifications Programs
      </h2>

      <div className="cert-slider-wrapper">

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          loop={true}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}

          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >

          {programs.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="cert-card">

                <img src={item.img} alt={item.title} />

                <div className="cert-content">

                  <h3>{item.title}</h3>

                  <p className="inst">{item.inst}</p>

                  <ul>
                    <li>{item.duration}</li>
                    <li>Industry Projects</li>
                  </ul>

                  <div className="cert-buttons">

                    <button className="btn-outline">
                      View Syllabus
                    </button>

                    <button className="btn-primary">
                      Know More
                    </button>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default CertificationPrograms;

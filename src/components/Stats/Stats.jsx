import React from "react";
import "./Stats.css";

const stats = [
  { number: "1930+", label: "Candidates" },
  { number: "1660+", label: "Jobs Posted" },
  { number: "1120+", label: "Jobs Filled" },
  { number: "400+", label: "Companies" }
];

const Stats = () => {
  return (
    <section className="stats-section">

      <h2 className="stats-title">Real Estate Jobs Stats</h2>

      <p className="stats-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluta in
        laboriosam ipsum, magnam ullam possimus reiciendis, architecto dolore
        excepturi odit neque temporibus reprehenderit magni labore assumenda
        ea justo nihil sit.
      </p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-box" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Stats;
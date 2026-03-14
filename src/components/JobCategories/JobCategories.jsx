import React from "react";
import "./JobCategories.css";

const jobs = [
  {
    title: "Tele Caller",
    subtitle: "Engage & Convert",
    icon: "/icons/telecaller.png"
  },
  {
    title: "Channel Partners",
    subtitle: "Collaborate & Earn",
    icon: "/icons/channel.png"
  },
  {
    title: "Sales",
    subtitle: "Drive Property Deals",
    icon: "/icons/sales.png"
  },
  {
    title: "CRM Executive",
    subtitle: "Manage Client Relations",
    icon: "/icons/crm.png"
  },
  {
    title: "Digital Marketing",
    subtitle: "Promote & Convert",
    icon: "/icons/digital.png"
  },
  {
    title: "HR & Operations",
    subtitle: "People & Process",
    icon: "/icons/hr.png"
  },
  {
    title: "Accounts & Auditing",
    subtitle: "Ensure Financial Clarity",
    icon: "/icons/accounts.png"
  },
  {
    title: "Legal",
    subtitle: "Safeguard Deals & Compliance",
    icon: "/icons/legal.png"
  },
  {
    title: "Architects",
    subtitle: "Design Smart & Aesthetic Spaces",
    icon: "/icons/architect.png"
  },
  {
    title: "Web Development",
    subtitle: "Build Real Estate Tech",
    icon: "/icons/web.png"
  }
];

const JobCategories = () => {
  return (
    <section className="jobs-section">

      <h2 className="jobs-title">
        Click to unlock your <b>Dream Real Estate Jobs</b> below
      </h2>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div
            className="job-card"
            key={index}
            onClick={() => alert(job.title)}
          >
            <img src={job.icon} alt={job.title} />
            <h3>{job.title}</h3>
            <p>{job.subtitle}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default JobCategories;
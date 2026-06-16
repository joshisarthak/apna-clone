import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="job-card" onClick={() => navigate(`/job/${job.id}`)}>
      <div className="jc-header">
        <div className="jc-logo" style={{ background: job.logoColor }}>
          {job.logo}
        </div>
        <div className="jc-meta">
          <h3 className="jc-title">{job.title}</h3>
          <p className="jc-company">{job.company}</p>
        </div>
      </div>

      <div className="jc-tags">
        <span className="tag">💰 {job.salary}</span>
        <span className="tag">📍 {job.location}</span>
        <span className="tag">⏳ {job.experience}</span>
        <span className="tag">💼 {job.jobType}</span>
      </div>

      <div className="jc-skills">
        {job.skills.slice(0, 3).map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
        {job.skills.length > 3 && (
          <span className="skill-tag muted">+{job.skills.length - 3} more</span>
        )}
      </div>

      <div className="jc-footer">
        <span className="jc-posted">{job.postedDays}d ago · {job.applicants} applicants</span>
        <button className="jc-apply-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./JobDetailsPage.css";

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const topApplyRef = useRef(null);

  const job = jobs.find((j) => j.id === id);
  const related = jobs.filter((j) => j.id !== id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (topApplyRef.current) observer.observe(topApplyRef.current);
    return () => observer.disconnect();
  }, []);

  if (!job) {
    return (
      <div className="not-found">
        <h2>Job not found</h2>
        <button onClick={() => navigate("/")}>Back to Jobs</button>
      </div>
    );
  }

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => alert("🎉 Application submitted successfully! The recruiter will contact you soon."), 100);
  };

  return (
    <div className="jd-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="breadcrumb-inner">
          <span className="bc-link" onClick={() => navigate("/")}>Home</span>
          <span className="bc-sep">›</span>
          <span className="bc-link" onClick={() => navigate("/")}>Jobs</span>
          <span className="bc-sep">›</span>
          <span className="bc-current">{job.title}</span>
        </div>
      </div>

      <div className="jd-layout">
        {/* LEFT: Main Content */}
        <div className="jd-main">

          {/* Job Header Card */}
          <div className="jd-header-card">
            <div className="jd-company-row">
              <div className="jd-logo" style={{ background: job.logoColor }}>
                {job.logo}
              </div>
              <div className="jd-company-info">
                <h1 className="jd-title">{job.title}</h1>
                <p className="jd-company">{job.company}</p>
                <div className="jd-location-row">
                  <span>📍 {job.location}</span>
                  <span>· {job.postedDays} days ago</span>
                  <span>· {job.applicants} applicants</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="jd-highlights">
              {job.highlights.map((h) => (
                <div className="highlight-item" key={h.label}>
                  <span className="hi-icon">{h.icon}</span>
                  <div>
                    <div className="hi-label">{h.label}</div>
                    <div className="hi-value">{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Salary & Experience */}
            <div className="jd-salary-row">
              <div className="salary-box">
                <span className="sb-label">💰 Salary</span>
                <span className="sb-value">{job.salary}</span>
              </div>
              <div className="salary-box">
                <span className="sb-label">📅 Experience</span>
                <span className="sb-value">{job.experience}</span>
              </div>
              <div className="salary-box">
                <span className="sb-label">🪑 Openings</span>
                <span className="sb-value">{job.openings} Positions</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="jd-actions" ref={topApplyRef}>
              <button
                className={`apply-btn ${applied ? "applied" : ""}`}
                onClick={handleApply}
                disabled={applied}
              >
                {applied ? "✅ Applied" : "Apply Now"}
              </button>
              <button
                className={`save-btn ${saved ? "saved" : ""}`}
                onClick={() => setSaved(!saved)}
              >
                {saved ? "❤️ Saved" : "🤍 Save Job"}
              </button>
              <button className="share-btn" onClick={() => navigator.clipboard?.writeText(window.location.href).then(() => alert("Link copied!"))}>
                🔗 Share
              </button>
            </div>
          </div>

          {/* Job Description */}
          <div className="jd-section">
            <h2 className="section-title">Job Description</h2>
            <div className="jd-description">
              {job.description.split("\n").map((line, i) => (
                <p key={i} className={line.startsWith("•") ? "bullet-line" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="jd-section">
            <h2 className="section-title">Required Skills</h2>
            <div className="skills-grid">
              {job.skills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </div>

          {/* Other Requirements */}
          <div className="jd-section">
            <h2 className="section-title">Other Requirements</h2>
            <div className="req-table">
              <div className="req-row">
                <span className="req-label">Education</span>
                <span className="req-value">{job.education}</span>
              </div>
              <div className="req-row">
                <span className="req-label">English Level</span>
                <span className="req-value">{job.englishLevel}</span>
              </div>
              <div className="req-row">
                <span className="req-label">Gender</span>
                <span className="req-value">{job.gender}</span>
              </div>
              <div className="req-row">
                <span className="req-label">Interview Mode</span>
                <span className="req-value">{job.interviewMode}</span>
              </div>
              <div className="req-row">
                <span className="req-label">Interview Address</span>
                <span className="req-value">{job.interviewAddress}</span>
              </div>
            </div>
          </div>

          {/* Perks */}
          <div className="jd-section">
            <h2 className="section-title">Perks & Benefits</h2>
            <div className="perks-grid">
              {job.perks.map((p) => (
                <span key={p} className="perk-badge">✅ {p}</span>
              ))}
            </div>
          </div>

          {/* Interview Details */}
          <div className="jd-section interview-section">
            <h2 className="section-title">Interview & Contact</h2>
            <div className="interview-box">
              <div className="ib-row">
                <span>👤</span>
                <div>
                  <div className="ib-label">Contact Person</div>
                  <div className="ib-value">{job.contactName}</div>
                </div>
              </div>
              <div className="ib-row">
                <span>📞</span>
                <div>
                  <div className="ib-label">Phone</div>
                  <div className="ib-value">{job.contactPhone}</div>
                </div>
              </div>
              <div className="ib-row">
                <span>🏢</span>
                <div>
                  <div className="ib-label">Mode</div>
                  <div className="ib-value">{job.interviewMode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="jd-sidebar">
          {/* Company Info */}
          <div className="sidebar-card">
            <h3 className="sc-title">About the Company</h3>
            <div className="sc-company-header">
              <div className="jd-logo-sm" style={{ background: job.logoColor }}>
                {job.logo}
              </div>
              <div>
                <p className="sc-company-name">{job.company}</p>
                <p className="sc-industry">{job.industry}</p>
              </div>
            </div>
            <p className="sc-about">{job.about}</p>
            <div className="sc-meta">
              <div className="sc-meta-item">
                <span className="sc-meta-label">Company Size</span>
                <span className="sc-meta-value">{job.companySize}</span>
              </div>
              <div className="sc-meta-item">
                <span className="sc-meta-label">Industry</span>
                <span className="sc-meta-value">{job.industry}</span>
              </div>
            </div>
            <a href={job.website} target="_blank" rel="noreferrer" className="sc-website-btn">
              🌐 Visit Website
            </a>
          </div>

          {/* Job Overview Sidebar */}
          <div className="sidebar-card">
            <h3 className="sc-title">Job Overview</h3>
            <div className="overview-list">
              <div className="ov-item"><span>📋</span><div><div className="ov-label">Job Type</div><div className="ov-value">{job.jobType}</div></div></div>
              <div className="ov-item"><span>🏠</span><div><div className="ov-label">Work Mode</div><div className="ov-value">{job.workMode}</div></div></div>
              <div className="ov-item"><span>💰</span><div><div className="ov-label">Salary</div><div className="ov-value">{job.salary}</div></div></div>
              <div className="ov-item"><span>📅</span><div><div className="ov-label">Experience</div><div className="ov-value">{job.experience}</div></div></div>
              <div className="ov-item"><span>🎓</span><div><div className="ov-label">Education</div><div className="ov-value">{job.education}</div></div></div>
              <div className="ov-item"><span>🪑</span><div><div className="ov-label">Openings</div><div className="ov-value">{job.openings}</div></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      {related.length > 0 && (
        <div className="related-section">
          <div className="related-inner">
            <h2 className="section-title">Similar Jobs You May Like</h2>
            <div className="related-grid">
              {related.map((j) => (
                <JobCard key={j.id} job={j} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Apply Bar */}
      {showStickyBar && (
        <div className="sticky-bar">
          <div className="sticky-inner">
            <div className="sticky-job-info">
              <div className="jd-logo-sm" style={{ background: job.logoColor }}>{job.logo}</div>
              <div>
                <p className="sticky-title">{job.title}</p>
                <p className="sticky-company">{job.company} · {job.location}</p>
              </div>
            </div>
            <div className="sticky-actions">
              <button
                className={`apply-btn ${applied ? "applied" : ""}`}
                onClick={handleApply}
                disabled={applied}
              >
                {applied ? "✅ Applied" : "Apply Now"}
              </button>
              <button
                className={`save-btn ${saved ? "saved" : ""}`}
                onClick={() => setSaved(!saved)}
              >
                {saved ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;

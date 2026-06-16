import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "./JobListingPage.css";

const JobListingPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const filtered = jobs.filter((j) => {
    const q = search.toLowerCase();
    const loc = location.toLowerCase();
    return (
      (!q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) ||
        j.skills.some((s) => s.toLowerCase().includes(q))) &&
      (!loc || j.location.toLowerCase().includes(loc))
    );
  });

  return (
    <div className="listing-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Find Your Dream Job</h1>
          <p>Connect with top employers and discover thousands of opportunities</p>

          <div className="search-bar">
            <div className="search-field">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Job title, skills or company"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="divider" />
            <div className="search-field">
              <span className="search-icon">📍</span>
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="search-btn">Search Jobs</button>
          </div>

          <div className="hero-stats">
            <span>🏢 500+ Companies</span>
            <span>💼 10,000+ Jobs</span>
            <span>👤 50 Lakh+ Job Seekers</span>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="listings-section">
        <div className="listings-inner">
          <div className="listings-header">
            <h2>
              {filtered.length} Job{filtered.length !== 1 ? "s" : ""} Found
              {search && ` for "${search}"`}
            </h2>
            <span className="sort-label">Sort by: <strong>Most Recent</strong></span>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <p>😕 No jobs found. Try different keywords.</p>
              <button onClick={() => { setSearch(""); setLocation(""); }}>Clear Filters</button>
            </div>
          ) : (
            <div className="job-grid">
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobListingPage;

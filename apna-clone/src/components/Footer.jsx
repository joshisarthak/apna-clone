import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <span className="footer-logo">
          <span style={{ color: "#5b2d8e" }}>apna</span>
          <span style={{ color: "#ff6b35" }}>.co</span>
        </span>
        <p>India's #1 Professional Networking & Job Platform</p>
      </div>

      <div className="footer-cols">
        <div className="footer-col">
          <h4>Job Seekers</h4>
          <a href="#!">Browse Jobs</a>
          <a href="#!">Career Advice</a>
          <a href="#!">Resume Builder</a>
          <a href="#!">Salary Calculator</a>
        </div>
        <div className="footer-col">
          <h4>Employers</h4>
          <a href="#!">Post a Job</a>
          <a href="#!">Search Resumes</a>
          <a href="#!">Hiring Solutions</a>
          <a href="#!">Pricing</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#!">About Us</a>
          <a href="#!">Blog</a>
          <a href="#!">Press</a>
          <a href="#!">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#!">Help Center</a>
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
          <a href="#!">Cookie Policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Apna.co Clone. All rights reserved. Built for educational purposes.</p>
    </div>
  </footer>
);

export default Footer;

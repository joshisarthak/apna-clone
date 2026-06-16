import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-apna">apna</span>
          <span className="logo-dot">.co</span>
        </Link>

        {/* Nav Links (desktop) */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">Find Jobs</Link>
          <a href="#!" className="nav-link">Companies</a>
          <a href="#!" className="nav-link">Resources</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button className="btn-login" onClick={() => alert("Login coming soon!")}>Log In</button>
          <button className="btn-register" onClick={() => alert("Register coming soon!")}>Register</button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Find Jobs</Link>
          <a href="#!" onClick={() => setMenuOpen(false)}>Companies</a>
          <a href="#!" onClick={() => setMenuOpen(false)}>Resources</a>
          <div className="mobile-actions">
            <button className="btn-login">Log In</button>
            <button className="btn-register">Register</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

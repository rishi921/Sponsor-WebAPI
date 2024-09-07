import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="navbar-brand d-flex align-items-center">
        <a href="/" className="navbar-brand">
          <img src="https://static.vecteezy.com/system/resources/previews/020/091/311/non_2x/sponsor-rubber-stamp-red-sponsor-rubber-grunge-stamp-seal-illustration-free-vector.jpg" alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Sponsorships Site</span>
        </a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link to="/home" className="nav-link nav-box">Home</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/match-details" className="nav-link nav-box">Match Details</Link>
          </li>
          <li className="nav-item">
            <Link to="/sponsor-details" className="nav-link nav-box">Sponsor Details</Link>
          </li>
          <li className="nav-item">
            <Link to="/sponsor-matches" className="nav-link nav-box">Sponsor Matches</Link>
          </li>
          <li className="nav-item">
            <Link to="/form" className="nav-link nav-box">Form</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

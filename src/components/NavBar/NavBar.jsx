import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light mb-2 mb-lg-0 nav-bar-container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="RentCars Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/become-a-renter">Become a Renter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rental-deals">Rental Deals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/why-choose-us">Why Choose Us</Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-primary my-2 mx-2 my-sm-0" type="button">Sign In</button>
            <button className="btn btn-primary my-2 my-sm-0 ms-2" type="button">Sign Up</button>
          </div>
        </div>
      </nav>
    </>

  );
}
import React from 'react';
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={`${styles.FooterSec} text-white py-4`} >
      <div className="container">
        <div className="row px-3">
          <div className="col-md-3">
            <h5 className="mb-3">RENTCARS</h5>
            <p>
              25566 Hc 1, Glenallen,<br />
              Alaska, 99588, USA
            </p>
            <p>+603 4784 273 12</p>
            <p>rentcars@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Our Products</h5>
            <ul className="list-unstyled">
              <li>Career</li>
              <li>Car</li>
              <li>Packages</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li>Download</li>
              <li>Help Centre</li>
              <li>Guides</li>
              <li>Partner Network</li>
              <li>Cruises</li>
              <li>Developer</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">About Rentcars</h5>
            <ul className="list-unstyled">
              <li>Why choose us</li>
              <li>Our Story</li>
              <li>Investor Relations</li>
              <li>Press Center</li>
              <li>Advertise</li>
            </ul>

          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Follow Us</h5>
            <div className="mt-3">
              <i className="me-3 fab fa-facebook-f"></i>
              <i className="me-3 fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>

          </div>
          
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col text-center">
          <p className="mb-0">&copy; 2023 Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer >
  );
}

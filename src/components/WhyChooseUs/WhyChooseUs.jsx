import React from 'react';
import Audi1 from "../../assets/Audi1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faClock, faShieldAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
    return (
        <section className="sec-5 container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src={Audi1} alt="Audi" className="img-fluid" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="mb-5">
              <button className="popular-rental-deals-btn rounded-2">WHY CHOOSE US</button>
              <h4>We offer the best experience with our rental deals</h4>
            </div>
            <div className="card-custom">
              <div className="icon-custom">
                <FontAwesomeIcon icon={faTag} />
              </div>
              <article>
                <h6>Best price guaranteed</h6>
                <small>Find a lower price? We’ll refund you 100% of the difference.</small>
              </article>
            </div>
            <div className="card-custom">
              <div className="icon-custom">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <article>
                <h6>24 hour car delivery</h6>
                <small>Book your car anytime and we will deliver it directly to you.</small>
              </article>
            </div>
            <div className="card-custom">
              <div className="icon-custom">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <article>
                <h6>Best price guaranteed</h6>
                <small>Find a lower price? We’ll refund you 100% of the difference.</small>
              </article>
            </div>
            <div className="card-custom">
              <div className="icon-custom">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <article>
                <h6>24/7 technical support</h6>
                <small>Have a question? Contact Rentcars support any time when you have problem.</small>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}

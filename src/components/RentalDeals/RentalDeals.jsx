import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import audi from "../../assets/audi.png"
import nissan from "../../assets/nissan.png"
import jaguar from "../../assets/jaguar.png"
import volvo from "../../assets/volvo.png"
export default function RentalDeals() {
    return (
        <div className="container text-center my-5">
            <h2>Most popular cars rental deals</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
                            <h5 className="card-title">Choose location</h5>
                            <p className="card-text">Choose your and find your best car</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-car fa-3x mb-3"></i>
                            <h5 className="card-title">Pick-up date</h5>
                            <p className="card-text">Select your pick up date and time to book your car</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <i className="fas fa-check-circle fa-3x mb-3"></i>
                            <h5 className="card-title">Book your car</h5>
                            <p className="card-text">Book your car and we will deliver it directly to you</p>
                        </div>
                    </div>
                </div>
            </div>
         
            <section className="container px-4 d-flex justify-content-around flex-wrap my-5">
                <img src={jaguar} alt="Jaguar" className="mx-2" />
                <img src={nissan} alt="Nissan" className="mx-2" />
                <img src={volvo} alt="Volvo" className="mx-2" />
                <img src={audi} alt="Audi" className="mx-2" />
            </section>

        </div>
    );
}

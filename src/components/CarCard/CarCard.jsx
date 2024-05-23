import React from 'react'
import car from '../../assets/car3.png';
import star from '../../assets/star.png';
import snow from '../../assets/snow.png';
import Frame from '../../assets/Frame.png';
import user from '../../assets/user.png';
import arrowright from '../../assets/arrow-right.png';
import { Link } from 'react-router-dom';

export default function CarCard(props) {
    let { cars } = props
    return (
        <>
            <div className="card col-md-6 mx-2  my-2" style={{ width: '18rem' }}>
                <img src={car} className="d-flex justify-content-center m-4" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cars.make} </h5>
                 
                    <div className="d-flex align-items-baseline">
                        <img src={star} alt="" />
                        <h6 className="mx-1">4.6</h6>
                        <small className="text-muted">(1345 reviews)</small>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between flex-column">
                            <p className="card-text text-nowrap d-flex align-items-start">
                                <img src={user} alt="" />
                                <small className="text-muted"> {cars.owners} Passenger</small>
                            </p>
                            <p className="card-text text-nowrap d-flex align-items-start">
                                <i className="fa-solid fa-calendar-days me-2"></i>
                                <small className="text-muted"> {cars.year}</small>
                            </p>
                        </div>
                        <div className="d-flex justify-content-between flex-column">
                            <p className="card-text text-nowrap d-flex align-items-start">
                                {/* <FontAwesomeIcon icon="fa-regular fa-snowflake" /> */}
                                <img src={snow} alt="" />
                                <small className="text-muted"> Air conditioning</small>
                            </p>
                            <p className="card-text text-nowrap d-flex align-items-start me-3">
                                <img src={Frame} alt="" />
                                <small className="text-muted"> Automatic</small>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p className="text-muted">Price</p>
                        <div className="d-flex">
                            <h6>${cars.price}</h6>
                            <p className="text-muted"> / day</p>
                        </div>
                    </div>
                    <div>
                        {/* <button type="button" className="btn btn-primary w-100"  onClick={() => props.onViewDetails(cars)}>
                            View details
                            <img src={arrowright} className="ms-2" alt="" />
                        </button> */}

                        <Link to={`/car/${cars.id}` } className="btn btn-primary w-100"> 
                            View details
                            <img src={arrowright} className="ms-2" alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        
        </>
    )
}


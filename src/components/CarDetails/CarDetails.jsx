import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Audi1 from "../../assets/Audi1.png";

export default function CarDetails() {
  let { id } = useParams();
  let [carObj, setCarObj] = useState({});

  useEffect(() => {
    let getCarDetails = async () => {
      try {
        let response = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`);
        setCarObj(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };
    getCarDetails();
  }, [id]); // Add id to re-fetch data when id changes

  return (
    // <div>
    //   <h2>Car Details</h2>
    //   <p>ID: {carObj.id}</p>
    //   <p>Make: {carObj.make}</p>
    // </div>
    <section className="row my-5 py-5 sec-5">
      <div className="d-flex align-items-center col-lg-6">
        <img src={Audi1} alt="" className="w-100" />
      </div>
      <div className="col-lg-6">
        <div>
          <button className="popular-rental-deals-btn rounded-2">WHY CHOOSE US</button>
          <h4 className="my-3">We offer the best experience with our rental deals</h4>
        </div>
        <p> {carObj.make}</p>
        <p className="card-text text-nowrap d-flex align-items-start">
          <small className="text-muted"> 2 Passanger</small>
        </p>
        <p className="card-text text-nowrap d-flex align-items-start">

          <small className="text-muted">  horsepower : {carObj.horsepower}  </small>
        </p>
        <p className="card-text text-nowrap d-flex align-items-start">

          <small className="text-muted"> Air conditioning </small>
        </p>
        <p className="card-text text-nowrap d-flex align-items-start">
          <small className="text-muted"> CVT </small>
        </p>
        <p className="card-text text-nowrap d-flex align-items-start">
          <small className="text-muted"> Doors</small>
        </p>
      </div>
    </section>
  );
}


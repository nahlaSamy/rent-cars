import React, { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';
import axios from 'axios';
import "./PopularCars.module.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom';

export default function PopularCars() {
    let [cars, setCars] = useState([]);

    let getCars = async () => {
        let cars = await axios.get('https://freetestapi.com/api/v1/cars?limit=4')
        setCars(cars.data);
    }
    let handleSearch = (cars) => {
         setCars(cars);
         // SN: handle search if big no use pagination aw show atleast 4/5
    }
  
    
    useEffect(() => {
        getCars();
        return () => {
        }
    }, []);

    return (
        <>
            <section className='container sec2 py-3'>
                <div className="row " >
                    {/* <div className="col"> */}
                        <SearchBar handleSearch={handleSearch} />
                    {/* </div> */}
                </div>
                {/* <h2 className="text-center">Search Here</h2> */}
                <div className="d-flex justify-content-center m-4">
                    <button className="popular-rental-deals-btn rounded-2">POPULAR RENTAL DEALS</button>
                </div>
                <h1 className="text-center m-4">Most popular cars rental deals</h1>

                <div className="row mx-3 px-2">
                    {cars.map((car) =>
                        <CarCard key={car.id} cars={car} />
                    )}
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Link to="/allCars" className="btn btn-outline-secondary px-5">
                        Show all vehicles <i className="px-2 fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}

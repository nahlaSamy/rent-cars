
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import CarCard from '../CarCard/CarCard';
import Pagination from '../Pagination/Pagination'; // Import the Pagination component

export default function AllCars() {
  let [cars, setCars] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let carsPerPage = 8; 

  let getCars = async () => {
    setLoading(true);
    try {
      let response = await axios.get('https://freetestapi.com/api/v1/cars');
      // console.log(response.data);
      setCars(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  let handleSearch = (cars) => {
    console.log(cars);
     setCars(cars);
}

  useEffect(() => {
    getCars();
  }, []);

  
  let indexOfLastCar = currentPage * carsPerPage;
  let indexOfFirstCar = indexOfLastCar - carsPerPage;
  let currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container py-4">
      <SearchBar handleSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <div className="row mx-3 px-2">
        {currentCars.map((car) => (
          <CarCard key={car.id} cars={car} />
        ))}
      </div>
      <Pagination 
        carsPerPage={carsPerPage} 
        totalCars={cars.length} 
        paginate={paginate} 
      />
    </div>
  );
}



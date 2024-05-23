import React, { useState } from 'react';
// import CarCard from '../Car/CarCard';

const SearchBar = (props) => {
  // console.log("🚀 ~ SearchBar ~ props:", props)
  let [query, setQuery] = useState('');
  let [loading, setLoading] = useState(false);
  // let [searchResults, setSearchResults] = useState([]);
  // let [searchPerformed, setSearchPerformed] = useState(false); 

  let handleChange = (event) => {
    setQuery(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let response = await fetch(`https://freetestapi.com/api/v1/cars?search=${query}`);
      if (response.ok) {
        let data = await response.json();
        // console.log("🚀 ~ handleSubmit ~ data:", data)
        props.handleSearch(data)
        // setSearchResults(data);
        // setSearchPerformed(true);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="form-control"
            placeholder="Search by name ..."
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      {/* to show data from search in cards  */}
      {/* {loading && <p>Loading...</p>} */}
      {/* {searchPerformed && searchResults.length === 0 && <p>No results found.</p>}
      {searchResults.length > 0 && (
        <div className="row">
          {searchResults.map((car) => (
            <div key={car.id} className="col-md-4 mb-4">
              <CarCard car={car} />
            </div>
          ))}
        </div> */}
      {/* )} */}
    </div>
  );
};

export default SearchBar;

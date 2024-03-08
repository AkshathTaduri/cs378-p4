import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({onSearchResult}) => {
  const [inputValue, SetInputValue] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleInputChange = (event) => {
    SetInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    if (inputValue.trim() !== '') {
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${inputValue}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${process.env.REACT_APP_API_KEY}`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.resultsCount !== 1) {
          setAlertMessage("Please input a valid ticker")
        }
        else {
          setAlertMessage(null)
          onSearchResult(data)
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }
    else {
      console.log("Please enter a search query.")
    }
  }
  return (
    <div className='search'>
      <p className='heading'>Search Tickers: </p>
      <div className='search-container'>
        <input
          className='search-bar'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ex. GOOG"
        />
        <button className='search-button'>
          {/* <img className='search-icon' src="https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-14.jpg" onClick={handleSearch}/> */}
        </button>
      </div>
      

      {alertMessage && <p>{alertMessage}</p>}
    </div>
  )
};

export default SearchBar;

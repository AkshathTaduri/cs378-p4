import React, { useState } from 'react';

const SearchBar = ({onSearchResult}) => {
  const [inputValue, SetInputValue] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);

  const handleInputChange = (event) => {
    SetInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    if (inputValue.trim() !== '') {
      const apiUrl = 'https://api.polygon.io/v2/aggs/ticker/' + inputValue + '/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=4CmvT3OdyX09gNHvQ_6gX_yHCC3vQ1k1'

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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ex. GOOG"
      />
      <button>
        <img src="../images/search-interface-symbol.png" onClick={handleSearch}/>
      </button>

      {alertMessage && <p>{alertMessage}</p>}
    </div>
  )
};

export default SearchBar;

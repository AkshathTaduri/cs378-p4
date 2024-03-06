import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      console.log("eher")
      const response = await fetch('http://127.0.0.1:8000/search/AAPL');
      console.log("here");
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();

      console.log(data)

    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('An error occurred while fetching data.');
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {alertMessage && <div>{alertMessage}</div>}

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.symbol}>{result.symbol} - {result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

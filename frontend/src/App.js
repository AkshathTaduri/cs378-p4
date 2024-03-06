import React, { useState } from 'react';
import SearchBar from './Components/SearchBar.js';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // You can implement your search logic here.
    // For demonstration purposes, let's just update the state with the search term.
    setSearchResults([searchTerm]);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {searchResults.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar.js';
import TickerList from './Components/TickerList.js'
import Data from './Components/Data.js'
import LineGraph from './Components/LineGraph.js';

const App = () => {
  // require('dotenv').config()
  const [responseData, setResponseData] = useState(null)
  const [tickerSet, setTickerSet] = useState(["GOOG", "AAPL", "TSLA"])

  useEffect(() => {
    if (tickerSet.length > 0) {
      const ticker = tickerSet[0];
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${process.env.REACT_APP_API_KEY}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setResponseData(data);
        })
        .catch((error) => {
          console.error("Error fetching initial data:", error);
        });
    }
  }, [tickerSet]);

  const handleSearchResult = (data) => {
    setResponseData(data)
  }
  
  return (
    <div>
      <SearchBar onSearchResult={handleSearchResult}></SearchBar>
      <TickerList tickers={tickerSet} onSearchResult={handleSearchResult}></TickerList>
      {responseData && <LineGraph data={responseData.results}/>}
      {responseData && <Data responseData={responseData}/>}
      
    </div>

  );
};

export default App;

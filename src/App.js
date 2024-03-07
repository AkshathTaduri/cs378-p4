import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar.js';
import TickerList from './Components/TickerList.js'
import Data from './Components/Data.js'
import FavoriteButton from './Components/FavoriteButton.js';

const App = () => {
  const [responseData, setResponseData] = useState(null)
  const [tickerSet, setTickerSet] = useState(["GOOG", "AAPL", "TSLA"])

  useEffect(() => {
    if (tickerSet.length > 0) {
      const ticker = tickerSet[0];
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=4CmvT3OdyX09gNHvQ_6gX_yHCC3vQ1k1`;

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

  const addToFavs = (newTicker) => {
    setTickerSet((prevTickers) => [...prevTickers, newTicker]);
  };

  const isTickerInSet = (ticker) => tickerSet.includes(ticker);

  return (
    <div>
      <SearchBar onSearchResult={handleSearchResult}></SearchBar>
      <TickerList tickers={tickerSet} onSearchResult={handleSearchResult}></TickerList>
      {responseData && <Data responseData={responseData}/>}
      {responseData && !isTickerInSet(responseData.ticker) && (
        <FavoriteButton addToFavs={addToFavs} ticker={responseData.ticker} />
      )}
    </div>

  );
};

export default App;

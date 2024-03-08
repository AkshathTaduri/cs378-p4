// HorizontalButtonList.js
import React, { useState } from 'react';
import './TickerList.css';

const HorizontalButtonList = ({ tickers, onSearchResult }) => {
  const [selectedTicker, setSelectedTicker] = useState(null);

  const handleButtonClick = (ticker) => {
    setSelectedTicker(ticker);

    if (ticker) {
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=${process.env.REACT_APP_API_KEY}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          onSearchResult(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.log("Please enter a search query.");
    }
  };

  return tickers.length > 0 ? (
    <div className='container'>
      <p className='ticker-text'>Favorite Tickers: </p>
      <div className='ticker-list'>
        {tickers.map((ticker) => (
          <button
            className={`ticker-button ${selectedTicker === ticker ? 'selected' : ''}`}
            key={ticker}
            onClick={() => handleButtonClick(ticker)}
          >
            {ticker}
          </button>
        ))}
      </div>
    </div>
  ) : <div></div>;
};

export default HorizontalButtonList;

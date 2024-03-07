import React, { useState } from 'react';

const HorizontalButtonList = ({ tickers, onSearchResult }) => {
  const [selectedTicker, setSelectedTicker] = useState(null);

  const handleButtonClick = (ticker) => {
    setSelectedTicker(ticker);

    if (ticker) {
      const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=4CmvT3OdyX09gNHvQ_6gX_yHCC3vQ1k1`;

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

  return (
    <div>
        <p>Favorite Tickers: </p>
        <div style={{ display: 'flex', gap: '10px' }}>
        {tickers.map((ticker) => (
            <button
            key={ticker}
            onClick={() => handleButtonClick(ticker)}
            style={{
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: selectedTicker === ticker ? 'blue' : 'gray',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
            }}
            >
            {ticker}
            </button>
        ))}
        </div>
    </div>
  );
};

export default HorizontalButtonList;

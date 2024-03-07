import React from 'react';

const Data = ({ responseData }) => {
    if (!responseData || !responseData.results) {
        return <p>No data available</p>;
      }
  return (
    <div>
      <p>Ticker: {responseData.ticker}</p>
      {responseData.results.map((result, index) => (
        <div key={index}>
          <p>Volume: {result.v}</p>
          <p>Volume Weighted Average: {result.vw}</p>
          <p>Open: {result.o}</p>
          <p>Close: {result.c}</p>
          <p>High: {result.h}</p>
          <p>Low: {result.l}</p>
          <p>Number of Trades: {result.n}</p>
          <p>Timestamp: {result.t}</p>
        </div>
      ))}
      <p>Status: {responseData.status}</p>
    </div>
  );
};

export default Data;

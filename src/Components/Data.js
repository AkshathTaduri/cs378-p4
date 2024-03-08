import React from 'react';
import './Data.css'

const Data = ({ responseData }) => {
    if (!responseData || !responseData.results) {
        return <p>No data available</p>;
      }
  return (
    <div className='d-container'>
      <div className='data-container'>
        <p>Ticker:</p>
        <p>{responseData.ticker}</p>
      </div>
      {responseData.results.map((result, index) => (
        <div key={index}>
          <div className='data-container'>
            <p>Volume:</p>
            <p>{result.v}</p>
          </div>
          <div className='data-container'>
            <p>Volume Weighted Average:</p>
            <p>{result.vw}</p>
          </div>
          <div className='data-container'>
            <p>Open:</p>
            <p>{result.o}</p>
          </div>
          <div className='data-container'>
            <p>Close:</p>
            <p>{result.c}</p>
          </div>
          <div className='data-container'>
            <p>High:</p>
            <p>{result.h}</p>
          </div>
          <div className='data-container'>
            <p>Low:</p>
            <p>{result.l}</p>
          </div>
          <div className='data-container'>
            <p>Number of Trades:</p>
            <p>{result.n}</p>
          </div>
          <div className='data-container'>
            <p>Timestamp:</p>
            <p>{result.t}</p>
          </div>
        </div>
      ))}
      <div className='data-container'>
        <p>Status:</p>
        <p>{responseData.status}</p>
      </div>
    </div>
  );
};

export default Data;

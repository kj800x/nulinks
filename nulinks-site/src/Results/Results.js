import React from 'react';
import Result from "./Result/Result";
import ZeroState from "./ZeroState/ZeroState";

import './Results.css'

const renderResult = selectedResult => (result, index) => (
  <Result
    result={result}
    selected={selectedResult === index}
    key={result.value.target}
  />
);

export default ({results, selectedResult}) => (
  <div className="resultsContainer">
    <ul className="resultsList">
      {results.length === 0 && <ZeroState />}
      {results.map(renderResult(selectedResult))}
    </ul>
  </div>
)
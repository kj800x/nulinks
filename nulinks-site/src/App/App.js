import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Title from "../Title/Title";
import Search from "../Search/Search";
import Results from "../Results/Results";
import NULINKS_DATA from "nulinks-common/src/data";
import { search } from "nulinks-common/src/search";
import Footer from "../Footer/Footer";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);
  const [searchResults, setSearchResults] = useState(search(NULINKS_DATA)(""));

  const handleSearchChange = value => {
    setSearchValue(value);
    setSearchResults(search(NULINKS_DATA)(value));
    setSelectedResult(0);
  };

  const handleGo = () => {
    if (null !== selectedResult) {
      window.location = searchResults[selectedResult].value.target;
    }
  };

  const handleSelectedResultChange = delta => {
    if (selectedResult === null) {
      setSelectedResult(0);
      return;
    }
    const newValue = selectedResult + delta;
    if (newValue >= 0 && newValue < searchResults.length) {
      setSelectedResult(newValue);
    }
  };

  useEffect(() => {
    const url = new URL(window.location);
    if (url.searchParams.get("q")) {
      handleSearchChange(url.searchParams.get("q"));
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location);
    if (url.searchParams.get("go") !== null && selectedResult !== null) {
      handleGo();
    }
  }, [selectedResult]);

  return (
    <div className="mainWrapper">
      <section className="page">
        <Title />
        <div className="contents">
          <Search
            value={searchValue}
            onChange={handleSearchChange}
            onSelectedResultChange={handleSelectedResultChange}
            onGo={handleGo}
          />
          <Results
            results={searchResults}
            selectedResult={selectedResult}
            searchQuery={searchValue}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Title from "../Title/Title";
import Search from "../Search/Search";
import Results from "../Results/Results";
import NULINKS_DATA from "nulinks-common/src/data";
import { search } from "nulinks-common/src/search";
import Footer from "../Footer/Footer";

const url = new URL(window.location);
const INITIAL_SEARCH_VALUE = url.searchParams.get("q") || "";

const App = () => {
  const [searchValue, setSearchValue] = useState(INITIAL_SEARCH_VALUE);
  const [selectedResult, setSelectedResult] = useState(null);
  const [searchResults, setSearchResults] = useState(
    search(NULINKS_DATA)(INITIAL_SEARCH_VALUE)
  );

  const handleSearchChange = value => {
    setSearchValue(value);
    setSearchResults(search(NULINKS_DATA)(value));
    setSelectedResult(0);
  };

  const handleGo = useCallback(() => {
    if (null !== selectedResult) {
      window.location = searchResults[selectedResult].value.target;
    }
  }, [selectedResult, searchResults]);

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
    if (
      url.searchParams.get("go") !== null &&
      INITIAL_SEARCH_VALUE &&
      search(NULINKS_DATA)(INITIAL_SEARCH_VALUE).length > 0
    ) {
      window.location = search(NULINKS_DATA)(
        INITIAL_SEARCH_VALUE
      )[0].value.target;
    }
  }, []);

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

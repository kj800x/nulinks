import React, { Component } from 'react';
import './App.css';
import Title from "../Title/Title";
import Search from "../Search/Search";
import Results from "../Results/Results";
import { nulinks_data } from 'nulinks-common/data';
import { searchText } from 'nulinks-common/searchText';
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(nulinks_data);
    console.log(searchText);
    this.state = {
      searchValue: "",
      selectedResult: null,
      searchResults: searchText(nulinks_data)(""),
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectedResultChange = this.handleSelectedResultChange.bind(this);
    this.handleGo = this.handleGo.bind(this);
  }

  componentDidMount() {
    const url = new URL(window.location);
    if (url.searchParams.get("q")) {
      this.handleSearchChange(url.searchParams.get("q"), () => {
        if (url.searchParams.get("go") !== null) {
          this.handleGo();
        }
      });
    }
  }

  handleSearchChange(value, callback) {
    this.setState({
      searchValue: value,
      selectedResult: (value === "" ? null : 0),
      searchResults: searchText(nulinks_data)(value),
    }, callback)
  }

  handleSelectedResultChange(delta) {
    if (this.state.selectedResult === null) {
      this.setState({selectedResult: 0});
      return;
    }
    const newValue = this.state.selectedResult + delta;
    if (newValue >= 0 && newValue < this.state.searchResults.length) {
      this.setState({selectedResult: newValue})
    }
  }

  handleGo() {
    if (null !== this.state.selectedResult) {
      window.location = this.state.searchResults[this.state.selectedResult].value.target;
    }
  }

  render() {
    return (
      <div className="mainWrapper">
        <section className="page">
          <Title />
          <div className="contents">
            <Search value={this.state.searchValue} onChange={this.handleSearchChange} onSelectedResultChange={this.handleSelectedResultChange} onGo={this.handleGo}/>
            <Results results={this.state.searchResults} selectedResult={this.state.selectedResult} searchQuery={this.state.searchValue}/>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import HeroSearchForm from "../forms/HeroSearchForm";

export default class HeroSearchResultsCard extends Component {
  state = {
    results: []
  };

  setResults = newResults => this.setState({ results: newResults });
  clearResults = () => this.setState({ results: [] });
  render() {
    const { results } = this.state;
    return (
      <div>
        <HeroSearchForm
          setResults={this.setResults}
          clearResults={this.clearResults}
        />
        Results
      </div>
    );
  }
}

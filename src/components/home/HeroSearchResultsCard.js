import React, { Component } from "react";
import HeroSearchForm from "../forms/HeroSearchForm";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
        <List>
          {results.map((result, idx) => (
            <ListItem>{idx}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

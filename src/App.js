import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBreweries } from './actions/index';
import Header from './components/Header';
import BreweryComponent from './components/BreweryComponent';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getBreweries();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <BreweryComponent />
      </div>
    );
  };
}

export default connect(null, { getBreweries })(App);

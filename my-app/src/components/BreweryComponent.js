import React from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';

const BreweryComponent = (props) => {
  return (
    <div>
      <Brewery breweries={props.breweries}/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    // city: state.city,
    breweries: state.breweries,
    error: state.error,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps, {})(BreweryComponent);
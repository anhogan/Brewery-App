import React from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';

const BreweryComponent = (props) => {
  return (
    <div>
      <Brewery 
        breweries={props.breweries} 
        isFetching={props.isFetching} 
        error={props.error} />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries,
    error: state.error,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps, {})(BreweryComponent);
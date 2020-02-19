import React from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';

const BreweryComponent = (props) => {
  return (
    <div>
      <Brewery />
    </div>
  )
};

export default connect(null, {})(BreweryComponent);
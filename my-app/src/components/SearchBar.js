import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  return (
    <div>
      <input
        value={props.input}
        onChange={props.handleChange} />
      <button onClick={props.handleSubmit}>Find Breweries</button>
    </div>
  )
};

export default connect(null, {})(SearchBar);
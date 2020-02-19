import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <input
        value={props.input}
        onChange={props.handleChange} />
      <button onClick={props.handleSubmit}>Find Breweries</button>
      </form>
    </div>
  )
};

export default connect(null, {})(SearchBar);
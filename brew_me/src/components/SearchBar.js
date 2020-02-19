import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  return (
    <div className="ui search">
      <form onSubmit={props.handleSubmit}>
        <div class="ui icon input">
        <input
          value={props.input}
          onChange={props.handleChange}
          className="prompt" 
          type="text" 
          placeholder="Search by City" />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  )
};

export default connect(null, {})(SearchBar);
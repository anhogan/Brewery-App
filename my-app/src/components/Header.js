import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBreweries } from '../actions/index';
import SearchBar from './SearchBar';

const Header = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchBreweries(input);
    setInput('');
  };

  return (
    <div>
      <SearchBar 
        input={input} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} />
    </div>
  )
};

export default connect(null, { searchBreweries })(Header);
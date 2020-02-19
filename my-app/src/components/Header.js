import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const Header = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // PASS SEARCH TERM TO ACTIONS FOLDER?
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

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps, {})(Header);
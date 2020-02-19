import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBreweriesByCity, searchBreweriesByState } from '../actions/index';
import SearchBar from './SearchBar';

const Header = (props) => {
  const [cityInput, setCityInput] = useState('');
  const [stateInput, setStateInput] = useState('');

  const handleChangeForCity = (event) => {
    setCityInput(event.target.value);
  };

  const handleChangeForState = (event) => {
    setStateInput(event.target.value);
  };

  const handleSubmitForCity = (event) => {
    event.preventDefault();
    props.searchBreweriesByCity(cityInput);
    setCityInput('');
  };

  const handleSubmitForState = (event) => {
    event.preventDefault();
    props.searchBreweriesByState(stateInput);
    setStateInput('');
  };

  return (
    <div>
      <h1>BREW ME</h1>
      <SearchBar 
        cityInput={cityInput}
        stateInput={stateInput} 
        handleChangeForCity={handleChangeForCity} 
        handleSubmitForCity={handleSubmitForCity}
        handleChangeForState={handleChangeForState} 
        handleSubmitForState={handleSubmitForState} />
    </div>
  )
};

export default connect(null, { searchBreweriesByCity, searchBreweriesByState })(Header);
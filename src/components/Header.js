import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBreweriesByCity, searchBreweriesByState } from '../actions/index';
import SearchBar from './SearchBar';
import beer_mug from '../beer_mug.png';

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
      <div className="header-div">
        <h1>BREW ME <img className="header_img" src={beer_mug} alt="Beer Mug" /></h1>
      </div>
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
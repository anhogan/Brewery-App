import React from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';

const SearchBar = (props) => {
  return (
    <div className="ui placeholder segment">
      <div className="ui two column very relaxed stackable grid">
        <div id="for_city" className="search_inputs column">
          <div className="ui search">
            <form onSubmit={props.handleSubmitForCity}>
              <div class="ui icon input">
              <input
                value={props.cityInput}
                onChange={props.handleChangeForCity}
                className="prompt" 
                type="text" 
                placeholder="Search by City" />
                <i className="search icon"></i>
              </div>
            </form>
          </div>
        </div>
        <div class="ui vertical divider">
            Or
        </div>
        <div id="for_state" className="search_inputs column">
          <div className="ui search">
            <form onSubmit={props.handleSubmitForState}>
              <div class="ui icon input">
              <input
                value={props.stateInput}
                onChange={props.handleChangeForState}
                className="prompt" 
                type="text" 
                placeholder="Search by State" />
                <i className="search icon"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(null, {})(SearchBar);
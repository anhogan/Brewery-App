import React from 'react';
import { connect } from 'react-redux';

const Brewery = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <h3>Fetching Breweries...</h3>
      ) : (
        <div>
          {props.breweries.map((brewery) => (
            <div>
              <h4>{brewery.name}</h4>
              <h6>Address</h6>
              <p>{brewery.street}</p>
              <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
              <a href={brewery.website_url}>{brewery.website_url}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default connect(null, {})(Brewery);
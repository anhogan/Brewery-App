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
            <div key={brewery.id}>
              <h3>{brewery.name}</h3>
              <h4>Address</h4>
              <p>{brewery.street}</p>
              <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
              <a href={brewery.website_url}>{brewery.website_url}</a>
            </div>
          ))}
          {props.error !== "" ? <h4>{props.error}</h4> : null}
          {props.breweries.length === 0 ? <h4>City not found</h4> : null}
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    breweries: state.breweries,
    error: state.error,
    isFetching: state.isFetching
  }
};

export default connect(mapStateToProps, {})(Brewery);
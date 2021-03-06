import React from 'react';
import { connect } from 'react-redux';
import beer_glass from '../beer_glass.jpg';

const Brewery = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <div>
          <div className="ui active centered inline loader"></div>
          <h3>Fetching Breweries...</h3>
        </div>
      ) : (
        <div className="ui grid">
          {props.breweries.map((brewery) => (
            <div key={brewery.id} className="three wide column ui raised card">
              <div className="image">
                <img src={beer_glass} alt={brewery.id} />
              </div>
              <div className="content">
                <div className="header">
                  <h3>{brewery.name}</h3>
                </div>
                <div className="description">
                  <address>{brewery.street}</address>
                  <address>{brewery.city}, {brewery.state}</address>
                  <a href={`https://google.com/maps/place/${brewery.street}`} target="_blank">Directions</a>
                </div>
                <hr />
                <div className="extra content">
                  <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
                </div>
                {/* {brewery.tag_list.map((tag) => (
                  <span>{tag}</span>
                ))} */}
              </div>
            </div>
          ))}
          {/* {props.error !== "" ? <h4>{props.error}</h4> : null} */}
          {props.breweries.length === 0 ? <h4>No Breweries found for {props.error} <i className="frown outline icon"></i></h4> : null}
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
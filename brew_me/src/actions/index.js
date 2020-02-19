import axios from 'axios';

export const FETCH_BREWS = 'FETCH_BREWS';
export const FETCH_BREWS_SUCCESS = 'FETCH_BREWS_SUCCESS';
export const FETCH_BREWS_FAILURE = 'FETCH_BREWS_FAILURE';

export const SEARCHING = 'SEARCHING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const getBreweries = () => (dispatch) => {
  dispatch({ type: FETCH_BREWS });
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=raleigh`)
    .then(response => {
      dispatch({ type: FETCH_BREWS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_BREWS_FAILURE, payload: error.message });
    });
};

export const searchBreweries = (input) => (dispatch) => {
  dispatch({ type: SEARCHING });
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
    .then(response => {
      dispatch({ type: SEARCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SEARCH_FAILURE, payload: error.message });
    });
};
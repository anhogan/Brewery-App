import axios from 'axios';

export const FETCH_BREWS = 'FETCH_BREWS';
export const FETCH_BREWS_SUCCESS = 'FETCH_BREWS_SUCCESS';
export const FETCH_BREWS_FAILURE = 'FETCH_BREWS_FAILURE';

export const SEARCHING_BY_CITY = 'SEARCHING_BY_CITY';
export const SEARCH_SUCCESS_CITY = 'SEARCH_SUCCESS_CITY';
export const SEARCH_FAILURE_CITY = 'SEARCH_FAILURE_CITY';

export const SEARCHING_BY_STATE = 'SEARCHING_BY_STATE';
export const SEARCH_SUCCESS_STATE = 'SEARCH_SUCCESS_STATE';
export const SEARCH_FAILURE_STATE = 'SEARCH_FAILURE_STATE';

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

export const searchBreweriesByCity = (input) => (dispatch) => {
  dispatch({ type: SEARCHING_BY_CITY });
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=${input}`)
    .then(response => {
      dispatch({ type: SEARCH_SUCCESS_CITY, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SEARCH_FAILURE_CITY, payload: error.message });
    });
};

export const searchBreweriesByState = (input) => (dispatch) => {
  dispatch({ type: SEARCHING_BY_STATE });
  axios.get(`https://api.openbrewerydb.org/breweries?by_state=${input}`)
    .then(response => {
      dispatch({ type: SEARCH_SUCCESS_STATE, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SEARCH_FAILURE_STATE, payload: error.message });
    });
};
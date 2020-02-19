import axios from 'axios';

export const FETCH_BREWS = 'FETCH_BREWS';
export const FETCH_BREWS_SUCCESS = 'FETCH_BREWS_SUCCESS';
export const FETCH_BREWS_FAILURE = 'FETCH_BREWS_FAILURE';

export const getBreweries = () => (dispatch) => {
  dispatch({ type: FETCH_BREWS });
  axios.get(`https://api.openbrewerydb.org/breweries?by_city=raleigh`)
    .then(response => {
      console.log(response);
      dispatch({ type: FETCH_BREWS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_BREWS_FAILURE, payload: error.message });
    });
}
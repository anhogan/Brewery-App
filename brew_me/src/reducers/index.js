import { FETCH_BREWS, FETCH_BREWS_SUCCESS, FETCH_BREWS_FAILURE, SEARCHING_BY_CITY, SEARCH_SUCCESS_CITY, SEARCH_FAILURE_CITY, SEARCHING_BY_STATE, SEARCH_SUCCESS_STATE, SEARCH_FAILURE_STATE } from '../actions/index';

const initialState = {
  breweries: [],
  error: '',
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BREWS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_BREWS_SUCCESS:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
        error: ''
      }
    case FETCH_BREWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case SEARCHING_BY_CITY:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case SEARCH_SUCCESS_CITY:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
        error: action.error
      }
    case SEARCH_FAILURE_CITY:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case SEARCHING_BY_STATE:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case SEARCH_SUCCESS_STATE:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
        error: action.error
      }
    case SEARCH_FAILURE_STATE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  };
};
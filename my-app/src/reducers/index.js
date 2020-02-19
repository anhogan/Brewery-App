import { FETCH_BREWS, FETCH_BREWS_SUCCESS, FETCH_BREWS_FAILURE, SEARCHING, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actions/index';

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
    case SEARCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
        error: ''
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  };
};
import { FETCH_BREWS, FETCH_BREWS_SUCCESS, FETCH_BREWS_FAILURE } from '../actions/index';

const initialState = {
  breweries: [],
  city: 'raleigh',
  error: '',
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BREWS:
      return {
        ...state,
        city: action.payload,
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
    default:
      return state
  };
};
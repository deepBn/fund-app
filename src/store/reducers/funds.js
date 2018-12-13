import {SET_FUNDS, UPDATE_FUNDS} from '../actions/actionTypes';

const initialState = {
  funds: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FUNDS:
      return {
        ...state,
        funds: action.funds
      };
    case UPDATE_FUNDS:
      return {
        ...state,
        funds: action.funds
      };
    default: return state;
  }
};

export default reducer;

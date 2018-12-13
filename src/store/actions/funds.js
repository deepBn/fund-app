import axios from 'axios';

import {
  SET_FUNDS,
  UPDATE_FUNDS,
} from './actionTypes';
import {uiStartLoading, uiStopLoading} from './ui';

export const fetchFunds = () => {
  return dispatch => {
    dispatch(uiStartLoading());
    axios.get('https://fund-app-558c5.firebaseio.com/funds.json')
      .then(response => {
        console.log(response.data);
        dispatch(setFunds(response.data.totalAmount));
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err.response);
        dispatch(uiStopLoading());
      })
  }
};

const setFunds = (funds) => {
  return {
    type: SET_FUNDS,
    funds: funds
  }
};


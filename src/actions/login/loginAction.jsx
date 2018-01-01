import constants from '../../constants/login/loginConstants';
import axios from 'axios';

const authenticate = {
  type: constants.USER_RECEIVED,
  payload: {
    fetching: true,
    loginStatus: false,
    fetched: false,
    error: null
  }
};

const getResult = {
  type: constants.USER_LOGGED_IN,
  payload: {
    fetching: false,
    fetched: true,
    loginStatus: true,
    error: null
  }
};

export function sendRequest(dispatch, username, password) {
  dispatch(authenticate);
  axios({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    method: 'post',
    url: './restServices/authCheck',
    data: {
      userName: username,
      password: password
    }
  }).then(function (response) {
    let responseData = response.data;
    if (responseData.type === 'success') {
      dispatch(getResult);
    }
    if (responseData.type === 'error') {
      dispatch({
        type: constants.USER_ERROR,
        payload: {
          fetching: false,
          fetched: true,
          loginStatus: false,
          error: responseData.message
        }
      });
    }
  }).catch(function (e) {
    dispatch({
      type: constants.USER_ERROR,
      payload: {
        fetching: false,
        fetched: true,
        loginStatus: false,
        error: e.message
      }
    });
  });
}

export function createUser() {
  return {
    type: constants.USER_CREATED,
    payload: {
      fetching: true
    }
  };
}

export function catchError(response) {
  return {
    type: constants.USER_ERROR,
    payload: {
      fetching: false,
      fetched: true,
      loginStatus: false,
      error: response
    }
  };
}

import constants from '../../constants/login/loginConstants';
import axios from 'axios';

export function sendRequest(username, password) {
  axios({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
      this.endLogin(true);
    }
    if (responseData.type === 'error') {
      this.catchError(responseData.message);
    }
  }).catch(function (e) {
    this.catchError(e.message);
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

export function startLogin() {
  return {
    type: constants.USER_RECEIVED,
    payload: {
      fetching: true,
      loginStatus: false,
      fetched: false,
      error: null
    }
  };
}

export function endLogin(response) {
  return {
    type: constants.USER_LOGGED_IN,
    payload: {
      fetching: false,
      fetched: true,
      loginStatus: response,
      error: null
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

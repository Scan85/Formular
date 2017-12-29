import constants from '../../constants/login/loginConstants';

const initailState = {
  fetching: false,
  fetched: false,
  loginStatus: false,
  error: null
};

export function loginReducer(state = initailState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case constants.USER_CREATED:
    return { newState, fetching: true };
  case constants.USER_RECEIVED:
    return { newState, fetching: true };
  case constants.USER_LOGGED_IN:
    return { newState, fetching: false, fetched: true, loginStatus: action.payload };
  case constants.USER_ERROR:
    return { newState, fetching: false, fetched: true, error: action.payload };
  default:
    return newState;
  }
}

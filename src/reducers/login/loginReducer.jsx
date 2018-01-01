import constants from '../../constants/login/loginConstants';

const initialState = {
  fetching: false,
  fetched: false,
  loggedIn: false,
  error: null
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
  case constants.USER_CREATED:
    return { ...state, fetching: true };
  case constants.USER_RECEIVED:
    return { ...state,
      fetching: action.payload.fetching,
      fetched: action.payload.fetched,
      loggedIn: action.payload.loginStatus,
      error: action.payload.error
    };
  case constants.USER_LOGGED_IN:
    return { ...state,
      fetching: action.payload.fetching,
      fetched: action.payload.fetched,
      loggedIn: action.payload.loginStatus,
      error: action.payload.error
    };
  case constants.USER_ERROR:
    return { ...state,
      fetching: action.payload.fetching,
      fetched: action.payload.fetched,
      loggedIn: action.payload.loginStatus,
      error: action.payload.error
    };
  default:
    return state;
  }
}

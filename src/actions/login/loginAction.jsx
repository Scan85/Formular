import constants from '../../constants/login/loginConstants';

export default {
  createUser: (user) => {
    return {
      type: constants.USER_CREATED,
      data: user
    };
  },
  receiveUser: (user) => {
    return {
      type: constants.USER_RECEIVED,
      data: user
    };
  },
  loginUser: (user) => {
    return {
      type: constants.USER_LOGGED_IN,
      data: user
    };
  }
};

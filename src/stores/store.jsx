import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger  } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { loginReducer } from '../reducers/login/loginReducer';

const middleware = applyMiddleware(promise(), thunk, createLogger());
const reducer = combineReducers({
  user: loginReducer
});
export default createStore(reducer, middleware);

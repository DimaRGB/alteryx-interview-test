import { combineReducers } from 'redux';

export default combineReducers({
  currentUser: require('../modules/currentUser').reducer,
});

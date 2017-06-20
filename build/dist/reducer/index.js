'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  if (action.type === 'GET_USER_DONE') {
    return action.value;
  }
  return state;
}

var rootReducer = (0, _redux.combineReducers)({
  users: users,
  user: user
});
exports.default = rootReducer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/scottsfolder/Documents/aca3/GAME_DATE/src/pages/adduser.js?entry';
// import Link from 'next/link';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var adduserPage = function (_Component) {
  (0, _inherits3.default)(adduserPage, _Component);

  function adduserPage() {
    (0, _classCallCheck3.default)(this, adduserPage);
    return (0, _possibleConstructorReturn3.default)(this, (adduserPage.__proto__ || (0, _getPrototypeOf2.default)(adduserPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(adduserPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'Create a profile'), _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'First name:', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'firstName', placeholder: 'Add First name', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), 'Last name:', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'lastName', placeholder: 'Add Last name', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), 'Avatar: ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'avatar', placeholder: 'Add Avatar', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), 'Interests: ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('input', { type: 'text', name: 'intersets', placeholder: 'Add Interests', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('input', { type: 'submit', value: 'Submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })));
    }
  }]);
  return adduserPage;
}(_react.Component);

// null will be mapdispatchtoprops and mapstatetoprops


exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(adduserPage);
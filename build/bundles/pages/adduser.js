
          window.__NEXT_REGISTER_PAGE('/adduser', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/components/Header.js';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(565);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Header() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { href: '/index', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/signin', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Sign In')), _react2.default.createElement(_link2.default, { href: '/logout', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Sign Out')), _react2.default.createElement(_link2.default, { href: '/logout', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Log Out')));
}

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/components/Header.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(561);

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}

var rootReducer = (0, _redux.combineReducers)({
  users: users
});
exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/reducer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/reducer/index.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(561);

var _reduxDevtoolsExtension = __webpack_require__(600);

var _reduxThunk = __webpack_require__(601);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(588);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {};

var initStore = exports.initStore = function initStore() {
  return (0, _redux.createStore)(_reducer2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/store.js"); } } })();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/pages/adduser.js?entry';
// import Link from 'next/link';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(587);

var _Header2 = _interopRequireDefault(_Header);

var _nextReduxWrapper = __webpack_require__(586);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(589);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/pages/adduser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/advanced-nextjs-express-starter/src/pages/adduser.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/adduser")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(618);


/***/ })

},[619]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZGR1c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NWQ3YjlhYSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL2luZGV4LmpzPzVkN2I5YWEiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NWQ3YjlhYSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZGR1c2VyLmpzPzVkN2I5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XG4gICAgICA8YT5Ib21lPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICA8YT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cbiAgICAgIDxhPlNpZ24gSW48L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICA8YT5TaWduIE91dDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9sb2dvdXRcIj5cbiAgICAgIDxhPkxvZyBPdXQ8L2E+XG4gICAgPC9MaW5rPlxuXG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5cbmZ1bmN0aW9uIHVzZXJzKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU0VSU19MT0FERUQnKSB7XG4gICAgcmV0dXJuIGFjdGlvbi52YWx1ZTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2Vyc1xufSk7XG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXIvaW5kZXguanMiLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsd2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGx3YXJlKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xuXG5jbGFzcyBhZGR1c2VyUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ3JlYXRlIGEgcHJvZmlsZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgIEZpcnN0IG5hbWU6PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlyc3ROYW1lJyBwbGFjZWhvbGRlcj0nQWRkIEZpcnN0IG5hbWUnIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBMYXN0IG5hbWU6PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbGFzdE5hbWUnIHBsYWNlaG9sZGVyPSdBZGQgTGFzdCBuYW1lJyAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgQXZhdGFyOiA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhdmF0YXJcIiBwbGFjZWhvbGRlcj1cIkFkZCBBdmF0YXJcIiAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgSW50ZXJlc3RzOiA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdpbnRlcnNldHMnIHBsYWNlaG9sZGVyPSdBZGQgSW50ZXJlc3RzJyAvPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cbi8vIG51bGwgd2lsbCBiZSBtYXBkaXNwYXRjaHRvcHJvcHMgYW5kIG1hcHN0YXRldG9wcm9wc1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkoYWRkdXNlclBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWRkdXNlci5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFGQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFHQTtBQUtBO0FBTEE7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
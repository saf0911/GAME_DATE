
          window.__NEXT_REGISTER_PAGE('/adduser', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/scottsfolder/Documents/aca3/GAME_DATE/src/pages/adduser.js?entry';
// import Link from 'next/link';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(564);

var _Header2 = _interopRequireDefault(_Header);

var _nextReduxWrapper = __webpack_require__(562);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(566);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/pages/adduser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/pages/adduser.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/scottsfolder/Documents/aca3/GAME_DATE/src/components/Header.js';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(563);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/components/Header.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(538);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/reducer/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/reducer/index.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(538);

var _reduxDevtoolsExtension = __webpack_require__(577);

var _reduxThunk = __webpack_require__(578);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(565);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {};

var initStore = exports.initStore = function initStore() {
  return (0, _redux.createStore)(_reducer2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/scottsfolder/Documents/aca3/GAME_DATE/src/store.js"); } } })();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ })

},[585]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZGR1c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRkdXNlci5qcz82MzMxM2E1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzYzMzEzYTUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlci9pbmRleC5qcz82MzMxM2E1Iiwid2VicGFjazovLy8uL3N0b3JlLmpzPzYzMzEzYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xuXG5jbGFzcyBhZGR1c2VyUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ3JlYXRlIGEgcHJvZmlsZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgIEZpcnN0IG5hbWU6PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlyc3ROYW1lJyBwbGFjZWhvbGRlcj0nQWRkIEZpcnN0IG5hbWUnIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBMYXN0IG5hbWU6PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbGFzdE5hbWUnIHBsYWNlaG9sZGVyPSdBZGQgTGFzdCBuYW1lJyAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgQXZhdGFyOiA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhdmF0YXJcIiBwbGFjZWhvbGRlcj1cIkFkZCBBdmF0YXJcIiAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgSW50ZXJlc3RzOiA8YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdpbnRlcnNldHMnIHBsYWNlaG9sZGVyPSdBZGQgSW50ZXJlc3RzJyAvPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cbi8vIG51bGwgd2lsbCBiZSBtYXBkaXNwYXRjaHRvcHJvcHMgYW5kIG1hcHN0YXRldG9wcm9wc1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkoYWRkdXNlclBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWRkdXNlci5qcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxuICAgICAgPGE+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gICAgICA8YT5TaWduIEluPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2xvZ291dFwiPlxuICAgICAgPGE+U2lnbiBPdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCI+XG4gICAgICA8YT5Mb2cgT3V0PC9hPlxuICAgIDwvTGluaz5cblxuICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiB1c2VycyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNFUlNfTE9BREVEJykge1xuICAgIHJldHVybiBhY3Rpb24udmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdXNlcnNcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2VyL2luZGV4LmpzIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgdGh1bmtNaWRkbHdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsd2FyZSkpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFLQTtBQUxBOzs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        
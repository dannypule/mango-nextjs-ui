module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(13);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(14);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(15);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(16);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./store/store.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






// create a simple reducer
var reducer1 = function reducer1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { foo: '', number: 42 };
  var action = arguments[1];

  switch (action.type) {
    case 'FOO':
      return _extends({}, state, { foo: action.payload });
    case 'ADD':
      return _extends({}, state, { number: state.number + 1 });
    default:
      return state;
  }
};

var reducer2 = function reducer2() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { numberTwo: 99 };
  var action = arguments[1];

  switch (action.type) {
    case 'MINUS':
      return _extends({}, state, { numberTwo: state.numberTwo - 1 });
    default:
      return state;
  }
};

var rootReducer = Object(external__redux_["combineReducers"])({ food: reducer1, barr: reducer2 });

// create a store creator
var store_store = function store(initialState) {
  return Object(external__redux_["createStore"])(rootReducer, initialState, Object(external__redux_devtools_extension_["composeWithDevTools"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a)));
};

var store_add = function add() {
  return function (dispatch) {
    return dispatch({ type: 'ADD' });
  };
};

var store_minus = function minus() {
  return function (dispatch) {
    return dispatch({ type: 'MINUS' });
  };
};

/* harmony default export */ var store_store_0 = (store_store);
// CONCATENATED MODULE: ./pages/redux.jsx




var redux_Page = function Page(_ref) {
  var number = _ref.number,
      numberTwo = _ref.numberTwo,
      custom = _ref.custom,
      add = _ref.add,
      minus = _ref.minus;
  return external__react__default.a.createElement(
    'div',
    null,
    external__react__default.a.createElement(
      'h1',
      null,
      number
    ),
    external__react__default.a.createElement(
      'p',
      null,
      'Custom: ',
      custom
    ),
    external__react__default.a.createElement(
      'div',
      null,
      external__react__default.a.createElement(
        'button',
        { onClick: add },
        'add'
      )
    ),
    external__react__default.a.createElement(
      'h1',
      null,
      numberTwo
    ),
    external__react__default.a.createElement(
      'div',
      null,
      external__react__default.a.createElement(
        'button',
        { onClick: minus },
        'minus'
      )
    )
  );
};
redux_Page.getInitialProps = function (_ref2) {
  var store = _ref2.store,
      isServer = _ref2.isServer,
      pathname = _ref2.pathname,
      query = _ref2.query;

  // component will read from store's state when rendered
  store.dispatch({ type: 'ADD', payload: 12 });

  // pass some custom props to component from here
  return { custom: 'yayy!1!' };
};

/* harmony default export */ var redux = __webpack_exports__["default"] = (external__next_redux_wrapper__default()(store_store_0, function (state) {
  return { number: state.food.number, numberTwo: state.barr.numberTwo };
}, {
  add: store_add,
  minus: store_minus
})(redux_Page));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);
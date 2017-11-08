webpackHotUpdate(0,{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(142);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(81);

var _redux = __webpack_require__(38);

var _reduxPromise = __webpack_require__(256);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = __webpack_require__(262);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(283);

var _App2 = _interopRequireDefault(_App);

var _LocalStorage = __webpack_require__(290);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistedState = (0, _LocalStorage.loadState)();
var store = (0, _redux.createStore)(_reducers2.default, persistedState, (0, _redux.applyMiddleware)(_reduxPromise2.default));
store.subscribe(function () {
    (0, _LocalStorage.saveState)(store.getState());
});

document.addEventListener('DOMContentLoaded', function () {
    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
    ), document.querySelector('#app'));
});

/***/ })

})
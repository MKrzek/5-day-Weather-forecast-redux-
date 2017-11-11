webpackHotUpdate(0,{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(145);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(39);

var _redux = __webpack_require__(32);

var _reduxPromise = __webpack_require__(259);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _throttle = __webpack_require__(265);

var _throttle2 = _interopRequireDefault(_throttle);

var _reducers = __webpack_require__(275);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(297);

var _App2 = _interopRequireDefault(_App);

var _LocalStorage = __webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistedState = (0, _LocalStorage.loadState)();
var store = (0, _redux.createStore)(_reducers2.default, persistedState, (0, _redux.applyMiddleware)(_reduxPromise2.default));

store.subscribe((0, _throttle2.default)(function () {
    (0, _LocalStorage.saveState)(store.getState());
}, 1000));

document.addEventListener('DOMContentLoaded', function () {
    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
    ), document.querySelector('#app'));
});

/***/ })

})
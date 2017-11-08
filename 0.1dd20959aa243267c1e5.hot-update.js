webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var loadState = exports.loadState = function loadState() {
    try {
        var serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
var saveState = exports.saveState = function saveState(state) {
    try {
        var serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {}
};

/***/ })

})
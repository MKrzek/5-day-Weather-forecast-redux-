webpackHotUpdate(0,{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index_js__ = __webpack_require__(86);


/* harmony default export */ __webpack_exports__["a"] = (function (state = [], action) {

    console.log('payload', action)
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_index_js__["REMOVE_ITEM"]:
            return [
                action.payload.data
            ];

    }
    return state;
});



/***/ })

})
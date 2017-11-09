webpackHotUpdate(0,{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index_js__ = __webpack_require__(39);


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
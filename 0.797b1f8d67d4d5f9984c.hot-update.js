webpackHotUpdate(0,{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer_weather_js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer_removeItem_js__ = __webpack_require__(310);



const rootReducer=Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
   weather: __WEBPACK_IMPORTED_MODULE_1__reducer_weather_js__["a" /* default */],
   removeItem: __WEBPACK_IMPORTED_MODULE_2__reducer_removeItem_js__["a" /* default */]
   
});

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index_js__ = __webpack_require__(86);


/* harmony default export */ __webpack_exports__["a"] = (function (state = [], action) {

    console.log('payload', action)
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_index_js__["REMOVE_ITEM"]:
            return [
                action.payload.data, ...state
            ];

    }
    return state;
});


/***/ })

})
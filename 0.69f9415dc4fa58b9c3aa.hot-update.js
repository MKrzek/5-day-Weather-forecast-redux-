webpackHotUpdate(0,{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_index_js__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function (state=[], action){
    console.log('stateWeather', state)
    switch(action.type){
        case __WEBPACK_IMPORTED_MODULE_0__actions_index_js__["FETCH_WEATHER"]: 
           return [action.payload.data, ...state];
           
        case __WEBPACK_IMPORTED_MODULE_0__actions_index_js__["REMOVE_ITEM"] : 
        let index = state.filter(item => item === action);
              return [
                     ...state.slice(0, index),
                      ...state.slice(index + 1)];
        }
    return state;

});


/***/ })

})
webpackHotUpdate(0,{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fetchWeather"] = fetchWeather;
/* harmony export (immutable) */ __webpack_exports__["removeItem"] = removeItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

const API_KEY = 'a390214491b6bc7a8ba0e0735659aec7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;


const FETCH_WEATHER = 'FETCH_WEATHER';
/* harmony export (immutable) */ __webpack_exports__["FETCH_WEATHER"] = FETCH_WEATHER;

const REMOVE_ITEM='REMOVE_ITEM';
/* harmony export (immutable) */ __webpack_exports__["REMOVE_ITEM"] = REMOVE_ITEM;


function fetchWeather(city) {
   
    const url = `${ROOT_URL}&q=${city}`;
    const request = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);
    return {type: FETCH_WEATHER, payload: request};
}

function removeItem(city){
    const storedLocations = JSON.parse(localStorage.getItem('state'));
    console.log (storedLocations)
    
    return {type: REMOVE_ITEM, payload: storedLocations};
}



    
           
    


    


/***/ })

})
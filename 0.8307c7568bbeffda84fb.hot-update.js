webpackHotUpdate(0,{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fetchWeather"] = fetchWeather;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

const API_KEY = 'a390214491b6bc7a8ba0e0735659aec7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;
const citiesURL='city.list.json';

const FETCH_WEATHER = 'FETCH_WEATHER';
/* harmony export (immutable) */ __webpack_exports__["FETCH_WEATHER"] = FETCH_WEATHER;



function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);
    return {type: FETCH_WEATHER, payload: request};
}

    


    


/***/ })

})
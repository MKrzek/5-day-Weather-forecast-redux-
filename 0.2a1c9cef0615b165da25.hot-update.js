webpackHotUpdate(0,{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(81);

var _redux = __webpack_require__(38);

var _Chart = __webpack_require__(299);

var _Chart2 = _interopRequireDefault(_Chart);

var _Google_map = __webpack_require__(302);

var _Google_map2 = _interopRequireDefault(_Google_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherList = function (_React$Component) {
    _inherits(WeatherList, _React$Component);

    function WeatherList(props) {
        _classCallCheck(this, WeatherList);

        var _this = _possibleConstructorReturn(this, (WeatherList.__proto__ || Object.getPrototypeOf(WeatherList)).call(this, props));

        _this.handleRemoveItem = function (event) {
            event.preventDefault();
            _this.props.removeItem(_this.props.name);
            _this.setState({
                removebutton: event.target.value
            });
        };

        _this.renderWeather = function (cityData) {
            var name = cityData.city.name;
            var temps = cityData.list.map(function (weather) {
                return weather.main.temp;
            });
            var pressures = cityData.list.map(function (weather) {
                return weather.main.pressure;
            });
            var humidities = cityData.list.map(function (weather) {
                return weather.main.humidity;
            });
            var _cityData$city$coord = cityData.city.coord,
                lon = _cityData$city$coord.lon,
                lat = _cityData$city$coord.lat;


            console.log(temps);
            return _react2.default.createElement(
                'tr',
                { key: name },
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Google_map2.default, { lon: lon, lat: lat })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Chart2.default, { data: temps, color: 'orange', units: 'C' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Chart2.default, { data: pressures, color: 'blue', units: 'hPa' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_Chart2.default, { data: humidities, color: 'green', units: '%' })
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'input-group-btn' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-secondary', onClick: _this.handleRemoveItem },
                            'Remove'
                        )
                    )
                )
            );
        };

        _this.state = {
            removebutton: ''
        };
        return _this;
    }

    _createClass(WeatherList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                { className: 'table table-hover' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'City'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Temperature (C)'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Pressure (hPa)'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Humidity (%)'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.props.weather.map(this.renderWeather)
                )
            );
        }
    }]);

    return WeatherList;
}(_react2.default.Component);

function mapStateToProps(_ref) {
    var weather = _ref.weather;

    return { weather: weather }; //{weather}==={weather: weather}
}
{/*function mapStateToProps({weather}){
    const weather=state.weather*/}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ removeItem: removeItem }, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WeatherList);

/***/ })

})
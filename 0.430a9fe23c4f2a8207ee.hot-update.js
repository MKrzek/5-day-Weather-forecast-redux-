webpackHotUpdate(0,{

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Chart = __webpack_require__(301);

var _Chart2 = _interopRequireDefault(_Chart);

var _Google_map = __webpack_require__(304);

var _Google_map2 = _interopRequireDefault(_Google_map);

var _reactRedux = __webpack_require__(39);

var _redux = __webpack_require__(32);

var _index = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_React$Component) {
    _inherits(Location, _React$Component);

    function Location() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Location);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Location.__proto__ || Object.getPrototypeOf(Location)).call.apply(_ref, [this].concat(args))), _this), _this.handleRemoveItem = function () {
            _this.props.removeItem(_this.props.city);
            console.log('remove button works');
            console.log(_this.props.city);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Location, [{
        key: 'render',
        value: function render() {
            var cityData = this.props.city;
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


            return _react2.default.createElement(
                'tr',
                { key: name, id: name },
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
                            { className: 'btn btn-secondary', onClick: this.handleRemoveItem },
                            'Remove'
                        )
                    )
                )
            );
        }
    }]);

    return Location;
}(_react2.default.Component);

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ removeItem: _index.removeItem }, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapDispatchToProps)(Location);

/***/ })

})
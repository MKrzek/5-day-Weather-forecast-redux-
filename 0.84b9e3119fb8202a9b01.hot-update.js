webpackHotUpdate(0,{

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Location = __webpack_require__(300);

var _Location2 = _interopRequireDefault(_Location);

var _reactRedux = __webpack_require__(82);

var _redux = __webpack_require__(32);

var _index = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WeatherList = function (_React$Component) {
    _inherits(WeatherList, _React$Component);

    function WeatherList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WeatherList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WeatherList.__proto__ || Object.getPrototypeOf(WeatherList)).call.apply(_ref, [this].concat(args))), _this), _this.handleRemoveItem = function () {
            _this.props.removeItem(location);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WeatherList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var location = this.props.weather.map(function (location, index) {

                return _react2.default.createElement(_Location2.default, {
                    key: index,
                    location: location,
                    handleRemoveItem: _this2.handleRemoveItem });
            });

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
                    location
                )
            );
        }
    }]);

    return WeatherList;
}(_react2.default.Component);

function mapStateToProps(_ref2) {
    var weather = _ref2.weather;

    return { weather: weather }; //{weather}==={weather: weather}
}
{/*function mapStateToProps({weather}){
    const weather=state.weather*/}
function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ removeItem: _index.removeItem }, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WeatherList);

/***/ })

})
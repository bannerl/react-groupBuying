webpackJsonp([0],{397:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(7);\n\nvar _reactRedux = __webpack_require__(14);\n\nvar _redux = __webpack_require__(10);\n\nvar _reactAddonsPureRenderMixin = __webpack_require__(2);\n\nvar _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);\n\nvar _store = __webpack_require__(88);\n\nvar actionTypes = _interopRequireWildcard(_store);\n\nvar _userinfo = __webpack_require__(37);\n\nvar UserInfoActionsFromOtherFile = _interopRequireWildcard(_userinfo);\n\nvar _localStoreKey = __webpack_require__(63);\n\nvar LocalStoreKey = _interopRequireWildcard(_localStoreKey);\n\nvar _localStore = __webpack_require__(24);\n\nvar _localStore2 = _interopRequireDefault(_localStore);\n\nvar _store2 = __webpack_require__(149);\n\nvar StoreActionsFromFile = _interopRequireWildcard(_store2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_React$Component) {\n\t_inherits(Index, _React$Component);\n\n\tfunction Index(props, context) {\n\t\t_classCallCheck(this, Index);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props, context));\n\n\t\t_this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);\n\t\t_this.state = {\n\t\t\tinitPage: false\n\t\t};\n\t\treturn _this;\n\t}\n\n\t_createClass(Index, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tthis.state.initPage ? this.props.children : _react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\t'\\u52A0\\u8F7D\\u4E2D...'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar cityName = _localStore2.default.getItem(LocalStoreKey.CITYNAME);\n\t\t\tvar userName = _localStore2.default.getItem(LocalStoreKey.USERNAME);\n\t\t\tvar store = _localStore2.default.get(LocalStoreKey.SHOPSSTORE);\n\t\t\tif (cityName == null) {\n\t\t\t\tcityName = '杭州';\n\t\t\t}\n\t\t\tif (userName == null) {\n\t\t\t\tuserName = '';\n\t\t\t}\n\t\t\tif (store == null) {\n\t\t\t\tstore = [];\n\t\t\t}\n\n\t\t\tthis.props.userInfoActions.update({\n\t\t\t\tcityName: cityName,\n\t\t\t\tuserName: userName\n\t\t\t});\n\t\t\tthis.props.storeActions.update(store);\n\t\t\tthis.setState({\n\t\t\t\tinitPage: true\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn Index;\n}(_react2.default.Component);\n\nfunction mapStateToProps() {\n\treturn {};\n}\n\nfunction mapDispatchToProps(dispatch) {\n\treturn {\n\t\tuserInfoActions: (0, _redux.bindActionCreators)(UserInfoActionsFromOtherFile, dispatch),\n\t\tstoreActions: (0, _redux.bindActionCreators)(StoreActionsFromFile, dispatch)\n\t};\n}\n\nvar IndexContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);\n\nexports.default = IndexContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9pbmRleC5qc3g/MDViYyJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIlVzZXJJbmZvQWN0aW9uc0Zyb21PdGhlckZpbGUiLCJMb2NhbFN0b3JlS2V5IiwiU3RvcmVBY3Rpb25zRnJvbUZpbGUiLCJJbmRleCIsInByb3BzIiwiY29udGV4dCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImJpbmQiLCJzdGF0ZSIsImluaXRQYWdlIiwiY2hpbGRyZW4iLCJjaXR5TmFtZSIsImdldEl0ZW0iLCJDSVRZTkFNRSIsInVzZXJOYW1lIiwiVVNFUk5BTUUiLCJzdG9yZSIsImdldCIsIlNIT1BTU1RPUkUiLCJ1c2VySW5mb0FjdGlvbnMiLCJ1cGRhdGUiLCJzdG9yZUFjdGlvbnMiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiSW5kZXhDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztJQUFZQSxXOztBQUNaOztJQUFZQyw0Qjs7QUFDWjs7SUFBWUMsYTs7QUFDWjs7OztBQUNBOztJQUFZQyxvQjs7Ozs7Ozs7Ozs7O0lBRU5DLEs7OztBQUNMLGdCQUFhQyxLQUFiLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBLDRHQUNyQkQsS0FEcUIsRUFDZkMsT0FEZTs7QUFFM0IsUUFBS0MscUJBQUwsR0FBNkIscUNBQWdCQSxxQkFBaEIsQ0FBc0NDLElBQXRDLE9BQTdCO0FBQ0EsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQVM7QUFERyxHQUFiO0FBSDJCO0FBTTNCOzs7OzJCQUNTO0FBQ1QsVUFDQztBQUFBO0FBQUE7QUFDSyxTQUFLRCxLQUFMLENBQVdDLFFBQVgsR0FDRixLQUFLTCxLQUFMLENBQVdNLFFBRFQsR0FFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEgsSUFERDtBQVFBOzs7c0NBRW9CO0FBQ3BCLE9BQUlDLFdBQVcscUJBQVdDLE9BQVgsQ0FBbUJYLGNBQWNZLFFBQWpDLENBQWY7QUFDQSxPQUFJQyxXQUFXLHFCQUFXRixPQUFYLENBQW1CWCxjQUFjYyxRQUFqQyxDQUFmO0FBQ0EsT0FBSUMsUUFBUSxxQkFBV0MsR0FBWCxDQUFlaEIsY0FBY2lCLFVBQTdCLENBQVo7QUFDQSxPQUFHUCxZQUFZLElBQWYsRUFBcUI7QUFDcEJBLGVBQVcsSUFBWDtBQUNBO0FBQ0QsT0FBR0csWUFBWSxJQUFmLEVBQXFCO0FBQ3BCQSxlQUFXLEVBQVg7QUFDQTtBQUNELE9BQUdFLFNBQVMsSUFBWixFQUFrQjtBQUNqQkEsWUFBUSxFQUFSO0FBQ0E7O0FBRUQsUUFBS1osS0FBTCxDQUFXZSxlQUFYLENBQTJCQyxNQUEzQixDQUFrQztBQUNqQ1Qsc0JBRGlDO0FBRWpDRztBQUZpQyxJQUFsQztBQUlBLFFBQUtWLEtBQUwsQ0FBV2lCLFlBQVgsQ0FBd0JELE1BQXhCLENBQStCSixLQUEvQjtBQUNBLFFBQUtNLFFBQUwsQ0FBYztBQUNiYixjQUFTO0FBREksSUFBZDtBQUdBOzs7O0VBekNrQixnQkFBTWMsUzs7QUE0QzFCLFNBQVNDLGVBQVQsR0FBNEI7QUFDM0IsUUFBTyxFQUFQO0FBQ0E7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNkJDLFFBQTdCLEVBQXVDO0FBQ3RDLFFBQU87QUFDTlAsbUJBQWlCLCtCQUFtQm5CLDRCQUFuQixFQUFnRDBCLFFBQWhELENBRFg7QUFFTkwsZ0JBQWMsK0JBQW1CbkIsb0JBQW5CLEVBQXdDd0IsUUFBeEM7QUFGUixFQUFQO0FBSUE7O0FBRUQsSUFBTUMsaUJBQWlCLHlCQUN0QkgsZUFEc0IsRUFFdEJDLGtCQUZzQixFQUdyQnRCLEtBSHFCLENBQXZCOztrQkFLZXdCLGMiLCJmaWxlIjoiMzk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUHVyZVJlbmRlck1peGluIGZyb20gJ3JlYWN0LWFkZG9ucy1wdXJlLXJlbmRlci1taXhpbidcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JlJ1xyXG5pbXBvcnQgKiBhcyBVc2VySW5mb0FjdGlvbnNGcm9tT3RoZXJGaWxlIGZyb20gJy4uL2FjdGlvbnMvdXNlcmluZm8nXHJcbmltcG9ydCAqIGFzIExvY2FsU3RvcmVLZXkgZnJvbSAnLi4vY29uZmlnL2xvY2FsU3RvcmVLZXknXHJcbmltcG9ydCBMb2NhbFN0b3JlIGZyb20gJy4uL3V0aWwvbG9jYWxTdG9yZSdcclxuaW1wb3J0ICogYXMgU3RvcmVBY3Rpb25zRnJvbUZpbGUgZnJvbSAnLi4vYWN0aW9ucy9zdG9yZSc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKHByb3BzLGNvbnRleHQpIHtcclxuXHRcdHN1cGVyKHByb3BzLGNvbnRleHQpO1xyXG5cdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBQdXJlUmVuZGVyTWl4aW4uc2hvdWxkQ29tcG9uZW50VXBkYXRlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpbml0UGFnZTpmYWxzZVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7ICAgdGhpcy5zdGF0ZS5pbml0UGFnZVxyXG5cdFx0XHRcdFx0P3RoaXMucHJvcHMuY2hpbGRyZW5cclxuXHRcdFx0XHRcdDo8ZGl2PuWKoOi9veS4rS4uLjwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cdFxyXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuXHRcdGxldCBjaXR5TmFtZSA9IExvY2FsU3RvcmUuZ2V0SXRlbShMb2NhbFN0b3JlS2V5LkNJVFlOQU1FKTtcclxuXHRcdGxldCB1c2VyTmFtZSA9IExvY2FsU3RvcmUuZ2V0SXRlbShMb2NhbFN0b3JlS2V5LlVTRVJOQU1FKTtcclxuXHRcdGxldCBzdG9yZSA9IExvY2FsU3RvcmUuZ2V0KExvY2FsU3RvcmVLZXkuU0hPUFNTVE9SRSk7XHJcblx0XHRpZihjaXR5TmFtZSA9PSBudWxsKSB7XHJcblx0XHRcdGNpdHlOYW1lID0gJ+adreW3nic7XHJcblx0XHR9XHJcblx0XHRpZih1c2VyTmFtZSA9PSBudWxsKSB7XHJcblx0XHRcdHVzZXJOYW1lID0gJyc7XHJcblx0XHR9XHJcblx0XHRpZihzdG9yZSA9PSBudWxsKSB7XHJcblx0XHRcdHN0b3JlID0gW107XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucHJvcHMudXNlckluZm9BY3Rpb25zLnVwZGF0ZSh7XHJcblx0XHRcdGNpdHlOYW1lLFxyXG5cdFx0XHR1c2VyTmFtZVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnByb3BzLnN0b3JlQWN0aW9ucy51cGRhdGUoc3RvcmUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGluaXRQYWdlOnRydWVcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKCkge1xyXG5cdHJldHVybiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMgKGRpc3BhdGNoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHVzZXJJbmZvQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKFVzZXJJbmZvQWN0aW9uc0Zyb21PdGhlckZpbGUsZGlzcGF0Y2gpLFxyXG5cdFx0c3RvcmVBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoU3RvcmVBY3Rpb25zRnJvbUZpbGUsZGlzcGF0Y2gpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBJbmRleENvbnRhaW5lciA9IGNvbm5lY3QgKFxyXG5cdG1hcFN0YXRlVG9Qcm9wcyxcclxuXHRtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShJbmRleClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Q29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL2luZGV4LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///397\n")}});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_eduardo_Desktop_Solidity_Course_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_eduardo_Desktop_Solidity_Course_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_eduardo_Desktop_Solidity_Course_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\nvar RequestIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(RequestIndex, Component1);\n    var _super = _createSuper(RequestIndex);\n    function RequestIndex() {\n        _classCallCheck(this, RequestIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(RequestIndex, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Requests\"\n                        }, void 0, false, {\n                            fileName: \"/home/eduardo/Desktop/Solidity Course/kickstart/pages/campaigns/requests/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                            route: \"/campaigns/\".concat(this.props.address, \"/requests/new\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                primary: true,\n                                children: \" Add Request \"\n                            }, void 0, false, {\n                                fileName: \"/home/eduardo/Desktop/Solidity Course/kickstart/pages/campaigns/requests/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/eduardo/Desktop/Solidity Course/kickstart/pages/campaigns/requests/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/eduardo/Desktop/Solidity Course/kickstart/pages/campaigns/requests/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return _asyncToGenerator(_home_eduardo_Desktop_Solidity_Course_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var address, campaign;\n                    return _home_eduardo_Desktop_Solidity_Course_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                address = props.query.address;\n                                campaign = _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n                                return _ctx.abrupt(\"return\", {\n                                    address: address\n                                });\n                            case 3:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return RequestIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0U7QUFDSjtBQUNTO0FBQ0U7QUFFbEQsZ0JBQWtCLGlCQW9CZjs7OzthQXBCR00sWUFBWTs7Ozs7O1lBUWRDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNMLHFCQUNJLDhEQUFDSCwwREFBTTs7c0NBQ0gsOERBQUNJLElBQUU7c0NBQUMsVUFBUTs7Ozs7Z0NBQUs7c0NBQ2pCLDhEQUFDTCx5Q0FBSTs0QkFBQ00sS0FBSyxFQUFFLGFBQVksQ0FBcUIsTUFBYSxDQUFoQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxFQUFDLGVBQWEsQ0FBQztzQ0FDeEQsNEVBQUNULHFEQUFNO2dDQUFDVSxPQUFPOzBDQUFDLGVBQWE7Ozs7O29DQUFTOzs7OztnQ0FDbkM7Ozs7Ozt3QkFDRixDQUNYO2FBQ0w7Ozs7WUFoQllDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWUsQ0FBQ0gsS0FBSzt1QkFBbEMsZ01BQW9DO3dCQUN4QkMsT0FBTyxFQUNURyxRQUFROzs7O2dDQURSLE9BQVMsR0FBS0osS0FBSyxDQUFDSyxLQUFLLENBQXZCSixPQUFPLENBQWlCO2dDQUMxQkcsUUFBUSxHQUFHVCwwREFBUTs2REFFbEI7b0NBQUVNLE9BQU8sRUFBUEEsT0FBTztpQ0FBRTs7Ozs7O2lCQUNyQjthQUFBOzs7O0NBWUosQ0FsQjBCViw0Q0FBUyxDQWtCbkM7QUFFRCwrREFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcz9kNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ25cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBBZGQgUmVxdWVzdCA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJMaW5rIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJSZXF1ZXN0SW5kZXgiLCJyZW5kZXIiLCJoMyIsInJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwicHJpbWFyeSIsImdldEluaXRpYWxQcm9wcyIsImNhbXBhaWduIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/index.js\n");

/***/ })

});
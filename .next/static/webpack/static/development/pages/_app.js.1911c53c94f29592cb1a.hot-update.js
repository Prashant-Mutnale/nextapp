webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/redux/reducer/index.js");
 // import thunk from 'redux-thunk';

 // import logger from 'redux-logger'

var initialstate = {};
var middleware = [thunk, logger]; // const makeStore = createStore(rootReducer, initialstate, applyMiddleware(...middleware));
// export default makeStore

var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware));
};

/***/ })

})
//# sourceMappingURL=_app.js.1911c53c94f29592cb1a.hot-update.js.map
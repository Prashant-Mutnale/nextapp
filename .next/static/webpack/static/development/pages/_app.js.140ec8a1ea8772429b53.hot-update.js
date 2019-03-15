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
// const initialstate = {};
// const middleware = [thunk, logger]
// const makeStore = createStore(rootReducer, initialstate, applyMiddleware(...middleware));
// export default makeStore

var makeStore = function makeStore(initialState, options, rootReducer) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState);
};

/***/ })

})
//# sourceMappingURL=_app.js.140ec8a1ea8772429b53.hot-update.js.map
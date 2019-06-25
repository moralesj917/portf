webpackHotUpdate("static/development/pages/about.js",{

/***/ "./component/About/SectionTwo.js":
/*!***************************************!*\
  !*** ./component/About/SectionTwo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _futureCards_futureCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./futureCards/futureCards */ "./component/About/futureCards/futureCards.js");



var SectionTwo = function SectionTwo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Future Endeavors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_futureCards_futureCards__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Learn Golang",
    summary: "I'm energetic Software engineer who loves to solve problems. I enjoy working in a  team environment because it allows me to have different perspectives on writing and creating  code. I always love challenging myself to learn new skills as well as sharpening the skills i already have.",
    imgFilePath: "../../static/images/golang_gopher.png"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTwo);

/***/ }),

/***/ "./component/About/futureCards/futureCards.js":
/*!****************************************************!*\
  !*** ./component/About/futureCards/futureCards.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FutureCards = function FutureCards(_ref) {
  var title = _ref.title,
      summary = _ref.summary,
      imgFilePath = _ref.imgFilePath;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FutureCards"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FutureCards-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, summary)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgFilePath
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FutureCards);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/layout/Layout */ "./component/layout/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_About_SectionOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/About/SectionOne */ "./component/About/SectionOne.js");
/* harmony import */ var _component_About_SectionTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/About/SectionTwo */ "./component/About/SectionTwo.js");







var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "black-bckgrnd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "background-nav",
    src: "../static/images/photo1.jpeg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_About_SectionOne__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_About_SectionTwo__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.c05aac49df11d2a1f4c3.hot-update.js.map
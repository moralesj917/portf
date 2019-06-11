webpackHotUpdate("static/development/pages/index.js",{

/***/ "./component/CustomizedTabs.js":
/*!*************************************!*\
  !*** ./component/CustomizedTabs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedTabs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "/Users/Jonathan/Documents/next.js/component/CustomizedTabs.js";




 // const AntTabs = withStyles({
//   root: {
//     borderBottom: '1px solid #e8e8e8',
//   },
//   indicator: {
//     backgroundColor: '#1890ff',
//   },
// })(Tabs);
// const AntTab = withStyles(theme => ({
//   root: {
//     textTransform: 'none',
//     minWidth: 72,
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(4),
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       color: '#40a9ff',
//       opacity: 1,
//     },
//     '&$selected': {
//       color: '#1890ff',
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     '&:focus': {
//       color: '#40a9ff',
//     },
//   },
//   selected: {},
// }))(props => <Tab disableRipple {...props} />);

var StyledTabs = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7'
    }
  }
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    TabIndicatorProps: {
      children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }));
});
var StyledTab = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1
      }
    }
  };
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    disableRipple: true
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    typography: {
      padding: theme.spacing(3)
    },
    demo2: {
      backgroundColor: '#2e1534'
    }
  };
});
function CustomizedTabs() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.demo2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTabs, {
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTab, {
    label: "Workflows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTab, {
    label: "Datasets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTab, {
    label: "Connections",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.typography,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.692358a81ca4a3268088.hot-update.js.map
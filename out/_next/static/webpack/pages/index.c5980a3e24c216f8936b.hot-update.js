webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CodeBlock.tsx":
/*!**********************************!*\
  !*** ./components/CodeBlock.tsx ***!
  \**********************************/
/*! exports provided: RawCodeBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawCodeBlock", function() { return RawCodeBlock; });
/* harmony import */ var _mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prism-react-renderer/themes/github */ "./node_modules/prism-react-renderer/themes/github/index.js");




var _jsxFileName = "/mnt/d/Code/secman-team.github.io/components/CodeBlock.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





(typeof global !== "undefined" ? global : window).Prism = prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["Prism"];

__webpack_require__(/*! prismjs/components/prism-rust */ "./node_modules/prismjs/components/prism-rust.js");

__webpack_require__(/*! prismjs/components/prism-toml */ "./node_modules/prismjs/components/prism-toml.js");

function RawCodeBlock(_ref) {
  _s();

  var _this = this;

  var code = _ref.code,
      language = _ref.language,
      extraClassName = _ref.className,
      disablePrefixes = _ref.disablePrefixes,
      _ref$enableLineRef = _ref.enableLineRef,
      enableLineRef = _ref$enableLineRef === void 0 ? false : _ref$enableLineRef;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      hashValue = _useState[0],
      setHashValue = _useState[1];

  var codeDivClassNames = "text-gray-300 token-line text-right select-none text-xs";

  var onClick = function onClick(e) {
    if (e.shiftKey) {
      e.preventDefault();
      var _location = location,
          hash = _location.hash;
      var target = e.target.hash;
      location.hash = hash ? hash.replace(/(-.+)?$/, target.replace("#", "-")) : target;
    }
  };

  if (enableLineRef) {
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      var onHashChange = function onHashChange() {
        var _document$getElementB;

        setHashValue(location.hash);
        var id = location.hash.substring(1);
        (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView();
      };

      window.addEventListener("hashchange", onHashChange);
      onHashChange();
      return function () {
        window.removeEventListener("hashchange", onHashChange);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
      var parts = hashValue.split("-");

      if (parts.length > 1) {
        var hash = parts.map(function (e) {
          return /([\d]+)/.exec(e)[0];
        }).map(function (e) {
          return parseInt(e, 10);
        }).sort(function (a, b) {
          return a - b;
        }).map(function (e) {
          return "L".concat(e);
        });

        if (hash.length) {
          var idEl = document.getElementById(hash[0]);

          if (idEl) {
            idEl.scrollIntoView({
              block: "center",
              behavior: "smooth"
            });
            return;
          }
        }
      }
    });
  }

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Prism: prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["Prism"],
    theme: prism_react_renderer_themes_github__WEBPACK_IMPORTED_MODULE_5__["default"],
    code: code // @ts-expect-error because typings are bad
    ,
    language: language === "shell" ? "bash" : language === "text" ? "diff" : language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      className: className + " flex overflow-y-auto " + (extraClassName !== null && extraClassName !== void 0 ? extraClassName : ""),
      style: _objectSpread({}, style),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }
    }, !disablePrefixes && tokens.length === 1 && (language === "bash" || language === "shell") && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: codeDivClassNames,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, tokens.map(function (line, i) {
      var _line$;

      return (_line$ = line[0]) !== null && _line$ !== void 0 && _line$.empty && i === tokens.length - 1 ? null : __jsx("div", {
        key: i + "l",
        className: codeDivClassNames,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 19
        }
      }, enableLineRef ? __jsx("a", {
        id: "L".concat(i + 1),
        href: "#L".concat(i + 1),
        onClick: enableLineRef && onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 23
        }
      }, i + 1, " ") : i + 1);
    })), __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, tokens.map(function (line, i) {
      var _line$2;

      var lineProps = getLineProps({
        line: line,
        key: i
      });
      lineProps.className += " text-xs";

      if (enableLineRef && hashValue && function (arr, index) {
        return Math.min.apply(Math, Object(_mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr)) <= index && index <= Math.max.apply(Math, Object(_mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr));
      }(hashValue.split("-").map(function (e) {
        return /([\d]+)/.exec(e)[1];
      }).map(function (n) {
        return parseInt(n, 10);
      }), i + 1)) {
        lineProps.className = "".concat(lineProps.className, " highlight-line");
      }

      return (_line$2 = line[0]) !== null && _line$2 !== void 0 && _line$2.empty && i === tokens.length - 1 ? null : __jsx("div", Object(_mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: i
      }, lineProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 17
        }
      }), line.map(function (token, key) {
        return __jsx("span", Object(_mnt_d_Code_secman_team_github_io_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        }), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 21
          }
        }));
      }));
    })));
  });
}

_s(RawCodeBlock, "5sFbE9in6Yu3fOPw3kwAdBHf0Io=");

_c = RawCodeBlock;

function CodeBlock(_ref3) {
  var code = _ref3.code,
      language = _ref3.language,
      disablePrefixes = _ref3.disablePrefixes;
  return __jsx(RawCodeBlock, {
    code: code,
    language: language,
    disablePrefixes: disablePrefixes,
    className: "p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  });
}

_c2 = CodeBlock;
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

var _c, _c2;

$RefreshReg$(_c, "RawCodeBlock");
$RefreshReg$(_c2, "CodeBlock");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/github/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/github/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  plain: {
    color: "rgb(36, 41, 46)",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword"],
    style: {
      color: "rgb(215, 58, 73)",
      color: "#e3116c"
    }
  }, {
    types: ["inserted-sign", "inserted"],
    style: {
      backgroundColor: "rgb(240, 255, 244)",
      color: "rgb(34, 134, 58)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted-sign", "deleted"],
    style: {
      backgroundColor: "rgb(255, 238, 240)",
      color: "rgb(179, 29, 40)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    // Fix tag color
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    // Fix tag color for HTML
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(36, 41, 46)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(0, 92, 197)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(0, 92, 197)"
    }
  }, {
    // Fix punctuation color for HTML
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(111, 66, 193)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["known-class-name", "class-name"],
    style: {
      color: "rgb(227, 98, 9)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }, {
    types: ["property-access"],
    style: {
      color: "rgb(0, 92, 197)"
    }
  }, {
    types: ["method", "function", "property-access"],
    style: {
      color: "rgb(111, 66, 193)"
    }
  }, {
    languages: ["json"],
    types: ["property"],
    style: {
      color: "rgb(3, 47, 98)"
    }
  }, {
    languages: ["json"],
    types: ["string"],
    style: {
      color: "rgb(3, 47, 98)"
    }
  }, {
    languages: ["json"],
    types: ["number"],
    style: {
      color: "rgb(0, 92, 197)"
    }
  }, {
    languages: ["json"],
    types: ["comment"],
    style: {
      backgroundColor: "rgb(179, 29, 40)",
      color: "rgb(250, 251, 252)"
    }
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1Yi9pbmRleC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJ3aW5kb3ciLCJQcmlzbSIsInJlcXVpcmUiLCJSYXdDb2RlQmxvY2siLCJjb2RlIiwibGFuZ3VhZ2UiLCJleHRyYUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImRpc2FibGVQcmVmaXhlcyIsImVuYWJsZUxpbmVSZWYiLCJ1c2VTdGF0ZSIsImhhc2hWYWx1ZSIsInNldEhhc2hWYWx1ZSIsImNvZGVEaXZDbGFzc05hbWVzIiwib25DbGljayIsImUiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJoYXNoIiwidGFyZ2V0IiwicmVwbGFjZSIsInVzZUVmZmVjdCIsIm9uSGFzaENoYW5nZSIsImlkIiwic3Vic3RyaW5nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VMYXlvdXRFZmZlY3QiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwibWFwIiwiZXhlYyIsInBhcnNlSW50Iiwic29ydCIsImEiLCJiIiwiaWRFbCIsImJsb2NrIiwiYmVoYXZpb3IiLCJsaWdodCIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsImxpbmUiLCJpIiwiZW1wdHkiLCJsaW5lUHJvcHMiLCJrZXkiLCJhcnIiLCJpbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJuIiwidG9rZW4iLCJDb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxDQUFDLE9BQU9BLE1BQVAsS0FB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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSxvRUFBSyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1OTgwYTNlMjRjMjE2Zjg5MzZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0LCB7IFByaXNtIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9wYWdlcy9hcGkvdGhlbWVcIjtcclxuXHJcbih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogKHdpbmRvdyBhcyBhbnkpKS5QcmlzbSA9IFByaXNtO1xyXG5cclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0XCIpO1xyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRvbWxcIik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvZGVCbG9ja1Byb3BzIHtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgZGlzYWJsZVByZWZpeGVzPzogYm9vbGVhbjtcclxuICBsYW5ndWFnZTpcclxuICAgIHwgXCJqYXZhc2NyaXB0XCJcclxuICAgIHwgXCJ0eXBlc2NyaXB0XCJcclxuICAgIHwgXCJqc3hcIlxyXG4gICAgfCBcInRzeFwiXHJcbiAgICB8IFwianNvblwiXHJcbiAgICB8IFwieWFtbFwiXHJcbiAgICB8IFwibWFya2Rvd25cIlxyXG4gICAgfCBcImJhc2hcIlxyXG4gICAgfCBcInNoZWxsXCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJydXN0XCJcclxuICAgIHwgXCJweXRob25cIlxyXG4gICAgfCBcInRvbWxcIlxyXG4gICAgfCBcIndhc21cIlxyXG4gICAgfCBcIm1ha2VmaWxlXCJcclxuICAgIHwgXCJkb2NrZXJmaWxlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSYXdDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgY2xhc3NOYW1lOiBleHRyYUNsYXNzTmFtZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbiAgZW5hYmxlTGluZVJlZiA9IGZhbHNlLFxyXG59OiBDb2RlQmxvY2tQcm9wcyAmIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZW5hYmxlTGluZVJlZj86IGJvb2xlYW47XHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtoYXNoVmFsdWUsIHNldEhhc2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjb2RlRGl2Q2xhc3NOYW1lcyA9XHJcbiAgICBcInRleHQtZ3JheS0zMDAgdG9rZW4tbGluZSB0ZXh0LXJpZ2h0IHNlbGVjdC1ub25lIHRleHQteHNcIjtcclxuICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBoYXNoIH0gPSBsb2NhdGlvbjtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5oYXNoO1xyXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxyXG4gICAgICAgID8gaGFzaC5yZXBsYWNlKC8oLS4rKT8kLywgdGFyZ2V0LnJlcGxhY2UoXCIjXCIsIFwiLVwiKSlcclxuICAgICAgICA6IHRhcmdldDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZW5hYmxlTGluZVJlZikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb25IYXNoQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhhc2hWYWx1ZShsb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIG9uSGFzaENoYW5nZSgpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gaGFzaFZhbHVlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBoYXNoID0gcGFydHNcclxuICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMF0pXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBwYXJzZUludChlLCAxMCkpXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBgTCR7ZX1gKTtcclxuICAgICAgICBpZiAoaGFzaC5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoWzBdKTtcclxuICAgICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaWdobGlnaHRcclxuICAgICAgUHJpc209e1ByaXNtfVxyXG4gICAgICB0aGVtZT17bGlnaHR9XHJcbiAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYmVjYXVzZSB0eXBpbmdzIGFyZSBiYWRcclxuICAgICAgbGFuZ3VhZ2U9e1xyXG4gICAgICAgIGxhbmd1YWdlID09PSBcInNoZWxsXCIgPyBcImJhc2hcIiA6IGxhbmd1YWdlID09PSBcInRleHRcIiA/IFwiZGlmZlwiIDogbGFuZ3VhZ2VcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgIDxwcmVcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArIFwiIGZsZXggb3ZlcmZsb3cteS1hdXRvIFwiICsgKGV4dHJhQ2xhc3NOYW1lID8/IFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHshZGlzYWJsZVByZWZpeGVzICYmXHJcbiAgICAgICAgICAgIHRva2Vucy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgKGxhbmd1YWdlID09PSBcImJhc2hcIiB8fCBsYW5ndWFnZSA9PT0gXCJzaGVsbFwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PiQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dG9rZW5zLmxlbmd0aCA+IDEgJiYgIWRpc2FibGVQcmVmaXhlcyAmJiAoXHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInByLTIgc206cHItM1wiPlxyXG4gICAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgbGluZVswXT8uZW1wdHkgJiYgaSA9PT0gdG9rZW5zLmxlbmd0aCAtIDEgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIFwibFwifSBjbGFzc05hbWU9e2NvZGVEaXZDbGFzc05hbWVzfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZW5hYmxlTGluZVJlZiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgTCR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCNMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmFibGVMaW5lUmVmICYmIG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVQcm9wcyA9IGdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KTtcclxuICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lICs9IFwiIHRleHQteHNcIjtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbmFibGVMaW5lUmVmICYmXHJcbiAgICAgICAgICAgICAgICBoYXNoVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICgoYXJyLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgTWF0aC5taW4oLi4uYXJyKSA8PSBpbmRleCAmJiBpbmRleCA8PSBNYXRoLm1heCguLi5hcnIpKShcclxuICAgICAgICAgICAgICAgICAgaGFzaFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobikgPT4gcGFyc2VJbnQobiwgMTApKSxcclxuICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgPSBgJHtsaW5lUHJvcHMuY2xhc3NOYW1lfSBoaWdobGlnaHQtbGluZWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gey4uLmxpbmVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17a2V5fSB7Li4uZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgICl9XHJcbiAgICA8L0hpZ2hsaWdodD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG59OiBDb2RlQmxvY2tQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSYXdDb2RlQmxvY2tcclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICBkaXNhYmxlUHJlZml4ZXM9e2Rpc2FibGVQcmVmaXhlc31cclxuICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xyXG4iLCJ2YXIgdGhlbWUgPSB7XG4gIHBsYWluOiB7XG4gICAgY29sb3I6IFwicmdiKDM2LCA0MSwgNDYpXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNmY4ZmFcIlxuICB9LFxuICBzdHlsZXM6IFt7XG4gICAgdHlwZXM6IFtcInByb2xvZ1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDAsIDAsIDEyOClcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJjb21tZW50XCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoMTA2LCAxNTMsIDg1KVwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcImJ1aWx0aW5cIiwgXCJjaGFuZ2VkXCIsIFwia2V5d29yZFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDIxNSwgNTgsIDczKVwiLFxuICAgICAgY29sb3I6IFwiI2UzMTE2Y1wiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcImluc2VydGVkLXNpZ25cIiwgXCJpbnNlcnRlZFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDAsIDI1NSwgMjQ0KVwiLFxuICAgICAgY29sb3I6IFwicmdiKDM0LCAxMzQsIDU4KVwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcImNvbnN0YW50XCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoMTAwLCAxMDIsIDE0OSlcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJhdHRyLW5hbWVcIiwgXCJ2YXJpYWJsZVwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDE1NiwgMjIwLCAyNTQpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiZGVsZXRlZC1zaWduXCIsIFwiZGVsZXRlZFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDIzOCwgMjQwKVwiLFxuICAgICAgY29sb3I6IFwicmdiKDE3OSwgMjksIDQwKVwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcInNlbGVjdG9yXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoMjE1LCAxODYsIDEyNSlcIlxuICAgIH1cbiAgfSwge1xuICAgIC8vIEZpeCB0YWcgY29sb3JcbiAgICB0eXBlczogW1widGFnXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoNzgsIDIwMSwgMTc2KVwiXG4gICAgfVxuICB9LCB7XG4gICAgLy8gRml4IHRhZyBjb2xvciBmb3IgSFRNTFxuICAgIHR5cGVzOiBbXCJ0YWdcIl0sXG4gICAgbGFuZ3VhZ2VzOiBbXCJtYXJrdXBcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcInJnYig4NiwgMTU2LCAyMTQpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wicHVuY3R1YXRpb25cIiwgXCJvcGVyYXRvclwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDM2LCA0MSwgNDYpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wib3BlcmF0b3JcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcInJnYigwLCA5MiwgMTk3KVwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcImJvb2xlYW5cIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcInJnYigwLCA5MiwgMTk3KVwiXG4gICAgfVxuICB9LCB7XG4gICAgLy8gRml4IHB1bmN0dWF0aW9uIGNvbG9yIGZvciBIVE1MXG4gICAgdHlwZXM6IFtcInB1bmN0dWF0aW9uXCJdLFxuICAgIGxhbmd1YWdlczogW1wibWFya3VwXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjODA4MDgwXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiZnVuY3Rpb25cIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcInJnYigxMTEsIDY2LCAxOTMpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiY2xhc3MtbmFtZVwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDc4LCAyMDEsIDE3NilcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJrbm93bi1jbGFzcy1uYW1lXCIsIFwiY2xhc3MtbmFtZVwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDIyNywgOTgsIDkpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiY2hhclwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDIwOSwgMTA1LCAxMDUpXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wicHJvcGVydHktYWNjZXNzXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoMCwgOTIsIDE5NylcIlxuICAgIH1cbiAgfSwge1xuICAgIHR5cGVzOiBbXCJtZXRob2RcIiwgXCJmdW5jdGlvblwiLCBcInByb3BlcnR5LWFjY2Vzc1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDExMSwgNjYsIDE5MylcIlxuICAgIH1cbiAgfSwge1xuICAgIGxhbmd1YWdlczogW1wianNvblwiXSxcbiAgICB0eXBlczogW1wicHJvcGVydHlcIl0sXG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiBcInJnYigzLCA0NywgOTgpXCJcbiAgICB9XG4gIH0sIHtcbiAgICBsYW5ndWFnZXM6IFtcImpzb25cIl0sXG4gICAgdHlwZXM6IFtcInN0cmluZ1wiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwicmdiKDMsIDQ3LCA5OClcIlxuICAgIH1cbiAgfSwge1xuICAgIGxhbmd1YWdlczogW1wianNvblwiXSxcbiAgICB0eXBlczogW1wibnVtYmVyXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCJyZ2IoMCwgOTIsIDE5NylcIlxuICAgIH1cbiAgfSwge1xuICAgIGxhbmd1YWdlczogW1wianNvblwiXSxcbiAgICB0eXBlczogW1wiY29tbWVudFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxNzksIDI5LCA0MClcIixcbiAgICAgIGNvbG9yOiBcInJnYigyNTAsIDI1MSwgMjUyKVwiXG4gICAgfVxuICB9XVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9
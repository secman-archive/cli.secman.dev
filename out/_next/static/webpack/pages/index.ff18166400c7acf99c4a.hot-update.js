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
    theme: darl,
    code: code // @ts-expect-error because typings are bad
    ,
    language: language === "shell" ? "bash" : language === "text" ? "diff" : language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
        lineNumber: 101,
        columnNumber: 9
      }
    }, !disablePrefixes && tokens.length === 1 && (language === "bash" || language === "shell") && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: codeDivClassNames,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
          lineNumber: 118,
          columnNumber: 19
        }
      }, enableLineRef ? __jsx("a", {
        id: "L".concat(i + 1),
        href: "#L".concat(i + 1),
        onClick: enableLineRef && onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 23
        }
      }, i + 1, " ") : i + 1);
    })), __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
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
          lineNumber: 154,
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
            lineNumber: 156,
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
      lineNumber: 174,
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
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsImRhcmwiLCJzdHlsZSIsInRva2VucyIsImdldExpbmVQcm9wcyIsImdldFRva2VuUHJvcHMiLCJsaW5lIiwiaSIsImVtcHR5IiwibGluZVByb3BzIiwia2V5IiwiYXJyIiwiaW5kZXgiLCJNYXRoIiwibWluIiwibWF4IiwibiIsInRva2VuIiwiQ29kZUJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsQ0FBQyxPQUFPQSxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUEwQ0MsTUFBM0MsRUFBMkRDLEtBQTNELEdBQW1FQSwwREFBbkU7O0FBRUFDLG1CQUFPLENBQUMsc0ZB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LGVBQ3FDLFNBRHJDQSxlQUNxQztBQUNyQyxTQUNFLE1BQUMsWUFBRDtBQUNFLFFBQUksRUFBRUosSUFEUjtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLG1CQUFlLEVBQUVHLGVBSG5CO0FBSUUsYUFBUyxFQUFDLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O01BYlFxRCxTO0FBZU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmMTgxNjY0MDBjN2FjZjk5YzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0LCB7IFByaXNtIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogKHdpbmRvdyBhcyBhbnkpKS5QcmlzbSA9IFByaXNtO1xyXG5cclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0XCIpO1xyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRvbWxcIik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvZGVCbG9ja1Byb3BzIHtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgZGlzYWJsZVByZWZpeGVzPzogYm9vbGVhbjtcclxuICBsYW5ndWFnZTpcclxuICAgIHwgXCJqYXZhc2NyaXB0XCJcclxuICAgIHwgXCJ0eXBlc2NyaXB0XCJcclxuICAgIHwgXCJqc3hcIlxyXG4gICAgfCBcInRzeFwiXHJcbiAgICB8IFwianNvblwiXHJcbiAgICB8IFwieWFtbFwiXHJcbiAgICB8IFwibWFya2Rvd25cIlxyXG4gICAgfCBcImJhc2hcIlxyXG4gICAgfCBcInNoZWxsXCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJydXN0XCJcclxuICAgIHwgXCJweXRob25cIlxyXG4gICAgfCBcInRvbWxcIlxyXG4gICAgfCBcIndhc21cIlxyXG4gICAgfCBcIm1ha2VmaWxlXCJcclxuICAgIHwgXCJkb2NrZXJmaWxlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSYXdDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgY2xhc3NOYW1lOiBleHRyYUNsYXNzTmFtZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbiAgZW5hYmxlTGluZVJlZiA9IGZhbHNlLFxyXG59OiBDb2RlQmxvY2tQcm9wcyAmIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZW5hYmxlTGluZVJlZj86IGJvb2xlYW47XHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtoYXNoVmFsdWUsIHNldEhhc2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjb2RlRGl2Q2xhc3NOYW1lcyA9XHJcbiAgICBcInRleHQtZ3JheS0zMDAgdG9rZW4tbGluZSB0ZXh0LXJpZ2h0IHNlbGVjdC1ub25lIHRleHQteHNcIjtcclxuICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBoYXNoIH0gPSBsb2NhdGlvbjtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5oYXNoO1xyXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxyXG4gICAgICAgID8gaGFzaC5yZXBsYWNlKC8oLS4rKT8kLywgdGFyZ2V0LnJlcGxhY2UoXCIjXCIsIFwiLVwiKSlcclxuICAgICAgICA6IHRhcmdldDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZW5hYmxlTGluZVJlZikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb25IYXNoQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhhc2hWYWx1ZShsb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIG9uSGFzaENoYW5nZSgpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gaGFzaFZhbHVlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBoYXNoID0gcGFydHNcclxuICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMF0pXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBwYXJzZUludChlLCAxMCkpXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBgTCR7ZX1gKTtcclxuICAgICAgICBpZiAoaGFzaC5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoWzBdKTtcclxuICAgICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaWdobGlnaHRcclxuICAgICAgUHJpc209e1ByaXNtfVxyXG4gICAgICB0aGVtZT17ZGFybH1cclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBiZWNhdXNlIHR5cGluZ3MgYXJlIGJhZFxyXG4gICAgICBsYW5ndWFnZT17XHJcbiAgICAgICAgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIiA/IFwiYmFzaFwiIDogbGFuZ3VhZ2UgPT09IFwidGV4dFwiID8gXCJkaWZmXCIgOiBsYW5ndWFnZVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgPHByZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICsgXCIgZmxleCBvdmVyZmxvdy15LWF1dG8gXCIgKyAoZXh0cmFDbGFzc05hbWUgPz8gXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFkaXNhYmxlUHJlZml4ZXMgJiZcclxuICAgICAgICAgICAgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAobGFuZ3VhZ2UgPT09IFwiYmFzaFwiIHx8IGxhbmd1YWdlID09PSBcInNoZWxsXCIpICYmIChcclxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+JDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0b2tlbnMubGVuZ3RoID4gMSAmJiAhZGlzYWJsZVByZWZpeGVzICYmIChcclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgXCJsXCJ9IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlbmFibGVMaW5lUmVmID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgI0wke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuYWJsZUxpbmVSZWYgJiYgb25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGluZVByb3BzID0gZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pO1xyXG4gICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgKz0gXCIgdGV4dC14c1wiO1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVuYWJsZUxpbmVSZWYgJiZcclxuICAgICAgICAgICAgICAgIGhhc2hWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgKChhcnIsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBNYXRoLm1pbiguLi5hcnIpIDw9IGluZGV4ICYmIGluZGV4IDw9IE1hdGgubWF4KC4uLmFycikpKFxyXG4gICAgICAgICAgICAgICAgICBoYXNoVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gLyhbXFxkXSspLy5leGVjKGUpIVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChuKSA9PiBwYXJzZUludChuLCAxMCkpLFxyXG4gICAgICAgICAgICAgICAgICBpICsgMVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSA9IGAke2xpbmVQcm9wcy5jbGFzc05hbWV9IGhpZ2hsaWdodC1saW5lYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSB7Li4ubGluZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICA8L3ByZT5cclxuICAgICAgKX1cclxuICAgIDwvSGlnaGxpZ2h0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvZGVCbG9jayh7XHJcbiAgY29kZSxcclxuICBsYW5ndWFnZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbn06IENvZGVCbG9ja1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJhd0NvZGVCbG9ja1xyXG4gICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgIGRpc2FibGVQcmVmaXhlcz17ZGlzYWJsZVByZWZpeGVzfVxyXG4gICAgICBjbGFzc05hbWU9XCJwLTRcIlxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
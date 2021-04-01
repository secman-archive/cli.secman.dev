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
/* harmony import */ var _pages_api_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/api/theme */ "./pages/api/theme.tsx");




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
    theme: _pages_api_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray[100],
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsInRoZW1lIiwiY29sb3JzIiwiZ3JheSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsImxpbmUiLCJpIiwiZW1wdHkiLCJsaW5lUHJvcHMiLCJrZXkiLCJhcnIiLCJpbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJuIiwidG9rZW4iLCJDb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxDQUFDLE9BQU9BLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQTBDQyxNQUEzQyxFQUEyREMsS0FBM0QsR0FBbUVBLDBEQUFu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ckMzRCxJQUdxQyxTQUhyQ0EsSUFHcUM7QUFBQSxNQUZyQ0MsUUFFcUMsU0FGckNBLFFBRXFDO0FBQUEsTUFEckNHLGVBQ3FDLFNBRHJDQSxlQUNxQztBQUNyQyxTQUNFLE1BQUMsWUFBRDtBQUNFLFFBQUksRUFBRUosSUFEUjtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLG1CQUFlLEVBQUVHLGVBSG5CO0FBSUUsYUFBUyxFQUFDLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O01BYlF1RCxTO0FBZU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI1NDY5YzBjZTBhMGVmN2I4YzZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0LCB7IFByaXNtIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9wYWdlcy9hcGkvdGhlbWVcIjtcclxuXHJcbih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogKHdpbmRvdyBhcyBhbnkpKS5QcmlzbSA9IFByaXNtO1xyXG5cclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0XCIpO1xyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRvbWxcIik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvZGVCbG9ja1Byb3BzIHtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgZGlzYWJsZVByZWZpeGVzPzogYm9vbGVhbjtcclxuICBsYW5ndWFnZTpcclxuICAgIHwgXCJqYXZhc2NyaXB0XCJcclxuICAgIHwgXCJ0eXBlc2NyaXB0XCJcclxuICAgIHwgXCJqc3hcIlxyXG4gICAgfCBcInRzeFwiXHJcbiAgICB8IFwianNvblwiXHJcbiAgICB8IFwieWFtbFwiXHJcbiAgICB8IFwibWFya2Rvd25cIlxyXG4gICAgfCBcImJhc2hcIlxyXG4gICAgfCBcInNoZWxsXCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJydXN0XCJcclxuICAgIHwgXCJweXRob25cIlxyXG4gICAgfCBcInRvbWxcIlxyXG4gICAgfCBcIndhc21cIlxyXG4gICAgfCBcIm1ha2VmaWxlXCJcclxuICAgIHwgXCJkb2NrZXJmaWxlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSYXdDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgY2xhc3NOYW1lOiBleHRyYUNsYXNzTmFtZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbiAgZW5hYmxlTGluZVJlZiA9IGZhbHNlLFxyXG59OiBDb2RlQmxvY2tQcm9wcyAmIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZW5hYmxlTGluZVJlZj86IGJvb2xlYW47XHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtoYXNoVmFsdWUsIHNldEhhc2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjb2RlRGl2Q2xhc3NOYW1lcyA9XHJcbiAgICBcInRleHQtZ3JheS0zMDAgdG9rZW4tbGluZSB0ZXh0LXJpZ2h0IHNlbGVjdC1ub25lIHRleHQteHNcIjtcclxuICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBoYXNoIH0gPSBsb2NhdGlvbjtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5oYXNoO1xyXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxyXG4gICAgICAgID8gaGFzaC5yZXBsYWNlKC8oLS4rKT8kLywgdGFyZ2V0LnJlcGxhY2UoXCIjXCIsIFwiLVwiKSlcclxuICAgICAgICA6IHRhcmdldDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZW5hYmxlTGluZVJlZikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb25IYXNoQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhhc2hWYWx1ZShsb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIG9uSGFzaENoYW5nZSgpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gaGFzaFZhbHVlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBoYXNoID0gcGFydHNcclxuICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMF0pXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBwYXJzZUludChlLCAxMCkpXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBgTCR7ZX1gKTtcclxuICAgICAgICBpZiAoaGFzaC5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoWzBdKTtcclxuICAgICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaWdobGlnaHRcclxuICAgICAgUHJpc209e1ByaXNtfVxyXG4gICAgICB0aGVtZT17dGhlbWUuY29sb3JzLmdyYXlbMTAwXX1cclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBiZWNhdXNlIHR5cGluZ3MgYXJlIGJhZFxyXG4gICAgICBsYW5ndWFnZT17XHJcbiAgICAgICAgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIiA/IFwiYmFzaFwiIDogbGFuZ3VhZ2UgPT09IFwidGV4dFwiID8gXCJkaWZmXCIgOiBsYW5ndWFnZVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgPHByZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICsgXCIgZmxleCBvdmVyZmxvdy15LWF1dG8gXCIgKyAoZXh0cmFDbGFzc05hbWUgPz8gXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFkaXNhYmxlUHJlZml4ZXMgJiZcclxuICAgICAgICAgICAgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAobGFuZ3VhZ2UgPT09IFwiYmFzaFwiIHx8IGxhbmd1YWdlID09PSBcInNoZWxsXCIpICYmIChcclxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+JDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0b2tlbnMubGVuZ3RoID4gMSAmJiAhZGlzYWJsZVByZWZpeGVzICYmIChcclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgXCJsXCJ9IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlbmFibGVMaW5lUmVmID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgI0wke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuYWJsZUxpbmVSZWYgJiYgb25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGluZVByb3BzID0gZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pO1xyXG4gICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgKz0gXCIgdGV4dC14c1wiO1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVuYWJsZUxpbmVSZWYgJiZcclxuICAgICAgICAgICAgICAgIGhhc2hWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgKChhcnIsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBNYXRoLm1pbiguLi5hcnIpIDw9IGluZGV4ICYmIGluZGV4IDw9IE1hdGgubWF4KC4uLmFycikpKFxyXG4gICAgICAgICAgICAgICAgICBoYXNoVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gLyhbXFxkXSspLy5leGVjKGUpIVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChuKSA9PiBwYXJzZUludChuLCAxMCkpLFxyXG4gICAgICAgICAgICAgICAgICBpICsgMVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSA9IGAke2xpbmVQcm9wcy5jbGFzc05hbWV9IGhpZ2hsaWdodC1saW5lYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSB7Li4ubGluZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICA8L3ByZT5cclxuICAgICAgKX1cclxuICAgIDwvSGlnaGxpZ2h0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvZGVCbG9jayh7XHJcbiAgY29kZSxcclxuICBsYW5ndWFnZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbn06IENvZGVCbG9ja1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJhd0NvZGVCbG9ja1xyXG4gICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgIGRpc2FibGVQcmVmaXhlcz17ZGlzYWJsZVByZWZpeGVzfVxyXG4gICAgICBjbGFzc05hbWU9XCJwLTRcIlxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
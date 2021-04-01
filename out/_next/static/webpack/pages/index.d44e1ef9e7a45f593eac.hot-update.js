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
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");




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
      lineNumber: 93,
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
        lineNumber: 103,
        columnNumber: 9
      }
    }, !disablePrefixes && tokens.length === 1 && (language === "bash" || language === "shell") && __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Code"], {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: codeDivClassNames,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
          lineNumber: 120,
          columnNumber: 19
        }
      }, enableLineRef ? __jsx("a", {
        id: "L".concat(i + 1),
        href: "#L".concat(i + 1),
        onClick: enableLineRef && onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 23
        }
      }, i + 1, " ") : i + 1);
    })), __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
          lineNumber: 156,
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
            lineNumber: 158,
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
      lineNumber: 176,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsImxpZ2h0Iiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibGluZSIsImkiLCJlbXB0eSIsImxpbmVQcm9wcyIsImtleSIsImFyciIsImluZGV4IiwiTWF0aCIsIm1pbiIsIm1heCIsIm4iLCJ0b2tlbiIsIkNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLENBQUMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBMENDLE1BQTNDLEVBQTJEQyxLQUEzRCxHQUFtRUEsMERBQW5FOztBQUVBQyxt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LFNBRnJDQSxRQUVxQztBQUFBLE1BRHJDRyxlQUNxQyxTQURyQ0EsZUFDcUM7QUFDckMsU0FDRSxNQUFDLFlBQUQ7QUFDRSxRQUFJLEVBQUVKLElBRFI7QUFFRSxZQUFRLEVBQUVDLFFBRlo7QUFHRSxtQkFBZSxFQUFFRyxlQUhuQjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztNQWJRcUQsUztBQWVNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDRlMWVmOWU3YTQ1ZjU5M2VhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCwgeyBQcmlzbSB9IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlclwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9naXRodWJcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcclxuXHJcbih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogKHdpbmRvdyBhcyBhbnkpKS5QcmlzbSA9IFByaXNtO1xyXG5cclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0XCIpO1xyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRvbWxcIik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvZGVCbG9ja1Byb3BzIHtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgZGlzYWJsZVByZWZpeGVzPzogYm9vbGVhbjtcclxuICBsYW5ndWFnZTpcclxuICAgIHwgXCJqYXZhc2NyaXB0XCJcclxuICAgIHwgXCJ0eXBlc2NyaXB0XCJcclxuICAgIHwgXCJqc3hcIlxyXG4gICAgfCBcInRzeFwiXHJcbiAgICB8IFwianNvblwiXHJcbiAgICB8IFwieWFtbFwiXHJcbiAgICB8IFwibWFya2Rvd25cIlxyXG4gICAgfCBcImJhc2hcIlxyXG4gICAgfCBcInNoZWxsXCJcclxuICAgIHwgXCJ0ZXh0XCJcclxuICAgIHwgXCJydXN0XCJcclxuICAgIHwgXCJweXRob25cIlxyXG4gICAgfCBcInRvbWxcIlxyXG4gICAgfCBcIndhc21cIlxyXG4gICAgfCBcIm1ha2VmaWxlXCJcclxuICAgIHwgXCJkb2NrZXJmaWxlXCJcclxuICAgIHwgXCJwb3dlcnNoZWxsXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSYXdDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgY2xhc3NOYW1lOiBleHRyYUNsYXNzTmFtZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbiAgZW5hYmxlTGluZVJlZiA9IGZhbHNlLFxyXG59OiBDb2RlQmxvY2tQcm9wcyAmIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZW5hYmxlTGluZVJlZj86IGJvb2xlYW47XHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtoYXNoVmFsdWUsIHNldEhhc2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjb2RlRGl2Q2xhc3NOYW1lcyA9XHJcbiAgICBcInRleHQtZ3JheS0zMDAgdG9rZW4tbGluZSB0ZXh0LXJpZ2h0IHNlbGVjdC1ub25lIHRleHQteHNcIjtcclxuICBjb25zdCBvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBoYXNoIH0gPSBsb2NhdGlvbjtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5oYXNoO1xyXG4gICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaFxyXG4gICAgICAgID8gaGFzaC5yZXBsYWNlKC8oLS4rKT8kLywgdGFyZ2V0LnJlcGxhY2UoXCIjXCIsIFwiLVwiKSlcclxuICAgICAgICA6IHRhcmdldDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZW5hYmxlTGluZVJlZikge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb25IYXNoQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEhhc2hWYWx1ZShsb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICBjb25zdCBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8uc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIG9uSGFzaENoYW5nZSgpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnRzID0gaGFzaFZhbHVlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBoYXNoID0gcGFydHNcclxuICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMF0pXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBwYXJzZUludChlLCAxMCkpXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICAgICAgICAubWFwKChlKSA9PiBgTCR7ZX1gKTtcclxuICAgICAgICBpZiAoaGFzaC5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoWzBdKTtcclxuICAgICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJjZW50ZXJcIiwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaWdobGlnaHRcclxuICAgICAgUHJpc209e1ByaXNtfVxyXG4gICAgICB0aGVtZT17bGlnaHR9XHJcbiAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYmVjYXVzZSB0eXBpbmdzIGFyZSBiYWRcclxuICAgICAgbGFuZ3VhZ2U9e1xyXG4gICAgICAgIGxhbmd1YWdlID09PSBcInNoZWxsXCIgPyBcImJhc2hcIiA6IGxhbmd1YWdlID09PSBcInRleHRcIiA/IFwiZGlmZlwiIDogbGFuZ3VhZ2VcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgIDxwcmVcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArIFwiIGZsZXggb3ZlcmZsb3cteS1hdXRvIFwiICsgKGV4dHJhQ2xhc3NOYW1lID8/IFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHshZGlzYWJsZVByZWZpeGVzICYmXHJcbiAgICAgICAgICAgIHRva2Vucy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgKGxhbmd1YWdlID09PSBcImJhc2hcIiB8fCBsYW5ndWFnZSA9PT0gXCJzaGVsbFwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPENvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PiQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvZGUgPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge3Rva2Vucy5sZW5ndGggPiAxICYmICFkaXNhYmxlUHJlZml4ZXMgJiYgKFxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBcImxcIn0gY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2VuYWJsZUxpbmVSZWYgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YEwke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjTCR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5hYmxlTGluZVJlZiAmJiBvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aSArIDF9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Y29kZT5cclxuICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBsaW5lUHJvcHMgPSBnZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSArPSBcIiB0ZXh0LXhzXCI7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlTGluZVJlZiAmJlxyXG4gICAgICAgICAgICAgICAgaGFzaFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAoKGFyciwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgubWluKC4uLmFycikgPD0gaW5kZXggJiYgaW5kZXggPD0gTWF0aC5tYXgoLi4uYXJyKSkoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2hWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChlKSA9PiAvKFtcXGRdKykvLmV4ZWMoZSkhWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG4pID0+IHBhcnNlSW50KG4sIDEwKSksXHJcbiAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lID0gYCR7bGluZVByb3BzLmNsYXNzTmFtZX0gaGlnaGxpZ2h0LWxpbmVgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbGluZVswXT8uZW1wdHkgJiYgaSA9PT0gdG9rZW5zLmxlbmd0aCAtIDEgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHsuLi5saW5lUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2tleX0gey4uLmdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgICApfVxyXG4gICAgPC9IaWdobGlnaHQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29kZUJsb2NrKHtcclxuICBjb2RlLFxyXG4gIGxhbmd1YWdlLFxyXG4gIGRpc2FibGVQcmVmaXhlcyxcclxufTogQ29kZUJsb2NrUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmF3Q29kZUJsb2NrXHJcbiAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgZGlzYWJsZVByZWZpeGVzPXtkaXNhYmxlUHJlZml4ZXN9XHJcbiAgICAgIGNsYXNzTmFtZT1cInAtNFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVCbG9jaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
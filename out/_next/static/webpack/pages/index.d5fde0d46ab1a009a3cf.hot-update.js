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
    theme: _pages_api_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsInRoZW1lIiwiY29sb3JzIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibGluZSIsImkiLCJlbXB0eSIsImxpbmVQcm9wcyIsImtleSIsImFyciIsImluZGV4IiwiTWF0aCIsIm1pbiIsIm1heCIsIm4iLCJ0b2tlbiIsIkNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLENBQUMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBMENDLE1BQTNDLEVBQTJEQyxLQUEzRCxHQUFtRUEsMERBQW5FOztBQUVB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RXFDLFNBRnJDQSxRQUVxQztBQUFBLE1BRHJDRyxlQUNxQyxTQURyQ0EsZUFDcUM7QUFDckMsU0FDRSxNQUFDLFlBQUQ7QUFDRSxRQUFJLEVBQUVKLElBRFI7QUFFRSxZQUFRLEVBQUVDLFFBRlo7QUFHRSxtQkFBZSxFQUFFRyxlQUhuQjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztNQWJRc0QsUztBQWVNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWZkZTBkNDZhYjFhMDA5YTNjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCwgeyBQcmlzbSB9IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlclwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9naXRodWJcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vcGFnZXMvYXBpL3RoZW1lXCI7XHJcblxyXG4odHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6ICh3aW5kb3cgYXMgYW55KSkuUHJpc20gPSBQcmlzbTtcclxuXHJcbnJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVzdFwiKTtcclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10b21sXCIpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlQmxvY2tQcm9wcyB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGRpc2FibGVQcmVmaXhlcz86IGJvb2xlYW47XHJcbiAgbGFuZ3VhZ2U6XHJcbiAgICB8IFwiamF2YXNjcmlwdFwiXHJcbiAgICB8IFwidHlwZXNjcmlwdFwiXHJcbiAgICB8IFwianN4XCJcclxuICAgIHwgXCJ0c3hcIlxyXG4gICAgfCBcImpzb25cIlxyXG4gICAgfCBcInlhbWxcIlxyXG4gICAgfCBcIm1hcmtkb3duXCJcclxuICAgIHwgXCJiYXNoXCJcclxuICAgIHwgXCJzaGVsbFwiXHJcbiAgICB8IFwidGV4dFwiXHJcbiAgICB8IFwicnVzdFwiXHJcbiAgICB8IFwicHl0aG9uXCJcclxuICAgIHwgXCJ0b21sXCJcclxuICAgIHwgXCJ3YXNtXCJcclxuICAgIHwgXCJtYWtlZmlsZVwiXHJcbiAgICB8IFwiZG9ja2VyZmlsZVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmF3Q29kZUJsb2NrKHtcclxuICBjb2RlLFxyXG4gIGxhbmd1YWdlLFxyXG4gIGNsYXNzTmFtZTogZXh0cmFDbGFzc05hbWUsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG4gIGVuYWJsZUxpbmVSZWYgPSBmYWxzZSxcclxufTogQ29kZUJsb2NrUHJvcHMgJiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGVuYWJsZUxpbmVSZWY/OiBib29sZWFuO1xyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbaGFzaFZhbHVlLCBzZXRIYXNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY29kZURpdkNsYXNzTmFtZXMgPVxyXG4gICAgXCJ0ZXh0LWdyYXktMzAwIHRva2VuLWxpbmUgdGV4dC1yaWdodCBzZWxlY3Qtbm9uZSB0ZXh0LXhzXCI7XHJcbiAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgaGFzaCB9ID0gbG9jYXRpb247XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaGFzaDtcclxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcclxuICAgICAgICA/IGhhc2gucmVwbGFjZSgvKC0uKyk/JC8sIHRhcmdldC5yZXBsYWNlKFwiI1wiLCBcIi1cIikpXHJcbiAgICAgICAgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGVuYWJsZUxpbmVSZWYpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9uSGFzaENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIYXNoVmFsdWUobG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICBvbkhhc2hDaGFuZ2UoKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGhhc2hWYWx1ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHBhcnRzXHJcbiAgICAgICAgICAubWFwKChlKSA9PiAvKFtcXGRdKykvLmV4ZWMoZSkhWzBdKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gcGFyc2VJbnQoZSwgMTApKVxyXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gYEwke2V9YCk7XHJcbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaFswXSk7XHJcbiAgICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGlnaGxpZ2h0XHJcbiAgICAgIFByaXNtPXtQcmlzbX1cclxuICAgICAgdGhlbWU9e3RoZW1lLmNvbG9yc31cclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBiZWNhdXNlIHR5cGluZ3MgYXJlIGJhZFxyXG4gICAgICBsYW5ndWFnZT17XHJcbiAgICAgICAgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIiA/IFwiYmFzaFwiIDogbGFuZ3VhZ2UgPT09IFwidGV4dFwiID8gXCJkaWZmXCIgOiBsYW5ndWFnZVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgPHByZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICsgXCIgZmxleCBvdmVyZmxvdy15LWF1dG8gXCIgKyAoZXh0cmFDbGFzc05hbWUgPz8gXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFkaXNhYmxlUHJlZml4ZXMgJiZcclxuICAgICAgICAgICAgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAobGFuZ3VhZ2UgPT09IFwiYmFzaFwiIHx8IGxhbmd1YWdlID09PSBcInNoZWxsXCIpICYmIChcclxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+JDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0b2tlbnMubGVuZ3RoID4gMSAmJiAhZGlzYWJsZVByZWZpeGVzICYmIChcclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgXCJsXCJ9IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlbmFibGVMaW5lUmVmID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgI0wke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuYWJsZUxpbmVSZWYgJiYgb25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGluZVByb3BzID0gZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pO1xyXG4gICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgKz0gXCIgdGV4dC14c1wiO1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGVuYWJsZUxpbmVSZWYgJiZcclxuICAgICAgICAgICAgICAgIGhhc2hWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgKChhcnIsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICBNYXRoLm1pbiguLi5hcnIpIDw9IGluZGV4ICYmIGluZGV4IDw9IE1hdGgubWF4KC4uLmFycikpKFxyXG4gICAgICAgICAgICAgICAgICBoYXNoVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gLyhbXFxkXSspLy5leGVjKGUpIVsxXSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChuKSA9PiBwYXJzZUludChuLCAxMCkpLFxyXG4gICAgICAgICAgICAgICAgICBpICsgMVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSA9IGAke2xpbmVQcm9wcy5jbGFzc05hbWV9IGhpZ2hsaWdodC1saW5lYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSB7Li4ubGluZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICA8L3ByZT5cclxuICAgICAgKX1cclxuICAgIDwvSGlnaGxpZ2h0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvZGVCbG9jayh7XHJcbiAgY29kZSxcclxuICBsYW5ndWFnZSxcclxuICBkaXNhYmxlUHJlZml4ZXMsXHJcbn06IENvZGVCbG9ja1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJhd0NvZGVCbG9ja1xyXG4gICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XHJcbiAgICAgIGRpc2FibGVQcmVmaXhlcz17ZGlzYWJsZVByZWZpeGVzfVxyXG4gICAgICBjbGFzc05hbWU9XCJwLTRcIlxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");




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

  return __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__["Code"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Prism: prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["Prism"],
    code: code // @ts-expect-error because typings are bad
    ,
    language: language === "shell" ? "bash" : language === "text" ? "diff" : language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
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
        lineNumber: 107,
        columnNumber: 11
      }
    }, !disablePrefixes && tokens.length === 1 && (language === "bash" || language === "shell") && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: codeDivClassNames,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, tokens.map(function (line, i) {
      var _line$;

      return (_line$ = line[0]) !== null && _line$ !== void 0 && _line$.empty && i === tokens.length - 1 ? null : __jsx("div", {
        key: i + "l",
        className: codeDivClassNames,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, enableLineRef ? __jsx("a", {
        id: "L".concat(i + 1),
        href: "#L".concat(i + 1),
        onClick: enableLineRef && onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }
      }, i + 1, " ") : i + 1);
    })), __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
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
          lineNumber: 160,
          columnNumber: 19
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
            lineNumber: 162,
            columnNumber: 23
          }
        }));
      }));
    })));
  }));
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
      lineNumber: 181,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsImxpbmUiLCJpIiwiZW1wdHkiLCJsaW5lUHJvcHMiLCJrZXkiLCJhcnIiLCJpbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJuIiwidG9rZW4iLCJDb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxDQUFDLE9BQU9BLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQTBDQyxNQUEzQyxFQUEyREMsS0FBM0QsR0FBbUVBLDBEQUFuRTs7QUFFQUMsbUJBQU8sQ0FBQyxzRkFB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QUZyQ0EsUUFFcUM7QUFBQSxNQURyQ0csZUFDcUMsU0FEckNBLGVBQ3FDO0FBQ3JDLFNBQ0UsTUFBQyxZQUFEO0FBQ0UsUUFBSSxFQUFFSixJQURSO0FBRUUsWUFBUSxFQUFFQyxRQUZaO0FBR0UsbUJBQWUsRUFBRUcsZUFIbkI7QUFJRSxhQUFTLEVBQUMsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRDs7TUFiUW9ELFM7QUFlTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVjN2FkNmU3NDNjZTBlYjNiZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIaWdobGlnaHQsIHsgUHJpc20gfSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXJcIjtcclxuaW1wb3J0IGxpZ2h0IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlci90aGVtZXMvZ2l0aHViXCI7XHJcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3BhZ2VzL2FwaS90aGVtZVwiO1xyXG5pbXBvcnQgeyBDb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcblxyXG4odHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6ICh3aW5kb3cgYXMgYW55KSkuUHJpc20gPSBQcmlzbTtcclxuXHJcbnJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVzdFwiKTtcclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10b21sXCIpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlQmxvY2tQcm9wcyB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGRpc2FibGVQcmVmaXhlcz86IGJvb2xlYW47XHJcbiAgbGFuZ3VhZ2U6XHJcbiAgICB8IFwiamF2YXNjcmlwdFwiXHJcbiAgICB8IFwidHlwZXNjcmlwdFwiXHJcbiAgICB8IFwianN4XCJcclxuICAgIHwgXCJ0c3hcIlxyXG4gICAgfCBcImpzb25cIlxyXG4gICAgfCBcInlhbWxcIlxyXG4gICAgfCBcIm1hcmtkb3duXCJcclxuICAgIHwgXCJiYXNoXCJcclxuICAgIHwgXCJzaGVsbFwiXHJcbiAgICB8IFwidGV4dFwiXHJcbiAgICB8IFwicnVzdFwiXHJcbiAgICB8IFwicHl0aG9uXCJcclxuICAgIHwgXCJ0b21sXCJcclxuICAgIHwgXCJ3YXNtXCJcclxuICAgIHwgXCJtYWtlZmlsZVwiXHJcbiAgICB8IFwiZG9ja2VyZmlsZVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmF3Q29kZUJsb2NrKHtcclxuICBjb2RlLFxyXG4gIGxhbmd1YWdlLFxyXG4gIGNsYXNzTmFtZTogZXh0cmFDbGFzc05hbWUsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG4gIGVuYWJsZUxpbmVSZWYgPSBmYWxzZSxcclxufTogQ29kZUJsb2NrUHJvcHMgJiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGVuYWJsZUxpbmVSZWY/OiBib29sZWFuO1xyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbaGFzaFZhbHVlLCBzZXRIYXNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY29kZURpdkNsYXNzTmFtZXMgPVxyXG4gICAgXCJ0ZXh0LWdyYXktMzAwIHRva2VuLWxpbmUgdGV4dC1yaWdodCBzZWxlY3Qtbm9uZSB0ZXh0LXhzXCI7XHJcbiAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgaGFzaCB9ID0gbG9jYXRpb247XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaGFzaDtcclxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcclxuICAgICAgICA/IGhhc2gucmVwbGFjZSgvKC0uKyk/JC8sIHRhcmdldC5yZXBsYWNlKFwiI1wiLCBcIi1cIikpXHJcbiAgICAgICAgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGVuYWJsZUxpbmVSZWYpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9uSGFzaENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIYXNoVmFsdWUobG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICBvbkhhc2hDaGFuZ2UoKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGhhc2hWYWx1ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHBhcnRzXHJcbiAgICAgICAgICAubWFwKChlKSA9PiAvKFtcXGRdKykvLmV4ZWMoZSkhWzBdKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gcGFyc2VJbnQoZSwgMTApKVxyXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gYEwke2V9YCk7XHJcbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaFswXSk7XHJcbiAgICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29kZT5cclxuICAgICAgPEhpZ2hsaWdodFxyXG4gICAgICAgIFByaXNtPXtQcmlzbX1cclxuICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYmVjYXVzZSB0eXBpbmdzIGFyZSBiYWRcclxuICAgICAgICBsYW5ndWFnZT17XHJcbiAgICAgICAgICBsYW5ndWFnZSA9PT0gXCJzaGVsbFwiXHJcbiAgICAgICAgICAgID8gXCJiYXNoXCJcclxuICAgICAgICAgICAgOiBsYW5ndWFnZSA9PT0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgPyBcImRpZmZcIlxyXG4gICAgICAgICAgICA6IGxhbmd1YWdlXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGNsYXNzTmFtZSwgc3R5bGUsIHRva2VucywgZ2V0TGluZVByb3BzLCBnZXRUb2tlblByb3BzIH0pID0+IChcclxuICAgICAgICAgIDxwcmVcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBjbGFzc05hbWUgKyBcIiBmbGV4IG92ZXJmbG93LXktYXV0byBcIiArIChleHRyYUNsYXNzTmFtZSA/PyBcIlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHshZGlzYWJsZVByZWZpeGVzICYmXHJcbiAgICAgICAgICAgICAgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgIChsYW5ndWFnZSA9PT0gXCJiYXNoXCIgfHwgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIikgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0b2tlbnMubGVuZ3RoID4gMSAmJiAhZGlzYWJsZVByZWZpeGVzICYmIChcclxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBcImxcIn0gY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZW5hYmxlTGluZVJlZiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YEwke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCNMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuYWJsZUxpbmVSZWYgJiYgb25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVQcm9wcyA9IGdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KTtcclxuICAgICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgKz0gXCIgdGV4dC14c1wiO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBlbmFibGVMaW5lUmVmICYmXHJcbiAgICAgICAgICAgICAgICAgIGhhc2hWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAoKGFyciwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oLi4uYXJyKSA8PSBpbmRleCAmJiBpbmRleCA8PSBNYXRoLm1heCguLi5hcnIpKShcclxuICAgICAgICAgICAgICAgICAgICBoYXNoVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChuKSA9PiBwYXJzZUludChuLCAxMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lID0gYCR7bGluZVByb3BzLmNsYXNzTmFtZX0gaGlnaGxpZ2h0LWxpbmVgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHsuLi5saW5lUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0hpZ2hsaWdodD5cclxuICAgIDwvQ29kZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG59OiBDb2RlQmxvY2tQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSYXdDb2RlQmxvY2tcclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICBkaXNhYmxlUHJlZml4ZXM9e2Rpc2FibGVQcmVmaXhlc31cclxuICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
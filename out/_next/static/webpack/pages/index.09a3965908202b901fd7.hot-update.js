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

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Prism: prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["Prism"],
    code: code // @ts-expect-error because typings are bad
    ,
    language: language === "shell" ? "bash" : language === "text" ? "diff" : language,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__["Code"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), function (_ref2) {
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
        lineNumber: 105,
        columnNumber: 9
      }
    }, !disablePrefixes && tokens.length === 1 && (language === "bash" || language === "shell") && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: codeDivClassNames,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx("code", {
      className: "pr-2 sm:pr-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
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
          lineNumber: 122,
          columnNumber: 19
        }
      }, enableLineRef ? __jsx("a", {
        id: "L".concat(i + 1),
        href: "#L".concat(i + 1),
        onClick: enableLineRef && onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 23
        }
      }, i + 1, " ") : i + 1);
    })), __jsx("code", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
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
          lineNumber: 158,
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
            lineNumber: 160,
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
      lineNumber: 178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsImxpbmUiLCJpIiwiZW1wdHkiLCJsaW5lUHJvcHMiLCJrZXkiLCJhcnIiLCJpbmRleCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJuIiwidG9rZW4iLCJDb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxDQUFDLE9BQU9BLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQTBDQyxNQUEzQyxFQUEyREMsS0FBM0QsR0FBbUVBLDBEQUFuRTs7QUFFQUMsbUJBQU8sQ0FBQyxzRkFB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UUFFcUMsU0FGckNBLFFBRXFDO0FBQUEsTUFEckNHLGVBQ3FDLFNBRHJDQSxlQUNxQztBQUNyQyxTQUNFLE1BQUMsWUFBRDtBQUNFLFFBQUksRUFBRUosSUFEUjtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLG1CQUFlLEVBQUVHLGVBSG5CO0FBSUUsYUFBUyxFQUFDLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O01BYlFvRCxTO0FBZU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA5YTM5NjU5MDgyMDJiOTAxZmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0LCB7IFByaXNtIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9wYWdlcy9hcGkvdGhlbWVcIjtcclxuaW1wb3J0IHsgQ29kZSB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5cclxuKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiAod2luZG93IGFzIGFueSkpLlByaXNtID0gUHJpc207XHJcblxyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJ1c3RcIik7XHJcbnJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdG9tbFwiKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kZUJsb2NrUHJvcHMge1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBkaXNhYmxlUHJlZml4ZXM/OiBib29sZWFuO1xyXG4gIGxhbmd1YWdlOlxyXG4gICAgfCBcImphdmFzY3JpcHRcIlxyXG4gICAgfCBcInR5cGVzY3JpcHRcIlxyXG4gICAgfCBcImpzeFwiXHJcbiAgICB8IFwidHN4XCJcclxuICAgIHwgXCJqc29uXCJcclxuICAgIHwgXCJ5YW1sXCJcclxuICAgIHwgXCJtYXJrZG93blwiXHJcbiAgICB8IFwiYmFzaFwiXHJcbiAgICB8IFwic2hlbGxcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcInJ1c3RcIlxyXG4gICAgfCBcInB5dGhvblwiXHJcbiAgICB8IFwidG9tbFwiXHJcbiAgICB8IFwid2FzbVwiXHJcbiAgICB8IFwibWFrZWZpbGVcIlxyXG4gICAgfCBcImRvY2tlcmZpbGVcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJhd0NvZGVCbG9jayh7XHJcbiAgY29kZSxcclxuICBsYW5ndWFnZSxcclxuICBjbGFzc05hbWU6IGV4dHJhQ2xhc3NOYW1lLFxyXG4gIGRpc2FibGVQcmVmaXhlcyxcclxuICBlbmFibGVMaW5lUmVmID0gZmFsc2UsXHJcbn06IENvZGVCbG9ja1Byb3BzICYge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBlbmFibGVMaW5lUmVmPzogYm9vbGVhbjtcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2hhc2hWYWx1ZSwgc2V0SGFzaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGNvZGVEaXZDbGFzc05hbWVzID1cclxuICAgIFwidGV4dC1ncmF5LTMwMCB0b2tlbi1saW5lIHRleHQtcmlnaHQgc2VsZWN0LW5vbmUgdGV4dC14c1wiO1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7IGhhc2ggfSA9IGxvY2F0aW9uO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhhc2g7XHJcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXHJcbiAgICAgICAgPyBoYXNoLnJlcGxhY2UoLygtLispPyQvLCB0YXJnZXQucmVwbGFjZShcIiNcIiwgXCItXCIpKVxyXG4gICAgICAgIDogdGFyZ2V0O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChlbmFibGVMaW5lUmVmKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvbkhhc2hDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SGFzaFZhbHVlKGxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICAgICAgb25IYXNoQ2hhbmdlKCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgcGFydHMgPSBoYXNoVmFsdWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBwYXJ0c1xyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gLyhbXFxkXSspLy5leGVjKGUpIVswXSlcclxuICAgICAgICAgIC5tYXAoKGUpID0+IHBhcnNlSW50KGUsIDEwKSlcclxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgICAgICAgIC5tYXAoKGUpID0+IGBMJHtlfWApO1xyXG4gICAgICAgIGlmIChoYXNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2hbMF0pO1xyXG4gICAgICAgICAgaWYgKGlkRWwpIHtcclxuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcImNlbnRlclwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhpZ2hsaWdodFxyXG4gICAgICBQcmlzbT17UHJpc219XHJcbiAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYmVjYXVzZSB0eXBpbmdzIGFyZSBiYWRcclxuICAgICAgbGFuZ3VhZ2U9e1xyXG4gICAgICAgIGxhbmd1YWdlID09PSBcInNoZWxsXCIgPyBcImJhc2hcIiA6IGxhbmd1YWdlID09PSBcInRleHRcIiA/IFwiZGlmZlwiIDogbGFuZ3VhZ2VcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Q29kZT5cclxuICAgICAgICBcclxuICAgICAgPC9Db2RlPlxyXG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgIDxwcmVcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSArIFwiIGZsZXggb3ZlcmZsb3cteS1hdXRvIFwiICsgKGV4dHJhQ2xhc3NOYW1lID8/IFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHshZGlzYWJsZVByZWZpeGVzICYmXHJcbiAgICAgICAgICAgIHRva2Vucy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgICAgICAgKGxhbmd1YWdlID09PSBcImJhc2hcIiB8fCBsYW5ndWFnZSA9PT0gXCJzaGVsbFwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PiQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dG9rZW5zLmxlbmd0aCA+IDEgJiYgIWRpc2FibGVQcmVmaXhlcyAmJiAoXHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInByLTIgc206cHItM1wiPlxyXG4gICAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgbGluZVswXT8uZW1wdHkgJiYgaSA9PT0gdG9rZW5zLmxlbmd0aCAtIDEgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIFwibFwifSBjbGFzc05hbWU9e2NvZGVEaXZDbGFzc05hbWVzfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZW5hYmxlTGluZVJlZiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgTCR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCNMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlbmFibGVMaW5lUmVmICYmIG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpICsgMX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVQcm9wcyA9IGdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KTtcclxuICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lICs9IFwiIHRleHQteHNcIjtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbmFibGVMaW5lUmVmICYmXHJcbiAgICAgICAgICAgICAgICBoYXNoVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICgoYXJyLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgTWF0aC5taW4oLi4uYXJyKSA8PSBpbmRleCAmJiBpbmRleCA8PSBNYXRoLm1heCguLi5hcnIpKShcclxuICAgICAgICAgICAgICAgICAgaGFzaFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobikgPT4gcGFyc2VJbnQobiwgMTApKSxcclxuICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgPSBgJHtsaW5lUHJvcHMuY2xhc3NOYW1lfSBoaWdobGlnaHQtbGluZWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gey4uLmxpbmVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17a2V5fSB7Li4uZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgICl9XHJcbiAgICA8L0hpZ2hsaWdodD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG59OiBDb2RlQmxvY2tQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSYXdDb2RlQmxvY2tcclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICBkaXNhYmxlUHJlZml4ZXM9e2Rpc2FibGVQcmVmaXhlc31cclxuICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
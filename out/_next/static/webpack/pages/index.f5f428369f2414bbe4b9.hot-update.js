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
    }, "$")), tokens.length > 1 && !disablePrefixes && __jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__["Code"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsImxpZ2h0Iiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibGluZSIsImkiLCJlbXB0eSIsImxpbmVQcm9wcyIsImtleSIsImFyciIsImluZGV4IiwiTWF0aCIsIm1pbiIsIm1heCIsIm4iLCJ0b2tlbiIsIkNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLENBQUMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBMENDLE1BQTNDLEVBQTJEQyxLQUEzRCxHQUFtRUEsMERBQW5FOztBQUVBQyxt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QUZyQ0MsUUFFcUMsU0FGckNBLFFBRXFDO0FBQUEsTUFEckNHLGVBQ3FDLFNBRHJDQSxlQUNxQztBQUNyQyxTQUNFLE1BQUMsWUFBRDtBQUNFLFFBQUksRUFBRUosSUFEUjtBQUVFLFlBQVEsRUFBRUMsUUFGWjtBQUdFLG1CQUFlLEVBQUVHLGVBSG5CO0FBSUUsYUFBUyxFQUFDLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O01BYlFxRCxTO0FBZU1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ZjQyODM2OWYyNDE0YmJlNGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGlnaGxpZ2h0LCB7IFByaXNtIH0gZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyXCI7XHJcbmltcG9ydCBsaWdodCBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL2dpdGh1YlwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29kZSB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5cclxuKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiAod2luZG93IGFzIGFueSkpLlByaXNtID0gUHJpc207XHJcblxyXG5yZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJ1c3RcIik7XHJcbnJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdG9tbFwiKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kZUJsb2NrUHJvcHMge1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBkaXNhYmxlUHJlZml4ZXM/OiBib29sZWFuO1xyXG4gIGxhbmd1YWdlOlxyXG4gICAgfCBcImphdmFzY3JpcHRcIlxyXG4gICAgfCBcInR5cGVzY3JpcHRcIlxyXG4gICAgfCBcImpzeFwiXHJcbiAgICB8IFwidHN4XCJcclxuICAgIHwgXCJqc29uXCJcclxuICAgIHwgXCJ5YW1sXCJcclxuICAgIHwgXCJtYXJrZG93blwiXHJcbiAgICB8IFwiYmFzaFwiXHJcbiAgICB8IFwic2hlbGxcIlxyXG4gICAgfCBcInRleHRcIlxyXG4gICAgfCBcInJ1c3RcIlxyXG4gICAgfCBcInB5dGhvblwiXHJcbiAgICB8IFwidG9tbFwiXHJcbiAgICB8IFwid2FzbVwiXHJcbiAgICB8IFwibWFrZWZpbGVcIlxyXG4gICAgfCBcImRvY2tlcmZpbGVcIlxyXG4gICAgfCBcInBvd2Vyc2hlbGxcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJhd0NvZGVCbG9jayh7XHJcbiAgY29kZSxcclxuICBsYW5ndWFnZSxcclxuICBjbGFzc05hbWU6IGV4dHJhQ2xhc3NOYW1lLFxyXG4gIGRpc2FibGVQcmVmaXhlcyxcclxuICBlbmFibGVMaW5lUmVmID0gZmFsc2UsXHJcbn06IENvZGVCbG9ja1Byb3BzICYge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBlbmFibGVMaW5lUmVmPzogYm9vbGVhbjtcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2hhc2hWYWx1ZSwgc2V0SGFzaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGNvZGVEaXZDbGFzc05hbWVzID1cclxuICAgIFwidGV4dC1ncmF5LTMwMCB0b2tlbi1saW5lIHRleHQtcmlnaHQgc2VsZWN0LW5vbmUgdGV4dC14c1wiO1xyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7IGhhc2ggfSA9IGxvY2F0aW9uO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhhc2g7XHJcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoXHJcbiAgICAgICAgPyBoYXNoLnJlcGxhY2UoLygtLispPyQvLCB0YXJnZXQucmVwbGFjZShcIiNcIiwgXCItXCIpKVxyXG4gICAgICAgIDogdGFyZ2V0O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChlbmFibGVMaW5lUmVmKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvbkhhc2hDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SGFzaFZhbHVlKGxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICAgICAgb25IYXNoQ2hhbmdlKCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIG9uSGFzaENoYW5nZSk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgcGFydHMgPSBoYXNoVmFsdWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBwYXJ0c1xyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gLyhbXFxkXSspLy5leGVjKGUpIVswXSlcclxuICAgICAgICAgIC5tYXAoKGUpID0+IHBhcnNlSW50KGUsIDEwKSlcclxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhIC0gYilcclxuICAgICAgICAgIC5tYXAoKGUpID0+IGBMJHtlfWApO1xyXG4gICAgICAgIGlmIChoYXNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2hbMF0pO1xyXG4gICAgICAgICAgaWYgKGlkRWwpIHtcclxuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiBcImNlbnRlclwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhpZ2hsaWdodFxyXG4gICAgICBQcmlzbT17UHJpc219XHJcbiAgICAgIHRoZW1lPXtsaWdodH1cclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBiZWNhdXNlIHR5cGluZ3MgYXJlIGJhZFxyXG4gICAgICBsYW5ndWFnZT17XHJcbiAgICAgICAgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIiA/IFwiYmFzaFwiIDogbGFuZ3VhZ2UgPT09IFwidGV4dFwiID8gXCJkaWZmXCIgOiBsYW5ndWFnZVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgPHByZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgY2xhc3NOYW1lICsgXCIgZmxleCBvdmVyZmxvdy15LWF1dG8gXCIgKyAoZXh0cmFDbGFzc05hbWUgPz8gXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyFkaXNhYmxlUHJlZml4ZXMgJiZcclxuICAgICAgICAgICAgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAobGFuZ3VhZ2UgPT09IFwiYmFzaFwiIHx8IGxhbmd1YWdlID09PSBcInNoZWxsXCIpICYmIChcclxuICAgICAgICAgICAgICA8Q29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+JDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ29kZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0b2tlbnMubGVuZ3RoID4gMSAmJiAhZGlzYWJsZVByZWZpeGVzICYmIChcclxuICAgICAgICAgICAgPENvZGUgY2xhc3NOYW1lPVwicHItMiBzbTpwci0zXCI+XHJcbiAgICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgXCJsXCJ9IGNsYXNzTmFtZT17Y29kZURpdkNsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlbmFibGVMaW5lUmVmID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BMJHtpICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgI0wke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VuYWJsZUxpbmVSZWYgJiYgb25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NvZGUgPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpbmVQcm9wcyA9IGdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KTtcclxuICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lICs9IFwiIHRleHQteHNcIjtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBlbmFibGVMaW5lUmVmICYmXHJcbiAgICAgICAgICAgICAgICBoYXNoVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICgoYXJyLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgTWF0aC5taW4oLi4uYXJyKSA8PSBpbmRleCAmJiBpbmRleCA8PSBNYXRoLm1heCguLi5hcnIpKShcclxuICAgICAgICAgICAgICAgICAgaGFzaFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IC8oW1xcZF0rKS8uZXhlYyhlKSFbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobikgPT4gcGFyc2VJbnQobiwgMTApKSxcclxuICAgICAgICAgICAgICAgICAgaSArIDFcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVQcm9wcy5jbGFzc05hbWUgPSBgJHtsaW5lUHJvcHMuY2xhc3NOYW1lfSBoaWdobGlnaHQtbGluZWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBsaW5lWzBdPy5lbXB0eSAmJiBpID09PSB0b2tlbnMubGVuZ3RoIC0gMSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gey4uLmxpbmVQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17a2V5fSB7Li4uZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgPC9wcmU+XHJcbiAgICAgICl9XHJcbiAgICA8L0hpZ2hsaWdodD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2RlQmxvY2soe1xyXG4gIGNvZGUsXHJcbiAgbGFuZ3VhZ2UsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG59OiBDb2RlQmxvY2tQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSYXdDb2RlQmxvY2tcclxuICAgICAgY29kZT17Y29kZX1cclxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxyXG4gICAgICBkaXNhYmxlUHJlZml4ZXM9e2Rpc2FibGVQcmVmaXhlc31cclxuICAgICAgY2xhc3NOYW1lPVwicC00XCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
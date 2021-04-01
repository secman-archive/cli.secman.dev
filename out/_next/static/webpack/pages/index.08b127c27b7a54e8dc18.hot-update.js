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
    theme: li,
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

/***/ "./pages/api/theme.tsx":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlQmxvY2sudHN4Il0sIm5hbWVzIjpbImdsb2JhbCIsIndpbmRvdyIsIlByaXNtIiwicmVxdWlyZSIsIlJhd0NvZGVCbG9jayIsImNvZGUiLCJsYW5ndWFnZSIsImV4dHJhQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZGlzYWJsZVByZWZpeGVzIiwiZW5hYmxlTGluZVJlZiIsInVzZVN0YXRlIiwiaGFzaFZhbHVlIiwic2V0SGFzaFZhbHVlIiwiY29kZURpdkNsYXNzTmFtZXMiLCJvbkNsaWNrIiwiZSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImhhc2giLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0Iiwib25IYXNoQ2hhbmdlIiwiaWQiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUxheW91dEVmZmVjdCIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJtYXAiLCJleGVjIiwicGFyc2VJbnQiLCJzb3J0IiwiYSIsImIiLCJpZEVsIiwiYmxvY2siLCJiZWhhdmlvciIsImxpIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibGluZSIsImkiLCJlbXB0eSIsImxpbmVQcm9wcyIsImtleSIsImFyciIsImluZGV4IiwiTWF0aCIsIm1pbiIsIm1heCIsIm4iLCJ0b2tlbiIsIkNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBLENBQUMsT0FBT0EsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBMENDLE1BQTNDLEVBQTJEQyxLQUEzRCxHQUFtRUEsMERBQW5FOztBQUVBQyxtQkFBTyxDQUFDLHNGQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsc0ZBQUQsQ0FBUDs7QUF3Qk8sU0FBU0MsWUFBVCxPQVNnQjtBQUFBOztBQUFBOztBQUFBLE1BUnJCQyxJQVFxQixRQVJyQkEsSUFRcUI7QUFBQSxNQVByQkMsUUFPcUIsUUFQckJBLFFBT3FCO0FBQUEsTUFOVkMsY0FNVSxRQU5yQkMsU0FNcUI7QUFBQSxNQUxyQkMsZUFLcUIsUUFMckJBLGVBS3FCO0FBQUEsZ0NBSnJCQyxhQUlxQjtBQUFBLE1BSnJCQSxhQUlxQixtQ0FKTCxLQUlLOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNkQyxTQURjO0FBQUEsTUFDSEMsWUFERzs7QUFFckIsTUFBTUMsaUJBQWlCLEdBQ3JCLHlEQURGOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBeUI7QUFDdkMsUUFBSUEsQ0FBQyxDQUFDQyxRQUFOLEVBQWdCO0FBQ2RELE9BQUMsQ0FBQ0UsY0FBRjtBQURjLHNCQUVHQyxRQUZIO0FBQUEsVUFFTkMsSUFGTSxhQUVOQSxJQUZNO0FBR2QsVUFBTUMsTUFBTSxHQUFJTCxDQUFDLENBQUNLLE1BQUgsQ0FBZ0NELElBQS9DO0FBQ0FELGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQkEsSUFBSSxHQUNoQkEsSUFBSSxDQUFDRSxPQUFMLENBQWEsU0FBYixFQUF3QkQsTUFBTSxDQUFDQyxPQUFQLENBQWUsR0FBZixFQUFvQixHQUFwQixDQUF4QixDQURnQixHQUVoQkQsTUFGSjtBQUdEO0FBQ0YsR0FURDs7QUFXQSxNQUFJWCxhQUFKLEVBQW1CO0FBQ2pCYSwyREFBUyxDQUFDLFlBQU07QUFDZCxVQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCWCxvQkFBWSxDQUFDTSxRQUFRLENBQUNDLElBQVYsQ0FBWjtBQUNBLFlBQU1LLEVBQUUsR0FBR04sUUFBUSxDQUFDQyxJQUFULENBQWNNLFNBQWQsQ0FBd0IsQ0FBeEIsQ0FBWDtBQUNBLGlDQUFBQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILEVBQXhCLGlGQUE2QkksY0FBN0I7QUFDRCxPQUpEOztBQUtBNUIsWUFBTSxDQUFDNkIsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NOLFlBQXRDO0FBQ0FBLGtCQUFZO0FBQ1osYUFBTyxZQUFNO0FBQ1h2QixjQUFNLENBQUM4QixtQkFBUCxDQUEyQixZQUEzQixFQUF5Q1AsWUFBekM7QUFDRCxPQUZEO0FBR0QsS0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBUSxpRUFBZSxDQUFDLFlBQU07QUFDcEIsVUFBTUMsS0FBSyxHQUFHckIsU0FBUyxDQUFDc0IsS0FBVixDQUFnQixHQUFoQixDQUFkOztBQUNBLFVBQUlELEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFlBQU1mLElBQUksR0FBR2EsS0FBSyxDQUNmRyxHQURVLENBQ04sVUFBQ3BCLENBQUQ7QUFBQSxpQkFBTyxVQUFVcUIsSUFBVixDQUFlckIsQ0FBZixFQUFtQixDQUFuQixDQUFQO0FBQUEsU0FETSxFQUVWb0IsR0FGVSxDQUVOLFVBQUNwQixDQUFEO0FBQUEsaUJBQU9zQixRQUFRLENBQUN0QixDQUFELEVBQUksRUFBSixDQUFmO0FBQUEsU0FGTSxFQUdWdUIsSUFIVSxDQUdMLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxTQUhLLEVBSVZMLEdBSlUsQ0FJTixVQUFDcEIsQ0FBRDtBQUFBLDRCQUFXQSxDQUFYO0FBQUEsU0FKTSxDQUFiOztBQUtBLFlBQUlJLElBQUksQ0FBQ2UsTUFBVCxFQUFpQjtBQUNmLGNBQU1PLElBQUksR0FBR2YsUUFBUSxDQUFDQyxjQUFULENBQXdCUixJQUFJLENBQUMsQ0FBRCxDQUE1QixDQUFiOztBQUNBLGNBQUlzQixJQUFKLEVBQVU7QUFDUkEsZ0JBQUksQ0FBQ2IsY0FBTCxDQUFvQjtBQUFFYyxtQkFBSyxFQUFFLFFBQVQ7QUFBbUJDLHNCQUFRLEVBQUU7QUFBN0IsYUFBcEI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBaEJjLENBQWY7QUFpQkQ7O0FBRUQsU0FDRSxNQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFFMUMsMERBRFQ7QUFFRSxTQUFLLEVBQUUyQyxFQUZUO0FBR0UsUUFBSSxFQUFFeEMsSUFIUixDQUlFO0FBSkY7QUFLRSxZQUFRLEVBQ05DLFFBQVEsS0FBSyxPQUFiLEdBQXVCLE1BQXZCLEdBQWdDQSxRQUFRLEtBQUssTUFBYixHQUFzQixNQUF0QixHQUErQkEsUUFObkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHO0FBQUEsUUFBR0UsU0FBSCxTQUFHQSxTQUFIO0FBQUEsUUFBY3NDLEtBQWQsU0FBY0EsS0FBZDtBQUFBLFFBQXFCQyxNQUFyQixTQUFxQkEsTUFBckI7QUFBQSxRQUE2QkMsWUFBN0IsU0FBNkJBLFlBQTdCO0FBQUEsUUFBMkNDLGFBQTNDLFNBQTJDQSxhQUEzQztBQUFBLFdBQ0M7QUFDRSxlQUFTLEVBQ1B6QyxTQUFTLEdBQUcsd0JBQVosSUFBd0NELGNBQXhDLGFBQXdDQSxjQUF4QyxjQUF3Q0EsY0FBeEMsR0FBMEQsRUFBMUQsQ0FGSjtBQUlFLFdBQUssb0JBQU91QyxLQUFQLENBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1HLENBQUNyQyxlQUFELElBQ0NzQyxNQUFNLENBQUNaLE1BQVAsS0FBa0IsQ0FEbkIsS0FFRTdCLFFBQVEsS0FBSyxNQUFiLElBQXVCQSxRQUFRLEtBQUssT0FGdEMsS0FHRztBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVRLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsQ0FUTixFQWFHaUMsTUFBTSxDQUFDWixNQUFQLEdBQWdCLENBQWhCLElBQXFCLENBQUMxQixlQUF0QixJQUNDO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR3NDLE1BQU0sQ0FBQ1gsR0FBUCxDQUFXLFVBQUNjLElBQUQsRUFBT0MsQ0FBUDtBQUFBOztBQUFBLGFBQ1YsVUFBQUQsSUFBSSxDQUFDLENBQUQsQ0FBSiwwQ0FBU0UsS0FBVCxJQUFrQkQsQ0FBQyxLQUFLSixNQUFNLENBQUNaLE1BQVAsR0FBZ0IsQ0FBeEMsR0FBNEMsSUFBNUMsR0FDRTtBQUFLLFdBQUcsRUFBRWdCLENBQUMsR0FBRyxHQUFkO0FBQW1CLGlCQUFTLEVBQUVyQyxpQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHSixhQUFhLEdBQ1o7QUFDRSxVQUFFLGFBQU15QyxDQUFDLEdBQUcsQ0FBVixDQURKO0FBRUUsWUFBSSxjQUFPQSxDQUFDLEdBQUcsQ0FBWCxDQUZOO0FBR0UsZUFBTyxFQUFFekMsYUFBYSxJQUFJSyxPQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0dvQyxDQUFDLEdBQUcsQ0FMUCxFQUtVLEdBTFYsQ0FEWSxHQVNaQSxDQUFDLEdBQUcsQ0FWUixDQUZRO0FBQUEsS0FBWCxDQURILENBZEosRUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixNQUFNLENBQUNYLEdBQVAsQ0FBVyxVQUFDYyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUFBOztBQUN2QixVQUFNRSxTQUFTLEdBQUdMLFlBQVksQ0FBQztBQUFFRSxZQUFJLEVBQUpBLElBQUY7QUFBUUksV0FBRyxFQUFFSDtBQUFiLE9BQUQsQ0FBOUI7QUFDQUUsZUFBUyxDQUFDN0MsU0FBVixJQUF1QixVQUF2Qjs7QUFDQSxVQUNFRSxhQUFhLElBQ2JFLFNBREEsSUFFQyxVQUFDMkMsR0FBRCxFQUFNQyxLQUFOO0FBQUEsZUFDQ0MsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUksNklBQVFGLEdBQVIsRUFBSixJQUFvQkMsS0FBcEIsSUFBNkJBLEtBQUssSUFBSUMsSUFBSSxDQUFDRSxHQUFMLE9BQUFGLElBQUksNklBQVFGLEdBQVIsRUFEM0M7QUFBQSxPQUFELENBRUUzQyxTQUFTLENBQ05zQixLQURILENBQ1MsR0FEVCxFQUVHRSxHQUZILENBRU8sVUFBQ3BCLENBQUQ7QUFBQSxlQUFPLFVBQVVxQixJQUFWLENBQWVyQixDQUFmLEVBQW1CLENBQW5CLENBQVA7QUFBQSxPQUZQLEVBR0dvQixHQUhILENBR08sVUFBQ3dCLENBQUQ7QUFBQSxlQUFPdEIsUUFBUSxDQUFDc0IsQ0FBRCxFQUFJLEVBQUosQ0FBZjtBQUFBLE9BSFAsQ0FGRixFQU1FVCxDQUFDLEdBQUcsQ0FOTixDQUhGLEVBV0U7QUFDQUUsaUJBQVMsQ0FBQzdDLFNBQVYsYUFBeUI2QyxTQUFTLENBQUM3QyxTQUFuQztBQUNEOztBQUNELGFBQU8sV0FBQTBDLElBQUksQ0FBQyxDQUFELENBQUosNENBQVNFLEtBQVQsSUFBa0JELENBQUMsS0FBS0osTUFBTSxDQUFDWixNQUFQLEdBQWdCLENBQXhDLEdBQTRDLElBQTVDLEdBQ0w7QUFBSyxXQUFHLEVBQUVnQjtBQUFWLFNBQWlCRSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQ0dILElBQUksQ0FBQ2QsR0FBTCxDQUFTLFVBQUN5QixLQUFELEVBQVFQLEdBQVI7QUFBQSxlQUNSO0FBQU0sYUFBRyxFQUFFQTtBQUFYLFdBQW9CTCxhQUFhLENBQUM7QUFBRVksZUFBSyxFQUFMQSxLQUFGO0FBQVNQLGFBQUcsRUFBSEE7QUFBVCxTQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUTtBQUFBLE9BQVQsQ0FESCxDQURGO0FBT0QsS0F4QkEsQ0FESCxDQWxDRixDQUREO0FBQUEsR0FUSCxDQURGO0FBNEVEOztHQXJJZWxELFk7O0tBQUFBLFk7O0FBdUloQixTQUFTMEQsU0FBVCxRQUl1QztBQUFBLE1BSHJDekQsSUFHcUMsU0FIckNBLElBR3FDO0FBQUEsTUFGckNDLFFBRXFDLFNBRnJDQSxRQUVxQztBQUFBLE1BRHJDRyxlQUNxQyxTQURyQ0EsZUFDcUM7QUFDckMsU0FDRSxNQUFDLFlBQUQ7QUFDRSxRQUFJLEVBQUVKLElBRFI7QUFFRSxZQUFRLEVBQUVDLFFBRlo7QUFHRSxtQkFBZSxFQUFFRyxlQUhuQjtBQUlFLGFBQVMsRUFBQyxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztNQWJRcUQsUztBQWVNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOGIxMjdjMjdiN2E1NGU4ZGMxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCwgeyBQcmlzbSB9IGZyb20gXCJwcmlzbS1yZWFjdC1yZW5kZXJlclwiO1xyXG5pbXBvcnQgbGlnaHQgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9naXRodWJcIjtcclxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vcGFnZXMvYXBpL3RoZW1lXCI7XHJcblxyXG4odHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6ICh3aW5kb3cgYXMgYW55KSkuUHJpc20gPSBQcmlzbTtcclxuXHJcbnJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVzdFwiKTtcclxucmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10b21sXCIpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlQmxvY2tQcm9wcyB7XHJcbiAgY29kZTogc3RyaW5nO1xyXG4gIGRpc2FibGVQcmVmaXhlcz86IGJvb2xlYW47XHJcbiAgbGFuZ3VhZ2U6XHJcbiAgICB8IFwiamF2YXNjcmlwdFwiXHJcbiAgICB8IFwidHlwZXNjcmlwdFwiXHJcbiAgICB8IFwianN4XCJcclxuICAgIHwgXCJ0c3hcIlxyXG4gICAgfCBcImpzb25cIlxyXG4gICAgfCBcInlhbWxcIlxyXG4gICAgfCBcIm1hcmtkb3duXCJcclxuICAgIHwgXCJiYXNoXCJcclxuICAgIHwgXCJzaGVsbFwiXHJcbiAgICB8IFwidGV4dFwiXHJcbiAgICB8IFwicnVzdFwiXHJcbiAgICB8IFwicHl0aG9uXCJcclxuICAgIHwgXCJ0b21sXCJcclxuICAgIHwgXCJ3YXNtXCJcclxuICAgIHwgXCJtYWtlZmlsZVwiXHJcbiAgICB8IFwiZG9ja2VyZmlsZVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmF3Q29kZUJsb2NrKHtcclxuICBjb2RlLFxyXG4gIGxhbmd1YWdlLFxyXG4gIGNsYXNzTmFtZTogZXh0cmFDbGFzc05hbWUsXHJcbiAgZGlzYWJsZVByZWZpeGVzLFxyXG4gIGVuYWJsZUxpbmVSZWYgPSBmYWxzZSxcclxufTogQ29kZUJsb2NrUHJvcHMgJiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGVuYWJsZUxpbmVSZWY/OiBib29sZWFuO1xyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbaGFzaFZhbHVlLCBzZXRIYXNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY29kZURpdkNsYXNzTmFtZXMgPVxyXG4gICAgXCJ0ZXh0LWdyYXktMzAwIHRva2VuLWxpbmUgdGV4dC1yaWdodCBzZWxlY3Qtbm9uZSB0ZXh0LXhzXCI7XHJcbiAgY29uc3Qgb25DbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgaGFzaCB9ID0gbG9jYXRpb247XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaGFzaDtcclxuICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2hcclxuICAgICAgICA/IGhhc2gucmVwbGFjZSgvKC0uKyk/JC8sIHRhcmdldC5yZXBsYWNlKFwiI1wiLCBcIi1cIikpXHJcbiAgICAgICAgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGVuYWJsZUxpbmVSZWYpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9uSGFzaENoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRIYXNoVmFsdWUobG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBvbkhhc2hDaGFuZ2UpO1xyXG4gICAgICBvbkhhc2hDaGFuZ2UoKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgb25IYXNoQ2hhbmdlKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IGhhc2hWYWx1ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IHBhcnRzXHJcbiAgICAgICAgICAubWFwKChlKSA9PiAvKFtcXGRdKykvLmV4ZWMoZSkhWzBdKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gcGFyc2VJbnQoZSwgMTApKVxyXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxyXG4gICAgICAgICAgLm1hcCgoZSkgPT4gYEwke2V9YCk7XHJcbiAgICAgICAgaWYgKGhhc2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaFswXSk7XHJcbiAgICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6IFwiY2VudGVyXCIsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGlnaGxpZ2h0XHJcbiAgICAgIFByaXNtPXtQcmlzbX1cclxuICAgICAgdGhlbWU9e2xpfVxyXG4gICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGJlY2F1c2UgdHlwaW5ncyBhcmUgYmFkXHJcbiAgICAgIGxhbmd1YWdlPXtcclxuICAgICAgICBsYW5ndWFnZSA9PT0gXCJzaGVsbFwiID8gXCJiYXNoXCIgOiBsYW5ndWFnZSA9PT0gXCJ0ZXh0XCIgPyBcImRpZmZcIiA6IGxhbmd1YWdlXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgeyh7IGNsYXNzTmFtZSwgc3R5bGUsIHRva2VucywgZ2V0TGluZVByb3BzLCBnZXRUb2tlblByb3BzIH0pID0+IChcclxuICAgICAgICA8cHJlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgKyBcIiBmbGV4IG92ZXJmbG93LXktYXV0byBcIiArIChleHRyYUNsYXNzTmFtZSA/PyBcIlwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IWRpc2FibGVQcmVmaXhlcyAmJlxyXG4gICAgICAgICAgICB0b2tlbnMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgICAgIChsYW5ndWFnZSA9PT0gXCJiYXNoXCIgfHwgbGFuZ3VhZ2UgPT09IFwic2hlbGxcIikgJiYgKFxyXG4gICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInByLTIgc206cHItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvZGVEaXZDbGFzc05hbWVzfT4kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge3Rva2Vucy5sZW5ndGggPiAxICYmICFkaXNhYmxlUHJlZml4ZXMgJiYgKFxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJwci0yIHNtOnByLTNcIj5cclxuICAgICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT5cclxuICAgICAgICAgICAgICAgIGxpbmVbMF0/LmVtcHR5ICYmIGkgPT09IHRva2Vucy5sZW5ndGggLSAxID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBcImxcIn0gY2xhc3NOYW1lPXtjb2RlRGl2Q2xhc3NOYW1lc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2VuYWJsZUxpbmVSZWYgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YEwke2kgKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjTCR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZW5hYmxlTGluZVJlZiAmJiBvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aSArIDF9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvY29kZT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Y29kZT5cclxuICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBsaW5lUHJvcHMgPSBnZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSk7XHJcbiAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSArPSBcIiB0ZXh0LXhzXCI7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlTGluZVJlZiAmJlxyXG4gICAgICAgICAgICAgICAgaGFzaFZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICAoKGFyciwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgIE1hdGgubWluKC4uLmFycikgPD0gaW5kZXggJiYgaW5kZXggPD0gTWF0aC5tYXgoLi4uYXJyKSkoXHJcbiAgICAgICAgICAgICAgICAgIGhhc2hWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChlKSA9PiAvKFtcXGRdKykvLmV4ZWMoZSkhWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG4pID0+IHBhcnNlSW50KG4sIDEwKSksXHJcbiAgICAgICAgICAgICAgICAgIGkgKyAxXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lUHJvcHMuY2xhc3NOYW1lID0gYCR7bGluZVByb3BzLmNsYXNzTmFtZX0gaGlnaGxpZ2h0LWxpbmVgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbGluZVswXT8uZW1wdHkgJiYgaSA9PT0gdG9rZW5zLmxlbmd0aCAtIDEgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHsuLi5saW5lUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2tleX0gey4uLmdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9jb2RlPlxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgICApfVxyXG4gICAgPC9IaWdobGlnaHQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29kZUJsb2NrKHtcclxuICBjb2RlLFxyXG4gIGxhbmd1YWdlLFxyXG4gIGRpc2FibGVQcmVmaXhlcyxcclxufTogQ29kZUJsb2NrUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmF3Q29kZUJsb2NrXHJcbiAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cclxuICAgICAgZGlzYWJsZVByZWZpeGVzPXtkaXNhYmxlUHJlZml4ZXN9XHJcbiAgICAgIGNsYXNzTmFtZT1cInAtNFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVCbG9jaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.tsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main */ "./components/Main.tsx");
/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DarkModeSwitch */ "./components/DarkModeSwitch.tsx");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CTA */ "./components/CTA.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/routes */ "./pages/api/routes.ts");
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CodeBlock */ "./components/CodeBlock.tsx");
var _jsxFileName = "/mnt/d/Code/secman-team.github.io/pages/index.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Secman Deps")), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    height: "100vh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_5__["Main"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "windows",
    className: "my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "font-bold my-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Windows"), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
    language: "bash",
    code: "iwr -useb https://secman-team.github.io/install.ps1 | iex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })), __jsx("div", {
    key: "ml",
    className: "my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "font-bold my-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "MacOS/Linux"), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
    language: "bash",
    code: "curl -fsSL https://secman-team.github.io/install.sh | bash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    spacing: 3,
    my: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fab fa-github-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), "\xA0", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: _api_routes__WEBPACK_IMPORTED_MODULE_9__["Routes"].secmanRepo,
    flexGrow: 1,
    mr: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "Secman Repo ", __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__["DarkModeSwitch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_components_CTA__WEBPACK_IMPORTED_MODULE_7__["CTA"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  })));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiUm91dGVzIiwic2VjbWFuUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixFQUlFLE1BQUMsK0RBQUQ7QUFBVyxVQUFNLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFNBQVQ7QUFBbUIsYUFBUyxFQUFDLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLDhEQUFEO0FBQ0UsWUFBUSxFQUFDLE1BRFg7QUFFRSxRQUFJLDZEQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBUUU7QUFBSyxPQUFHLEVBQUMsSUFBVDtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsOERBQUQ7QUFDRSxZQUFRLEVBQUMsTUFEWDtBQUVFLFFBQUksOERBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBUkYsRUFlRSxNQUFDLHFEQUFEO0FBQU0sV0FBTyxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsVUFHRSxNQUFDLHFEQUFEO0FBQU0sY0FBVSxNQUFoQjtBQUFpQixRQUFJLEVBQUVDLGtEQUFNLENBQUNDLFVBQTlCO0FBQTBDLFlBQVEsRUFBRSxDQUFwRDtBQUF1RCxNQUFFLEVBQUUsQ0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZCxDQUhGLENBREYsQ0FmRixDQURGLEVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsQ0FGRixFQStCRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsRUFnQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENGLENBSkYsQ0FEWTtBQUFBLENBQWQ7O0tBQU1GLEs7QUEwQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkNDNmYTdiMzkyMTBiNzEyYWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rLCBUZXh0LCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmtJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XHJcbmltcG9ydCB7IERhcmtNb2RlU3dpdGNoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2hcIjtcclxuaW1wb3J0IHsgQ1RBIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ1RBXCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCIuL2FwaS9yb3V0ZXNcIjtcclxuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlNlY21hbiBEZXBzPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb250YWluZXIgaGVpZ2h0PVwiMTAwdmhcIj5cclxuICAgICAgPEhlcm8gLz5cclxuICAgICAgPE1haW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gbXgtYXV0byBweC00IHNtOnB4LTYgbWQ6cHgtOCBtdC0yMFwiPlxyXG4gICAgICAgICAgPGRpdiBrZXk9XCJ3aW5kb3dzXCIgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJmb250LWJvbGQgbXktMlwiPldpbmRvd3M8L1RleHQ+XHJcbiAgICAgICAgICAgIDxDb2RlQmxvY2tcclxuICAgICAgICAgICAgICBsYW5ndWFnZT1cImJhc2hcIlxyXG4gICAgICAgICAgICAgIGNvZGU9e2Bpd3IgLXVzZWIgaHR0cHM6Ly9zZWNtYW4tdGVhbS5naXRodWIuaW8vaW5zdGFsbC5wczEgfCBpZXhgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGtleT1cIm1sXCIgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJmb250LWJvbGQgbXktMlwiPk1hY09TL0xpbnV4PC9UZXh0PlxyXG4gICAgICAgICAgICA8Q29kZUJsb2NrXHJcbiAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJiYXNoXCJcclxuICAgICAgICAgICAgICBjb2RlPXtgY3VybCAtZnNTTCBodHRwczovL3NlY21hbi10ZWFtLmdpdGh1Yi5pby9pbnN0YWxsLnNoIHwgYmFzaGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaXN0IHNwYWNpbmc9ezN9IG15PXswfT5cclxuICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItYWx0XCIgLz5cclxuICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBpc0V4dGVybmFsIGhyZWY9e1JvdXRlcy5zZWNtYW5SZXBvfSBmbGV4R3Jvdz17MX0gbXI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgU2VjbWFuIFJlcG8gPExpbmtJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvTWFpbj5cclxuXHJcbiAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICA8Q1RBIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
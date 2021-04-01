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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/routes */ "./pages/api/routes.ts");
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CodeBlock */ "./components/CodeBlock.tsx");
var _jsxFileName = "/mnt/d/Code/secman-team.github.io/pages/index.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Secman"), __jsx("link", {
    rel: "icon",
    href: "/secman.svg",
    type: "image/svg+xml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  })), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    height: "100vh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_5__["Main"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "windows",
    className: "my-4 text-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("a", {
    bl: true,
    href: "",
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Windows"), " "), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: "powershell",
    code: "iwr -useb https://secman-team.github.io/install.ps1 | iex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx("div", {
    key: "ml",
    className: "my-4 text-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "",
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "MacOS/Linux"), " "), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: "bash",
    code: "curl -fsSL https://secman-team.github.io/install.sh | bash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    spacing: 3,
    my: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fab fa-github-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), "\xA0", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: _api_routes__WEBPACK_IMPORTED_MODULE_10__["Routes"].secmanRepo,
    flexGrow: 1,
    mr: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Secman Repo ", __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  })))))), __jsx(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__["DarkModeSwitch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_components_CTA__WEBPACK_IMPORTED_MODULE_7__["CTA"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "\u2328 By ", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: _api_routes__WEBPACK_IMPORTED_MODULE_10__["Routes"].secman,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "secman"), " ", "\uD83E\uDD1D", " ", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: "https://chakra-ui.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "chakra-ui")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiUm91dGVzIiwic2VjbWFuUmVwbyIsInNlY21hbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGFBQXRCO0FBQW9DLFFBQUksRUFBQyxlQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsK0RBQUQ7QUFBVyxVQUFNLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFNBQVQ7QUFBbUIsYUFBUyxFQUFDLG9CQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxNQUFFLE1BQUw7QUFBTSxRQUFJLEVBQUMsRUFBWDtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFHTyxHQUhQLENBREYsRUFNRSxNQUFDLDhEQUFEO0FBQ0UsWUFBUSxFQUFDLFlBRFg7QUFFRSxRQUFJLDZEQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBWUU7QUFBSyxPQUFHLEVBQUMsSUFBVDtBQUFjLGFBQVMsRUFBQyxvQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUdPLEdBSFAsQ0FERixFQU1FLE1BQUMsOERBQUQ7QUFDRSxZQUFRLEVBQUMsTUFEWDtBQUVFLFFBQUksOERBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBWkYsRUF1QkUsTUFBQyxxREFBRDtBQUFNLFdBQU8sRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBR0UsTUFBQyxxREFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLFFBQUksRUFBRUMsbURBQU0sQ0FBQ0MsVUFGZjtBQUdFLFlBQVEsRUFBRSxDQUhaO0FBSUUsTUFBRSxFQUFFLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNYyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOZCxDQUhGLENBREYsQ0F2QkYsQ0FERixDQUZGLEVBMkNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDRixFQTRDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0YsRUE2Q0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdFLE1BQUMscURBQUQ7QUFBWSxjQUFVLE1BQXRCO0FBQXVCLFFBQUksRUFBRUQsbURBQU0sQ0FBQ0UsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBS2dCLEdBTGhCLGtCQU1LLEdBTkwsRUFPRSxNQUFDLHFEQUFEO0FBQVksY0FBVSxNQUF0QjtBQUF1QixRQUFJLEVBQUMsdUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsQ0FERixDQTdDRixDQUxGLENBRFk7QUFBQSxDQUFkOztLQUFNSCxLO0FBb0VTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZjZiY2EzMGVkYTVjOWIwMjNkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMaW5rIGFzIENoYWtyYUxpbmssXHJcbiAgVGV4dCxcclxuICBMaXN0LFxyXG4gIExpc3RJY29uLFxyXG4gIExpc3RJdGVtLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFBob25lSWNvbiwgTGlua0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIjtcclxuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaFwiO1xyXG5pbXBvcnQgeyBDVEEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DVEFcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIi4vYXBpL3JvdXRlc1wiO1xyXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL0NvZGVCbG9ja1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+U2VjbWFuPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc2VjbWFuLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb250YWluZXIgaGVpZ2h0PVwiMTAwdmhcIj5cclxuICAgICAgPEhlcm8gLz5cclxuICAgICAgPE1haW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gbXgtYXV0byBweC00IHNtOnB4LTYgbWQ6cHgtOCBtdC0yMFwiPlxyXG4gICAgICAgICAgPGRpdiBrZXk9XCJ3aW5kb3dzXCIgY2xhc3NOYW1lPVwibXktNCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICA8YSBibCBocmVmPVwiXCIgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgV2luZG93c1xyXG4gICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPENvZGVCbG9ja1xyXG4gICAgICAgICAgICAgIGxhbmd1YWdlPVwicG93ZXJzaGVsbFwiXHJcbiAgICAgICAgICAgICAgY29kZT17YGl3ciAtdXNlYiBodHRwczovL3NlY21hbi10ZWFtLmdpdGh1Yi5pby9pbnN0YWxsLnBzMSB8IGlleGB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYga2V5PVwibWxcIiBjbGFzc05hbWU9XCJteS00IHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICBNYWNPUy9MaW51eFxyXG4gICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPENvZGVCbG9ja1xyXG4gICAgICAgICAgICAgIGxhbmd1YWdlPVwiYmFzaFwiXHJcbiAgICAgICAgICAgICAgY29kZT17YGN1cmwgLWZzU0wgaHR0cHM6Ly9zZWNtYW4tdGVhbS5naXRodWIuaW8vaW5zdGFsbC5zaCB8IGJhc2hgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlzdCBzcGFjaW5nPXszfSBteT17MH0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLWFsdFwiIC8+XHJcbiAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgPENoYWtyYUxpbmtcclxuICAgICAgICAgICAgICAgIGlzRXh0ZXJuYWxcclxuICAgICAgICAgICAgICAgIGhyZWY9e1JvdXRlcy5zZWNtYW5SZXBvfVxyXG4gICAgICAgICAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZWNtYW4gUmVwbyA8TGlua0ljb24gLz5cclxuICAgICAgICAgICAgICA8L0NoYWtyYUxpbms+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTWFpbj5cclxuXHJcbiAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICA8Q1RBIC8+XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICDijKggQnkgey8qIDxhIGNsYXNzTmFtZT1cImJsdWVcIiBocmVmPXtSb3V0ZXMuc2VjbWFufT5cclxuICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8Q2hha3JhTGluayBpc0V4dGVybmFsIGhyZWY9e1JvdXRlcy5zZWNtYW59PlxyXG4gICAgICAgICAgICBzZWNtYW5cclxuICAgICAgICAgIDwvQ2hha3JhTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICDwn6Sde1wiIFwifVxyXG4gICAgICAgICAgPENoYWtyYUxpbmsgaXNFeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9jaGFrcmEtdWkuY29tXCI+XHJcbiAgICAgICAgICAgIGNoYWtyYS11aVxyXG4gICAgICAgICAgPC9DaGFrcmFMaW5rPlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
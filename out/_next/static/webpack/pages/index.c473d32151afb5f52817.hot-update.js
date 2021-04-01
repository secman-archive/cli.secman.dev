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
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
  }, "Secman Deps"), __jsx("link", {
    rel: "icon",
    href: "/secman.svg",
    type: "image/svg+xml",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  })), __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    height: "100vh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_5__["Main"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 mt-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "windows",
    className: "my-4 text-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Windows"), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: "powershell",
    code: "iwr -useb https://secman-team.github.io/install.ps1 | iex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx("div", {
    key: "ml",
    className: "my-4 text-gray-700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "MacOS/Linux"), __jsx(_components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__["default"], {
    language: "bash",
    code: "curl -fsSL https://secman-team.github.io/install.sh | bash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
    spacing: 3,
    my: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fab fa-github-alt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Secman Repo ", __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LinkIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  })))))), __jsx(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__["DarkModeSwitch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_CTA__WEBPACK_IMPORTED_MODULE_7__["CTA"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "\u2328 By", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: _api_routes__WEBPACK_IMPORTED_MODULE_10__["Routes"].secman,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "secman"), " ", "\uD83E\uDD1D", " ", __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    isExternal: true,
    href: "https://chakra-ui.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiUm91dGVzIiwic2VjbWFuUmVwbyIsInNlY21hbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxhQUF0QjtBQUFvQyxRQUFJLEVBQUMsZUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLCtEQUFEO0FBQVcsVUFBTSxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxTQUFUO0FBQW1CLGFBQVMsRUFBQyxvQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyw4REFBRDtBQUNFLFlBQVEsRUFBQyxZQURYO0FBRUUsUUFBSSw2REFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVFFO0FBQUssT0FBRyxFQUFDLElBQVQ7QUFBYyxhQUFTLEVBQUMsb0JBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSxNQUFDLDhEQUFEO0FBQ0UsWUFBUSxFQUFDLE1BRFg7QUFFRSxRQUFJLDhEQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLEVBZUUsTUFBQyxxREFBRDtBQUFNLFdBQU8sRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBR0UsTUFBQyxxREFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLFFBQUksRUFBRUMsbURBQU0sQ0FBQ0MsVUFGZjtBQUdFLFlBQVEsRUFBRSxDQUhaO0FBSUUsTUFBRSxFQUFFLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNYyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOZCxDQUhGLENBREYsQ0FmRixDQURGLENBRkYsRUFtQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNGLEVBb0NFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixFQXFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUUsTUFBQyxxREFBRDtBQUFNLGNBQVUsTUFBaEI7QUFBaUIsUUFBSSxFQUFFRCxtREFBTSxDQUFDRSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFJVSxHQUpWLGtCQUtLLEdBTEwsRUFNRSxNQUFDLHFEQUFEO0FBQU0sY0FBVSxNQUFoQjtBQUFpQixRQUFJLEVBQUMsdUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsQ0FERixDQXJDRixDQUxGLENBRFk7QUFBQSxDQUFkOztLQUFNSCxLO0FBMkRTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDczZDMyMTUxYWZiNWY1MjgxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluaywgVGV4dCwgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoXCI7XHJcbmltcG9ydCB7IENUQSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NUQVwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiLi9hcGkvcm91dGVzXCI7XHJcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5TZWNtYW4gRGVwczwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3NlY21hbi5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxIZXJvIC8+XHJcbiAgICAgIDxNYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXNtIG14LWF1dG8gcHgtNCBzbTpweC02IG1kOnB4LTggbXQtMjBcIj5cclxuICAgICAgICAgIDxkaXYga2V5PVwid2luZG93c1wiIGNsYXNzTmFtZT1cIm15LTQgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8VGV4dD5XaW5kb3dzPC9UZXh0PlxyXG4gICAgICAgICAgICA8Q29kZUJsb2NrXHJcbiAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJwb3dlcnNoZWxsXCJcclxuICAgICAgICAgICAgICBjb2RlPXtgaXdyIC11c2ViIGh0dHBzOi8vc2VjbWFuLXRlYW0uZ2l0aHViLmlvL2luc3RhbGwucHMxIHwgaWV4YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBrZXk9XCJtbFwiIGNsYXNzTmFtZT1cIm15LTQgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8VGV4dD5NYWNPUy9MaW51eDwvVGV4dD5cclxuICAgICAgICAgICAgPENvZGVCbG9ja1xyXG4gICAgICAgICAgICAgIGxhbmd1YWdlPVwiYmFzaFwiXHJcbiAgICAgICAgICAgICAgY29kZT17YGN1cmwgLWZzU0wgaHR0cHM6Ly9zZWNtYW4tdGVhbS5naXRodWIuaW8vaW5zdGFsbC5zaCB8IGJhc2hgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlzdCBzcGFjaW5nPXszfSBteT17MH0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLWFsdFwiIC8+XHJcbiAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGlzRXh0ZXJuYWxcclxuICAgICAgICAgICAgICAgIGhyZWY9e1JvdXRlcy5zZWNtYW5SZXBvfVxyXG4gICAgICAgICAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgICAgICAgICBtcj17Mn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZWNtYW4gUmVwbyA8TGlua0ljb24gLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTWFpbj5cclxuXHJcbiAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICA8Q1RBIC8+XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICDijKggQnlcclxuICAgICAgICAgIDxMaW5rIGlzRXh0ZXJuYWwgaHJlZj17Um91dGVzLnNlY21hbn0+XHJcbiAgICAgICAgICAgIHNlY21hblxyXG4gICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgIPCfpJ17XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBpc0V4dGVybmFsIGhyZWY9XCJodHRwczovL2NoYWtyYS11aS5jb21cIj5cclxuICAgICAgICAgICAgY2hha3JhLXVpXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
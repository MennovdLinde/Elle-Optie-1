"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"58ccd50397e1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MmZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjU4Y2NkNTAzOTdlMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/customSlider.tsx":
/*!**********************************!*\
  !*** ./src/app/customSlider.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\nconst CustomSlider = (param)=>{\n    let { images } = param;\n    const totalImages = images.concat(images); // Duplicate images for seamless scrolling\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-[18vh] overflow-hidden rounded-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"flex items-center h-full\",\n            animate: {\n                x: [\n                    \"-100%\",\n                    \"0%\"\n                ]\n            },\n            transition: {\n                repeat: Infinity,\n                duration: 40,\n                ease: \"linear\"\n            },\n            style: {\n                width: \"\".concat(totalImages.length * (100 / images.length), \"%\")\n            },\n            children: totalImages.map((src, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-full mx-2 flex-shrink-0\",\n                    style: {\n                        width: \"\".concat(100 / images.length, \"%\")\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 flex items-center justify-center rounded-lg shadow-md mb-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: src,\n                            alt: \"slide-\".concat(index),\n                            layout: \"fill\",\n                            className: \"rounded-lg object-cover p-2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Hobby\\\\VSC\\\\Elle-optie\\\\src\\\\app\\\\customSlider.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Hobby\\\\VSC\\\\Elle-optie\\\\src\\\\app\\\\customSlider.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Hobby\\\\VSC\\\\Elle-optie\\\\src\\\\app\\\\customSlider.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Hobby\\\\VSC\\\\Elle-optie\\\\src\\\\app\\\\customSlider.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Hobby\\\\VSC\\\\Elle-optie\\\\src\\\\app\\\\customSlider.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CustomSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSlider);\nvar _c;\n$RefreshReg$(_c, \"CustomSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY3VzdG9tU2xpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUNSO0FBRS9CLE1BQU1FLGVBQStDO1FBQUMsRUFBRUMsTUFBTSxFQUFFO0lBQzlELE1BQU1DLGNBQWNELE9BQU9FLE1BQU0sQ0FBQ0YsU0FBUywwQ0FBMEM7SUFFckYscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNQLGlEQUFNQSxDQUFDTSxHQUFHO1lBQ1RDLFdBQVU7WUFDVkMsU0FBUztnQkFBRUMsR0FBRztvQkFBQztvQkFBUztpQkFBSztZQUFDO1lBQzlCQyxZQUFZO2dCQUNWQyxRQUFRQztnQkFDUkMsVUFBVTtnQkFDVkMsTUFBTTtZQUNSO1lBQ0FDLE9BQU87Z0JBQ0xDLE9BQU8sR0FBOEMsT0FBM0NaLFlBQVlhLE1BQU0sR0FBSSxPQUFNZCxPQUFPYyxNQUFNLEdBQUU7WUFDdkQ7c0JBRUNiLFlBQVljLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDckIsOERBQUNkO29CQUVDQyxXQUFVO29CQUNWUSxPQUFPO3dCQUNMQyxPQUFPLEdBQXVCLE9BQXBCLE1BQU1iLE9BQU9jLE1BQU0sRUFBQztvQkFDaEM7OEJBRUEsNEVBQUNYO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTixrREFBS0E7NEJBQ0prQixLQUFLQTs0QkFDTEUsS0FBSyxTQUFlLE9BQU5EOzRCQUNkRSxRQUFPOzRCQUNQZixXQUFVOzs7Ozs7Ozs7OzttQkFYVGE7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7S0F0Q01sQjtBQXdDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2N1c3RvbVNsaWRlci50c3g/OGRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IEN1c3RvbVNsaWRlcjogUmVhY3QuRkM8eyBpbWFnZXM6IHN0cmluZ1tdIH0+ID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCB0b3RhbEltYWdlcyA9IGltYWdlcy5jb25jYXQoaW1hZ2VzKTsgLy8gRHVwbGljYXRlIGltYWdlcyBmb3Igc2VhbWxlc3Mgc2Nyb2xsaW5nXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVsxOHZoXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZ1wiPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbFwiXHJcbiAgICAgICAgYW5pbWF0ZT17eyB4OiBbXCItMTAwJVwiLCBcIjAlXCJdIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcclxuICAgICAgICAgIGR1cmF0aW9uOiA0MCwgLy8gQWRqdXN0IGR1cmF0aW9uIGZvciBkZXNpcmVkIHNwZWVkXHJcbiAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiBgJHt0b3RhbEltYWdlcy5sZW5ndGggKiAoMTAwIC8gaW1hZ2VzLmxlbmd0aCl9JWAsIC8vIEVuc3VyZSBzcGFjZSBmb3IgYWxsIGltYWdlc1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7dG90YWxJbWFnZXMubWFwKChzcmMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCBteC0yIGZsZXgtc2hyaW5rLTBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLyBpbWFnZXMubGVuZ3RofSVgLCAvLyBLZWVwIHRoZSBzYW1lIHByb3BvcnRpb24gZm9yIGVhY2ggaW1hZ2VcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgc2hhZG93LW1kIG1iLTFcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgc2xpZGUtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG9iamVjdC1jb3ZlciBwLTJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21TbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJJbWFnZSIsIkN1c3RvbVNsaWRlciIsImltYWdlcyIsInRvdGFsSW1hZ2VzIiwiY29uY2F0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYW5pbWF0ZSIsIngiLCJ0cmFuc2l0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJkdXJhdGlvbiIsImVhc2UiLCJzdHlsZSIsIndpZHRoIiwibGVuZ3RoIiwibWFwIiwic3JjIiwiaW5kZXgiLCJhbHQiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/customSlider.tsx\n"));

/***/ })

});
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/React */ \"./src/React.ts\");\n\nconst App = () => {\n    return (_src_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { draggable: true },\n        _src_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"h2\", null, \"Hello React!\"),\n        _src_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"p\", null, \"I am a pargraph\"),\n        _src_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"input\", { type: \"text\" })));\n};\nconst root = document.getElementById(\"app-root\");\n(0,_src_React__WEBPACK_IMPORTED_MODULE_0__.render)(_src_React__WEBPACK_IMPORTED_MODULE_0__.React.createElement(App), root);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUNMLDZCQUFLLFNBQVM7UUFDWiwrQ0FBcUI7UUFDckIsaURBQXNCO1FBQ3RCLCtCQUFPLElBQUksRUFBQyxNQUFNLEdBQUcsQ0FDakIsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack://react/./app/app.tsx?");

/***/ }),

/***/ "./src/React.ts":
/*!**********************!*\
  !*** ./src/React.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   React: () => (/* binding */ React),\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nlet document;\nif (typeof window !== \"undefined\") {\n    document = window.document;\n}\nelse {\n    const { JSDOM } = __webpack_require__(/*! jsdom */ \"jsdom\");\n    new JSDOM().window.document;\n}\nconst React = {\n    createElement: (tagOrComponent, props, ...children) => {\n        if (typeof tagOrComponent === \"function\") {\n            return tagOrComponent();\n        }\n        return {\n            tag: tagOrComponent,\n            props,\n            children,\n        };\n    }\n};\nconst render = (element, container) => {\n    if (typeof element === \"string\") {\n        const textElement = document.createTextNode(element);\n        container.appendChild(textElement);\n        return;\n    }\n    const domElement = document.createElement(element.tag);\n    if (element.props) {\n        Object.keys(element.props).forEach((prop) => {\n            domElement[prop] = element.props[prop];\n        });\n    }\n    if (element.children) {\n        element.children.forEach((child) => {\n            render(child, domElement);\n        });\n    }\n    container.appendChild(domElement);\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUmVhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxRQUFrQixDQUFDO0FBQ3ZCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFLENBQUM7SUFDbEMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDN0IsQ0FBQztLQUNJLENBQUM7SUFDSixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ25CLGFBQWEsRUFBRSxDQUNiLGNBQW9DLEVBQ3BDLEtBQXNDLEVBQ3RDLEdBQUcsUUFBZSxFQUFFLEVBQUU7UUFFdEIsSUFBSSxPQUFPLGNBQWMsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUN6QyxPQUFPLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPO1lBQ0wsR0FBRyxFQUFFLGNBQWM7WUFDbkIsS0FBSztZQUNMLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FDcEIsT0FJQyxFQUFFLFNBQXNCLEVBQUUsRUFBRTtJQUM3QixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyJ9\n\n//# sourceURL=webpack://react/./src/React.ts?");

/***/ }),

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/***/ ((module) => {

module.exports = require("jsdom");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app.tsx");
/******/ 	
/******/ })()
;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\r\n\r\n// TODO query images by unsplash api\r\nconst images = ['https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=erik-mclean-ZRns2R5azu0-unsplash.jpg&w=640', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=joey-banks-YApiWyp0lqo-unsplash.jpg&w=640']\r\n;(0,_slider__WEBPACK_IMPORTED_MODULE_0__.createSlider)(images)\r\n\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/slider-control-buttons.js":
/*!***************************************!*\
  !*** ./src/slider-control-buttons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createControlButtons\": () => (/* binding */ createControlButtons)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nconst createControlButtons = parentNode => {\r\n  function _createControlButton (buttonClass) {\r\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', parentNode, buttonClass)\r\n  }\r\n\r\n  const prev = _createControlButton('fas fa-chevron-left control prev-image')\r\n  const next = _createControlButton('fas fa-chevron-right control next-image')\r\n\r\n  return { prev, next }\r\n}\r\n\n\n//# sourceURL=webpack://image-slider/./src/slider-control-buttons.js?");

/***/ }),

/***/ "./src/slider-image.js":
/*!*****************************!*\
  !*** ./src/slider-image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCurrentImageDOM\": () => (/* binding */ createCurrentImageDOM),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nconst createCurrentImageDOM = (image, parentNode) => {\r\n  const img = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', parentNode, 'slider-current-image')\r\n  img.setAttribute('src', image)\r\n  return img\r\n}\r\n\r\nconst createImage = (position, images) => {\r\n  if (images.length - 1 < position) {\r\n    position = 0\r\n  }\r\n\r\n  if (position < 0) {\r\n    position = images.length - 1\r\n  }\r\n\r\n  return { src: images[position], position }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://image-slider/./src/slider-image.js?");

/***/ }),

/***/ "./src/slider-nav-dot.js":
/*!*******************************!*\
  !*** ./src/slider-nav-dot.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDotNav\": () => (/* binding */ createDotNav)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nconst createDotNav = (parentNode, images) => {\r\n  const dotNav = createDotNav()\r\n  build()\r\n\r\n  function build () {\r\n    createDotItems()\r\n    clickDotNavListener(target => changeDotItem(target))\r\n  }\r\n\r\n  function createDotNav () {\r\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', parentNode, 'slider-dot-nav')\r\n  }\r\n\r\n  function createDotItem () {\r\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', dotNav, 'fas fa-circle')\r\n  }\r\n\r\n  function createDotItems () {\r\n    for (let i = 0; i < images.length; i++) {\r\n      createDotItem()\r\n    }\r\n  }\r\n\r\n  function getDotItemIndex (item) {\r\n    const items = [...dotNav.children]\r\n    return items.indexOf(item)\r\n  }\r\n\r\n  function getDotItemByIndex (index) {\r\n    return dotNav.children[index]\r\n  }\r\n\r\n  function enableDotItem (selected) {\r\n    selected.classList.add('enabled')\r\n  }\r\n\r\n  function disableDotItem () {\r\n    const enabled = dotNav.querySelector('.enabled')\r\n    if (enabled) {\r\n      enabled.classList.remove('enabled')\r\n    }\r\n  }\r\n\r\n  function changeDotItem (newDotItem) {\r\n    disableDotItem()\r\n    enableDotItem(newDotItem)\r\n  }\r\n\r\n  function changeDotItemByIndex (index) {\r\n    disableDotItem()\r\n    enableDotItem(getDotItemByIndex(index))\r\n  }\r\n\r\n  function clickDotNavListener (callback) {\r\n    dotNav.addEventListener('click', event => {\r\n      if (event.target && event.target.className.includes('fas fa-circle')) {\r\n        callback(event.target)\r\n      }\r\n    })\r\n  }\r\n  return { dotNav, getDotItemIndex, clickDotNavListener, changeDotItemByIndex }\r\n}\r\n\n\n//# sourceURL=webpack://image-slider/./src/slider-nav-dot.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSlider\": () => (/* binding */ createSlider)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _slider_nav_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-nav-dot */ \"./src/slider-nav-dot.js\");\n/* harmony import */ var _slider_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-image */ \"./src/slider-image.js\");\n/* harmony import */ var _slider_control_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider-control-buttons */ \"./src/slider-control-buttons.js\");\n\r\n\r\n\r\n\r\n\r\nconst createSlider = (images, parentNode = document.body) => {\r\n  const sliderDOM = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', parentNode, 'slider')\r\n\r\n  const { prev, next } = (0,_slider_control_buttons__WEBPACK_IMPORTED_MODULE_3__.createControlButtons)(sliderDOM)\r\n  let currentImage = { src: images[0], position: 0 }\r\n  const currentImageDOM = (0,_slider_image__WEBPACK_IMPORTED_MODULE_2__.createCurrentImageDOM)(currentImage.src, sliderDOM)\r\n  const {\r\n    getDotItemIndex,\r\n    clickDotNavListener,\r\n    changeDotItemByIndex\r\n  } = (0,_slider_nav_dot__WEBPACK_IMPORTED_MODULE_1__.createDotNav)(sliderDOM, images)\r\n  changeDotItemByIndex(currentImage.position)\r\n  dotNavClickListener()\r\n  controlButtonsClickListener()\r\n\r\n  function dotNavClickListener () {\r\n    clickDotNavListener(target => {\r\n      const position = getDotItemIndex(target)\r\n      currentImage = { src: images[position], position }\r\n      currentImageDOM.src = currentImage.src\r\n    })\r\n  }\r\n\r\n  function controlButtonsClickListener () {\r\n    prev.addEventListener('click', controlButtonClickListener)\r\n    next.addEventListener('click', controlButtonClickListener)\r\n  }\r\n\r\n  function controlButtonClickListener (event) {\r\n    const buttonClass = event.target.className\r\n    const position = currentImage.position\r\n    const direction = buttonClass.includes('prev-image')\r\n      ? position - 1\r\n      : position + 1\r\n    currentImage = (0,_slider_image__WEBPACK_IMPORTED_MODULE_2__.createImage)(direction, images)\r\n    currentImageDOM.src = currentImage.src\r\n    changeDotItemByIndex(currentImage.position)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://image-slider/./src/slider.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (\r\n  tagName,\r\n  parentNode,\r\n  className,\r\n  textContent = null\r\n) => {\r\n  const element = document.createElement(tagName)\r\n  element.className = className\r\n  element.textContent = textContent\r\n  parentNode.appendChild(element)\r\n  return element\r\n}\r\n\n\n//# sourceURL=webpack://image-slider/./src/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
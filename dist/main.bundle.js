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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    /* background-image: url('/assets/sky-background-video-conferencing_23-2148623068.avif');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat; */\n    background-color: gray;\n    color: white;\n}\n\n.mainContainer {\n    display: grid;\n    grid-template: 50px 1fr 75px / 1fr;\n    gap: 20px;\n}\n\n/* Search input and buttons styling */\n.searchDiv {\n    grid-row: 1 / 2;\n    margin: 0 auto;\n}\n\ninput[type=\"search\"],\nbutton {\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: bold;\n    margin-top: 10px;\n}\n\ninput[type=\"search\"] {\n    font-size: 25px;\n    border-style: none;\n}\n\ninput[type=\"search\"]:focus {\n    outline: none;\n}\n\nbutton {\n    font-size: 20px;\n    border-radius: 5px;\n    border-style: none;\n    box-shadow: 1px 1px 3px white;\n}\n\nbutton:focus {\n    background-color: gray;\n}\n\n/* Content styling */\n.contentDiv {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template: 500px 500px / 1fr;\n    gap: 20px;\n    width: 100%;\n}\n\n#currentData {\n    grid-row: 1 / 2;\n    display: grid;\n    grid-template: 100px 150px repeat(2, 1fr) / 1fr;\n    margin: 0 auto;\n    width: 750px;\n    height: 500px;\n    border-style: none;\n    border-radius: 10px;\n    box-shadow: 3px 3px 6px black;\n    background-color: white;\n    color: black;\n}\n\n#currentDataHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    flex: 1 1 0;\n    justify-content: space-between;\n}\n\n#currentDataHeader:first-child,\n#currentDataHeader:last-child {\n    margin: 10px;\n}\n\n#currentDataDateLocationCountry {\n    grid-row: 2 / 3;\n}\n\n.currentDataDate,\n.currentDataLocation,\n.currentDataCountry,\n.currentTemp,\n.currentFeeling,\n.dailyForecastTitle {\n    margin-left: 10px;\n}\n\n#currentDataTempCondition {\n    grid-row: 3 / 4;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#currentDataMetrics {\n    grid-row: 4 / 5;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#forecastedData {\n    grid-row: 2 / 3;\n    display: flex;\n    flex: 1 1 0;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.dailyForecast,\n.hourlyForecast {\n    display: grid;\n    grid-template: 50px 1fr / 1fr;\n    box-shadow: 3px 3px 6px black;\n    background-color: white;\n    color: black;\n    border-radius: 20px;\n    border-style: none;\n}\n\n.dailyForecast {\n    width: 400px;\n    height: 500px;\n}\n\n.dailyForecastTitle {\n    grid-row: 1 / 2;\n    text-align: center;\n}\n\n.dailyForecastContent {\n    grid-row: 2 / 3;\n    display: flex;\n    flex: 1 0 100%;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.forecast {\n    display: grid;\n    grid-template: 50px 100px 1fr;\n    align-items: center;\n}\n\n.dailyTemps {\n    grid-row: 3 / 4;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.hourlyForecast {\n    width: 750px;\n    height: 500px;\n    overflow-y: auto;\n}\ni {\n    font-size: 32px;\n}\n\n.hourlyHeader {\n    grid-row: 1 / 2;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n    text-align: center;\n}\n\n.hourlyHeader:first-child,\n.hourlyHeader:last-child {\n    margin: 20px;\n}\n\n\n.hourlyData {\n    grid-row: 2 / 3;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 16px;\n    font-weight: bold;\n    color: black;\n    width: inherit;\n    height: inherit;\n    margin: 10px;\n    padding: 10px;\n}\n\n.hourlyData:nth-child('odd') {\n    background-color: gray;\n}\n\n.hourlyData:nth-child('even') {\n    background-color: white;\n}\n\n/* Footer styling */\nfooter {\n    grid-row: 3 / 4;\n    width: 100%;\n    opacity: 0.7;\n}\n\nfigure {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfigcaption {\n    margin-top: 10px;\n    margin-right: 10px;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: 25px;\n    font-weight: bold;\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://simpleweather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://simpleweather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://simpleweather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://simpleweather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://simpleweather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n// import hourly from './hourly';\n\nconst search = document.querySelector('#search');\nconst celcius = document.querySelector('#celcius');\nconst fahrenheiht = document.querySelector('#fahrenheiht');\nconst hourlyForecast = document.querySelector('.hourlyForecast');\nconst hourlyTitle = document.querySelector('.hourlyTitle');\nconst hourlyData = document.querySelector('.hourlyData');\nconst hourlyHeader = document.querySelector('.hourlyHeader');\nconst hourlyDate = document.querySelector('.date');\nconst header = document.createElement('thead');\nconst headerRow = document.createElement('tr');\nconst currentDataContainer = document.querySelector('#currentData');\nconst currentDataDate = document.querySelector('.currentDataDate');\nconst currentDataLocation = document.querySelector('.currentDataLocation');\nconst currentDataCountry = document.querySelector('.currentDataCountry');\nconst currentTemp = document.querySelector('.currentTemp');\nconst currentFeeling = document.querySelector('.currentFeeling');\nconst currentDataIcon = document.querySelector('#currentDataIcon');\nconst currentCondition = document.querySelector('.currentCondition');\nconst speed = document.querySelector('.speed');\nconst speedText = document.querySelector('.speedText');\nconst percent = document.querySelector('.percent');\nconst percentText = document.querySelector('.percentText');\nconst uv = document.querySelector('.uv');\nconst uvText = document.querySelector('.uvText');\nconst visibility = document.querySelector('.visibility');\nconst visibilityText = document.querySelector('.visibilityText');\nconst currentDataHeaderTitle = document.querySelector('.currentDataHeaderTitle');\nconst currentDataHeaderTime = document.querySelector('.currentDataHeaderTime');\nconst currentDataHeaderUpdate = document.querySelector('.currentDataHeaderUpdate');\nconst dailyForecast = document.querySelector('.dailyForecast');\nconst forecastDayAndDate = document.querySelector('.forecastDayAndDate');\nconst dailyIcon = document.querySelector('.dailyIcon');\nconst high = document.querySelector('.high');\nconst low = document.querySelector('.low');\n\n\n\nlet city;\nhourlyForecast.style.display = \"none\";\ncurrentDataContainer.style.display = 'none';\ndailyForecast.style.display = 'none';\n\nsearch.addEventListener('change', () => {\n    city = search.value;\n    search.value = '';\n})\n\ncelcius.addEventListener('click', () => {\n    const data = getWeather(city);\n    data.then(resolvedData => {\n        console.log(resolvedData);\n        const [day1, day2, day3] = resolvedData.forecast.forecastday;\n        const date = new Date(day1.date);\n        const dateArray = date.toString().split(' ');\n        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')\n\n        // CURRENT DATA LOGIC\n        currentDataContainer.style = 'display: grid';\n        dailyForecast.style.display = 'grid';\n        \n        \n        const locationData = resolvedData.location.localtime.toString().split(' ');\n        currentDataHeaderTime.textContent = locationData[1]\n        currentDataHeaderTime.style = 'text-align: center;';\n        currentDataHeaderUpdate.textContent = 'Last Updated';\n        currentDataHeaderUpdate.style = 'opacity: 0.5; font-weight: bold;';\n        currentDataHeaderTitle.textContent = 'Current Weather';\n\n        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];\n        currentDataDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');\n        currentDataLocation.textContent = resolvedData.location.name + ', ' + resolvedData.location.region;\n        currentDataCountry.textContent = resolvedData.location.country;\n        currentDataCountry.style = 'opacity: 0.5; font-weight: bold;';\n\n        const currentTempSup = document.createElement('sup');\n        const currentTempSpan = document.createElement('span');\n        currentTempSup.textContent = 'o';\n        currentTempSpan.textContent = 'C';\n        currentTemp.textContent = resolvedData.current.temp_c \n        currentTemp.appendChild(currentTempSup)\n        currentTemp.appendChild(currentTempSpan)\n        const currentFeelingSup = document.createElement('sup');\n        const currentFeelingSpan = document.createElement('span');\n        currentFeelingSup.textContent = 'o';\n        currentFeelingSpan.textContent = 'C';\n        currentFeeling.textContent = 'Feels like ' + resolvedData.current.feelslike_c;\n        currentFeeling.style = 'opacity: 0.5; font-weight: bold;'\n        currentFeeling.appendChild(currentFeelingSup)\n        currentFeeling.appendChild(currentFeelingSpan)\n        currentDataIcon.src = 'https:'+resolvedData.current.condition.icon;\n        currentCondition.textContent = resolvedData.current.condition.text;\n        currentCondition.style = 'margin-left: 0';\n        \n        speed.textContent = resolvedData.current.wind_kph + ' Km/h '+ resolvedData.current.wind_dir;\n        speedText.textContent = 'Wind';\n        speed.style = 'text-align: center';\n        speedText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';\n        percent.textContent = resolvedData.current.humidity + '%';\n        percentText.textContent = 'Humidity';\n        percent.style = 'text-align: center';\n        percentText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';\n        uv.textContent = resolvedData.current.uv;\n        uvText.textContent = 'UV Index';\n        uv.style = 'text-align: center';\n        uvText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';\n        visibility.textContent = resolvedData.current.vis_km + ' Km';\n        visibilityText.textContent = 'Visibility';\n        visibilityText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';\n        visibility.style = 'text-align: center';\n\n\n        // DAILY FORECAST DATA LOGIC\n        forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');\n        dailyIcon.src = 'https:' + day1.day.condition.icon;\n        dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';\n        const highTempSup = document.createElement('sup');\n        const highTempSpan = document.createElement('span');\n        highTempSup.textContent = 'o';\n        highTempSpan.textContent = 'C';\n        high.textContent = day1.day.maxtemp_c;\n        high.appendChild(highTempSup)\n        high.appendChild(highTempSpan);\n        const lowTempSup = document.createElement('sup');\n        const lowTempSpan = document.createElement('span');\n        lowTempSup.textContent = 'o';\n        lowTempSpan.textContent = 'C';\n        low.textContent = day1.day.mintemp_c;\n        low.style = 'opacity: 0.5; font-weight: bold;';\n        low.appendChild(lowTempSup)\n        low.appendChild(lowTempSpan)\n        \n\n        // HOURLY FORECAST DATA LOGIC\n        hourlyTitle.textContent = \"Hourly Forecast\";\n        hourlyForecast.style.display = \"grid\";\n\n        const headerData = ['Time', 'Icon', 'Condition', 'Temp (Celcius)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];\n        headerData.forEach(text => {\n            const data = document.createElement('th');\n            data.textContent = text;\n            headerRow.appendChild(data);\n        })\n\n        header.appendChild(headerRow);\n        hourlyData.appendChild(header);\n\n        \n\n        day1.hour.forEach(hour => {\n            const icon = document.createElement('img');\n            icon.src = 'https:'+hour.condition.icon;\n            const row = document.createElement('tr');\n            const rowData1 = document.createElement('td');\n            const rowData2 = document.createElement('td');\n            const rowData3 = document.createElement('td');\n            const rowData4 = document.createElement('td');\n            const rowData5 = document.createElement('td');\n            const rowData6 = document.createElement('td');\n            const rowData7 = document.createElement('td');\n            const rowData8 = document.createElement('td');\n            rowData1.textContent = hour.time.split(' ')[1];\n            rowData2.appendChild(icon);\n            rowData3.textContent = hour.condition.text;\n            rowData4.textContent = hour.temp_c;\n            rowData5.textContent = hour.precip_mm;\n            rowData6.textContent = hour.wind_kph;\n            rowData7.textContent = hour.humidity;\n            rowData8.textContent = hour.feelslike_c;\n\n            row.appendChild(rowData1);\n            row.appendChild(rowData2);\n            row.appendChild(rowData3);\n            row.appendChild(rowData4);\n            row.appendChild(rowData5);\n            row.appendChild(rowData6);\n            row.appendChild(rowData7);\n            row.appendChild(rowData8);\n        \n            hourlyData.appendChild(row);\n        })\n        // hourlyData.classList.add('hourlyData');\n        \n        hourlyForecast.appendChild(hourlyHeader);\n        hourlyForecast.appendChild(hourlyData);\n        // hourlyForecast.style.display = \"grid\";\n    })\n    city = '';\n})\n\nfahrenheiht.addEventListener('click', () => {\n    const data = getWeather(city);\n    data.then(resolve => {\n        console.log(resolve);\n    })\n    city = '';\n})\n\nasync function getWeather(location){\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=3`, { mode: \"cors\" });\n    const weatherData = await response.json();\n    return weatherData;\n}\n\n\n\n//# sourceURL=webpack://simpleweather/./src/script.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
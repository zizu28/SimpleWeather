/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

body,
html {
    position: relative;
    background-color: gray;
    color: white;
}

.mainContainer {
    display: grid;
    grid-template: 50px 1fr 75px / 1fr;
    gap: 20px;
}

/* Search input and buttons styling */
.searchDiv {
    grid-row: 1 / 2;
    margin: 0 auto;
}

input[type="search"],
button {
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    margin-top: 10px;
}

input[type="search"] {
    font-size: 25px;
    border-style: none;
}

input[type="search"]:focus {
    outline: none;
}

button {
    font-size: 20px;
    border-radius: 5px;
    border-style: none;
    box-shadow: 1px 1px 3px white;
}

button:focus {
    background-color: gray;
}

/* Content styling */
.contentDiv {
    grid-row: 2 / 3;
    display: grid;
    grid-template: 500px 500px / 1fr;
    gap: 20px;
    width: 100%;
}

.gifAndData {
    grid-row: 1 / 2;
    display: flex;
    flex: 1 1 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.gif img {
    display: grid;
    box-shadow: 3px 3px 6px black;
    background-color: white;
    color: black;
    border-radius: 20px;
    border-style: none;
    width: 400px;
    height: 500px;
    object-fit: cover;
}

#currentData {
    display: grid;
    grid-template: 100px 150px repeat(2, 1fr) / 1fr;
    width: 750px;
    height: 500px;
    border-style: none;
    border-radius: 10px;
    box-shadow: 3px 3px 6px black;
    background-color: white;
    color: black;
}


#currentDataHeader {
    grid-row: 1 / 2;
    display: flex;
    flex: 1 1 0;
    justify-content: space-between;
}

#currentDataHeader:first-child,
#currentDataHeader:last-child {
    margin: 10px;
}

#currentDataDateLocationCountry {
    grid-row: 2 / 3;
}

.currentDataDate,
.currentDataLocation,
.currentDataCountry,
.currentTemp,
.currentFeeling,
.dailyForecastTitle {
    margin-left: 10px;
}

#currentDataTempCondition {
    grid-row: 3 / 4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#currentDataMetrics {
    grid-row: 4 / 5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#forecastedData {
    grid-row: 2 / 3;
    display: flex;
    flex: 1 1 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.dailyForecast,
.hourlyForecast {
    display: grid;
    grid-template: 50px 1fr / 1fr;
    box-shadow: 3px 3px 6px black;
    background-color: white;
    color: black;
    border-radius: 20px;
    border-style: none;
}

.dailyForecast {
    width: 400px;
    height: 500px;
}

.dailyForecastTitle {
    grid-row: 1 / 2;
    text-align: center;
}

.dailyForecastContent {
    grid-row: 2 / 3;
    display: flex;
    flex: 1 0 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.forecast {
    display: grid;
    grid-template: 50px 100px 1fr;
    align-items: center;
}

.dailyTemps {
    grid-row: 3 / 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.hourlyForecast {
    width: 750px;
    height: 500px;
    overflow-y: auto;
}
i {
    font-size: 32px;
}

.hourlyHeader {
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: center;
}

.hourlyHeader:first-child,
.hourlyHeader:last-child {
    margin: 20px;
}


.hourlyData {
    grid-row: 2 / 3;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: bold;
    color: black;
    width: inherit;
    height: inherit;
    margin: 10px;
    padding: 10px;
}

.hourlyData:nth-child('odd') {
    background-color: gray;
}

.hourlyData:nth-child('even') {
    background-color: white;
}

/* Footer styling */
footer {
    grid-row: 3 / 4;
    width: 100%;
    opacity: 0.7;
}

figure {
    display: flex;
    justify-content: center;
    align-items: center;
}

figcaption {
    margin-top: 10px;
    margin-right: 10px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    font-weight: bold;
    color: white;
}

.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.loading-overlay.hidden {
display: none;
}

.loader {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-top-color: #007bff;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadingOverlay = document.querySelector('.loading-overlay');

async function getWeather(location = localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation'): 'Tamale'){
    loadingOverlay.classList.remove('hidden');
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fa43114a16544456bb311445240605&q=${location}&days=7`, { mode: "cors" });
    const weatherData = await response.json();
    loadingOverlay.classList.add('hidden');
    return weatherData;
}

async function getGif(location = localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation'): 'Tamale'){
    loadingOverlay.classList.remove('hidden');
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=5jPQE4Oe3NJuZbtMgBTGjkVPTmH2v9MV&q=${location}&limit=1`, { mode: 'cors' });
    const gifData = await response.json();
    loadingOverlay.classList.add('hidden');
    return gifData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getWeather, getGif});

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forecastDayAndDate = document.querySelector('.forecastDayAndDate');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

function getCelciusDay(resolvedData, n = 0){
    const date = new Date(resolvedData.forecast.forecastday[n].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    dailyIcon.src = 'https:' + resolvedData.forecast.forecastday[n].day.condition.icon;
    dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
    const highTempSup = document.createElement('sup');
    const highTempSpan = document.createElement('span');
    highTempSup.textContent = 'o';
    highTempSpan.textContent = 'C';
    high.textContent = resolvedData.forecast.forecastday[n].day.maxtemp_c;
    high.appendChild(highTempSup)
    high.appendChild(highTempSpan);
    const lowTempSup = document.createElement('sup');
    const lowTempSpan = document.createElement('span');
    lowTempSup.textContent = 'o';
    lowTempSpan.textContent = 'C';
    low.textContent = resolvedData.forecast.forecastday[n].day.mintemp_c;
    low.style = 'opacity: 0.5; font-weight: bold;';
    low.appendChild(lowTempSup)
    low.appendChild(lowTempSpan)
}

function getFahrenheihtDay(resolvedData, n = 0){
    const date = new Date(resolvedData.forecast.forecastday[n].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    forecastDayAndDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    dailyIcon.src = 'https:' + resolvedData.forecast.forecastday[0].day.condition.icon;
    dailyIcon.style = 'height: 100px; width: 100px; margin: 0 auto;';
    const highTempSup = document.createElement('sup');
    const highTempSpan = document.createElement('span');
    highTempSup.textContent = 'o';
    highTempSpan.textContent = 'F';
    high.textContent = resolvedData.forecast.forecastday[n].day.maxtemp_f;
    high.appendChild(highTempSup)
    high.appendChild(highTempSpan);
    const lowTempSup = document.createElement('sup');
    const lowTempSpan = document.createElement('span');
    lowTempSup.textContent = 'o';
    lowTempSpan.textContent = 'F';
    low.textContent = resolvedData.forecast.forecastday[n].day.mintemp_f;
    low.style = 'opacity: 0.5; font-weight: bold;';
    low.appendChild(lowTempSup)
    low.appendChild(lowTempSpan)
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getCelciusDay, getFahrenheihtDay });

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const currentDataHeaderTitle = document.querySelector('.currentDataHeaderTitle');
const currentDataHeaderTime = document.querySelector('.currentDataHeaderTime');
const currentDataHeaderUpdate = document.querySelector('.currentDataHeaderUpdate');
const currentDataContainer = document.querySelector('#currentData');
const currentDataDate = document.querySelector('.currentDataDate');
const currentDataLocation = document.querySelector('.currentDataLocation');
const currentDataCountry = document.querySelector('.currentDataCountry');
const currentTemp = document.querySelector('.currentTemp');
const currentFeeling = document.querySelector('.currentFeeling');
const currentDataIcon = document.querySelector('#currentDataIcon');
const currentCondition = document.querySelector('.currentCondition');
const speed = document.querySelector('.speed');
const speedText = document.querySelector('.speedText');
const percent = document.querySelector('.percent');
const percentText = document.querySelector('.percentText');
const uv = document.querySelector('.uv');
const uvText = document.querySelector('.uvText');
const visibility = document.querySelector('.visibility');
const visibilityText = document.querySelector('.visibilityText');
const dailyForecast = document.querySelector('.dailyForecast');


function displayCurrentFahrenheihtData(resolvedData){
    currentDataContainer.style = 'display: grid';
    dailyForecast.style.display = 'grid';

    const locationData = resolvedData.location.localtime.toString().split(' ');
    currentDataHeaderTime.textContent = locationData[1]
    currentDataHeaderTime.style = 'text-align: center;';
    currentDataHeaderUpdate.textContent = 'Last Updated';
    currentDataHeaderUpdate.style = 'opacity: 0.5; font-weight: bold;';
    currentDataHeaderTitle.textContent = 'Current Weather';

    const date = new Date(resolvedData.forecast.forecastday[0].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    currentDataDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    currentDataLocation.textContent = resolvedData.location.name + ', ' + resolvedData.location.region;
    currentDataCountry.textContent = resolvedData.location.country;
    currentDataCountry.style = 'opacity: 0.5; font-weight: bold;';

    const currentTempSup = document.createElement('sup');
    const currentTempSpan = document.createElement('span');
    currentTempSup.textContent = 'o';
    currentTempSpan.textContent = 'F';
    currentTemp.textContent = resolvedData.current.temp_f 
    currentTemp.appendChild(currentTempSup)
    currentTemp.appendChild(currentTempSpan)
    const currentFeelingSup = document.createElement('sup');
    const currentFeelingSpan = document.createElement('span');
    currentFeelingSup.textContent = 'o';
    currentFeelingSpan.textContent = 'F';
    currentFeeling.textContent = 'Feels like ' + resolvedData.current.feelslike_f;
    currentFeeling.style = 'opacity: 0.5; font-weight: bold;'
    currentFeeling.appendChild(currentFeelingSup)
    currentFeeling.appendChild(currentFeelingSpan)
    currentDataIcon.src = 'https:'+resolvedData.current.condition.icon;
    currentCondition.textContent = resolvedData.current.condition.text;
    currentCondition.style = 'margin-left: 0';

    speed.textContent = resolvedData.current.wind_kph + ' Km/h '+ resolvedData.current.wind_dir;
    speedText.textContent = 'Wind';
    speed.style = 'text-align: center';
    speedText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    percent.textContent = resolvedData.current.humidity + '%';
    percentText.textContent = 'Humidity';
    percent.style = 'text-align: center';
    percentText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    uv.textContent = resolvedData.current.uv;
    uvText.textContent = 'UV Index';
    uv.style = 'text-align: center';
    uvText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    visibility.textContent = resolvedData.current.vis_km + ' Km';
    visibilityText.textContent = 'Visibility';
    visibilityText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    visibility.style = 'text-align: center';
}

function displayCurrentCelciusData(resolvedData){
    currentDataContainer.style = 'display: grid';
    dailyForecast.style.display = 'grid';
    const locationData = resolvedData.location.localtime.toString().split(' ');
    currentDataHeaderTime.textContent = locationData[1]
    currentDataHeaderTime.style = 'text-align: center;';
    currentDataHeaderUpdate.textContent = 'Last Updated';
    currentDataHeaderUpdate.style = 'opacity: 0.5; font-weight: bold;';
    currentDataHeaderTitle.textContent = 'Current Weather';

    const date = new Date(resolvedData.forecast.forecastday[0].date)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dateArray = date.toString().split(' ');
    currentDataDate.textContent = days[date.getDay() - 1] + ', '+ [dateArray[1], dateArray[2]].join(' ');
    currentDataLocation.textContent = resolvedData.location.name + ', ' + resolvedData.location.region;
    currentDataCountry.textContent = resolvedData.location.country;
    currentDataCountry.style = 'opacity: 0.5; font-weight: bold;';

    const currentTempSup = document.createElement('sup');
    const currentTempSpan = document.createElement('span');
    currentTempSup.textContent = 'o';
    currentTempSpan.textContent = 'C';
    currentTemp.textContent = resolvedData.current.temp_c; 
    currentTemp.appendChild(currentTempSup)
    currentTemp.appendChild(currentTempSpan)
    const currentFeelingSup = document.createElement('sup');
    const currentFeelingSpan = document.createElement('span');
    currentFeelingSup.textContent = 'o';
    currentFeelingSpan.textContent = 'C';
    currentFeeling.textContent = 'Feels like ' + resolvedData.current.feelslike_c;
    currentFeeling.style = 'opacity: 0.5; font-weight: bold;'
    currentFeeling.appendChild(currentFeelingSup)
    currentFeeling.appendChild(currentFeelingSpan)
    currentDataIcon.src = 'https:'+resolvedData.current.condition.icon;
    currentCondition.textContent = resolvedData.current.condition.text;
    currentCondition.style = 'margin-left: 0';

    speed.textContent = resolvedData.current.wind_kph + ' Km/h '+ resolvedData.current.wind_dir;
    speedText.textContent = 'Wind';
    speed.style = 'text-align: center';
    speedText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    percent.textContent = resolvedData.current.humidity + '%';
    percentText.textContent = 'Humidity';
    percent.style = 'text-align: center';
    percentText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    uv.textContent = resolvedData.current.uv;
    uvText.textContent = 'UV Index';
    uv.style = 'text-align: center';
    uvText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    visibility.textContent = resolvedData.current.vis_km + ' Km';
    visibilityText.textContent = 'Visibility';
    visibilityText.style = 'opacity: 0.5; font-weight: bold; text-align: center;';
    visibility.style = 'text-align: center';
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ displayCurrentCelciusData, displayCurrentFahrenheihtData });

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHourlyCelciusData(resolvedData, n = 0){
    const hourlyData = document.querySelector('.hourlyData');
    const hourlyTitle = document.querySelector('.hourlyTitle');
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    hourlyTitle.textContent = "Hourly Forecast";
    const hourlyForecast = document.querySelector('.hourlyForecast');
    hourlyForecast.style.display = "grid";

    const headerData = ['Time', 'Icon', 'Condition', 'Temp (Celcius)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
    headerData.forEach(text => {
        const data = document.createElement('th');
        data.textContent = text;
        headerRow.appendChild(data);
    })

    header.appendChild(headerRow);
    hourlyData.appendChild(header);
    const days = resolvedData.forecast.forecastday;
    days[n].hour.forEach(hour => {
        const icon = document.createElement('img');
        icon.src = 'https:'+hour.condition.icon;
        const row = document.createElement('tr');
        const rowData1 = document.createElement('td');
        const rowData2 = document.createElement('td');
        const rowData3 = document.createElement('td');
        const rowData4 = document.createElement('td');
        const rowData5 = document.createElement('td');
        const rowData6 = document.createElement('td');
        const rowData7 = document.createElement('td');
        const rowData8 = document.createElement('td');
        rowData1.textContent = hour.time.split(' ')[1];
        rowData2.appendChild(icon);
        rowData3.textContent = hour.condition.text;
        rowData4.textContent = hour.temp_c;
        rowData5.textContent = hour.precip_mm;
        rowData6.textContent = hour.wind_kph;
        rowData7.textContent = hour.humidity;
        rowData8.textContent = hour.feelslike_c;
    
        row.appendChild(rowData1);
        row.appendChild(rowData2);
        row.appendChild(rowData3);
        row.appendChild(rowData4);
        row.appendChild(rowData5);
        row.appendChild(rowData6);
        row.appendChild(rowData7);
        row.appendChild(rowData8);
        row.style = 'text-align: center';
    
        hourlyData.appendChild(row);
    })
}

function loadHourlyFahrenheihtData(resolvedData, n = 0){
    const hourlyData = document.querySelector('.hourlyData');
    const hourlyTitle = document.querySelector('.hourlyTitle');
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    hourlyTitle.textContent = "Hourly Forecast";
    const hourlyForecast = document.querySelector('.hourlyForecast');
    hourlyForecast.style.display = "grid";

    const headerData = ['Time', 'Icon', 'Condition', 'Temp (Fahrenheiht)', 'Precipitation (mm)', 'Wind Speed (kph)', 'Humidity', 'Feels Like'];
    headerData.forEach(text => {
        const data = document.createElement('th');
        data.textContent = text;
        headerRow.appendChild(data);
    })

    header.appendChild(headerRow);
    hourlyData.appendChild(header);
    const days = resolvedData.forecast.forecastday;
    days[n].hour.forEach(hour => {
        const icon = document.createElement('img');
        icon.src = 'https:'+hour.condition.icon;
        const row = document.createElement('tr');
        const rowData1 = document.createElement('td');
        const rowData2 = document.createElement('td');
        const rowData3 = document.createElement('td');
        const rowData4 = document.createElement('td');
        const rowData5 = document.createElement('td');
        const rowData6 = document.createElement('td');
        const rowData7 = document.createElement('td');
        const rowData8 = document.createElement('td');
        rowData1.textContent = hour.time.split(' ')[1];
        rowData2.appendChild(icon);
        rowData3.textContent = hour.condition.text;
        rowData4.textContent = hour.temp_f;
        rowData5.textContent = hour.precip_mm;
        rowData6.textContent = hour.wind_kph;
        rowData7.textContent = hour.humidity;
        rowData8.textContent = hour.feelslike_f;
    
        row.appendChild(rowData1);
        row.appendChild(rowData2);
        row.appendChild(rowData3);
        row.appendChild(rowData4);
        row.appendChild(rowData5);
        row.appendChild(rowData6);
        row.appendChild(rowData7);
        row.appendChild(rowData8);
        row.style = 'text-align: center';
    
        hourlyData.appendChild(row);
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadHourlyCelciusData, loadHourlyFahrenheihtData});

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _hourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



const hourlyData = document.querySelector('.hourlyData');
const hourlyDate = document.querySelector('.date');
const dailyIcon = document.querySelector('.dailyIcon');
const high = document.querySelector('.high');
const low = document.querySelector('.low');

function nextDay(resolvedWeatherData, dayIndex){
    const days = resolvedWeatherData.forecast.forecastday;
    if(dayIndex < days.length - 1){
        hourlyData.textContent = '';
        dailyIcon.src = '';
        high.textContent = '';
        low.textContent = '';
        dayIndex += 1;
        const date = new Date(days[dayIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        _daily__WEBPACK_IMPORTED_MODULE_0__["default"].getCelciusDay(resolvedWeatherData, dayIndex);
        _hourly__WEBPACK_IMPORTED_MODULE_1__["default"].loadHourlyCelciusData(resolvedWeatherData, dayIndex);
    }
    return dayIndex;
}

function previousDay(resolvedWeatherData, dayIndex){
    const days = resolvedWeatherData.forecast.forecastday;
    if(dayIndex > 0){
        hourlyData.textContent = '';
        dailyIcon.src = '';
        high.textContent = '';
        low.textContent = '';
        dayIndex -= 1;
        const date = new Date(days[dayIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        _daily__WEBPACK_IMPORTED_MODULE_0__["default"].getCelciusDay(resolvedWeatherData, dayIndex);
        _hourly__WEBPACK_IMPORTED_MODULE_1__["default"].loadHourlyCelciusData(resolvedWeatherData, dayIndex);
    }
    return dayIndex;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ nextDay, previousDay});

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _hourly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _Days__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);







const search = document.querySelector('#search');
const celcius = document.querySelector('#celcius');
const fahrenheiht = document.querySelector('#fahrenheiht');
const hourlyDate = document.querySelector('.date');
const gif = document.querySelector('#gif');
const hourlyData = document.querySelector('.hourlyData');
const previousDay = document.querySelector('#previousDay');
const nextDay = document.querySelector('#nextDay');

nextDay.style = 'cursor: pointer';
previousDay.style = 'cursor: pointer';

let city;
let daysIndex = 0;

// let n = 0;

search.addEventListener('change', () => {
    localStorage.setItem('lastLocation', search.value);
    city = search.value;
    search.value = '';
})

nextDay.addEventListener('click', () => {
    const data = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather();
    data.then(resolvedData => {
        daysIndex = _Days__WEBPACK_IMPORTED_MODULE_5__["default"].nextDay(resolvedData, daysIndex);
    })
})

previousDay.addEventListener('click', () => {
    const data = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather();
    data.then(resolvedData => {
        daysIndex = _Days__WEBPACK_IMPORTED_MODULE_5__["default"].previousDay(resolvedData, daysIndex);
    })
})

window.onload = onWindowLoad;

function onWindowLoad(){
    const gifData = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getGif();
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather();
    data.then(resolvedData => {
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        _current__WEBPACK_IMPORTED_MODULE_3__["default"].displayCurrentCelciusData(resolvedData);
        _daily__WEBPACK_IMPORTED_MODULE_2__["default"].getCelciusDay(resolvedData, daysIndex);
        _hourly__WEBPACK_IMPORTED_MODULE_4__["default"].loadHourlyCelciusData(resolvedData, daysIndex);
    })
}

celcius.addEventListener('click', () => {
    const gifData = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getGif(city);
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(city);
    data.then(resolvedData => {
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        _current__WEBPACK_IMPORTED_MODULE_3__["default"].displayCurrentCelciusData(resolvedData);
        _daily__WEBPACK_IMPORTED_MODULE_2__["default"].getCelciusDay(resolvedData, daysIndex);
        _hourly__WEBPACK_IMPORTED_MODULE_4__["default"].loadHourlyCelciusData(resolvedData, daysIndex);
    })
})

fahrenheiht.addEventListener('click', () => {
    const gifData = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getGif(city);
    gifData.then(result => {
        gif.src = result.data[0].images.original.url;
        gif.style = 'width: 400px; height: 500px;'
    })
    const data = _api__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(city);
    data.then(resolvedData => {
        hourlyData.textContent = '';
        const days = resolvedData.forecast.forecastday;
        const date = new Date(days[daysIndex].date);
        const dateArray = date.toString().split(' ');
        hourlyDate.textContent = [dateArray[1], dateArray[2], dateArray[3]].join('-')
        
        _current__WEBPACK_IMPORTED_MODULE_3__["default"].displayCurrentFahrenheihtData(resolvedData);
        _daily__WEBPACK_IMPORTED_MODULE_2__["default"].getFahrenheihtDay(resolvedData, daysIndex);
        _hourly__WEBPACK_IMPORTED_MODULE_4__["default"].loadHourlyFahrenheihtData(resolvedData, daysIndex);
    })
})
})();

/******/ })()
;
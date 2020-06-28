/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n////////////////////////////////////////////\n//////////// var, let, const //////////////\n///////////////////////////////////////////\n\n// var \t---> \tfunction scope\n// let \t---> \tblock scope\n// const \t----> \tblock scope and read only\n\n\n////////////////////////////////////////////\n//////////////// objects //////////////////\n///////////////////////////////////////////\n\nvar person2 = {\n\tname: 'sajib',\n\tcollege: function college(name) {\n\t\tconsole.log(\"Hi\");\n\t\treturn name + \" college\";\n\t},\n\tschool: function school(name) {\n\t\treturn name + \" shcool\";\n\t}\n};\n\n////////////////////////////////////////////\n//////////// this keyword //////////////////\n///////////////////////////////////////////\n\nvar person = {\n\tname: 'sk',\n\tcollege: function college() {\n\t\tconsole.log(this.name); // the value of 'this' is determine how the function is called\n\t}\n};\n\nperson.college(); // 'this' is represent the person object\n\n// var college = person.college // 'this' is represent the global window object\n// console.log(college)\n// college()\n\n// set this value permanently using bind method\nvar college = person.college.bind(person2); // now 'this' is represent the person2 object\ncollege();\n\n////////////////////////////////////////////\n//////////// Arrow function ///////////////\n///////////////////////////////////////////\n\nvar square = function square(number) {\n\treturn number * number;\n};\nconsole.log(square(5));\n\nvar multiply = function multiply(number1, number2) {\n\treturn number1 * number2;\n};\nconsole.log(multiply(3, 4));\n\nvar jobs = [{ id: 1, isActive: true }, { id: 2, isActive: true }, { id: 3, isActive: false }, { id: 4, isActive: true }, { id: 5, isActive: false }];\n\nvar activeJob = jobs.filter(function (job) {\n\treturn job.isActive;\n});\nconsole.log(activeJob);\n\nvar inActiveJob = jobs.filter(function (job) {\n\treturn !job.isActive;\n});\nconsole.log(inActiveJob);\n\nvar jobId = jobs.map(function (job) {\n\treturn job.id;\n});\nconsole.log(jobId);\n\n// arrow function don't rebind 'this' keyword\n\n// rebind 'this' keyword\nvar person = {\n\tname: 'sajib',\n\ttalk: function talk() {\n\t\tsetTimeout(function () {\n\t\t\tconsole.log(this);\n\t\t}, 1000);\n\t}\n};\nperson.talk();\n\n// don't rebind the this keyword\nvar person = {\n\tname: 'sajib',\n\ttalk: function talk() {\n\t\tvar _this = this;\n\n\t\tsetTimeout(function () {\n\t\t\treturn console.log(_this);\n\t\t}, 1000);\n\t}\n};\nperson.talk();\n\n////////////////////////////////////////////\n//////////// object destructuring /////////\n///////////////////////////////////////////\n\nvar address = {\n\tstreet: 'isubpur',\n\tcity: 'Naogoan',\n\tcountry: 'Bangladesh'\n};\n\nvar street = address.street;\n\nconsole.log(street);\n\nvar st = address.street;\n\nconsole.log(st);\n\n////////////////////////////////////////////\n//////////// spread operator //////////////\n///////////////////////////////////////////\n\nvar first = [1, 2, 3, 4, 5, 6];\nvar second = [9, 8, 7, 6, 4];\n\nvar combined = [].concat(_toConsumableArray(first), ['d'], _toConsumableArray(second));\nconsole.log(combined);\n\nvar first = { name: \"sajib\" };\nvar second = { job: \"software engineer\" };\n\nvar c = _extends({}, first, second, { location: \"Bangladesh\" });\nconsole.log(c);\n\n////////////////////////////////////////////\n///////////////// classes /////////////////\n///////////////////////////////////////////\n\nvar Student = function () {\n\tfunction Student(name, country) {\n\t\t_classCallCheck(this, Student);\n\n\t\tthis.name = name;\n\t\tthis.country = country;\n\t}\n\n\t_createClass(Student, [{\n\t\tkey: \"address\",\n\t\tvalue: function address(street, city) {\n\t\t\treturn { street: street, city: city, country: this.country };\n\t\t}\n\t}]);\n\n\treturn Student;\n}();\n\n////////////////////////////////////////////\n////////////// inheritance /////////////////\n///////////////////////////////////////////\n\nvar Teacher = exports.Teacher = function (_Student) {\n\t_inherits(Teacher, _Student);\n\n\tfunction Teacher(name, country, degree) {\n\t\t_classCallCheck(this, Teacher);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call(this, name, country));\n\n\t\t_this2.degree = degree;\n\t\treturn _this2;\n\t}\n\n\t_createClass(Teacher, [{\n\t\tkey: \"subject\",\n\t\tvalue: function subject(sub_name) {\n\t\t\treturn sub_name + \" teacher\";\n\t\t}\n\t}]);\n\n\treturn Teacher;\n}(Student);\n\n////////////////////////////////////////////\n//////////////// modules ///////////////////\n///////////////////////////////////////////\n\n// this example is in the head-teacher.js file\n\n\nconsole.log(\"hello earth\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/products/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/products/[slug].js":
/*!**************************************!*\
  !*** ./src/pages/products/[slug].js ***!
  \**************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Nenad/Web Development/graphcms-nextjs-boilerplate/src/pages/products/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"GraphQLClient\"](process.env.GRAPHCMS_PROJECT_API);\nasync function getStaticProps({\n  params\n}) {\n  const {\n    product\n  } = await graphcms.request(`\n    query ProductPageQuery($slug: String!) {\n      product(where: { slug: $slug }) {\n        name\n        description\n        price\n      }\n    }\n  `, {\n    slug: params.slug\n  });\n  return {\n    props: {\n      product\n    }\n  };\n}\nasync function getStaticPaths() {\n  const {\n    products\n  } = await graphcms.request(`\n    {\n      products {\n        slug\n        name\n      }\n    }\n  `);\n  return {\n    paths: products.map(({\n      slug\n    }) => ({\n      params: {\n        slug\n      }\n    })),\n    fallback: false\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  product\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 3\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }\n}, product.name), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }\n}, product.description), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }\n}, product.price / 100)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzP2VhMGUiXSwibmFtZXMiOlsiZ3JhcGhjbXMiLCJHcmFwaFFMQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIkdSQVBIQ01TX1BST0pFQ1RfQVBJIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9kdWN0IiwicmVxdWVzdCIsInNsdWciLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicHJvZHVjdHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyw2REFBSixDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG9CQUE5QixDQUFqQjtBQUVPLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNO0FBQUVDO0FBQUYsTUFBYyxNQUFNUCxRQUFRLENBQUNRLE9BQVQsQ0FDdkI7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBVDRCLEVBVXhCO0FBQ0VDLFFBQUksRUFBRUgsTUFBTSxDQUFDRztBQURmLEdBVndCLENBQTFCO0FBZUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEg7QUFESztBQURGLEdBQVA7QUFLRDtBQUVNLGVBQWVJLGNBQWYsR0FBZ0M7QUFDckMsUUFBTTtBQUFFQztBQUFGLE1BQWUsTUFBTVosUUFBUSxDQUFDUSxPQUFULENBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUDZCLENBQTNCO0FBU0EsU0FBTztBQUNMSyxTQUFLLEVBQUVELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLENBQUM7QUFBRUw7QUFBRixLQUFELE1BQWU7QUFDakNILFlBQU0sRUFBRTtBQUFFRztBQUFGO0FBRHlCLEtBQWYsQ0FBYixDQURGO0FBSUxNLFlBQVEsRUFBRTtBQUpMLEdBQVA7QUFNRDtBQUVjLGdFQUFDO0FBQUVSO0FBQUYsQ0FBRCxLQUNiLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUtBLE9BQU8sQ0FBQ1MsSUFBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFJVCxPQUFPLENBQUNVLFdBQVosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSVYsT0FBTyxDQUFDVyxLQUFSLEdBQWdCLEdBQXBCLENBSEYsQ0FERiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5jb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52LkdSQVBIQ01TX1BST0pFQ1RfQVBJKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFxuICAgIGBcbiAgICBxdWVyeSBQcm9kdWN0UGFnZVF1ZXJ5KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICBwcm9kdWN0KHdoZXJlOiB7IHNsdWc6ICRzbHVnIH0pIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBwcmljZVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgICB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoYFxuICAgIHtcbiAgICAgIHByb2R1Y3RzIHtcbiAgICAgICAgc2x1Z1xuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICBgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHsgc2x1ZyB9KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHNsdWcgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBwcm9kdWN0IH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDxwPntwcm9kdWN0LnByaWNlIC8gMTAwfTwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/products/[slug].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-request\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIj9jYzFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImdyYXBocWwtcmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-request\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
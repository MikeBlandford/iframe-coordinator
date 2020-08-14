(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes leading and trailing slashes from a route to simplify comparisons
 * against other paths.
 *
 * @external
 */
function normalizeRoute(route) {
    return stripLeadingSlash(stripTrailingSlash(route));
}
exports.normalizeRoute = normalizeRoute;
/**
 * Removes any leading '/' characters from a string.
 *
 * @external
 */
function stripLeadingSlash(str) {
    return str.replace(/^\/+/, '');
}
exports.stripLeadingSlash = stripLeadingSlash;
/**
 * Removes any trailing '/' characters from a string.
 *
 * @external
 */
function stripTrailingSlash(str) {
    return str.replace(/\/+$/, '');
}
exports.stripTrailingSlash = stripTrailingSlash;
/**
 * Removes any leading '/' or '#' characters from a string.
 *
 * @external
 */
function stripLeadingSlashAndHashTag(str) {
    return str.replace(/^(\/|#)+/, '');
}
exports.stripLeadingSlashAndHashTag = stripLeadingSlashAndHashTag;
/**
 * Join multiple routes into one URL.
 *
 * @external
 */
function joinRoutes(...routes) {
    return routes.map(route => normalizeRoute(route)).join('/');
}
exports.joinRoutes = joinRoutes;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** @external */
const findIndex = [].findIndex ||
    // IE11 support
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#Polyfill
    function (predicate, thisArg) {
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        const o = Object(this);
        // tslint:disable-next-line
        const len = o.length >>> 0;
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        let k = 0;
        while (k < len) {
            const kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
                return k;
            }
            k++;
        }
        return -1;
    };
/**
 * Used to determine equivalancy of two handlers.
 *
 * @external
 */
function isRegistered(value) {
    return value === this;
}
/**
 * API for registering and unregistering event handlers. Mirrors the browser's EventTarget API.
 *
 * @param T The type of event produced by the emitter.
 */
class EventEmitter {
    /**
     * Constructing EventEmitters is an internal-only operation. API consumers should not create this
     * class directly.
     *
     * @external
     */
    constructor(internalEmitter) {
        this._rootEmitter = internalEmitter;
    }
    /**
     * Sets up a function that will be called whenever the specified event type is delivered to the target.
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The handler which receives a notification when an event of the specified type occurs.
     */
    addListener(type, listener) {
        this._rootEmitter.addListener(type, listener);
        return this;
    }
    /**
     * Removes from the event listener previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     * @param listener The event handler to remove from the event target.
     */
    removeListener(type, listener) {
        this._rootEmitter.removeListener(type, listener);
        return this;
    }
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeAllListeners(type) {
        this._rootEmitter.removeAllListeners(type);
        return this;
    }
}
exports.EventEmitter = EventEmitter;
/**
 * An event emitter based on {@link EventTarget} used to signal
 * events between host and client. This provides class safety
 * on both the type and listeners
 * @external
 */
// tslint:disable-next-line
class InternalEventEmitter {
    constructor() {
        this._events = {};
    }
    /**
     * Sets up a function that will be called whenever the specified event type is delivered to the target.
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The handler which receives a notification when an event of the specified type occurs.
     */
    addListener(type, listener) {
        // TODO Improve performance by allowing
        // a single T to be assigned without creating an array
        if (!this._events[type]) {
            this._events[type] = [];
        }
        const listeners = this._events[type];
        if (findIndex.call(listeners, isRegistered, listener) < 0) {
            // Only add listener if it wasn't already added.
            listeners.push(listener);
        }
        return this;
    }
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeListener(type, listener) {
        if (!this._events[type]) {
            return this;
        }
        const listeners = this._events[type];
        const index = findIndex.call(listeners, isRegistered, listener);
        if (index >= 0) {
            this._events[type].splice(index, 1);
        }
        return this;
    }
    /**
     * Removes all event listeners previously registered with {@link EventEmitter.addEventListener}.
     * @param type A string which specifies the type of event for which to remove an event listener.
     */
    removeAllListeners(type) {
        delete this._events[type];
        return this;
    }
    /**
     * Dispatches data (synchronously) invoking the affected listeners in the appropriate order.
     * @param type A string which specifies the type of event to raise.
     * @param data The event data to send to the listeners.
     * @returns true if the handlers were called, otherwise false.
     */
    dispatch(type, data) {
        if (!this._events[type]) {
            return false;
        }
        const listeners = this._events[type];
        const length = listeners.length;
        for (let i = 0; i < length; i++) {
            listeners[i](data);
        }
        return true;
    }
}
exports.InternalEventEmitter = InternalEventEmitter;


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const KeyDown_1 = __webpack_require__(30);
const Lifecycle_1 = __webpack_require__(33);
const NavRequest_1 = __webpack_require__(34);
const Notification_1 = __webpack_require__(35);
const Publication_1 = __webpack_require__(36);
/**
 * Validates correctness of messages being sent from
 * the client to the host.
 * @param msg The message requiring validation.
 * @external
 */
function validate(msg) {
    return decoders_1.guard(decoders_1.dispatch('msgType', {
        publish: Publication_1.decoder,
        registeredKeyFired: KeyDown_1.decoder,
        client_started: Lifecycle_1.startedDecoder,
        navRequest: NavRequest_1.decoder,
        notifyRequest: Notification_1.decoder,
        toastRequest: Notification_1.decoder
    }))(msg);
}
exports.validate = validate;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "guard", {
  enumerable: true,
  get: function get() {
    return _guard.guard;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function get() {
    return _utils.compose;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _utils.map;
  }
});
Object.defineProperty(exports, "predicate", {
  enumerable: true,
  get: function get() {
    return _utils.predicate;
  }
});
Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function get() {
    return _array.array;
  }
});
Object.defineProperty(exports, "poja", {
  enumerable: true,
  get: function get() {
    return _array.poja;
  }
});
Object.defineProperty(exports, "boolean", {
  enumerable: true,
  get: function get() {
    return _boolean["boolean"];
  }
});
Object.defineProperty(exports, "numericBoolean", {
  enumerable: true,
  get: function get() {
    return _boolean.numericBoolean;
  }
});
Object.defineProperty(exports, "truthy", {
  enumerable: true,
  get: function get() {
    return _boolean.truthy;
  }
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function get() {
    return _constants.constant;
  }
});
Object.defineProperty(exports, "hardcoded", {
  enumerable: true,
  get: function get() {
    return _constants.hardcoded;
  }
});
Object.defineProperty(exports, "mixed", {
  enumerable: true,
  get: function get() {
    return _constants.mixed;
  }
});
Object.defineProperty(exports, "null_", {
  enumerable: true,
  get: function get() {
    return _constants.null_;
  }
});
Object.defineProperty(exports, "undefined_", {
  enumerable: true,
  get: function get() {
    return _constants.undefined_;
  }
});
Object.defineProperty(exports, "unknown", {
  enumerable: true,
  get: function get() {
    return _constants.unknown;
  }
});
Object.defineProperty(exports, "date", {
  enumerable: true,
  get: function get() {
    return _date.date;
  }
});
Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function get() {
    return _dispatch.dispatch;
  }
});
Object.defineProperty(exports, "either", {
  enumerable: true,
  get: function get() {
    return _either.either;
  }
});
Object.defineProperty(exports, "either3", {
  enumerable: true,
  get: function get() {
    return _either.either3;
  }
});
Object.defineProperty(exports, "either4", {
  enumerable: true,
  get: function get() {
    return _either.either4;
  }
});
Object.defineProperty(exports, "either5", {
  enumerable: true,
  get: function get() {
    return _either.either5;
  }
});
Object.defineProperty(exports, "either6", {
  enumerable: true,
  get: function get() {
    return _either.either6;
  }
});
Object.defineProperty(exports, "either7", {
  enumerable: true,
  get: function get() {
    return _either.either7;
  }
});
Object.defineProperty(exports, "either8", {
  enumerable: true,
  get: function get() {
    return _either.either8;
  }
});
Object.defineProperty(exports, "either9", {
  enumerable: true,
  get: function get() {
    return _either.either9;
  }
});
Object.defineProperty(exports, "oneOf", {
  enumerable: true,
  get: function get() {
    return _either.oneOf;
  }
});
Object.defineProperty(exports, "fail", {
  enumerable: true,
  get: function get() {
    return _fail.fail;
  }
});
Object.defineProperty(exports, "instanceOf", {
  enumerable: true,
  get: function get() {
    return _instanceOf.instanceOf;
  }
});
Object.defineProperty(exports, "mapping", {
  enumerable: true,
  get: function get() {
    return _mapping.mapping;
  }
});
Object.defineProperty(exports, "dict", {
  enumerable: true,
  get: function get() {
    return _mapping.dict;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function get() {
    return _number.integer;
  }
});
Object.defineProperty(exports, "number", {
  enumerable: true,
  get: function get() {
    return _number.number;
  }
});
Object.defineProperty(exports, "positiveInteger", {
  enumerable: true,
  get: function get() {
    return _number.positiveInteger;
  }
});
Object.defineProperty(exports, "positiveNumber", {
  enumerable: true,
  get: function get() {
    return _number.positiveNumber;
  }
});
Object.defineProperty(exports, "exact", {
  enumerable: true,
  get: function get() {
    return _object.exact;
  }
});
Object.defineProperty(exports, "object", {
  enumerable: true,
  get: function get() {
    return _object.object;
  }
});
Object.defineProperty(exports, "pojo", {
  enumerable: true,
  get: function get() {
    return _object.pojo;
  }
});
Object.defineProperty(exports, "maybe", {
  enumerable: true,
  get: function get() {
    return _optional.maybe;
  }
});
Object.defineProperty(exports, "nullable", {
  enumerable: true,
  get: function get() {
    return _optional.nullable;
  }
});
Object.defineProperty(exports, "optional", {
  enumerable: true,
  get: function get() {
    return _optional.optional;
  }
});
Object.defineProperty(exports, "email", {
  enumerable: true,
  get: function get() {
    return _string.email;
  }
});
Object.defineProperty(exports, "regex", {
  enumerable: true,
  get: function get() {
    return _string.regex;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string.string;
  }
});
Object.defineProperty(exports, "url", {
  enumerable: true,
  get: function get() {
    return _string.url;
  }
});
Object.defineProperty(exports, "tuple2", {
  enumerable: true,
  get: function get() {
    return _tuple.tuple2;
  }
});
Object.defineProperty(exports, "tuple3", {
  enumerable: true,
  get: function get() {
    return _tuple.tuple3;
  }
});
Object.defineProperty(exports, "tuple4", {
  enumerable: true,
  get: function get() {
    return _tuple.tuple4;
  }
});
Object.defineProperty(exports, "tuple5", {
  enumerable: true,
  get: function get() {
    return _tuple.tuple5;
  }
});
Object.defineProperty(exports, "tuple6", {
  enumerable: true,
  get: function get() {
    return _tuple.tuple6;
  }
});

var _guard = __webpack_require__(7);

var _utils = __webpack_require__(14);

var _array = __webpack_require__(16);

var _boolean = __webpack_require__(17);

var _constants = __webpack_require__(19);

var _date = __webpack_require__(20);

var _dispatch = __webpack_require__(21);

var _either = __webpack_require__(22);

var _fail = __webpack_require__(24);

var _instanceOf = __webpack_require__(25);

var _mapping = __webpack_require__(26);

var _number = __webpack_require__(18);

var _object = __webpack_require__(23);

var _optional = __webpack_require__(27);

var _string = __webpack_require__(28);

var _tuple = __webpack_require__(29);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guard = guard;

var _debrief = __webpack_require__(8);

/**
 * Alternative for serialize() that does not echo back the input value.
 */
function serializeSimple(annotation) {
  return (0, _debrief.summarize)(annotation).join('\n');
}

function guard(decoder, options) {
  var o = options || {};
  var style = o.style || 'inline';
  var serializer = style === 'inline' ? _debrief.serialize // Normal serializer, which echoes back inputted value and inlines errors
  : serializeSimple; // Only returns error messages, without echoing back input

  return function (blob) {
    return decoder(blob).mapError(function (annotation) {
      var err = new Error('\n' + serializer(annotation));
      err.name = 'Decoding error';
      return err;
    }).unwrap();
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "annotate", {
  enumerable: true,
  get: function get() {
    return _annotate["default"];
  }
});
Object.defineProperty(exports, "annotateFields", {
  enumerable: true,
  get: function get() {
    return _annotate.annotateFields;
  }
});
Object.defineProperty(exports, "isAnnotation", {
  enumerable: true,
  get: function get() {
    return _ast.isAnnotation;
  }
});
Object.defineProperty(exports, "serialize", {
  enumerable: true,
  get: function get() {
    return _serialize["default"];
  }
});
Object.defineProperty(exports, "summarize", {
  enumerable: true,
  get: function get() {
    return _summarize["default"];
  }
});
Object.defineProperty(exports, "indent", {
  enumerable: true,
  get: function get() {
    return _utils.indent;
  }
});

var _annotate = _interopRequireWildcard(__webpack_require__(9));

var _ast = __webpack_require__(10);

var _serialize = _interopRequireDefault(__webpack_require__(11));

var _summarize = _interopRequireDefault(__webpack_require__(13));

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotateFields = annotateFields;
exports["default"] = annotate;

var _ast = __webpack_require__(10);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function annotateFields(object, fields, _seen) {
  var seen = _seen !== null && _seen !== void 0 ? _seen : new WeakSet();

  if (seen.has(object)) {
    return {
      type: 'CircularRefAnnotation',
      annotation: undefined
    };
  }

  seen.add(object); // Convert the object to a list of pairs

  var pairs = Object.entries(object); // If we want to annotate keys that are missing in the object, add an
  // explicit "undefined" value for those now, so we have a place in the
  // object to annotate

  var existingKeys = new Set(Object.keys(object));

  var _iterator = _createForOfIteratorHelper(fields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 1),
          field = _step$value[0];

      if (!existingKeys.has(field)) {
        pairs.push([field, undefined]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(fields),
      _step2;

  try {
    var _loop = function _loop() {
      var _step2$value = _slicedToArray(_step2.value, 2),
          field = _step2$value[0],
          ann = _step2$value[1];

      // prettier-ignore
      pairs = pairs.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return field === k ? [k, typeof ann === 'string' ? annotate(v, ann, seen) : ann] : [k, v];
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return annotatePairs(pairs, undefined, seen);
}

function annotatePairs(value, annotation, seen) {
  var pairs = value.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        v = _ref4[1];

    return {
      key: key,
      value: annotate(v, undefined, seen)
    };
  });
  return {
    type: 'ObjectAnnotation',
    pairs: pairs,
    annotation: annotation
  };
}

function annotate(value, annotation, _seen) {
  if (value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value.getMonth === 'function') {
    return {
      type: 'ScalarAnnotation',
      value: value,
      annotation: annotation
    };
  }

  var ann = (0, _ast.asAnnotation)(value); // istanbul ignore else

  if (ann) {
    if (annotation === undefined) {
      return ann;
    } else if (ann.type === 'ObjectAnnotation') {
      return {
        type: 'ObjectAnnotation',
        pairs: ann.pairs,
        annotation: annotation
      };
    } else if (ann.type === 'ArrayAnnotation') {
      return {
        type: 'ArrayAnnotation',
        items: ann.items,
        annotation: annotation
      };
    } else if (ann.type === 'FunctionAnnotation') {
      return {
        type: 'FunctionAnnotation',
        annotation: annotation
      };
    } else if (ann.type === 'CircularRefAnnotation') {
      return {
        type: 'CircularRefAnnotation',
        annotation: annotation
      };
    } else {
      return {
        type: 'ScalarAnnotation',
        value: ann.value,
        annotation: annotation
      };
    }
  } else if (Array.isArray(value)) {
    var seen = _seen !== null && _seen !== void 0 ? _seen : new WeakSet();

    if (seen.has(value)) {
      return {
        type: 'CircularRefAnnotation',
        annotation: annotation
      };
    } else {
      seen.add(value);
    }

    var items = value.map(function (v) {
      return annotate(v, undefined, seen);
    });
    return {
      type: 'ArrayAnnotation',
      items: items,
      annotation: annotation
    };
  } else if (_typeof(value) === 'object') {
    var _seen2 = _seen !== null && _seen !== void 0 ? _seen : new WeakSet();

    if (_seen2.has(value)) {
      return {
        type: 'CircularRefAnnotation',
        annotation: annotation
      };
    } else {
      _seen2.add(value);
    }

    return annotatePairs(Object.entries(value), annotation, _seen2);
  } else if (typeof value === 'function') {
    return {
      type: 'FunctionAnnotation',
      annotation: annotation
    };
  } else {
    throw new Error('Unknown annotation');
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asAnnotation = asAnnotation;
exports.isAnnotation = isAnnotation;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asAnnotation(thing) {
  if (_typeof(thing) === 'object' && thing !== null) {
    if (thing.type === 'ObjectAnnotation') {
      return thing;
    } else if (thing.type === 'ArrayAnnotation') {
      return thing;
    } else if (thing.type === 'ScalarAnnotation') {
      return thing;
    } else if (thing.type === 'FunctionAnnotation') {
      return thing;
    } else if (thing.type === 'CircularRefAnnotation') {
      return thing;
    }
  }

  return undefined;
}

function isAnnotation(thing) {
  return asAnnotation(thing) !== undefined;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeValue = serializeValue;
exports.serializeAnnotation = serializeAnnotation;
exports["default"] = serialize;

var _utils = __webpack_require__(12);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function serializeString(s) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  // Full string
  // Abbreviated to $maxlen i.e. "Vincent Driess..." [truncated]
  var ser = JSON.stringify(s);

  if (ser.length <= width) {
    return ser;
  } // Cut off a bit


  var truncated = s.substring(0, width - 15) + '...';
  ser = JSON.stringify(truncated) + ' [truncated]';
  return ser;
}

function serializeArray(value, prefix) {
  if (value.length === 0) {
    return '[]';
  }

  var result = [];

  var _iterator = _createForOfIteratorHelper(value),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      var _serializeAnnotation = serializeAnnotation(item, prefix + _utils.INDENT),
          _serializeAnnotation2 = _slicedToArray(_serializeAnnotation, 2),
          ser = _serializeAnnotation2[0],
          ann = _serializeAnnotation2[1];

      result.push(prefix + _utils.INDENT + ser + ',');

      if (ann !== undefined) {
        result.push((0, _utils.indent)(ann, prefix + _utils.INDENT));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return ['['].concat(result, [prefix + ']']).join('\n');
}

function serializeObject(pairs, prefix) {
  if (pairs.length === 0) {
    return '{}';
  }

  var result = [];

  var _iterator2 = _createForOfIteratorHelper(pairs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var pair = _step2.value;
      var key = pair.key;
      var value = pair.value;
      var kser = serializeValue(key);
      var valPrefix = prefix + _utils.INDENT + ' '.repeat(kser.length + 2);

      var _serializeAnnotation3 = serializeAnnotation(value, prefix + _utils.INDENT),
          _serializeAnnotation4 = _slicedToArray(_serializeAnnotation3, 2),
          vser = _serializeAnnotation4[0],
          vann = _serializeAnnotation4[1];

      result.push(prefix + _utils.INDENT + kser + ': ' + vser + ',');

      if (vann !== undefined) {
        result.push((0, _utils.indent)(vann, valPrefix));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return ['{'].concat(result, [prefix + '}']).join('\n');
}

function serializeValue(value) {
  // istanbul ignore else
  if (typeof value === 'string') {
    return serializeString(value);
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString();
  } else if (value === null) {
    return 'null';
  } else if (value === undefined) {
    return 'undefined';
  } else {
    var valueAsDate = (0, _utils.asDate)(value);

    if (valueAsDate !== null) {
      return "new Date(".concat(JSON.stringify(valueAsDate.toISOString()), ")");
    } else if (value instanceof Date) {
      // NOTE: Using `instanceof Date` is unreliable way of checking dates.
      // If this case occurs (and it didn't pass the prior isDate())
      // check, then this must be the case where it's an invalid date.
      return '(Invalid Date)';
    } else {
      return '(unserializable)';
    }
  }
}

function serializeAnnotation(ann) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var serialized;

  if (ann.type === 'ArrayAnnotation') {
    serialized = serializeArray(ann.items, prefix);
  } else if (ann.type === 'ObjectAnnotation') {
    serialized = serializeObject(ann.pairs, prefix);
  } else if (ann.type === 'FunctionAnnotation') {
    serialized = 'function() {}';
  } else if (ann.type === 'CircularRefAnnotation') {
    serialized = '<circular ref>';
  } else {
    serialized = serializeValue(ann.value);
  }

  var annotation = ann.annotation;

  if (annotation !== undefined) {
    var sep = '^'.repeat((0, _utils.isMultiline)(serialized) ? 1 : serialized.length);
    return [serialized, [sep, annotation].join((0, _utils.isMultiline)(annotation) ? '\n' : ' ')];
  } else {
    return [serialized, undefined];
  }
}

function serialize(ann) {
  var _serializeAnnotation5 = serializeAnnotation(ann),
      _serializeAnnotation6 = _slicedToArray(_serializeAnnotation5, 2),
      serialized = _serializeAnnotation6[0],
      annotation = _serializeAnnotation6[1];

  if (annotation !== undefined) {
    return "".concat(serialized, "\n").concat(annotation);
  } else {
    return "".concat(serialized);
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asDate = asDate;
exports.isMultiline = isMultiline;
exports.indent = indent;
exports.INDENT = void 0;
// $FlowFixMe - deliberate casting
// Two spaces of indentation
var INDENT = '  ';
/**
 * `x instanceof Date` checks are unreliable across stack frames (that information
 * might get lost by the JS runtime), so we'll have to reside to more runtime
 * inspection checks.
 *
 * Taken from https://stackoverflow.com/a/44198641
 */

exports.INDENT = INDENT;

var isDate = function isDate(value) {
  return !!value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value);
};
/**
 * Is value is a valid Date instance, then return that.  If not, then return
 * null.
 */


function asDate(value) {
  return isDate(value) ? value : null;
}

function isMultiline(s) {
  var linecount = s.split('\n').length;
  return linecount > 1;
}

function indent(s) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INDENT;

  if (isMultiline(s)) {
    return s.split('\n').map(function (line) {
      return prefix + line;
    }).join('\n');
  } else {
    return prefix + s;
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = summarize;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Walks the annotation tree and emits the annotation's key path within the
 * object tree, and the message as a series of messages (array of strings).
 */
function summarize(ann) {
  var keypath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var result = [];

  if (ann.type === 'ArrayAnnotation') {
    var items = ann.items;
    var index = 0;

    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ann = _step.value;
        result.push.apply(result, _toConsumableArray(summarize(_ann, [].concat(_toConsumableArray(keypath), [index++]))));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (ann.type === 'ObjectAnnotation') {
    var pairs = ann.pairs;

    var _iterator2 = _createForOfIteratorHelper(pairs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var pair = _step2.value;
        result.push.apply(result, _toConsumableArray(summarize(pair.value, [].concat(_toConsumableArray(keypath), [pair.key]))));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  var annotation = ann.annotation;

  if (!annotation) {
    return result;
  }

  var prefix;

  if (keypath.length === 0) {
    prefix = '';
  } else if (keypath.length === 1) {
    prefix = typeof keypath[0] === 'number' ? "Value at index ".concat(keypath[0], ": ") : "Value at key ".concat(JSON.stringify(keypath[0]), ": ");
  } else {
    prefix = "Value at keypath ".concat(keypath.map(function (x) {
      return x.toString();
    }).join('.'), ": ");
  }

  return [].concat(result, ["".concat(prefix).concat(annotation)]);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.compose = compose;
exports.predicate = predicate;
exports.isDate = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

/**
 * `x instanceof Date` checks are unreliable across stack frames (that information
 * might get lost by the JS runtime), so we'll have to reside to more runtime
 * inspection checks.
 *
 * Taken from https://stackoverflow.com/a/44198641
 */
var isDate = function isDate(value) {
  return value !== undefined && value !== null && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value);
};
/**
 * Given a decoder T and a mapping function from T's to V's, returns a decoder
 * for V's.  This is useful to change the original input data.
 */


exports.isDate = isDate;

function map(decoder, mapper) {
  return compose(decoder, function (x) {
    return (0, _Result.Ok)(mapper(x));
  });
}
/**
 * Compose two decoders by passing the result of the first into the second.
 * The second decoder may assume as its input type the output type of the first
 * decoder (so it's not necessary to accept the typical "any").  This is useful
 * for "narrowing down" the checks.  For example, if you want to write
 * a decoder for positive numbers, you can compose it from an existing decoder
 * for any number, and a decoder that, assuming a number, checks if it's
 * positive.  Very often combined with the predicate() helper as the second
 * argument.
 */


function compose(decoder, next) {
  return function (blob) {
    return decoder(blob).andThen(next);
  };
}
/**
 * Factory function returning a Decoder<T>, given a predicate function that
 * accepts/rejects the input of type T.
 */


function predicate(predicate, msg) {
  return function (value) {
    return predicate(value) ? (0, _Result.Ok)(value) : (0, _Result.Err)((0, _debrief.annotate)(value, msg));
  };
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Err = exports.Ok = exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Result error value
 *     = Ok value
 *     | Err error
 */
var Ok = 'Ok';
var Err = 'Err'; // prettier-ignore

/**
 * Represents a union type that's either a legit value or an error:
 *
 *     Result error value
 *         = Ok value
 *         | Err error
 *
 */
var Result = /*#__PURE__*/function () {
  /**
   * **Do not call this constructor directly!**  Use either `Result.ok()` or
   * `Result.err()` to construct a new Result instance.
   */
  function Result(r) {
    _classCallCheck(this, Result);

    this._r = r;
  }
  /**
   * Create a new Result instance representing a successful computation.
   */


  _createClass(Result, [{
    key: "toString",
    value: function toString() {
      var r = this._r;
      return r.type === Ok ? "Ok(".concat(String(r.value), ")") : "Err(".concat(String(r.error), ")");
    }
  }, {
    key: "isOk",
    value: function isOk() {
      return this._r.type === Ok;
    }
  }, {
    key: "isErr",
    value: function isErr() {
      return this._r.type === Err;
    }
  }, {
    key: "withDefault",
    value: function withDefault(defaultValue) {
      var r = this._r;
      return r.type === Ok ? r.value : defaultValue;
    }
  }, {
    key: "value",
    value: function value() {
      var r = this._r;
      return r.type === Ok ? r.value : undefined;
    }
  }, {
    key: "errValue",
    value: function errValue() {
      var r = this._r;
      return r.type === Err ? r.error : undefined;
    }
    /**
     * Unwrap the value from this Result instance if this is an "Ok" result.
     * Otherwise, will throw the "Err" error via a runtime exception.
     */

  }, {
    key: "unwrap",
    value: function unwrap() {
      var r = this._r;

      if (r.type === Ok) {
        return r.value;
      } else {
        throw r.error;
      }
    }
  }, {
    key: "expect",
    value: function expect(message) {
      var r = this._r;

      if (r.type === Ok) {
        return r.value;
      } else {
        throw message instanceof Error ? message : new Error(message);
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(okCallback, errCallback) {
      var r = this._r;
      return r.type === Ok ? okCallback(r.value) : errCallback(r.error);
    }
    /**
     * Chain together a sequence of computations that may fail.
     */

  }, {
    key: "andThen",
    value: function andThen(callback) {
      var r = this._r;
      return r.type === Ok ? callback(r.value) : Result.err(r.error);
    }
    /**
     * Transform an Ok result.  If the result is an Err, the same error value
     * will propagate through.
     */

  }, {
    key: "map",
    value: function map(mapper) {
      var r = this._r;
      return r.type === Ok ? Result.ok(mapper(r.value)) : Result.err(r.error);
    }
    /**
     * Transform an Err value.  If the result is an Ok, this is a no-op.
     * Useful when for example the errors has too much information.
     */

  }, {
    key: "mapError",
    value: function mapError(mapper) {
      var r = this._r;
      return r.type === Ok ? Result.ok(r.value) : Result.err(mapper(r.error));
    }
  }], [{
    key: "ok",
    value: function ok(value) {
      return new Result({
        type: Ok,
        value: value
      });
    }
    /**
     * Create a new Result instance representing a failed computation.
     */

  }, {
    key: "err",
    value: function err(error) {
      return new Result({
        type: Err,
        error: error
      });
    }
  }]);

  return Result;
}();

exports["default"] = Result;

var _Ok = function _Ok(value) {
  return Result.ok(value);
};

exports.Ok = _Ok;

var _Err = function _Err(error) {
  return Result.err(error);
}; // prettier-ignore


exports.Err = _Err;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = array;
exports.poja = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _utils = __webpack_require__(14);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Like a "Plain Old JavaScript Object", but for arrays: "Plain Old JavaScript
 * Array" ^_^
 */
var poja = function poja(blob) {
  if (!Array.isArray(blob)) {
    return (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be an array'));
  }

  return (0, _Result.Ok)( // NOTE: Since Flow 0.98, Array.isArray() returns $ReadOnlyArray<mixed>
  // instead of Array<mixed>.  For rationale, see
  // https://github.com/facebook/flow/issues/7684.  In this case, we
  // don't want to output read-only types because it's up to the user of
  // decoders to determine what they want to do with the decoded output.
  // If they want to write items into the array, that's fine!
  // The fastest way to turn a read-only array into a normal array in
  // Javascript is to use .slice() on it, see this benchmark:
  // http://jsben.ch/lO6C5
  blob.slice());
};
/**
 * Given an iterable of Result instances, exhaust them all and return:
 * - An [index, err] tuple, indicating the (index of the) first Err instance
 *   encountered; or
 * - a new Ok with an array of all unwrapped Ok'ed values
 */


exports.poja = poja;

function all(iterable, blobs) {
  var results = [];
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var result = _step.value;

      try {
        var value = result.unwrap();
        results.push(value);
      } catch (ann) {
        // Rewrite the annotation to include the index information, and inject it into the original blob
        var clone = _toConsumableArray(blobs);

        clone.splice(index, 1, (0, _debrief.annotate)(ann, ann.annotation !== undefined ? "".concat(ann.annotation, " (at index ").concat(index, ")") : "index ".concat(index))); // const errValue = [];
        // if (index > 0) {
        //     errValue.push('...'); // TODO: make special mark, not string!
        // }
        // errValue.push(
        // );
        // if (index < iterable.length - 1) {
        //     errValue.push('...'); // TODO: make special mark, not string!
        // }

        return (0, _Result.Err)((0, _debrief.annotate)(clone));
      }

      index++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return (0, _Result.Ok)(results);
}
/**
 * Given a T, builds a decoder that assumes an array input and returns an
 * Array<T>.
 */


function members(decoder) {
  return function (blobs) {
    var results = blobs.map(decoder);
    var result = all(results, blobs);
    return result;
  };
}
/**
 * Builds a Decoder that returns Ok for values of `Array<T>`, given a Decoder
 * for `T`.  Err otherwise.
 */


function array(decoder) {
  return (0, _utils.compose)(poja, members(decoder));
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericBoolean = exports.truthy = exports["boolean"] = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _number = __webpack_require__(18);

var _utils = __webpack_require__(14);

/**
 * Decoder that only returns Ok for boolean inputs.  Err otherwise.
 */
var _boolean = function _boolean(blob) {
  return typeof blob === 'boolean' ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be boolean'));
};
/**
 * Decoder that returns true for all truthy values, and false otherwise.  Never fails.
 */


exports["boolean"] = _boolean;

var truthy = function truthy(blob) {
  return (0, _Result.Ok)(!!blob);
};
/**
 * Decoder that only returns Ok for numeric input values representing booleans.
 * Returns their boolean representation.  Err otherwise.
 */


exports.truthy = truthy;
var numericBoolean = (0, _utils.map)(_number.number, function (n) {
  return !!n;
});
exports.numericBoolean = numericBoolean;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positiveInteger = exports.integer = exports.positiveNumber = exports.number = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _utils = __webpack_require__(14);

var anyNumber = function anyNumber(blob) {
  return typeof blob === 'number' && !Number.isNaN(blob) ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be number'));
};

var number = (0, _utils.compose)(anyNumber, (0, _utils.predicate)(Number.isFinite, 'Number must be finite'));
exports.number = number;
var positiveNumber = (0, _utils.compose)(number, (0, _utils.predicate)(function (n) {
  return n >= 0;
}, 'Number must be positive')); // Integers

exports.positiveNumber = positiveNumber;
var integer = (0, _utils.compose)(number, (0, _utils.predicate)(Number.isInteger, 'Number must be an integer'));
exports.integer = integer;
var positiveInteger = (0, _utils.compose)(number, (0, _utils.predicate)(function (n) {
  return n >= 0 && Number.isInteger(n);
}, 'Number must be an integer'));
exports.positiveInteger = positiveInteger;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constant = constant;
exports.hardcoded = hardcoded;
exports.unknown = exports.mixed = exports.undefined_ = exports.null_ = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

/**
 * Decoder that only returns Ok for `null` inputs.  Err otherwise.
 */
var null_ = function null_(blob) {
  return blob === null ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be null'));
};
/**
 * Decoder that only returns Ok for `undefined` inputs.  Err otherwise.
 */


exports.null_ = null_;

var undefined_ = function undefined_(blob) {
  return blob === undefined ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be undefined'));
};
/**
 * Decoder that only returns Ok for the given value constant.  Err otherwise.
 */


exports.undefined_ = undefined_;

function constant(value) {
  return function (blob) {
    return blob === value ? (0, _Result.Ok)(value) : (0, _Result.Err)((0, _debrief.annotate)(blob, "Must be constant ".concat(String(value))));
  };
}
/**
 * Decoder that always returns Ok for the given hardcoded value, no matter what the input.
 */


function hardcoded(value) {
  return function (_) {
    return (0, _Result.Ok)(value);
  };
}
/**
 * Decoder that always returns Ok for the given hardcoded value, no matter what the input.
 */


var mixed = function mixed(blob) {
  return (0, _Result.Ok)(blob);
};
/**
 * Alias of mixed.
 */


exports.mixed = mixed;
var unknown = mixed;
exports.unknown = unknown;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _utils = __webpack_require__(14);

var date = function date(value) {
  return (0, _utils.isDate)(value) ? (0, _Result.Ok)(value) : (0, _Result.Err)((0, _debrief.annotate)(value, 'Must be a Date'));
};

exports.date = date;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = dispatch;

var _either = __webpack_require__(22);

var _object2 = __webpack_require__(23);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Dispatches to one of several given decoders, based on the value found at
 * runtime in the given field.  For example, suppose you have these decoders:
 *
 *     const rectangle = object({
 *         type: constant('rect'),
 *         x: number,
 *         y: number,
 *         width: number,
 *         height: number,
 *     });
 *
 *     const circle = object({
 *         type: constant('circle'),
 *         cx: number,
 *         cy: number,
 *         r: number,
 *      });
 *
 * Then these two decoders are equivalent:
 *
 *     const shape = either(rectangle, circle)
 *     const shape = dispatch('type', { rectangle, circle })
 *
 * Will be of type Decoder<Rectangle | Circle>.
 *
 * But the dispatch version will typically be more runtime-efficient.  The
 * reason is that it will first do minimal work to "look ahead" into the `type`
 * field here, and based on that value, pick the decoder to invoke.
 *
 * The `either` version will simply try to invoke each decoder, until it finds
 * one that matches.
 *
 * Also, the error messages will be less ambiguous using `dispatch()`.
 */
function dispatch(field, mapping) {
  var base = (0, _object2.object)(_defineProperty({}, field, (0, _either.oneOf)(Object.keys(mapping))));
  return function (blob) {
    return base(blob).andThen(function (baseObj) {
      var decoderName = baseObj[field];
      var decoder = mapping[decoderName];
      return decoder(blob);
    });
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.either = either;
exports.either3 = either3;
exports.either4 = either4;
exports.either5 = either5;
exports.either6 = either6;
exports.either7 = either7;
exports.either8 = either8;
exports.either9 = either9;
exports.oneOf = oneOf;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

/**
 * Indents and adds a dash in front of this (potentially multiline) string.
 */
// istanbul ignore next
function itemize() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return '-' + (0, _debrief.indent)(s).substring(1);
}

function either(d1, d2) {
  return function (blob) {
    return d1(blob).dispatch(function (value1) {
      return (0, _Result.Ok)(value1);
    }, function (err1) {
      return d2(blob).dispatch(function (value2) {
        return (0, _Result.Ok)(value2);
      }, function (err2) {
        return (0, _Result.Err)((0, _debrief.annotate)(blob, ['Either:', itemize((0, _debrief.summarize)(err1).join('\n')), itemize((0, _debrief.summarize)(err2).join('\n'))].join('\n')));
      });
    });
  };
}

function either3(d1, d2, d3) {
  return either(d1, either(d2, d3));
}

function either4(d1, d2, d3, d4) {
  return either(d1, either3(d2, d3, d4));
}

function either5(d1, d2, d3, d4, d5) {
  return either(d1, either4(d2, d3, d4, d5));
}

function either6(d1, d2, d3, d4, d5, d6) {
  return either(d1, either5(d2, d3, d4, d5, d6));
}

function either7(d1, d2, d3, d4, d5, d6, d7) {
  return either(d1, either6(d2, d3, d4, d5, d6, d7));
}

function either8(d1, d2, d3, d4, d5, d6, d7, d8) {
  return either(d1, either7(d2, d3, d4, d5, d6, d7, d8));
}

function either9(d1, d2, d3, d4, d5, d6, d7, d8, d9) {
  return either(d1, either8(d2, d3, d4, d5, d6, d7, d8, d9));
}

function oneOf(constants) {
  return function (blob) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = constants[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;

        if (c === blob) {
          return (0, _Result.Ok)(c);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return (0, _Result.Err)((0, _debrief.annotate)(blob, "Must be one of ".concat(constants.map(function (value) {
      return JSON.stringify(value);
    }).join(', '))));
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.object = object;
exports.exact = exact;
exports.pojo = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _utils = __webpack_require__(14);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPojo(o) {
  return o !== null && o !== undefined && _typeof(o) === 'object' && // This still seems to be the only reliable way to determine whether
  // something is a pojo... ¯\_(ツ)_/¯
  Object.prototype.toString.call(o) === '[object Object]';
}

function subtract(xs, ys) {
  var result = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var x = _step.value;

      if (!ys.has(x)) {
        result.add(x);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

var pojo = function pojo(blob) {
  return isPojo(blob) ? (0, _Result.Ok)( // NOTE:
  // Since Flow 0.98, typeof o === 'object' refines to
  //     {| +[string]: mixed |}
  // instead of
  //     {| [string]: mixed |}
  //
  // For rationale, see https://github.com/facebook/flow/issues/7685.
  // In this case, we don't want to output a read-only version of
  // the object because it's up to the user of decoders to
  // determine what they want to do with the decoded output.  If they
  // want to write items into the array, that's fine!  The fastest
  // way to turn a read-only Object to a writeable one in ES6 seems
  // to be to use object-spread. (Going off this benchmark:
  // https://thecodebarbarian.com/object-assign-vs-object-spread.html)
  _objectSpread({}, blob)) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be an object'));
};
/**
 * Given a mapping of fields-to-decoders, builds a decoder for an object type.
 *
 * For example, given decoders for a number and a string, we can construct an
 * "object description" like so:
 *
 *   { id: number, name: string }
 *
 * Which is of type:
 *
 *   { id: Decoder<number>, name: Decoder<string> }
 *
 * Passing this to object() will produce the following return type:
 *
 *   Decoder<{ id: number, name: string }>
 *
 * Put simply: it'll "peel off" all of the nested Decoders, puts them together
 * in an object, and wraps it in a Decoder<...>.
 */


exports.pojo = pojo;

function object(mapping) {
  var known = new Set(Object.keys(mapping));
  return (0, _utils.compose)(pojo, function (blob) {
    var actual = new Set(Object.keys(blob)); // At this point, "missing" will also include all fields that may
    // validly be optional.  We'll let the underlying decoder decide and
    // remove the key from this missing set if the decoder accepts the
    // value.

    var missing = subtract(known, actual);
    var record = {};
    var fieldErrors = {}; // NOTE: We're using .keys() here over .entries(), since .entries()
    // will type the value part as "mixed"

    for (var _i = 0, _Object$keys = Object.keys(mapping); _i < _Object$keys.length; _i++) {
      var _key = _Object$keys[_i];
      var decoder = mapping[_key];
      var value = blob[_key];
      var result = decoder(value);

      try {
        record[_key] = result.unwrap(); // If this succeeded, remove the key from the missing keys
        // tracker

        missing["delete"](_key);
      } catch (ann) {
        /* istanbul ignore next */
        if (!(0, _debrief.isAnnotation)(ann)) {
          throw ann;
        } // Keep track of the annotation, but don't return just yet. We
        // want to collect more error information.


        if (value === undefined) {
          // Explicitly add it to the missing set if the value is
          // undefined.  This covers explicit undefineds to be
          // treated the same as implicit undefineds (aka missing
          // keys).
          missing.add(_key);
        } else {
          fieldErrors[_key] = ann;
        }
      }
    } // Deal with errors now. There are two classes of errors we want to
    // report.  First of all, we want to report any inline errors in this
    // object.  Lastly, any fields that are missing should be annotated on
    // the outer object itself.


    var fieldsWithErrors = Object.keys(fieldErrors);

    if (fieldsWithErrors.length > 0 || missing.size > 0) {
      var err;

      if (fieldsWithErrors.length > 0) {
        var errorlist = fieldsWithErrors.map(function (k) {
          return [k, fieldErrors[k]];
        });
        err = (0, _debrief.annotateFields)(blob, errorlist);
      } else {
        err = (0, _debrief.annotate)(blob);
      }

      if (missing.size > 0) {
        var errMsg = _toConsumableArray(missing).map(function (key) {
          return "\"".concat(key, "\"");
        }).join(', ');

        var pluralized = missing.size > 1 ? 'keys' : 'key';
        err = (0, _debrief.annotate)(err, "Missing ".concat(pluralized, ": ").concat(errMsg));
      }

      return (0, _Result.Err)(err);
    }

    return (0, _Result.Ok)(record);
  });
}

function exact(mapping) {
  // Check the inputted object for any superfluous keys
  var allowed = new Set(Object.keys(mapping));
  var checked = (0, _utils.compose)(pojo, function (blob) {
    var actual = new Set(Object.keys(blob));
    var superfluous = subtract(actual, allowed);

    if (superfluous.size > 0) {
      return (0, _Result.Err)((0, _debrief.annotate)(blob, "Superfluous keys: ".concat(_toConsumableArray(superfluous).join(', '))));
    }

    return (0, _Result.Ok)(blob);
  }); // Defer to the "object" decoder for doing the real decoding work.  Since
  // we made sure there are no superfluous keys in this structure, it's now
  // safe to force-cast it to an $Exact<> type.

  var decoder = object(mapping);
  return (0, _utils.compose)(checked, decoder);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fail = fail;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

/**
 * Decoder that always fails with the given error message, no matter what the input.
 */
function fail(msg) {
  return function (blob) {
    return (0, _Result.Err)((0, _debrief.annotate)(blob, msg));
  };
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOf = instanceOf;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

function instanceOf(klass) {
  return function (blob) {
    return blob instanceof klass ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, "Must be ".concat( // $FlowFixMe - klass.name is fine?
    klass.name, " instance")));
  };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapping = mapping;
exports.dict = dict;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _object = __webpack_require__(23);

var _utils = __webpack_require__(14);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Given an object, will decode a Map of string keys to whatever values.
 *
 * For example, given a decoder for a Person, we can verify a Person lookup
 * table structure (of type Map<string, Person>) like so:
 *
 *   mapping(person)
 *
 */
function mapping(decoder) {
  return (0, _utils.compose)(_object.pojo, // $FlowIgnore: deliberate use of Object here
  function (blob) {
    var tuples = [];
    var errors = [];
    Object.keys(blob).forEach(function (key) {
      var value = blob[key];
      var result = decoder(value);

      try {
        var okValue = result.unwrap();

        if (errors.length === 0) {
          tuples.push([key, okValue]);
        }
      } catch (e) {
        /* istanbul ignore else */
        if ((0, _debrief.isAnnotation)(e)) {
          tuples.length = 0; // Clear the tuples array

          errors.push([key, e]);
        } else {
          // Otherwise, simply rethrow it

          /* istanbul ignore next */
          throw e;
        }
      }
    });

    if (errors.length > 0) {
      return (0, _Result.Err)((0, _debrief.annotateFields)(blob, errors));
    } else {
      return (0, _Result.Ok)(new Map(tuples));
    }
  });
}

function mapToObject(mapping) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mapping.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];

      result[k] = v;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}
/**
 * Like mapping(), but returns an object rather than a Map instance.
 */


function dict(decoder) {
  return (0, _utils.map)(mapping(decoder), mapToObject);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optional = optional;
exports.nullable = nullable;
exports.maybe = maybe;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _constants = __webpack_require__(19);

var _either = __webpack_require__(22);

/**
 * Builds a Decoder that returns Ok for either `undefined` or `T` values,
 * given a Decoder for `T`.  Err otherwise.
 */
function optional(decoder) {
  return (0, _either.either)(_constants.undefined_, decoder);
}
/**
 * Builds a Decoder that returns Ok for either `null` or `T` values,
 * given a Decoder for `T`.  Err otherwise.
 */


function nullable(decoder) {
  return (0, _either.either)(_constants.null_, decoder);
}
/**
 * Decoder that only returns Ok for `null` or `undefined` inputs.
 * This is effectively equivalent to either(null_, undefined_), but combines
 * their error message output into a single line for convenience.
 */


var undefined_or_null = function undefined_or_null(blob) {
  return blob === undefined || blob === null ? (0, _Result.Ok)(blob) : // Combine error message into a single line
  (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be undefined or null'));
};
/**
 * Decoder that only returns Ok for `null` or `undefined` inputs.
 */


function maybe(decoder) {
  return (0, _either.either)(undefined_or_null, decoder);
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = regex;
exports.url = exports.email = exports.string = void 0;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _utils = __webpack_require__(14);

/** Match groups in this regex:
 * \1 - the scheme
 * \2 - the username/password (optional)
 * \3 - the host
 * \4 - the port (optional)
 * \5 - the path (optional)
 */
var url_re = /^([A-Za-z]{3,9}(?:[+][A-Za-z]{3,9})?):\/\/(?:([-;:&=+$,\w]+)@)?(?:([A-Za-z0-9.-]+)(?::([0-9]{2,5}))?)(\/(?:[-+~%/.,\w]*)?(?:\?[-+=&;%@.,\w]*)?(?:#[.,!/\w]*)?)?$/; // The URL schemes the url() decoder accepts by default

var DEFAULT_SCHEMES = ['https'];
/**
 * Decoder that only returns Ok for string inputs.  Err otherwise.
 */

var string = function string(blob) {
  return typeof blob === 'string' ? (0, _Result.Ok)(blob) : (0, _Result.Err)((0, _debrief.annotate)(blob, 'Must be string'));
};
/**
 * Decoder that only returns Ok for string inputs that match the regular
 * expression.  Err otherwise.  Will always validate that the input is a string
 * before testing the regex.
 */


exports.string = string;

function regex(regex, msg) {
  return (0, _utils.compose)(string, (0, _utils.predicate)(function (s) {
    return regex.test(s);
  }, msg));
}
/**
 * Decoder that only returns Ok for string inputs that match the almost perfect
 * email regex, taken from http://emailregex.com.  Err otherwise.
 */


var email = regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Must be email');
/**
 * Decoder that only returns Ok for string inputs that match URLs of the
 * expected scheme.  Defaults to only accept HTTPS URLs.  Err otherwise.
 *
 * Variants that can be used:
 *
 * - url()                      accepts only https:// URLs
 * - url([])                    accepts any URL scheme
 * - url(['http'])              accepts only HTTP
 * - url(['https', 'git+ssh'])  accepts both https:// and git+ssh:// URLs
 */

exports.email = email;

var url = function url() {
  var schemes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCHEMES;
  return (0, _utils.compose)(string, function (value) {
    var matches = value.match(url_re);

    if (!matches) {
      return (0, _Result.Err)((0, _debrief.annotate)(value, 'Must be URL'));
    } else {
      var scheme = matches[1];

      if (schemes.length === 0 || schemes.includes(scheme.toLowerCase())) {
        return (0, _Result.Ok)(value);
      } else {
        return (0, _Result.Err)((0, _debrief.annotate)(value, "URL scheme must be any of: ".concat(schemes.join(', '))));
      }
    }
  });
};

exports.url = url;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple2 = tuple2;
exports.tuple3 = tuple3;
exports.tuple4 = tuple4;
exports.tuple5 = tuple5;
exports.tuple6 = tuple6;

var _debrief = __webpack_require__(8);

var _Result = __webpack_require__(15);

var _array = __webpack_require__(16);

var _utils = __webpack_require__(14);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ntuple = function ntuple(n) {
  return (0, _utils.compose)(_array.poja, (0, _utils.predicate)(function (arr) {
    return arr.length === n;
  }, "Must be a ".concat(n, "-tuple")));
};
/**
 * Builds a Decoder that returns Ok for 2-tuples of [T1, T2], given Decoders
 * for T1 and T2.  Err otherwise.
 */


function tuple2(decoder1, decoder2) {
  return (0, _utils.compose)(ntuple(2), function (blobs) {
    var _blobs = _slicedToArray(blobs, 2),
        blob1 = _blobs[0],
        blob2 = _blobs[1];

    var result1 = decoder1(blob1);
    var result2 = decoder2(blob2);

    try {
      return (0, _Result.Ok)([result1.unwrap(), result2.unwrap()]);
    } catch (e) {
      // If a decoder error has happened while unwrapping all the
      // results, try to construct a good error message
      return (0, _Result.Err)((0, _debrief.annotate)([result1.isErr() ? result1.errValue() : result1.value(), result2.isErr() ? result2.errValue() : result2.value()]));
    }
  });
}
/**
 * Builds a Decoder that returns Ok for 3-tuples of [T1, T2, T3], given
 * Decoders for T1, T2, and T3.  Err otherwise.
 */


function tuple3(decoder1, decoder2, decoder3) {
  return (0, _utils.compose)(ntuple(3), function (blobs) {
    var _blobs2 = _slicedToArray(blobs, 3),
        blob1 = _blobs2[0],
        blob2 = _blobs2[1],
        blob3 = _blobs2[2];

    var result1 = decoder1(blob1);
    var result2 = decoder2(blob2);
    var result3 = decoder3(blob3);

    try {
      return (0, _Result.Ok)([result1.unwrap(), result2.unwrap(), result3.unwrap()]);
    } catch (e) {
      // If a decoder error has happened while unwrapping all the
      // results, try to construct a good error message
      return (0, _Result.Err)((0, _debrief.annotate)([result1.isErr() ? result1.errValue() : result1.value(), result2.isErr() ? result2.errValue() : result2.value(), result3.isErr() ? result3.errValue() : result3.value()]));
    }
  });
}
/**
 * Builds a Decoder that returns Ok for 4-tuples of [T1, T2, T3, T4], given
 * Decoders for T1, T2, T3, and T4.  Err otherwise.
 */


function tuple4(decoder1, decoder2, decoder3, decoder4) {
  return (0, _utils.compose)(ntuple(4), function (blobs) {
    var _blobs3 = _slicedToArray(blobs, 4),
        blob1 = _blobs3[0],
        blob2 = _blobs3[1],
        blob3 = _blobs3[2],
        blob4 = _blobs3[3];

    var result1 = decoder1(blob1);
    var result2 = decoder2(blob2);
    var result3 = decoder3(blob3);
    var result4 = decoder4(blob4);

    try {
      return (0, _Result.Ok)([result1.unwrap(), result2.unwrap(), result3.unwrap(), result4.unwrap()]);
    } catch (e) {
      // If a decoder error has happened while unwrapping all the
      // results, try to construct a good error message
      return (0, _Result.Err)((0, _debrief.annotate)([result1.isErr() ? result1.errValue() : result1.value(), result2.isErr() ? result2.errValue() : result2.value(), result3.isErr() ? result3.errValue() : result3.value(), result4.isErr() ? result4.errValue() : result4.value()]));
    }
  });
}
/**
 * Builds a Decoder that returns Ok for 5-tuples of [T1, T2, T3, T4, T5], given
 * Decoders for T1, T2, T3, T4, and T5.  Err otherwise.
 */


function tuple5(decoder1, decoder2, decoder3, decoder4, decoder5) {
  return (0, _utils.compose)(ntuple(5), function (blobs) {
    var _blobs4 = _slicedToArray(blobs, 5),
        blob1 = _blobs4[0],
        blob2 = _blobs4[1],
        blob3 = _blobs4[2],
        blob4 = _blobs4[3],
        blob5 = _blobs4[4];

    var result1 = decoder1(blob1);
    var result2 = decoder2(blob2);
    var result3 = decoder3(blob3);
    var result4 = decoder4(blob4);
    var result5 = decoder5(blob5);

    try {
      return (0, _Result.Ok)([result1.unwrap(), result2.unwrap(), result3.unwrap(), result4.unwrap(), result5.unwrap()]);
    } catch (e) {
      // If a decoder error has happened while unwrapping all the
      // results, try to construct a good error message
      return (0, _Result.Err)((0, _debrief.annotate)([result1.isErr() ? result1.errValue() : result1.value(), result2.isErr() ? result2.errValue() : result2.value(), result3.isErr() ? result3.errValue() : result3.value(), result4.isErr() ? result4.errValue() : result4.value(), result5.isErr() ? result5.errValue() : result5.value()]));
    }
  });
}
/**
 * Builds a Decoder that returns Ok for 5-tuples of [T1, T2, T3, T4, T5], given
 * Decoders for T1, T2, T3, T4, T5, and T6.  Err otherwise.
 */


function tuple6(decoder1, decoder2, decoder3, decoder4, decoder5, decoder6) {
  return (0, _utils.compose)(ntuple(6), function (blobs) {
    var _blobs5 = _slicedToArray(blobs, 6),
        blob1 = _blobs5[0],
        blob2 = _blobs5[1],
        blob3 = _blobs5[2],
        blob4 = _blobs5[3],
        blob5 = _blobs5[4],
        blob6 = _blobs5[5];

    var result1 = decoder1(blob1);
    var result2 = decoder2(blob2);
    var result3 = decoder3(blob3);
    var result4 = decoder4(blob4);
    var result5 = decoder5(blob5);
    var result6 = decoder6(blob6);

    try {
      return (0, _Result.Ok)([result1.unwrap(), result2.unwrap(), result3.unwrap(), result4.unwrap(), result5.unwrap(), result6.unwrap()]);
    } catch (e) {
      // If a decoder error has happened while unwrapping all the
      // results, try to construct a good error message
      return (0, _Result.Err)((0, _debrief.annotate)([result1.isErr() ? result1.errValue() : result1.value(), result2.isErr() ? result2.errValue() : result2.value(), result3.isErr() ? result3.errValue() : result3.value(), result4.isErr() ? result4.errValue() : result4.value(), result5.isErr() ? result5.errValue() : result5.value(), result6.isErr() ? result6.errValue() : result6.value()]));
    }
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const LabeledMsg_1 = __webpack_require__(31);
/** @external */
const decoder = LabeledMsg_1.labeledDecoder(decoders_1.constant('registeredKeyFired'), decoders_1.object({
    altKey: decoders_1.optional(decoders_1.boolean),
    charCode: decoders_1.optional(decoders_1.number),
    code: decoders_1.optional(decoders_1.string),
    ctrlKey: decoders_1.optional(decoders_1.boolean),
    key: decoders_1.string,
    keyCode: decoders_1.optional(decoders_1.number),
    metaKey: decoders_1.optional(decoders_1.boolean),
    shiftKey: decoders_1.optional(decoders_1.boolean)
}));
exports.decoder = decoder;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
// using `import` here with TypeScripts' requireJsonModule
// option breaks TS' ability to generate type files, so we
// fall back to `require`.
// tslint:disable-next-line:no-var-requires
const version = __webpack_require__(32).version;
/**
 * @external
 */
exports.API_PROTOCOL = 'iframe-coordinator';
/**
 * Takes an object with a `msgType` and `msg` and applies the appropriate
 * `direction`, `protocol` and `version` fields for the current version of the library.
 * @param partialMsg
 * @external
 */
function applyClientProtocol(partialMsg) {
    return Object.assign({ direction: 'ClientToHost' }, partialMsg, { protocol: exports.API_PROTOCOL, version });
}
exports.applyClientProtocol = applyClientProtocol;
/**
 * Takes an object with a `msgType` and `msg` and applies the appropriate
 * `direction`, `protocol` and `version` fields for the current version of the library.
 * @param partialMsg
 * @external
 */
function applyHostProtocol(partialMsg) {
    return Object.assign({ direction: 'HostToClient' }, partialMsg, { protocol: exports.API_PROTOCOL, version });
}
exports.applyHostProtocol = applyHostProtocol;
/**
 * Converts a PartialMsg decoder into a LabeledMsg decoder
 * @param msgDecoder
 * @external
 */
function labeledDecoder(typeDecoder, msgDecoder) {
    return decoders_1.object({
        // TODO: in 4.0.0 make protocol and version fields mandatory
        protocol: decoders_1.either(decoders_1.constant(exports.API_PROTOCOL), decoders_1.hardcoded(exports.API_PROTOCOL)),
        version: decoders_1.either(decoders_1.string, decoders_1.hardcoded('unknown')),
        msgType: typeDecoder,
        msg: msgDecoder,
        direction: decoders_1.optional(directionDecoder)
    });
}
exports.labeledDecoder = labeledDecoder;
const directionDecoder = decoders_1.either(decoders_1.constant('ClientToHost'), decoders_1.constant('HostToClient'));


/***/ }),
/* 32 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"iframe-coordinator\",\"version\":\"4.1.4\",\"description\":\"Tools for coordinating embedded apps via iframes.\",\"dependencies\":{\"cheerio\":\"^1.0.0-rc.3\",\"commander\":\"^2.20.3\",\"decoders\":\"1.15.0\",\"dev-cert-authority\":\"^1.1.1\",\"express\":\"^4.17.1\",\"find-root\":\"^1.1.0\",\"http-proxy-middleware\":\"^1.0.4\"},\"files\":[\"dist/client.js\",\"dist/host.js\",\"dist/index.js\",\"dist/es5/client.js\",\"dist/es5/host.js\",\"dist/es5/index.js\",\"dist/**/*.d.ts\",\"cli/ifc-cli.js\",\"cli/embedded-app/dist/**/*\"],\"main\":\"dist/index.js\",\"module\":\"dist/index.js\",\"types\":\"dist/index.d.ts\",\"bin\":{\"ifc-cli\":\"cli/ifc-cli.js\"},\"optionalDependencies\":{\"@purecloud/web-app-deploy\":\"^5.2.9\"},\"devDependencies\":{\"@commitlint/cli\":\"^9.1.1\",\"@commitlint/config-conventional\":\"^9.0.1\",\"@types/jasmine\":\"^3.5.11\",\"commitizen\":\"^4.1.2\",\"glob\":\"^7.1.6\",\"husky\":\"^1.1.2\",\"i\":\"^0.3.6\",\"import-inject-loader\":\"^0.2.4\",\"inject-loader\":\"^4.0.1\",\"jasmine-core\":\"^3.5.0\",\"karma\":\"^3.0.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-jasmine\":\"^2.0.1\",\"karma-webpack\":\"4.0.0-rc.3\",\"lint-staged\":\"^10.2.2\",\"prettier\":\"^1.19.1\",\"puppeteer\":\"^1.20.0\",\"source-map-loader\":\"^0.2.4\",\"standard-version\":\"^8.0.0\",\"ts-loader\":\"^5.4.5\",\"tslint\":\"^5.20.1\",\"tslint-config-prettier\":\"^1.16.0\",\"typedoc\":\"^0.15.8\",\"typedoc-plugin-internal-external\":\"^2.1.1\",\"typescript\":\"3.5.3\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.12\"},\"scripts\":{\"build\":\"npm run build-lib && npm run build-lib-es5 && npm run build-cli\",\"build-lib\":\"webpack\",\"build-lib-es5\":\"webpack --config webpack.es5.config.js\",\"build-cli\":\"cd ./cli/embedded-app && npm run build\",\"commit\":\"git-cz\",\"doc\":\"typedoc --excludePrivate --excludeProtected --excludeNotExported --excludeExternals --mode file --readme README.md --out doc/ src/\",\"format.fix\":\"prettier --fix **/*.ts **/*.tsx\",\"lint.fix\":\"npm run lint.ts -- --fix\",\"lint.format\":\"prettier --check **/*.ts **/*.tsx\",\"lint.commit\":\"commitlint -f ebade96935e63780ace04a999d097236ecabf9e2\",\"lint\":\"tslint --project tsconfig.json && npm run lint.format && npm run lint.commit\",\"prepare\":\"./scripts/prepare-deps.sh\",\"release\":\"standard-version\",\"start\":\"webpack --watch\",\"start-client-example\":\"cd ./client-app-example && npm start\",\"test\":\"./node_modules/karma/bin/karma start --single-run\",\"test.watch\":\"./node_modules/karma/bin/karma start\",\"test.watch.chrome\":\"./node_modules/karma/bin/karma start --browsers=Chrome\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\",\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\"}},\"lint-staged\":{\"*.ts\":[\"tslint --fix\",\"prettier --write\"]},\"config\":{\"commitizen\":{\"path\":\"./node_modules/cz-conventional-changelog\"}},\"commitlint\":{\"extends\":[\"@commitlint/config-conventional\"],\"rules\":{\"subject-case\":[2,\"never\",[\"pascal-case\",\"upper-case\"]]}},\"author\":\"\",\"license\":\"MIT\",\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:purecloudlabs/iframe-coordinator.git\"}}");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const LabeledMsg_1 = __webpack_require__(31);
// We don't care what is in msg for Started messages.
/** @external */
const startedDecoder = LabeledMsg_1.labeledDecoder(decoders_1.constant('client_started'), decoders_1.mixed);
exports.startedDecoder = startedDecoder;
/* @external */
const envDecoder = LabeledMsg_1.labeledDecoder(decoders_1.constant('env_init'), decoders_1.object({
    locale: decoders_1.string,
    hostRootUrl: decoders_1.string,
    assignedRoute: decoders_1.string,
    registeredKeys: decoders_1.optional(decoders_1.array(decoders_1.object({
        key: decoders_1.string,
        altKey: decoders_1.optional(decoders_1.boolean),
        ctrlKey: decoders_1.optional(decoders_1.boolean),
        metaKey: decoders_1.optional(decoders_1.boolean),
        shiftKey: decoders_1.optional(decoders_1.boolean)
    }))),
    custom: decoders_1.mixed
}));
exports.envDecoder = envDecoder;
/**
 * Helpful properties for working with lifecycle stages and
 * their coresponding labeled messages.
 * @external
 */
class Lifecycle {
    /**
     * A {@link LabeledStarted} message to send to the host application.
     */
    static get startedMessage() {
        return LabeledMsg_1.applyClientProtocol({
            msgType: 'client_started',
            msg: undefined
        });
    }
}
exports.Lifecycle = Lifecycle;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const LabeledMsg_1 = __webpack_require__(31);
/** @external */
const decoder = LabeledMsg_1.labeledDecoder(decoders_1.constant('navRequest'), decoders_1.object({
    url: decoders_1.string
}));
exports.decoder = decoder;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const LabeledMsg_1 = __webpack_require__(31);
/**
 * Helper function to convert old message types to the new type
 * @external
 */
function alwaysMsgType(msgType) {
    return 'notifyRequest';
}
/** @external */
const toastTypeDecoder = decoders_1.map(decoders_1.constant('toastRequest'), alwaysMsgType);
/** @external */
const decoder = LabeledMsg_1.labeledDecoder(decoders_1.either(decoders_1.constant('notifyRequest'), toastTypeDecoder), decoders_1.object({
    title: decoders_1.optional(decoders_1.string),
    message: decoders_1.string,
    custom: decoders_1.mixed
}));
exports.decoder = decoder;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const LabeledMsg_1 = __webpack_require__(31);
/** @external */
const decoder = LabeledMsg_1.labeledDecoder(decoders_1.constant('publish'), decoders_1.object({
    topic: decoders_1.string,
    payload: decoders_1.mixed,
    clientId: decoders_1.optional(decoders_1.string)
}));
exports.decoder = decoder;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const decoders_1 = __webpack_require__(6);
const Lifecycle_1 = __webpack_require__(33);
const Publication_1 = __webpack_require__(36);
/**
 * Validates correctness of messages being sent from
 * the host to the client.
 * @param msg The message requiring validation.
 * @external
 */
function validate(msg) {
    return decoders_1.guard(decoders_1.dispatch('msgType', { publish: Publication_1.decoder, env_init: Lifecycle_1.envDecoder }))(msg);
}
exports.validate = validate;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const frame_router_1 = __webpack_require__(39);
exports.FrameRouterElement = frame_router_1.default;
/**
 * Registers custom elements used by the host application
 * when hosting the coordinated client UI fragments.
 */
function registerCustomElements() {
    customElements.define('frame-router', frame_router_1.default);
}
exports.registerCustomElements = registerCustomElements;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = __webpack_require__(3);
const FrameManager_1 = __webpack_require__(40);
const HostRouter_1 = __webpack_require__(41);
const urlUtils_1 = __webpack_require__(2);
/** @external */
const ROUTE_ATTR = 'route';
/**
 * A DOM element responsible for communicating with the internal ClientFrame in
 * order to recieve and send messages to and from the client content. Typically
 * registered as <frame-router>
 *
 * **Protip: Uncheck the "inherited" option in the doc options above.**
 */
class FrameRouterElement extends HTMLElement {
    constructor() {
        super();
        this._publishEmitter = new EventEmitter_1.InternalEventEmitter();
        this._publishExposedEmitter = new EventEmitter_1.EventEmitter(this._publishEmitter);
        this._frameManager = new FrameManager_1.default({
            onMessage: this._handleClientMessages.bind(this)
        });
    }
    /**
     * @inheritdoc
     */
    static get observedAttributes() {
        return [ROUTE_ATTR];
    }
    /**
     * @inheritdoc
     */
    connectedCallback() {
        this._frameManager.embed(this);
        this._frameManager.startMessageHandler();
    }
    /**
     * @inheritdoc
     */
    disconnectedCallback() {
        this._frameManager.stopMessageHandler();
    }
    /**
     * Initializes this host frame with the possible clients and
     * the environmental data required the clients.
     *
     * @param clients The map of registrations for the available clients.
     * @param envData Information about the host environment.
     */
    setupFrames(clients, envData) {
        this._router = new HostRouter_1.HostRouter(clients);
        const processedHostUrl = this._processHostUrl(envData.hostRootUrl);
        this._envData = Object.assign({}, envData, { hostRootUrl: processedHostUrl });
        this.changeRoute(this.getAttribute(ROUTE_ATTR) || 'about:blank');
    }
    /**
     * Eventing for published messages from the host application.
     */
    get messaging() {
        return this._publishExposedEmitter;
    }
    /**
     * Publish a message to the client fragment.
     *
     * @param publication - The information published to the client fragment.
     * The topic may not be of interest, and could be ignored.
     */
    publish(publication) {
        this._frameManager.sendToClient({
            msg: publication,
            msgType: 'publish'
        });
    }
    /**
     * Changes the route the client fragment is rendering.
     *
     * @param newPath a new route which matches those provided originally.
     */
    changeRoute(newPath) {
        if (this._router) {
            const clientInfo = this._router.getClientTarget(newPath);
            const newClientId = (clientInfo && clientInfo.id) || '';
            if (this._currentClientId !== newClientId) {
                this.dispatchEvent(new CustomEvent('clientChanged', { detail: newClientId }));
            }
            this._currentClientId = newClientId;
            const newLocation = this._frameManager.setFrameLocation(clientInfo && clientInfo.url);
            this._frameManager.setFrameSandbox((clientInfo && clientInfo.sandbox) || undefined);
            this._frameManager.setFrameAllow((clientInfo && clientInfo.allow) || undefined);
            this.dispatchEvent(new CustomEvent('frameTransition', { detail: newLocation }));
        }
    }
    /**
     * @inheritdoc
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === ROUTE_ATTR && oldValue !== newValue) {
            this.changeRoute(newValue || '');
        }
    }
    _handleClientMessages(message) {
        switch (message.msgType) {
            case 'publish':
                const publication = message.msg;
                publication.clientId = this._currentClientId;
                this._publishEmitter.dispatch(message.msg.topic, publication);
                break;
            case 'client_started':
                this._handleLifecycleMessage(message);
                break;
            default:
                this._dispatchClientMessage(message);
        }
    }
    _handleLifecycleMessage(message) {
        const assignedRoute = this._getCurrentClientAssignedRoute();
        const envData = Object.assign({}, this._envData, { assignedRoute });
        this._frameManager.sendToClient({
            msgType: 'env_init',
            msg: envData
        });
    }
    _dispatchClientMessage(message) {
        const messageDetail = message.msg;
        messageDetail.clientId = this._currentClientId;
        this.dispatchEvent(new CustomEvent(message.msgType, { detail: messageDetail }));
    }
    _getCurrentClientAssignedRoute() {
        const currentRoutePath = this.getAttribute(ROUTE_ATTR) || '';
        const clientInfo = this._router.getClientTarget(currentRoutePath);
        return (clientInfo && clientInfo.assignedRoute) || '';
    }
    _processHostUrl(hostUrl) {
        const hostUrlObject = new URL(hostUrl);
        if (hostUrlObject.hash) {
            return hostUrlObject.href;
        }
        const trimedUrl = urlUtils_1.stripTrailingSlash(hostUrl);
        return window.location.hash ? `${trimedUrl}/#` : trimedUrl;
    }
}
exports.default = FrameRouterElement;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ClientToHost_1 = __webpack_require__(5);
const HostToClient_1 = __webpack_require__(37);
const LabeledMsg_1 = __webpack_require__(31);
/** @external */
const IFRAME_STYLE = `
frame-router {
  position: relative;
}

frame-router iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
/** @internal default iframe sandbox attributes */
const DEFAULT_SANDBOX = [
    'allow-scripts',
    'allow-same-origin',
    'allow-modals',
    'allow-forms',
    'allow-popups',
    'allow-downloads'
];
let style;
/**
 * FrameManager is responsible for managing the state of the client iframe.
 * It changes locations in the frame when requested, and handles proxying
 * of postMessage events to and from the client, with verification of
 * the expected client origin.
 * @external
 */
class FrameManager {
    constructor(options) {
        this._window = options.mockWindow ? options.mockWindow : window;
        this._postMessageHandler = event => {
            this._handlePostMessage(options.onMessage, event);
        };
        this._frameLocation = 'about:blank';
        this._iframe = this._window.document.createElement('iframe');
        this._iframe.setAttribute('frameborder', '0');
        if (!style) {
            style = this._window.document.createElement('style');
            style.innerText = IFRAME_STYLE;
            this._window.document.head.appendChild(style);
        }
        this._iframe.setAttribute('sandbox', DEFAULT_SANDBOX.join(' '));
    }
    /**
     * String of feature-policies to set on the iframe element.
     *  Ex: "microphone *;"
     *
     *  See [feature-policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy#Directives)
     *
     * @param allow string of feature-policies
     */
    setFrameAllow(allow) {
        if (typeof allow !== 'string') {
            allow = '';
        }
        this._iframe.setAttribute('allow', allow);
    }
    /**
     * String of sandbox rules to be added to the `<iframe>` element.
     *  Ex: "allow-forms allow-modals"
     *
     *  See [<iframe>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
     *
     * @param sandbox string of iframe sandbox rules
     */
    setFrameSandbox(sandbox) {
        if (typeof sandbox !== 'string') {
            sandbox = '';
        }
        const arrSandbox = sandbox.split(' ').concat(DEFAULT_SANDBOX);
        const newSandbox = [...new Set(arrSandbox)].join(' ');
        this._iframe.setAttribute('sandbox', newSandbox);
    }
    /**
     * Navigates the wrapped iframe to the provided location in a
     * way that does not affect the host application's history.
     * This prevents strange behavior in the forward and back buttons
     * in the browser in certain edge cases.
     *
     * @param newLocation The new location the iframe should show. If `null`,
     * the frame will be directed to 'about:blank'.
     */
    setFrameLocation(newLocation) {
        this._frameLocation = newLocation || 'about:blank';
        if (this._iframe.contentWindow) {
            this._navigateFrame();
        }
        else {
            // Handle the case where the frame isn't ready yet.
            this._iframe.onload = event => {
                this._navigateFrame();
                this._iframe.onload = null;
            };
        }
        // Let the caller know where the frame ended up
        return this._frameLocation;
    }
    /**
     * Sends a message to the client frame via the postMessage API.
     * If the message isn't structured correctly, or the client frame
     * has navigated away from the expected origin, the message will
     * not be sent.
     *
     * @param message The message to send.
     */
    sendToClient(partialMsg) {
        const clientOrigin = this._expectedClientOrigin();
        if (this._iframe.contentWindow && clientOrigin) {
            const message = LabeledMsg_1.applyHostProtocol(partialMsg);
            let validated;
            try {
                validated = HostToClient_1.validate(message);
            }
            catch (e) {
                throw new Error(`
I received invalid data to send to a client application. This is probably due
to bad data passed to a frame-router method.
`.trim() +
                    '\n' +
                    e.message);
            }
            this._iframe.contentWindow.postMessage(validated, clientOrigin);
        }
    }
    /**
     * Starts listening to postMessages from the client window.
     */
    startMessageHandler() {
        this._window.addEventListener('message', this._postMessageHandler);
    }
    /**
     * Stops listening to postMessages from the client window.
     */
    stopMessageHandler() {
        this._window.removeEventListener('message', this._postMessageHandler);
    }
    /**
     * Embeds the wrapped iframe in the provided element.
     *
     * @param parent The element to place the iframe inside.
     */
    embed(parent) {
        parent.appendChild(this._iframe);
    }
    _handlePostMessage(handler, event) {
        let validated = null;
        if (event.data && event.data.direction === 'HostToClient') {
            return;
        }
        try {
            validated = ClientToHost_1.validate(event.data);
        }
        catch (e) {
            if (event.data.protocol === LabeledMsg_1.API_PROTOCOL) {
                throw new Error(`
I recieved an invalid message from the client application. This is probably due
to a major version mismatch between client and host iframe-coordinator libraries.
      `.trim() +
                    '\n' +
                    e.message);
            }
            else {
                return;
            }
        }
        const expectedClientOrigin = this._expectedClientOrigin();
        if (expectedClientOrigin &&
            event.origin === expectedClientOrigin &&
            event.source === this._iframe.contentWindow) {
            handler(validated);
        }
    }
    _navigateFrame() {
        if (this._iframe.contentWindow) {
            this._iframe.contentWindow.location.replace(this._frameLocation);
        }
    }
    _expectedClientOrigin() {
        try {
            const clientUrl = new URL(this._frameLocation, this._window.location.href);
            // Bail early if it's not an http resource.
            // Ex: file protocol url origin behavior is browser specific
            if (clientUrl.protocol !== 'http:' && clientUrl.protocol !== 'https:') {
                return null;
            }
            // Assert that this origin is actually valid.
            // Ex: about:blank, chrome:version, extensions, etc will return 'null'
            return new URL(clientUrl.origin).origin;
        }
        catch (err) {
            return null;
        }
    }
}
exports.default = FrameManager;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Main Class
const urlUtils_1 = __webpack_require__(2);
/**
 * HostRouter is responsible for mapping route paths to
 * corresponding client URls.
 * @external
 */
class HostRouter {
    constructor(clients) {
        this._clients = Object.keys(clients).map(id => {
            return parseRegistration(id, clients[id]);
        });
    }
    /**
     * Gets the client id and url for the provided route.
     *
     * @param route The route to lookup, such as '/foo/bar/baz'
     */
    getClientTarget(route) {
        let clientTarget = null;
        this._clients.forEach(client => {
            const clientRoute = matchAndStripPrefix(route, client.assignedRoute);
            if (clientRoute !== null) {
                clientTarget = {
                    id: client.id,
                    url: applyRoute(client.url, clientRoute),
                    assignedRoute: client.assignedRoute,
                    allow: client.allow,
                    sandbox: client.sandbox
                };
            }
        });
        return clientTarget;
    }
}
exports.HostRouter = HostRouter;
// Helper functions
/**
 * Checks a requested route against a specific assigned route (excluding leading slashes),
 * and if they match, returns the section of the requested route that should be passed
 * to the client.
 *
 * @external
 *
 * @param rawTargetRoute The route to check against the client route
 * @param clientRoute The route prefix being checked.
 *
 * @returns The non-matching part of the target route if clientRoute is a prefix of it. This
 * will be an empty string in the event of an exact match. If the clientRoute and targetRoute do
 * not match, null is returned.
 */
function matchAndStripPrefix(rawTargetRoute, clientRoute) {
    const targetRoute = urlUtils_1.stripLeadingSlash(rawTargetRoute);
    if (targetRoute.startsWith(clientRoute)) {
        const newRoute = targetRoute.replace(clientRoute, '');
        return urlUtils_1.stripLeadingSlash(newRoute);
    }
    else {
        return null;
    }
}
/**
 * Helper function for converting {@link RoutingMap} data into an the internal
 * {@link ClientInfo} representation.
 *
 * @external
 */
function parseRegistration(key, value) {
    return {
        id: key,
        url: value.url,
        assignedRoute: urlUtils_1.normalizeRoute(value.assignedRoute),
        allow: value.allow,
        sandbox: value.sandbox
    };
}
/**
 * Helper function that combines a client URL with a client route to generate
 * a full URL. Check the client URL for a hash fragment to see if fragment-based
 * or path-based routing should be used.
 *
 * @external
 */
function applyRoute(urlStr, route) {
    const newUrl = new URL(urlStr, window.location.href);
    if (newUrl.hash) {
        const baseClientRoute = urlUtils_1.stripTrailingSlash(newUrl.hash);
        newUrl.hash = `${baseClientRoute}/${route}`;
    }
    else {
        const baseClientPath = urlUtils_1.stripTrailingSlash(newUrl.pathname);
        newUrl.pathname = `${baseClientPath}/${route}`;
    }
    return newUrl.toString();
}


/***/ })
/******/ ]);
});
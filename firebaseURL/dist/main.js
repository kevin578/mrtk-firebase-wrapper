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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const firebase = __webpack_require__(148);
const mobx = __webpack_require__(1)
let user = __webpack_require__(145).user;


var firebaseConfig = {
    apiKey: "AIzaSyBiRhvS8LX2HHhglveeWIiBmq9tOyEw1kA",
    authDomain: "petition-239619.firebaseapp.com",
    databaseURL: "https://petition-239619.firebaseio.com",
    projectId: "petition-239619",
    storageBucket: "",
    messagingSenderId: "900671653422",
    appId: "1:900671653422:web:24906dbe9c9d627a"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  async function setUserInfo() {
    const userInfo = await user.getUserInfo();
    const {displayName, email, photoURL} = userInfo;
    if (displayName) {
      user.setData(displayName, email, photoURL);
    }
  }

  setUserInfo();

  const withState = mobx.autorun;


  withState(async function() {
    if (user.name) {
      document.getElementById("loginWithGoogle").style.visibility = "hidden";
      document.getElementById("logoutWithGoogle").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Hello ${user.name}`

    }
    else {
      document.getElementById("logoutWithGoogle").style.visibility = "hidden";
      document.getElementById("loginWithGoogle").style.visibility = "visible";
      document.getElementById("welcomeMessage").innerHTML = `Please Login`
    }
  })  
  


  window.onload = function() {
    document.getElementById("loginWithGoogle").addEventListener ("click",   user.loginWithGoogle, false);
    document.getElementById("logoutWithGoogle").addEventListener ("click",   user.logout, false);
  }

  

  

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads$$1; });
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);
function getNextId$$1() {
    return ++globalState$$1.mobxGuid;
}
function fail$$1(message) {
    invariant$$1(false, message);
    throw "X"; // unreachable
}
function invariant$$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated$$1(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once$$1(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop$$1 = function () { };
function unique$$1(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject$$1(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject$$1(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable$$1(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable$$1(object, prop) {
    if ( true && !isPropertyConfigurable$$1(object, prop))
        fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate$$1(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject$$1(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike$$1(x) {
    return Array.isArray(x) || isObservableArray$$1(x);
}
function isES6Map$$1(thing) {
    return thing instanceof Map;
}
function isES6Set$$1(thing) {
    return thing instanceof Set;
}
function getMapLikeKeys$$1(map) {
    if (isPlainObject$$1(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map$$1(map) || isObservableMap$$1(map))
        return Array.from(map.keys());
    return fail$$1("Cannot get keys from '" + map + "'");
}
function toPrimitive$$1(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");
var Atom$$1 = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom$$1(name) {
        if (name === void 0) { name = "Atom@" + getNextId$$1(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom$$1.prototype.reportObserved = function () {
        return reportObserved$$1(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom$$1.prototype.reportChanged = function () {
        startBatch$$1();
        propagateChanged$$1(this);
        endBatch$$1();
    };
    Atom$$1.prototype.toString = function () {
        return this.name;
    };
    return Atom$$1;
}());
var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);
function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop$$1; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop$$1; }
    var atom = new Atom$$1(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop$$1) {
        onBecomeObserved$$1(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop$$1) {
        onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual$$1(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer$$1 = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance$$1(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance$$1(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance$$1(target) {
    if (target[mobxDidRunLazyInitializersSymbol$$1] === true)
        return;
    var decorators = target[mobxPendingDecorators$$1];
    if (decorators) {
        addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate$$1(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator$$1(arguments))
                fail$$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
                var inheritedDecorators = target[mobxPendingDecorators$$1];
                addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators$$1][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator$$1(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY$$1;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator$$1(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer$$1(v, _, name) {
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name });
    return v;
}
function shallowEnhancer$$1(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v) || isObservableSet$$1(v))
        return v;
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name, deep: false });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name, deep: false });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name, deep: false });
    if (isES6Set$$1(v))
        return observable$$1.set(v, { name: name, deep: false });
    return fail$$1( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer$$1(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer$$1(v, oldValue, name) {
    if ( true && isObservable$$1(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual$$1(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
    invariant$$1(enhancer);
    var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "none" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions$$1 = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail$$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions$$1(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions$$1;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail$$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer$$1
            : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator$$1.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject$$1(v)
        ? observable$$1.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable$$1.array(v, arg2)
            : isES6Map$$1(v)
                ? observable$$1.map(v, arg2)
                : isES6Set$$1(v)
                    ? observable$$1.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$$1( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions$$1(options);
        return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableSet$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions$$1(options);
        if (o.proxy === false) {
            return extendObservable$$1({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
            var base = extendObservable$$1({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject$$1(base);
            extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator$$1,
    shallow: shallowDecorator,
    deep: deepDecorator$$1,
    struct: refStructDecorator
};
var observable$$1 = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable$$1[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get$$1 = descriptor.get, set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject$$1(instance).addComputedProp(instance, propertyName, __assign({ get: get$$1,
        set: set$$1, context: instance }, options));
});
var computedStructDecorator = computedDecorator$$1({ equals: comparer$$1.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed$$1 = function computed$$1(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator$$1.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator$$1.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue$$1(opts);
};
computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn, ref) {
    if (true) {
        invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction$$1(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction$$1(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    var shouldSupressReactionError = true;
    try {
        var res = fn.apply(scope, args);
        shouldSupressReactionError = false;
        return res;
    }
    finally {
        if (shouldSupressReactionError) {
            globalState$$1.suppressReactionErrors = shouldSupressReactionError;
            endAction(runInfo);
            globalState$$1.suppressReactionErrors = false;
        }
        else {
            endAction(runInfo);
        }
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled$$1() && !!actionName;
    var startTime = 0;
    if (notifySpy && "none" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart$$1({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart$$1();
    startBatch$$1();
    var prevAllowStateChanges = allowStateChangesStart$$1(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
    endBatch$$1();
    untrackedEnd$$1(runInfo.prevDerivation);
    if (runInfo.notifySpy && "none" !== "production")
        spyReportEnd$$1({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges$$1(allowStateChanges$$1, func) {
    var prev = allowStateChangesStart$$1(allowStateChanges$$1);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd$$1(prev);
    }
    return res;
}
function allowStateChangesStart$$1(allowStateChanges$$1) {
    var prev = globalState$$1.allowStateChanges;
    globalState$$1.allowStateChanges = allowStateChanges$$1;
    return prev;
}
function allowStateChangesEnd$$1(prev) {
    globalState$$1.allowStateChanges = prev;
}
function allowStateChangesInsideComputed$$1(func) {
    var prev = globalState$$1.computationDepth;
    globalState$$1.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState$$1.computationDepth = prev;
    }
    return res;
}

var ObservableValue$$1 = /** @class */ (function (_super) {
    __extends(ObservableValue$$1, _super);
    function ObservableValue$$1(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId$$1(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer$$1.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled$$1() && "none" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport$$1({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue$$1.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            if (notifySpy && "none" !== "production") {
                spyReportStart$$1({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed$$1(this);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState$$1.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState$$1.UNCHANGED : newValue;
    };
    ObservableValue$$1.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners$$1(this)) {
            notifyListeners$$1(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue$$1.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener$$1(this, listener);
    };
    ObservableValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue$$1.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue$$1;
}(Atom$$1));
var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue$$1 = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue$$1(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.value = new CaughtException$$1(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode$$1.NONE;
        if ( true && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId$$1();
        if (options.set)
            this.setter = createAction$$1(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer$$1.structural
                    : comparer$$1.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue$$1.prototype.onBecomeStale = function () {
        propagateMaybeChanged$$1(this);
    };
    ComputedValue$$1.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue$$1.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue$$1.prototype.get = function () {
        if (this.isComputing)
            fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState$$1.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute$$1(this)) {
                this.warnAboutUntrackedRead();
                startBatch$$1(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch$$1();
            }
        }
        else {
            reportObserved$$1(this);
            if (shouldCompute$$1(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed$$1(this);
        }
        var result = this.value;
        if (isCaughtException$$1(result))
            throw result.cause;
        return result;
    };
    ComputedValue$$1.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException$$1(res))
            throw res.cause;
        return res;
    };
    ComputedValue$$1.prototype.set = function (value) {
        if (this.setter) {
            invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$$1(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue$$1.prototype.trackAndCompute = function () {
        if (isSpyEnabled$$1() && "none" !== "production") {
            spyReport$$1({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException$$1(oldValue) ||
            isCaughtException$$1(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue$$1.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState$$1.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction$$1(this, this.derivation, this.scope);
        }
        else {
            if (globalState$$1.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException$$1(e);
                }
            }
        }
        globalState$$1.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue$$1.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving$$1(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun$$1(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart$$1();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd$$1(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode$$1.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState$$1.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue$$1.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue$$1;
}());
var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);

var IDerivationState;
(function (IDerivationState$$1) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode$$1;
(function (TraceMode$$1) {
    TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
    TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
    TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));
var CaughtException$$1 = /** @class */ (function () {
    function CaughtException$$1(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException$$1;
}());
function isCaughtException$$1(e) {
    return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute$$1(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue$$1(obj)) {
                    if (globalState$$1.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd$$1(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd$$1(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0$$1(derivation);
            untrackedEnd$$1(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation$$1() {
    return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed$$1(atom) {
    var hasObservers$$1 = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState$$1.computationDepth > 0 && hasObservers$$1)
        fail$$1( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict"))
        fail$$1( true &&
            (globalState$$1.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction$$1(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0$$1(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState$$1.runId;
    var prevTracking = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = derivation;
    var result;
    if (globalState$$1.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException$$1(e);
        }
    }
    globalState$$1.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver$$1(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver$$1(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving$$1(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver$$1(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked$$1(action$$1) {
    var prev = untrackedStart$$1();
    try {
        return action$$1();
    }
    finally {
        untrackedEnd$$1(prev);
    }
}
function untrackedStart$$1() {
    var prev = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = null;
    return prev;
}
function untrackedEnd$$1(prev) {
    globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0$$1(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals$$1 = /** @class */ (function () {
    function MobXGlobals$$1() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals$$1;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState$$1 = (function () {
    var global = getGlobal$$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals$$1();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals$$1());
    }
})();
function isolateGlobalState$$1() {
    if (globalState$$1.pendingReactions.length ||
        globalState$$1.inBatch ||
        globalState$$1.isRunningReactions)
        fail$$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$$1().__mobxInstanceCount === 0)
            getGlobal$$1().__mobxGlobals = undefined;
        globalState$$1 = new MobXGlobals$$1();
    }
}
function getGlobalState$$1() {
    return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState$$1() {
    var defaultGlobals = new MobXGlobals$$1();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState$$1[key] = defaultGlobals[key];
    globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}
function getGlobal$$1() {
    return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
    return observable$$1.observers && observable$$1.observers.size > 0;
}
function getObservers$$1(observable$$1) {
    return observable$$1.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver$$1(observable$$1, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable$$1.observers.add(node);
    if (observable$$1.lowestObserverState > node.dependenciesState)
        observable$$1.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver$$1(observable$$1, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable$$1.observers.delete(node);
    if (observable$$1.observers.size === 0) {
        // deleting last observer
        queueForUnobservation$$1(observable$$1);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation$$1(observable$$1) {
    if (observable$$1.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable$$1.isPendingUnobservation = true;
        globalState$$1.pendingUnobservations.push(observable$$1);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch$$1() {
    globalState$$1.inBatch++;
}
function endBatch$$1() {
    if (--globalState$$1.inBatch === 0) {
        runReactions$$1();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState$$1.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable$$1 = list[i];
            observable$$1.isPendingUnobservation = false;
            if (observable$$1.observers.size === 0) {
                if (observable$$1.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable$$1.isBeingObserved = false;
                    observable$$1.onBecomeUnobserved();
                }
                if (observable$$1 instanceof ComputedValue$$1) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable$$1.suspend();
                }
            }
        }
        globalState$$1.pendingUnobservations = [];
    }
}
function reportObserved$$1(observable$$1) {
    var derivation = globalState$$1.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable$$1.lastAccessedBy) {
            observable$$1.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;
            if (!observable$$1.isBeingObserved) {
                observable$$1.isBeingObserved = true;
                observable$$1.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
        queueForUnobservation$$1(observable$$1);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged$$1(observable$$1) {
    // invariantLOS(observable, "changed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed$$1(observable$$1) {
    // invariantLOS(observable, "confirmed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged$$1(observable$$1) {
    // invariantLOS(observable, "maybe start");
    if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable$$1) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");
    if (derivation.isTracing === TraceMode$$1.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree$$1(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction$$1 = /** @class */ (function () {
    function Reaction$$1(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId$$1(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode$$1.NONE;
    }
    Reaction$$1.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction$$1.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState$$1.pendingReactions.push(this);
            runReactions$$1();
        }
    };
    Reaction$$1.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction$$1.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch$$1();
            this._isScheduled = false;
            if (shouldCompute$$1(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled$$1() &&
                        "none" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport$$1({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch$$1();
        }
    };
    Reaction$$1.prototype.track = function (fn) {
        if (this.isDisposed) {
            fail$$1("Reaction already disposed");
        }
        startBatch$$1();
        var notify = isSpyEnabled$$1();
        var startTime;
        if (notify && "none" !== "production") {
            startTime = Date.now();
            spyReportStart$$1({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction$$1(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving$$1(this);
        }
        if (isCaughtException$$1(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "none" !== "production") {
            spyReportEnd$$1({
                time: Date.now() - startTime
            });
        }
        endBatch$$1();
    };
    Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState$$1.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState$$1.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled$$1()) {
            spyReport$$1({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState$$1.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction$$1.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch$$1();
                clearObserving$$1(this);
                endBatch$$1();
            }
        }
    };
    Reaction$$1.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx$$1] = this;
        return r;
    };
    Reaction$$1.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction$$1.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace$$1(this, enterBreakPoint);
    };
    return Reaction$$1;
}());
function onReactionError$$1(handler) {
    globalState$$1.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions$$1() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState$$1.isRunningReactions = true;
    var allReactions = globalState$$1.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState$$1.isRunningReactions = false;
}
var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);
function setReactionScheduler$$1(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled$$1() {
    return  true && !!globalState$$1.spyListeners.length;
}
function spyReport$$1(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState$$1.spyListeners.length)
        return;
    var listeners = globalState$$1.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart$$1(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport$$1(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd$$1(change) {
    if (false)
        {}
    if (change)
        spyReport$$1(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport$$1(END_EVENT);
}
function spy$$1(listener) {
    if (false) {}
    else {
        globalState$$1.spyListeners.push(listener);
        return once$$1(function () {
            globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$$1( true && "@action fields are not reassignable");
}
function namedActionDecorator$$1(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail$$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction$$1(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction$$1(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator$$1(name).apply(this, arguments);
    };
}
function actionFieldDecorator$$1(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$$1(this, prop, action$$1(name, value));
            }
        });
    };
}
function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction$$1(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction$$1(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction$$1(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction$$1(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator$$1(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator$$1(arg2).apply(null, arguments);
    }
};
action$$1.bound = boundActionDecorator$$1;
function runInAction$$1(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction$$1(actionName, fn, this, undefined);
}
function isAction$$1(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction$$1(target, propertyName, fn) {
    addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun$$1(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId$$1();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction$$1;
    if (runSync) {
        // normal autorun
        reaction$$1 = new Reaction$$1(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction$$1 = new Reaction$$1(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction$$1.isDisposed)
                        reaction$$1.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction$$1);
    }
    reaction$$1.schedule();
    return reaction$$1.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction$$1(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (true) {
        invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId$$1();
    var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer$$1.structural
        : opts.equals || comparer$$1.default;
    var r = new Reaction$$1(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$$1( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure$$1(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
    if (options.isolateGlobalState === true) {
        isolateGlobalState$$1();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState$$1.enforceActions = ea;
        globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler$$1(reactionScheduler);
    }
}

function decorate$$1(thing, decorators) {
     true &&
        invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant$$1(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
    if (true) {
        invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions$$1(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
    initializeInstance$$1(target); // Fixes #1740
    asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions$$1(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}
function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
    if (true) {
        invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    startBatch$$1();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (true) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed$$1(descriptor.value))
                    fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator$$1
                    : defaultDecorator;
            if ( true && typeof decorator !== "function")
                fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch$$1();
    }
}

function getDependencyTree$$1(thing, property) {
    return nodeToDependencyTree(getAtom$$1(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree$$1(thing, property) {
    return nodeToObserverTree(getAtom$$1(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers$$1(node))
        result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow$$1(generator) {
    if (arguments.length !== 1)
        fail$$1( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop$$1, noop$$1);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
        target = getAdministration$$1(thing);
    }
    else if (isObservableObject$$1(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$$1( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration$$1(thing, propOrHandler);
    }
    else {
        return fail$$1( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$$1( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept$$1(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration$$1(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject$$1(value) === false)
            return false;
        if (!value[$mobx$$1].values.has(property))
            return false;
        var atom = getAtom$$1(value, property);
        return isComputedValue$$1(atom);
    }
    return isComputedValue$$1(value);
}
function isComputed$$1(value) {
    if (arguments.length > 1)
        return fail$$1( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed$$1(value);
}
function isComputedProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true &&
            "isComputed expected a property name as second argument");
    return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap$$1(value) || isObservableArray$$1(value)))
            return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject$$1(value)) {
            return value[$mobx$$1].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject$$1(value) ||
        !!value[$mobx$$1] ||
        isAtom$$1(value) ||
        isReaction$$1(value) ||
        isComputedValue$$1(value));
}
function isObservable$$1(value) {
    if (arguments.length !== 1)
        fail$$1( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return obj[$mobx$$1].getKeys();
    }
    if (isObservableMap$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$$1( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray$$1(obj)) {
        return obj.slice();
    }
    return fail$$1( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet$$1(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$$1( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set$$1(obj, key, value) {
    if (arguments.length === 2) {
        startBatch$$1();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch$$1();
        }
        return;
    }
    if (isObservableObject$$1(obj)) {
        var adm = obj[$mobx$$1];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap$$1(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch$$1();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch$$1();
    }
    else {
        return fail$$1( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        
        obj[$mobx$$1].remove(key);
    }
    else if (isObservableMap$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$$1( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration$$1(obj);
        return adm.has(key);
    }
    else if (isObservableMap$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray$$1(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$$1( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get$$1(obj, key) {
    if (!has$$1(obj, key))
        return undefined;
    if (isObservableObject$$1(obj)) {
        return obj[key];
    }
    else if (isObservableMap$$1(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray$$1(obj)) {
        return obj[key];
    }
    else {
        return fail$$1( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration$$1(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable$$1(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue$$1(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable$$1(source))
        keys$$1(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray$$1(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet$$1(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap$$1(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS$$1(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$$1( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode$$1.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState$$1.trackingDerivation;
        case 1:
            return getAtom$$1(args[0]);
        case 2:
            return getAtom$$1(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction$$1(action$$1, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch$$1();
    try {
        return action$$1.apply(thisArg);
    }
    finally {
        endBatch$$1();
    }
}

function when$$1(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx$$1].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId$$1();
    var effectAction = createAction$$1(opts.name + "-effect", effect);
    var disposer = autorun$$1(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail$$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx$$1];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (typeof name === "string")
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return target[name];
        var adm = getAdm(target);
        var observable$$1 = adm.values.get(name);
        if (observable$$1 instanceof Atom$$1) {
            var result = observable$$1.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (typeof name === "string")
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (typeof name !== "string")
            return false;
        set$$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (typeof name !== "string")
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$$1("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject$$1(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx$$1].proxy = proxy;
    return proxy;
}

function hasInterceptors$$1(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor$$1(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once$$1(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange$$1(interceptable, change) {
    var prevU = untrackedStart$$1();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd$$1(prevU);
    }
}

function hasListeners$$1(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener$$1(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once$$1(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners$$1(listenable, change) {
    var prevU = untrackedStart$$1();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx$$1)
            return target[$mobx$$1];
        if (name === "length")
            return target[$mobx$$1].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx$$1].setArrayLength(value);
            return true;
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
            return true;
        }
        if (!isNaN(name)) {
            arrayExtensions.set.call(target, parseInt(name), value);
            return true;
        }
        return false;
    },
    preventExtensions: function (target) {
        fail$$1("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray$$1(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId$$1(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart$$1(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd$$1(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
        if (this.dehancer !== undefined && values$$1.length > 0)
            return values$$1.map(this.dehancer);
        return values$$1;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener$$1(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY$$1;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY$$1;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "none" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "none" !== "production")
            spyReportEnd$$1();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "none" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "none" !== "production")
            spyReportEnd$$1();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx$$1].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx$$1];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx$$1];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx$$1];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx$$1];
        var values$$1 = adm.values;
        if (index < values$$1.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed$$1(adm.atom);
            var oldValue = values$$1[index];
            if (hasInterceptors$$1(adm)) {
                var change = interceptChange$$1(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values$$1[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values$$1.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx$$1];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray$$1(thing) {
    return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap$$1 = /** @class */ (function () {
    function ObservableMap$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableMap@" + getNextId$$1(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom$$1(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap$$1.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap$$1.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap$$1.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap$$1.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            transaction$$1(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data.get(key);
                observable$$1.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + stringifyKey(key) + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap$$1.prototype._updateValue = function (key, newValue) {
        var observable$$1 = this._data.get(key);
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== globalState$$1.UNCHANGED) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableMap$$1.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._keysAtom);
        transaction$$1(function () {
            var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable$$1);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "none" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "none" !== "production")
            spyReportEnd$$1();
    };
    ObservableMap$$1.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap$$1.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap$$1.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys$$1.length
                    ? { value: self.get(keys$$1[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap$$1.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys$$1.length) {
                    var key = keys$$1[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap$$1.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (isPlainObject$$1(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map$$1(other)) {
                if (other.constructor !== Map)
                    fail$$1("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail$$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap$$1.prototype.replace = function (values$$1) {
        var _this = this;
        transaction$$1(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys$$1(values$$1);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values$$1);
        });
        return this;
    };
    Object.defineProperty(ObservableMap$$1.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap$$1.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap$$1.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap$$1.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap$$1.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener$$1(this, listener);
    };
    ObservableMap$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    return ObservableMap$$1;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
/* 'var' fixes small-build issue */
var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet$$1 = /** @class */ (function () {
    function ObservableSet$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableSet@" + getNextId$$1(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom$$1(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet$$1.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet$$1.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet$$1.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._atom);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction$$1(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(change);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
        }
        return this;
    };
    ObservableSet$$1.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name }));
            transaction$$1(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableSet$$1.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet$$1.prototype.entries = function () {
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        var values$$1 = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values$$1.length
                    ? { value: [keys$$1[index], values$$1[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.keys = function () {
        return this.values();
    };
    ObservableSet$$1.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet$$1.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set$$1(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail$$1("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet$$1.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener$$1(this, listener);
    };
    ObservableSet$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableSet$$1.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet$$1.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet$$1.prototype[(_a$1 = $mobx$$1, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet$$1;
}());
var isObservableSet$$1 = createInstanceofPredicate$$1("ObservableSet", ObservableSet$$1);

var ObservableObjectAdministration$$1 = /** @class */ (function () {
    function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
        if (values$$1 === void 0) { values$$1 = new Map(); }
        this.target = target;
        this.values = values$$1;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom$$1(name + ".keys");
    }
    ObservableObjectAdministration$$1.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable$$1 = this.values.get(key);
        if (observable$$1 instanceof ComputedValue$$1) {
            observable$$1.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable$$1.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState$$1.UNCHANGED) {
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue$$1(exists, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable$$1(target, propName);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
        this.values.set(propName, observable$$1);
        newValue = observable$$1.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + propName;
        this.values.set(propName, new ComputedValue$$1(options));
        if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
    };
    ObservableObjectAdministration$$1.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch$$1();
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "none" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "none" !== "production")
                spyReportEnd$$1();
        }
        finally {
            endBatch$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener$$1(this, callback);
    };
    ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners$$1(this);
        var notifySpy = isSpyEnabled$$1();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "none" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "none" !== "production")
            spyReportEnd$$1();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration$$1.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue$$1)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration$$1;
}());
function asObservableObject$$1(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer$$1; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx$$1))
        return target[$mobx$$1];
     true &&
        invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject$$1(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
    if (!name)
        name = "ObservableObject@" + getNextId$$1();
    var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
    addHiddenProp$$1(target, $mobx$$1, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig$$1(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx$$1].read(propName);
            },
            set: function (v) {
                this[$mobx$$1].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx$$1];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance$$1(owner);
        return owner[$mobx$$1];
    }
    return adm;
}
function generateComputedPropConfig$$1(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: false,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);
function isObservableObject$$1(thing) {
    if (isObject$$1(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        return isObservableObjectAdministration(thing[$mobx$$1]);
    }
    return false;
}

function getAtom$$1(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray$$1(thing)) {
            if (property !== undefined)
                fail$$1( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx$$1].atom;
        }
        if (isObservableSet$$1(thing)) {
            return thing[$mobx$$1];
        }
        if (isObservableMap$$1(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        if (property && !thing[$mobx$$1])
            thing[property]; // See #1072
        if (isObservableObject$$1(thing)) {
            if (!property)
                return fail$$1( true && "please specify a property");
            var observable$$1 = thing[$mobx$$1].values.get(property);
            if (!observable$$1)
                fail$$1( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction$$1(thing[$mobx$$1])) {
            // disposer function
            return thing[$mobx$$1];
        }
    }
    return fail$$1( true && "Cannot obtain atom from " + thing);
}
function getAdministration$$1(thing, property) {
    if (!thing)
        fail$$1("Expecting some object");
    if (property !== undefined)
        return getAdministration$$1(getAtom$$1(thing, property));
    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing))
        return thing;
    if (isObservableMap$$1(thing) || isObservableSet$$1(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    if (thing[$mobx$$1])
        return thing[$mobx$$1];
    fail$$1( true && "Cannot obtain administration from " + thing);
}
function getDebugName$$1(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom$$1(thing, property);
    else if (isObservableObject$$1(thing) || isObservableMap$$1(thing) || isObservableSet$$1(thing))
        named = getAdministration$$1(thing);
    else
        named = getAtom$$1(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual$$1(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a);
        var key = void 0;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray$$1(a))
        return a.slice();
    if (isES6Map$$1(a) || isObservableMap$$1(a))
        return Array.from(a.entries());
    if (isES6Set$$1(a) || isObservableSet$$1(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = self;
    return iterator;
}
function self() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "none";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "none" !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        console.warn(
        // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
        "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy$$1,
        extras: {
            getDebugName: getDebugName$$1
        },
        $mobx: $mobx$$1
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8), __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(promise_polyfill_lib_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_features_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var core_js_features_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_features_array_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var core_js_features_array_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_features_string_starts_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var core_js_features_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_starts_with__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_features_string_repeat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);
/* harmony import */ var core_js_features_string_repeat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_repeat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_features_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var core_js_features_symbol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_features_symbol__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(116);
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__);










/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.esm.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {

/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = finallyConstructor;

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

if (!('Promise' in globalNS)) {
  globalNS['Promise'] = Promise;
} else if (!globalNS.Promise.prototype['finally']) {
  globalNS.Promise.prototype['finally'] = finallyConstructor;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5).setImmediate, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6), __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);

module.exports = __webpack_require__(65)('Array', 'find');


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalFind = __webpack_require__(12)(5);
var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
__webpack_require__(40)({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return internalFind(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
__webpack_require__(60)(FIND);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(13);
var IndexedObject = __webpack_require__(15);
var toObject = __webpack_require__(18);
var toLength = __webpack_require__(20);
var arraySpeciesCreate = __webpack_require__(22);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
// 0 -> Array#forEach
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
// 1 -> Array#map
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// 2 -> Array#filter
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// 3 -> Array#some
// https://tc39.github.io/ecma262/#sec-array.prototype.some
// 4 -> Array#every
// https://tc39.github.io/ecma262/#sec-array.prototype.every
// 5 -> Array#find
// https://tc39.github.io/ecma262/#sec-array.prototype.find
// 6 -> Array#findIndex
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
module.exports = function (TYPE, specificCreate) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = specificCreate || arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: target.push(value);       // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(14);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(16);
var classof = __webpack_require__(17);
var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(19);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
var isArray = __webpack_require__(24);
var SPECIES = __webpack_require__(25)('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(17);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(38);
var Symbol = __webpack_require__(27).Symbol;
var NATIVE_SYMBOL = __webpack_require__(39);

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var setGlobal = __webpack_require__(28);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.0.1',
  mode: __webpack_require__(37) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = typeof window == 'object' && window && window.Math == Math ? window
  : typeof self == 'object' && self && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var hide = __webpack_require__(29);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var definePropertyModule = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(36);

module.exports = __webpack_require__(31) ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(31);
var IE8_DOM_DEFINE = __webpack_require__(32);
var anObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(35);
var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(31) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
var document = __webpack_require__(27).document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(23);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Chrome 38 Symbol has incorrect toString conversion
module.exports = !__webpack_require__(16)(function () {
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var getOwnPropertyDescriptor = __webpack_require__(41).f;
var hide = __webpack_require__(29);
var redefine = __webpack_require__(45);
var setGlobal = __webpack_require__(28);
var copyConstructorProperties = __webpack_require__(51);
var isForced = __webpack_require__(59);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(31);
var propertyIsEnumerableModule = __webpack_require__(42);
var createPropertyDescriptor = __webpack_require__(36);
var toIndexedObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(44);
var IE8_DOM_DEFINE = __webpack_require__(32);
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = nativeGetOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = nativeGetOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(15);
var requireObjectCoercible = __webpack_require__(19);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var hide = __webpack_require__(29);
var has = __webpack_require__(44);
var setGlobal = __webpack_require__(28);
var nativeFunctionToString = __webpack_require__(46);
var InternalStateModule = __webpack_require__(47);
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

__webpack_require__(26)('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26)('native-function-to-string', Function.toString);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(48);
var isObject = __webpack_require__(23);
var hide = __webpack_require__(29);
var objectHas = __webpack_require__(44);
var sharedKey = __webpack_require__(49);
var hiddenKeys = __webpack_require__(50);
var WeakMap = __webpack_require__(27).WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var nativeFunctionToString = __webpack_require__(46);
var WeakMap = __webpack_require__(27).WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(38);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(44);
var ownKeys = __webpack_require__(52);
var getOwnPropertyDescriptorModule = __webpack_require__(41);
var definePropertyModule = __webpack_require__(30);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getOwnPropertyNamesModule = __webpack_require__(53);
var getOwnPropertySymbolsModule = __webpack_require__(58);
var anObject = __webpack_require__(34);
var Reflect = __webpack_require__(27).Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(54);
var hiddenKeys = __webpack_require__(57).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(44);
var toIndexedObject = __webpack_require__(43);
var arrayIndexOf = __webpack_require__(55)(false);
var hiddenKeys = __webpack_require__(50);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(43);
var toLength = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(56);

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(16);
var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var UNSCOPABLES = __webpack_require__(25)('unscopables');
var create = __webpack_require__(61);
var hide = __webpack_require__(29);
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(34);
var defineProperties = __webpack_require__(62);
var enumBugKeys = __webpack_require__(57);
var html = __webpack_require__(64);
var documentCreateElement = __webpack_require__(33);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

__webpack_require__(50)[IE_PROTO] = true;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(31);
var definePropertyModule = __webpack_require__(30);
var anObject = __webpack_require__(34);
var objectKeys = __webpack_require__(63);

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var internalObjectKeys = __webpack_require__(54);
var enumBugKeys = __webpack_require__(57);

module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(27).document;

module.exports = document && document.documentElement;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(27);
var bind = __webpack_require__(13);
var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);

module.exports = __webpack_require__(65)('Array', 'findIndex');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalFindIndex = __webpack_require__(12)(6);
var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
__webpack_require__(40)({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return internalFindIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
__webpack_require__(60)(FIND_INDEX);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);

module.exports = __webpack_require__(73).Object.assign;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var assign = __webpack_require__(72);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
__webpack_require__(40)({ target: 'Object', stat: true, forced: Object.assign !== assign }, { assign: assign });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var objectKeys = __webpack_require__(63);
var getOwnPropertySymbolsModule = __webpack_require__(58);
var propertyIsEnumerableModule = __webpack_require__(42);
var toObject = __webpack_require__(18);
var IndexedObject = __webpack_require__(15);
var nativeAssign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (propertyIsEnumerable.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : nativeAssign;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);

module.exports = __webpack_require__(65)('String', 'startsWith');


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(20);
var validateArguments = __webpack_require__(77);
var STARTS_WITH = 'startsWith';
var CORRECT_IS_REGEXP_LOGIC = __webpack_require__(79)(STARTS_WITH);
var nativeStartsWith = ''[STARTS_WITH];

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
__webpack_require__(40)({ target: 'String', proto: true, forced: !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = validateArguments(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(78);
var requireObjectCoercible = __webpack_require__(19);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) {
    throw TypeError('String.prototype.' + NAME + " doesn't accept regex");
  } return String(requireObjectCoercible(that));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
var classof = __webpack_require__(17);
var MATCH = __webpack_require__(25)('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(25)('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);

module.exports = __webpack_require__(65)('String', 'repeat');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
__webpack_require__(40)({ target: 'String', proto: true }, {
  repeat: __webpack_require__(83)
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(19);

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);

__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(115);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
__webpack_require__(89);
__webpack_require__(92);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);

module.exports = __webpack_require__(73).Symbol;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(24);
var isObject = __webpack_require__(23);
var toObject = __webpack_require__(18);
var toLength = __webpack_require__(20);
var createProperty = __webpack_require__(87);
var arraySpeciesCreate = __webpack_require__(22);
var IS_CONCAT_SPREADABLE = __webpack_require__(25)('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !__webpack_require__(16)(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = __webpack_require__(88)('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
__webpack_require__(40)({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(35);
var definePropertyModule = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(36);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(16);
var SPECIES = __webpack_require__(25)('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(90);
var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  __webpack_require__(45)(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(91);
var TO_STRING_TAG = __webpack_require__(25)('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(17);
var TO_STRING_TAG = __webpack_require__(25)('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(27);
var has = __webpack_require__(44);
var DESCRIPTORS = __webpack_require__(31);
var IS_PURE = __webpack_require__(37);
var $export = __webpack_require__(40);
var redefine = __webpack_require__(45);
var hiddenKeys = __webpack_require__(50);
var fails = __webpack_require__(16);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(93);
var uid = __webpack_require__(38);
var wellKnownSymbol = __webpack_require__(25);
var wrappedWellKnownSymbolModule = __webpack_require__(94);
var defineWellKnownSymbol = __webpack_require__(95);
var enumKeys = __webpack_require__(96);
var isArray = __webpack_require__(24);
var anObject = __webpack_require__(34);
var isObject = __webpack_require__(23);
var toIndexedObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(35);
var createPropertyDescriptor = __webpack_require__(36);
var nativeObjectCreate = __webpack_require__(61);
var getOwnPropertyNamesExternal = __webpack_require__(97);
var getOwnPropertyDescriptorModule = __webpack_require__(41);
var definePropertyModule = __webpack_require__(30);
var propertyIsEnumerableModule = __webpack_require__(42);
var hide = __webpack_require__(29);
var objectKeys = __webpack_require__(63);
var HIDDEN = __webpack_require__(49)('hidden');
var InternalStateModule = __webpack_require__(47);
var SYMBOL = 'Symbol';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');
var ObjectPrototype = Object[PROTOTYPE];
var QObject = global.QObject;
var NATIVE_SYMBOL = __webpack_require__(39);
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, key);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[key];
  nativeDefineProperty(it, key, D);
  if (ObjectPrototypeDescriptor && it !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, key, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) nativeDefineProperty(it, HIDDEN, createPropertyDescriptor(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = nativeObjectCreate(D, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(it, key, D);
  } return nativeDefineProperty(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIndexedObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};

var $create = function create(it, P) {
  return P === undefined ? nativeObjectCreate(it) : $defineProperties(nativeObjectCreate(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = nativePropertyIsEnumerable.call(this, key = toPrimitive(key, true));
  if (this === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIndexedObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var D = nativeGetOwnPropertyDescriptor(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && !has(hiddenKeys, key)) result.push(key);
  } return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OP ? ObjectPrototypeSymbols : toIndexedObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectPrototype, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  __webpack_require__(53).f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$export({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, { Symbol: $Symbol });

for (var wellKnownSymbols = objectKeys(WellKnownSymbolsStore), k = 0; wellKnownSymbols.length > k;) {
  defineWellKnownSymbol(wellKnownSymbols[k++]);
}

$export({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$export({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$export({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $export({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(30).f;
var has = __webpack_require__(44);
var TO_STRING_TAG = __webpack_require__(25)('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(25);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(73);
var has = __webpack_require__(44);
var wrappedWellKnownSymbolModule = __webpack_require__(94);
var defineProperty = __webpack_require__(30).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(63);
var getOwnPropertySymbolsModule = __webpack_require__(58);
var propertyIsEnumerableModule = __webpack_require__(42);

// all enumerable object keys, includes symbols
module.exports = function (it) {
  var result = objectKeys(it);
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  if (getOwnPropertySymbols) {
    var symbols = getOwnPropertySymbols(it);
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (propertyIsEnumerable.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIndexedObject = __webpack_require__(43);
var nativeGetOwnPropertyNames = __webpack_require__(53).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
__webpack_require__(95)('asyncIterator');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var DESCRIPTORS = __webpack_require__(31);
var has = __webpack_require__(44);
var isObject = __webpack_require__(23);
var defineProperty = __webpack_require__(30).f;
var copyConstructorProperties = __webpack_require__(51);
var NativeSymbol = __webpack_require__(27).Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  __webpack_require__(40)({ global: true, forced: true }, { Symbol: SymbolWrapper });
}


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
__webpack_require__(95)('hasInstance');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
__webpack_require__(95)('isConcatSpreadable');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
__webpack_require__(95)('iterator');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
__webpack_require__(95)('match');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
__webpack_require__(95)('replace');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
__webpack_require__(95)('search');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
__webpack_require__(95)('species');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
__webpack_require__(95)('split');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
__webpack_require__(95)('toPrimitive');


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
__webpack_require__(95)('toStringTag');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
__webpack_require__(95)('unscopables');


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
__webpack_require__(93)(Math, 'Math', true);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
__webpack_require__(93)(__webpack_require__(27).JSON, 'JSON', true);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-using-statement
__webpack_require__(95)('dispose');


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-observable
__webpack_require__(95)('observable');


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
__webpack_require__(95)('patternMatch');


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(118);
__webpack_require__(128);

module.exports = __webpack_require__(94).f('iterator');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var codePointAt = __webpack_require__(119);
var InternalStateModule = __webpack_require__(47);
var defineIterator = __webpack_require__(120);
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var requireObjectCoercible = __webpack_require__(19);
// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(40);
var createIteratorConstructor = __webpack_require__(121);
var getPrototypeOf = __webpack_require__(123);
var setPrototypeOf = __webpack_require__(126);
var setToStringTag = __webpack_require__(93);
var hide = __webpack_require__(29);
var redefine = __webpack_require__(45);
var IS_PURE = __webpack_require__(37);
var ITERATOR = __webpack_require__(25)('iterator');
var Iterators = __webpack_require__(125);
var IteratorsCore = __webpack_require__(122);
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(122).IteratorPrototype;
var create = __webpack_require__(61);
var createPropertyDescriptor = __webpack_require__(36);
var setToStringTag = __webpack_require__(93);
var Iterators = __webpack_require__(125);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(123);
var hide = __webpack_require__(29);
var has = __webpack_require__(44);
var IS_PURE = __webpack_require__(37);
var ITERATOR = __webpack_require__(25)('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(44);
var toObject = __webpack_require__(18);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(124);
var ObjectPrototype = Object.prototype;

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16)(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var validateSetPrototypeOfArguments = __webpack_require__(127);

module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
var anObject = __webpack_require__(34);

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var DOMIterables = __webpack_require__(129);
var ArrayIteratorMethods = __webpack_require__(130);
var global = __webpack_require__(27);
var hide = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(25);
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(43);
var addToUnscopables = __webpack_require__(60);
var Iterators = __webpack_require__(125);
var InternalStateModule = __webpack_require__(47);
var defineIterator = __webpack_require__(120);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = __webpack_require__(132);
var util = __webpack_require__(133);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$name}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$name}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$name}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$name}' already deleted",
    _a["duplicate-service" /* DUPLICATE_SERVICE */] = "Firebase service named '{$name}' already registered",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$name}() takes either no argument or a ' +
        'Firebase App instance.',
    _a);
var appErrors = new util.ErrorFactory('app', 'Firebase', ERRORS);
function error(code, args) {
    throw appErrors.create(code, args);
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An array to capture listeners before the true auth functions
// exist
var tokenListeners = [];
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.INTERNAL = {
            getUid: function () { return null; },
            getToken: function () { return Promise.resolve(null); },
            addAuthTokenListener: function (callback) {
                tokenListeners.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () { return callback(null); }, 0);
            },
            removeAuthTokenListener: function (callback) {
                tokenListeners = tokenListeners.filter(function (listener) { return listener !== callback; });
            }
        };
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            var services = [];
            for (var _i = 0, _a = Object.keys(_this.services_); _i < _a.length; _i++) {
                var serviceKey = _a[_i];
                for (var _b = 0, _c = Object.keys(_this.services_[serviceKey]); _b < _c.length; _b++) {
                    var instanceKey = _c[_b];
                    services.push(_this.services_[serviceKey][instanceKey]);
                }
            }
            return Promise.all(services.map(function (service) {
                return service.INTERNAL.delete();
            }));
        })
            .then(function () {
            _this.isDeleted_ = true;
            _this.services_ = {};
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage is the only one that is leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        if (!this.services_[name]) {
            this.services_[name] = {};
        }
        if (!this.services_[name][instanceIdentifier]) {
            /**
             * If a custom instance has been defined (i.e. not '[DEFAULT]')
             * then we will pass that instance on, otherwise we pass `null`
             */
            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME
                ? instanceIdentifier
                : undefined;
            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
            this.services_[name][instanceIdentifier] = service;
        }
        return this.services_[name][instanceIdentifier];
    };
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    FirebaseAppImpl.prototype.extendApp = function (props) {
        var _this = this;
        // Copy the object onto the FirebaseAppImpl prototype
        util.deepExtend(this, props);
        /**
         * If the app has overwritten the addAuthTokenListener stub, forward
         * the active token listeners on to the true fxn.
         *
         * TODO: This function is required due to our current module
         * structure. Once we are able to rely strictly upon a single module
         * implementation, this code should be refactored and Auth should
         * provide these stubs and the upgrade logic
         */
        if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
            tokenListeners.forEach(function (listener) {
                _this.INTERNAL.addAuthTokenListener(listener);
            });
            tokenListeners = [];
        }
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            error("app-deleted" /* APP_DELETED */, { name: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        app: app,
        apps: null,
        Promise: Promise,
        SDK_VERSION: '5.11.0',
        INTERNAL: {
            registerService: registerService,
            removeApp: removeApp,
            factories: factories,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    util.patchProperty(namespace, 'default', namespace);
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        var app = apps[name];
        callAppHooks(app, 'delete');
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!contains(apps, name)) {
            error("no-app" /* NO_APP */, { name: name });
        }
        return apps[name];
    }
    util.patchProperty(app, 'App', firebaseAppImpl);
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            error("bad-app-name" /* BAD_APP_NAME */, { name: String(name) });
        }
        if (contains(apps, name)) {
            error("duplicate-app" /* DUPLICATE_APP */, { name: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        callAppHooks(app, 'create');
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    /*
     * Register a Firebase Service.
     *
     * firebase.INTERNAL.registerService()
     *
     * TODO: Implement serviceProperties.
     */
    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
        if (allowMultipleInstances === void 0) { allowMultipleInstances = false; }
        // Cannot re-register a service that already exists
        if (factories[name]) {
            error("duplicate-service" /* DUPLICATE_SERVICE */, { name: name });
        }
        // Capture the service factory for later service instantiation
        factories[name] = createService;
        // Capture the appHook, if passed
        if (appHook) {
            appHooks[name] = appHook;
            // Run the **new** app hook on all existing apps
            getApps().forEach(function (app) {
                appHook('create', app);
            });
        }
        // The Service namespace is an accessor function ...
        function serviceNamespace(appArg) {
            if (appArg === void 0) { appArg = app(); }
            if (typeof appArg[name] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                error("invalid-app-argument" /* INVALID_APP_ARGUMENT */, { name: name });
            }
            // Forward service instance lookup to the FirebaseApp.
            return appArg[name]();
        }
        // ... and a container for service-level properties.
        if (serviceProperties !== undefined) {
            util.deepExtend(serviceNamespace, serviceProperties);
        }
        // Monkey-patch the serviceNamespace onto the firebase namespace
        namespace[name] = serviceNamespace;
        // Patch the FirebaseAppImpl prototype
        firebaseAppImpl.prototype[name] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var serviceFxn = this._getService.bind(this, name);
            return serviceFxn.apply(this, allowMultipleInstances ? args : []);
        };
        return serviceNamespace;
    }
    function callAppHooks(app, eventName) {
        for (var _i = 0, _a = Object.keys(factories); _i < _a.length; _i++) {
            var serviceName = _a[_i];
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        }
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        var options = app.options;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib_1.__assign({}, namespace.INTERNAL, { createFirebaseNamespace: createFirebaseNamespace, extendNamespace: extendNamespace, createSubscribe: util.createSubscribe, ErrorFactory: util.ErrorFactory, deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
var isNode = false;
try {
    isNode =
        Object.prototype.toString.call(global.process) === '[object process]';
}
catch (e) { }
isNode &&
    console.warn("\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the \"main\" field in package.json.\n\nIf you are using Webpack, you can specify \"main\" as the first item in\n\"resolve.mainFields\":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set \"module\"\nto false and \"main\" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n");
// Firebase Lite detection
if (self && 'firebase' in self) {
    console.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        console.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var firebase = createFirebaseNamespace();

exports.default = firebase;
exports.firebase = firebase;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = __webpack_require__(132);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 * @param {*} assertion The assertion to be tested for falsiness
 * @param {!string} message The message to display if the check fails
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 * @param {string} message
 * @return {!Error}
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) == 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) == 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param {Array<number>} bytes Array of numbers representing characters.
 * @return {string} Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [], pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     * @type {Object}
     * @private
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @type {Object}
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @type {Object}
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     * @type {string}
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     * @type {boolean}
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeByteArray: function (input, opt_webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = opt_webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe If true, we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    encodeString: function (input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), opt_webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode.
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {string} string representing the decoded value.
     */
    decodeString: function (input, opt_webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !opt_webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, opt_webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param {string} input Input to decode.
     * @param {boolean=} opt_webSafe True if we should use the web-safe alphabet.
     * @return {!Array<number>} bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, opt_webSafe) {
        this.init_();
        var charToByteMap = opt_webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 != 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 != 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 * @param {!string} str
 * @return {!string}
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param {string} str To be decoded
 * @return {?string} Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
// TODO: Really needed (for JSCompiler type checking)?
function patchProperty(obj, prop, value) {
    obj[prop] = value;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     * @param {((?function(?(Error)): (?|undefined))| (?function(?(Error),?=): (?|undefined)))=} callback
     * @return {!function(?(Error), ?=)}
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return {string} user agent string
 */
var getUA = function () {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
};
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
 * Cordova `onDeviceReady`, which would normally wait for a callback.
 *
 * @return {boolean} isMobileCordova
 */
var isMobileCordova = function () {
    return (typeof window !== 'undefined' &&
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
};
/**
 * Detect React Native.
 *
 * @return {boolean} True if ReactNative environment is detected.
 */
var isReactNative = function () {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
};
/**
 * Detect Node.js.
 *
 * @return {boolean} True if Node.js environment is detected.
 */
var isNodeSdk = function () {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib_1.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code, data) {
        if (data === void 0) { data = {}; }
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, data) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = data[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {{header: *, claims: *, data: *, signature: string}}
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims, now = Math.floor(new Date().getTime() / 1000), validSince, validUntil;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (now && validSince && validUntil && now >= validSince && now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {?number}
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 *
 * @param {?string} token
 * @return {boolean}
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// See http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/
var contains = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var safeGet = function (obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key))
        return obj[key];
    // else return undefined.
};
/**
 * Enumerates the keys/values in an object, excluding keys defined on the prototype.
 *
 * @param {?Object.<K,V>} obj Object to enumerate.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var forEach = function (obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(key, obj[key]);
        }
    }
};
/**
 * Copies all the (own) properties from one object to another.
 * @param {!Object} objTo
 * @param {!Object} objFrom
 * @return {!Object} objTo
 */
var extend = function (objTo, objFrom) {
    forEach(objFrom, function (key, value) {
        objTo[key] = value;
    });
    return objTo;
};
/**
 * Returns a clone of the specified object.
 * @param {!Object} obj
 * @return {!Object} cloned obj.
 */
var clone = function (obj) {
    return extend({}, obj);
};
/**
 * Returns true if obj has typeof "object" and is not null.  Unlike goog.isObject(), does not return true
 * for functions.
 *
 * @param obj {*} A potential object.
 * @returns {boolean} True if it's an object.
 */
var isNonNullObject = function (obj) {
    return typeof obj === 'object' && obj !== null;
};
var isEmpty = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
var getCount = function (obj) {
    var rv = 0;
    for (var key in obj) {
        rv++;
    }
    return rv;
};
var map = function (obj, f, opt_obj) {
    var res = {};
    for (var key in obj) {
        res[key] = f.call(opt_obj, obj[key], key, obj);
    }
    return res;
};
var findKey = function (obj, fn, opt_this) {
    for (var key in obj) {
        if (fn.call(opt_this, obj[key], key, obj)) {
            return key;
        }
    }
    return undefined;
};
var findValue = function (obj, fn, opt_this) {
    var key = findKey(obj, fn, opt_this);
    return key && obj[key];
};
var getAnyKey = function (obj) {
    for (var key in obj) {
        return key;
    }
};
var getValues = function (obj) {
    var res = [];
    var i = 0;
    for (var key in obj) {
        res[i++] = obj[key];
    }
    return res;
};
/**
 * Tests whether every key/value pair in an object pass the test implemented
 * by the provided function
 *
 * @param {?Object.<K,V>} obj Object to test.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
var every = function (obj, fn) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!fn(key, obj[key])) {
                return false;
            }
        }
    }
    return true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a params
 * object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 *
 * @param {!Object} querystringParams
 * @return {string}
 */
var querystring = function (querystringParams) {
    var params = [];
    forEach(querystringParams, function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    });
    return params.length ? '&' + params.join('&') : '';
};
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object (e.g. {arg: 'val', arg2: 'val2'})
 *
 * @param {string} querystring
 * @return {!Object}
 */
var querystringDecode = function (querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @type {!Array<number>}
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @type {!Array<number>}
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @type {!Array<number>}
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @type {!Array<number>}
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param {!Array<number>|!Uint8Array|string} buf Block to compress.
     * @param {number=} opt_offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, opt_offset) {
        if (!opt_offset) {
            opt_offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(opt_offset) << 24) |
                        (buf.charCodeAt(opt_offset + 1) << 16) |
                        (buf.charCodeAt(opt_offset + 2) << 8) |
                        buf.charCodeAt(opt_offset + 3);
                opt_offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[opt_offset] << 24) |
                        (buf[opt_offset + 1] << 16) |
                        (buf[opt_offset + 2] << 8) |
                        buf[opt_offset + 3];
                opt_offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, opt_length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (opt_length === undefined) {
            opt_length = bytes.length;
        }
        var lengthMinusBlock = opt_length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < opt_length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf == 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < opt_length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < opt_length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf == this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += opt_length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param {!string} fnName The function name
 * @param {!number} minCount The minimum number of arguments to allow for the function call
 * @param {!number} maxCount The maximum number of argument to allow for the function call
 * @param {!number} argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param {!string} fnName The function name
 * @param {!number} argumentNumber The index of the argument
 * @param {boolean} optional Whether or not the argument is optional
 * @return {!string} The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param {!string} fnName
 * @param {!number} argumentNumber
 * @param {!string} namespace
 * @param {boolean} optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace)
        return;
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback)
        return;
    if (typeof callback !== 'function')
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context)
        return;
    if (typeof context !== 'object' || context === null)
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [], p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.clone = clone;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.every = every;
exports.extend = extend;
exports.findKey = findKey;
exports.findValue = findValue;
exports.forEach = forEach;
exports.getAnyKey = getAnyKey;
exports.getCount = getCount;
exports.getUA = getUA;
exports.getValues = getValues;
exports.isAdmin = isAdmin;
exports.isEmpty = isEmpty;
exports.isMobileCordova = isMobileCordova;
exports.isNodeSdk = isNodeSdk;
exports.isNonNullObject = isNonNullObject;
exports.isReactNative = isReactNative;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.patchProperty = patchProperty;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
(function() {var h,aa=aa||{},l=this;function m(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}var ca=/^[\w+/_-]+[=]{0,2}$/,ea=null;function fa(){}
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ia(a){return null===a}function ja(a){return"array"==ha(a)}function ka(a){var b=ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"function"==ha(a)}function r(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=na:t=oa;return t.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var qa=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.pb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gd=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}};function ra(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function v(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(v,Error);v.prototype.name="CustomError";function sa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");v.call(this,c+a[d])}u(sa,v);sa.prototype.name="AssertionError";function ta(a,b){throw new sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function ua(a,b){this.c=a;this.f=b;this.b=0;this.a=null}ua.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function va(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function wa(){this.b=this.a=null}var ya=new ua(function(){return new xa},function(a){a.reset()});wa.prototype.add=function(a,b){var c=ya.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function za(){var a=Aa,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function xa(){this.next=this.b=this.a=null}xa.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};xa.prototype.reset=function(){this.next=this.b=this.a=null};var Ba=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ca(a,b){for(var c=m(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Da=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=m(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ea=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function Fa(a){a:{var b=Ga;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]}function Ha(a,b){return 0<=Ba(a,b)}function Ia(a,b){b=Ba(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function x(a,b){var c=0;Ca(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ja(a){return Array.prototype.concat.apply([],arguments)}
function Ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,Sa=/[\x00&<>"']/;function y(a,b){return-1!=a.indexOf(b)}function Ta(a,b){return a<b?-1:a>b?1:0};var Ua;a:{var Va=l.navigator;if(Va){var Wa=Va.userAgent;if(Wa){Ua=Wa;break a}}Ua=""}function B(a){return y(Ua,a)};function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ya(a){for(var b in a)return!1;return!0}function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function bb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function cb(a){Sa.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ma,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Na,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Oa,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Pa,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Qa,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ra,"&#0;")));return a};function db(a){l.setTimeout(function(){throw a;},0)}var eb;
function fb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(n){if(("*"==k||n.origin==k)&&n.data==
g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.xb;c.xb=null;e()}};return function(e){d.next={xb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function gb(a,b){hb||ib();jb||(hb(),jb=!0);Aa.add(a,b)}var hb;function ib(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);hb=function(){a.then(kb)}}else hb=function(){var b=kb;!q(l.setImmediate)||l.Window&&l.Window.prototype&&!B("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(eb||(eb=fb()),eb(b)):l.setImmediate(b)}}var jb=!1,Aa=new wa;function kb(){for(var a;a=za();){try{a.a.call(a.b)}catch(b){db(b)}va(ya,a)}jb=!1};function C(a,b){this.a=lb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=fa)try{var c=this;a.call(b,function(d){mb(c,nb,d)},function(d){if(!(d instanceof ob))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}mb(c,pb,d)})}catch(d){mb(this,pb,d)}}var lb=0,nb=2,pb=3;function qb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}qb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var rb=new ua(function(){return new qb},function(a){a.reset()});
function sb(a,b,c){var d=rb.get();d.g=a;d.b=b;d.f=c;return d}function D(a){if(a instanceof C)return a;var b=new C(fa);mb(b,nb,a);return b}function E(a){return new C(function(b,c){c(a)})}function tb(a,b,c){ub(a,b,c,null)||gb(pa(b,a))}function vb(a){return new C(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,z){d--;e[p]=z;0==d&&b(e)},g=function(p){c(p)},k=0,n;k<a.length;k++)n=a[k],tb(n,pa(f,k),g);else b(e)})}
function wb(a){return new C(function(b){var c=a.length,d=[];if(c)for(var e=function(k,n,p){c--;d[k]=n?{Eb:!0,value:p}:{Eb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],tb(g,pa(e,f,!0),pa(e,f,!1));else b(d)})}C.prototype.then=function(a,b,c){return xb(this,q(a)?a:null,q(b)?b:null,c)};C.prototype.$goog_Thenable=!0;h=C.prototype;h.ia=function(a,b){a=sb(a,a,b);a.c=!0;yb(this,a);return this};h.s=function(a,b){return xb(this,null,a,b)};
h.cancel=function(a){this.a==lb&&gb(function(){var b=new ob(a);zb(this,b)},this)};function zb(a,b){if(a.a==lb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==lb&&1==d?zb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Ab(c),Bb(c,e,pb,b)))}a.c=null}else mb(a,pb,b)}function yb(a,b){a.b||a.a!=nb&&a.a!=pb||Cb(a);a.f?a.f.next=b:a.b=b;a.f=b}
function xb(a,b,c,d){var e=sb(null,null,null);e.a=new C(function(f,g){e.g=b?function(k){try{var n=b.call(d,k);f(n)}catch(p){g(p)}}:f;e.b=c?function(k){try{var n=c.call(d,k);void 0===n&&k instanceof ob?g(k):f(n)}catch(p){g(p)}}:g});e.a.c=a;yb(a,e);return e.a}h.Pc=function(a){this.a=lb;mb(this,nb,a)};h.Qc=function(a){this.a=lb;mb(this,pb,a)};
function mb(a,b,c){a.a==lb&&(a===c&&(b=pb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,ub(c,a.Pc,a.Qc,a)||(a.i=c,a.a=b,a.c=null,Cb(a),b!=pb||c instanceof ob||Db(a,c)))}function ub(a,b,c,d){if(a instanceof C)return yb(a,sb(b||fa,c||null,d)),!0;if(ra(a))return a.then(b,c,d),!0;if(r(a))try{var e=a.then;if(q(e))return Eb(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Eb(a,b,c,d,e){function f(n){k||(k=!0,d.call(e,n))}function g(n){k||(k=!0,c.call(e,n))}var k=!1;try{b.call(a,g,f)}catch(n){f(n)}}function Cb(a){a.h||(a.h=!0,gb(a.Yb,a))}function Ab(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}h.Yb=function(){for(var a;a=Ab(this);)Bb(this,a,this.a,this.i);this.h=!1};
function Bb(a,b,c,d){if(c==pb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Fb(b,c,d);else try{b.c?b.g.call(b.f):Fb(b,c,d)}catch(e){Gb.call(null,e)}va(rb,b)}function Fb(a,b,c){b==nb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Db(a,b){a.g=!0;gb(function(){a.g&&Gb.call(null,b)})}var Gb=db;function ob(a){v.call(this,a)}u(ob,v);ob.prototype.name="cancel";function Hb(){0!=Ib&&(Jb[this[la]||(this[la]=++ma)]=this);this.qa=this.qa;this.ja=this.ja}var Ib=0,Jb={};Hb.prototype.qa=!1;function Kb(a){if(!a.qa&&(a.qa=!0,a.va(),0!=Ib)){var b=a[la]||(a[la]=++ma);if(0!=Ib&&a.ja&&0<a.ja.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Jb[b]}}Hb.prototype.va=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()};function Lb(a){Lb[" "](a);return a}Lb[" "]=fa;function Mb(a,b){var c=Nb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ob=B("Opera"),Pb=B("Trident")||B("MSIE"),Qb=B("Edge"),Rb=Qb||Pb,Sb=B("Gecko")&&!(y(Ua.toLowerCase(),"webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Tb=y(Ua.toLowerCase(),"webkit")&&!B("Edge");function Ub(){var a=l.document;return a?a.documentMode:void 0}var Vb;
a:{var Wb="",Xb=function(){var a=Ua;if(Sb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Qb)return/Edge\/([\d\.]+)/.exec(a);if(Pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Tb)return/WebKit\/(\S+)/.exec(a);if(Ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Xb&&(Wb=Xb?Xb[1]:"");if(Pb){var Yb=Ub();if(null!=Yb&&Yb>parseFloat(Wb)){Vb=String(Yb);break a}}Vb=Wb}var Nb={};
function Zb(a){return Mb(a,function(){for(var b=0,c=La(String(Vb)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=Ta(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||Ta(0==g[2].length,0==k[2].length)||Ta(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}var $b;var ac=l.document;
$b=ac&&Pb?Ub()||("CSS1Compat"==ac.compatMode?parseInt(Vb,10):5):void 0;var bc=Object.freeze||function(a){return a};var cc=!Pb||9<=Number($b),dc=Pb&&!Zb("9"),ec=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",fa,b),l.removeEventListener("test",fa,b)}catch(c){}return a}();function F(a,b){this.type=a;this.b=this.target=b;this.Kb=!0}F.prototype.preventDefault=function(){this.Kb=!1};function hc(a,b){F.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Sb){a:{try{Lb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:ic[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}u(hc,F);var ic=bc({2:"touch",3:"pen",4:"mouse"});hc.prototype.preventDefault=function(){hc.pb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,dc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};hc.prototype.f=function(){return this.a};var jc="closure_listenable_"+(1E6*Math.random()|0),kc=0;function lc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++kc;this.oa=this.Ia=!1}function mc(a){a.oa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null};function nc(a){this.src=a;this.a={};this.b=0}nc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=oc(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new lc(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function pc(a,b){var c=b.type;c in a.a&&Ia(a.a[c],b)&&(mc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function oc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.oa&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1};var qc="closure_lm_"+(1E6*Math.random()|0),rc={},sc=0;function tc(a,b,c,d,e){if(d&&d.once)uc(a,b,c,d,e);else if(ja(b))for(var f=0;f<b.length;f++)tc(a,b[f],c,d,e);else c=vc(c),a&&a[jc]?wc(a,b,c,r(d)?!!d.capture:!!d,e):xc(a,b,c,!1,d,e)}
function xc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=r(e)?!!e.capture:!!e,k=yc(a);k||(a[qc]=k=new nc(a));c=k.add(b,c,d,g,f);if(!c.proxy){d=zc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ec||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ac(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");sc++}}
function zc(){var a=Bc,b=cc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function uc(a,b,c,d,e){if(ja(b))for(var f=0;f<b.length;f++)uc(a,b[f],c,d,e);else c=vc(c),a&&a[jc]?Cc(a,b,c,r(d)?!!d.capture:!!d,e):xc(a,b,c,!0,d,e)}
function G(a,b,c,d,e){if(ja(b))for(var f=0;f<b.length;f++)G(a,b[f],c,d,e);else(d=r(d)?!!d.capture:!!d,c=vc(c),a&&a[jc])?(a=a.o,b=String(b).toString(),b in a.a&&(f=a.a[b],c=oc(f,c,d,e),-1<c&&(mc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=yc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=oc(b,c,d,e)),(c=-1<a?b[a]:null)&&Dc(c))}
function Dc(a){if("number"!=typeof a&&a&&!a.oa){var b=a.src;if(b&&b[jc])pc(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ac(c),d):b.addListener&&b.removeListener&&b.removeListener(d);sc--;(c=yc(b))?(pc(c,a),0==c.b&&(c.src=null,b[qc]=null)):mc(a)}}}function Ac(a){return a in rc?rc[a]:rc[a]="on"+a}
function Ec(a,b,c,d){var e=!0;if(a=yc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.oa&&(f=Fc(f,d),e=e&&!1!==f)}return e}function Fc(a,b){var c=a.listener,d=a.Ma||a.src;a.Ia&&Dc(a);return c.call(d,b)}
function Bc(a,b){if(a.oa)return!0;if(!cc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new hc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Ec(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Ec(d[e],a,!1,b),c=c&&f}return c}return Fc(a,
new hc(b,this))}function yc(a){a=a[qc];return a instanceof nc?a:null}var Gc="__closure_events_fn_"+(1E9*Math.random()>>>0);function vc(a){if(q(a))return a;a[Gc]||(a[Gc]=function(b){return a.handleEvent(b)});return a[Gc]};function H(){Hb.call(this);this.o=new nc(this);this.Rb=this;this.Wa=null}u(H,Hb);H.prototype[jc]=!0;H.prototype.addEventListener=function(a,b,c,d){tc(this,a,b,c,d)};H.prototype.removeEventListener=function(a,b,c,d){G(this,a,b,c,d)};
H.prototype.dispatchEvent=function(a){var b,c=this.Wa;if(c)for(b=[];c;c=c.Wa)b.push(c);c=this.Rb;var d=a.type||a;if(m(a))a=new F(a,c);else if(a instanceof F)a.target=a.target||c;else{var e=a;a=new F(d,c);ab(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=Hc(g,d,!0,a)&&e}g=a.b=c;e=Hc(g,d,!0,a)&&e;e=Hc(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=Hc(g,d,!1,a)&&e;return e};
H.prototype.va=function(){H.pb.va.call(this);if(this.o){var a=this.o,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,mc(d[e]);delete a.a[c];a.b--}}this.Wa=null};function wc(a,b,c,d,e){a.o.add(String(b),c,!1,d,e)}function Cc(a,b,c,d,e){a.o.add(String(b),c,!0,d,e)}
function Hc(a,b,c,d){b=a.o.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.oa&&g.capture==c){var k=g.listener,n=g.Ma||g.src;g.Ia&&pc(a.o,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.Kb};function Ic(a,b,c){if(q(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Jc(a){var b=null;return(new C(function(c,d){b=Ic(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(c){l.clearTimeout(b);throw c;})};function Kc(a){if(a.S&&"function"==typeof a.S)return a.S();if(m(a))return a.split("");if(ka(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Lc(a){if(a.U&&"function"==typeof a.U)return a.U();if(!a.S||"function"!=typeof a.S){if(ka(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Mc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ka(a)||m(a))w(a,b,void 0);else for(var c=Lc(a),d=Kc(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Nc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Nc)for(c=a.U(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}h=Nc.prototype;h.S=function(){Oc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};h.U=function(){Oc(this);return this.a.concat()};
h.clear=function(){this.b={};this.c=this.a.length=0};function Oc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Pc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Pc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}h.get=function(a,b){return Pc(this.b,a)?this.b[a]:b};h.set=function(a,b){Pc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
h.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Pc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Qc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Rc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Sc(a,b){this.b=this.o=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Sc){this.f=void 0!==b?b:a.f;Tc(this,a.c);this.o=a.o;this.b=a.b;Uc(this,a.i);this.g=a.g;b=a.a;var c=new Vc;c.c=b.c;b.a&&(c.a=new Nc(b.a),c.b=b.b);Wc(this,c);this.h=a.h}else a&&(c=String(a).match(Qc))?(this.f=!!b,Tc(this,c[1]||"",!0),this.o=Xc(c[2]||""),this.b=Xc(c[3]||"",!0),Uc(this,c[4]),this.g=Xc(c[5]||"",!0),Wc(this,c[6]||"",!0),this.h=Xc(c[7]||"")):(this.f=!!b,this.a=new Vc(null,this.f))}
Sc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Yc(b,Zc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.o)&&a.push(Yc(b,Zc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Yc(c,"/"==c.charAt(0)?$c:ad,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Yc(c,bd));return a.join("")};
function Tc(a,b,c){a.c=c?Xc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Uc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Wc(a,b,c){b instanceof Vc?(a.a=b,cd(a.a,a.f)):(c||(b=Yc(b,dd)),a.a=new Vc(b,a.f))}function I(a,b,c){a.a.set(b,c)}function ed(a,b){return a.a.get(b)}function fd(a){return a instanceof Sc?new Sc(a):new Sc(a,void 0)}function gd(a,b){var c=new Sc(null,void 0);Tc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function Xc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,hd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zc=/[#\/\?@]/g,ad=/[#\?:]/g,$c=/[#\?]/g,dd=/[#\?@]/g,bd=/#/g;function Vc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
function id(a){a.a||(a.a=new Nc,a.b=0,a.c&&Rc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function jd(a){var b=Lc(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Vc(null,void 0);a=Kc(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ja(f)?kd(c,e,f):c.add(e,f)}return c}h=Vc.prototype;h.add=function(a,b){id(this);this.c=null;a=ld(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
function md(a,b){id(a);b=ld(a,b);Pc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Pc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Oc(a)))}h.clear=function(){this.a=this.c=null;this.b=0};function nd(a,b){id(a);b=ld(a,b);return Pc(a.a.b,b)}h.forEach=function(a,b){id(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this)},this)},this)};h.U=function(){id(this);for(var a=this.a.S(),b=this.a.U(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.S=function(a){id(this);var b=[];if(m(a))nd(this,a)&&(b=Ja(b,this.a.get(ld(this,a))));else{a=this.a.S();for(var c=0;c<a.length;c++)b=Ja(b,a[c])}return b};h.set=function(a,b){id(this);this.c=null;a=ld(this,a);nd(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};h.get=function(a,b){if(!a)return b;a=this.S(a);return 0<a.length?String(a[0]):b};function kd(a,b,c){md(a,b);0<c.length&&(a.c=null,a.a.set(ld(a,b),Ka(c)),a.b+=c.length)}
h.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.U(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.S(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};function ld(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function cd(a,b){b&&!a.f&&(id(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(md(this,d),kd(this,e,c))},a));a.f=b};var od=!Pb||9<=Number($b);function pd(a,b){this.a=a===qd&&b||"";this.b=rd}pd.prototype.na=!0;pd.prototype.ma=function(){return this.a};pd.prototype.toString=function(){return"Const{"+this.a+"}"};function sd(a){if(a instanceof pd&&a.constructor===pd&&a.b===rd)return a.a;ta("expected object of type Const, got '"+a+"'");return"type_error:Const"}var rd={},qd={};function td(){this.a="";this.b=ud}td.prototype.na=!0;td.prototype.ma=function(){return this.a.toString()};td.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function vd(a){if(a instanceof td&&a.constructor===td&&a.b===ud)return a.a;ta("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ha(a));return"type_error:TrustedResourceUrl"}
function wd(a,b){var c=sd(a);if(!xd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(yd,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof pd?sd(d):encodeURIComponent(String(d))});return zd(a)}var yd=/%{(\w+)}/g,xd=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,ud={};
function zd(a){var b=new td;b.a=a;return b};function Ad(){this.a="";this.b=Bd}Ad.prototype.na=!0;Ad.prototype.ma=function(){return this.a.toString()};Ad.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Cd(a){if(a instanceof Ad&&a.constructor===Ad&&a.b===Bd)return a.a;ta("expected object of type SafeUrl, got '"+a+"' of type "+ha(a));return"type_error:SafeUrl"}var Dd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ed(a){if(a instanceof Ad)return a;a="object"==typeof a&&a.na?a.ma():String(a);Dd.test(a)||(a="about:invalid#zClosurez");return Fd(a)}var Bd={};function Fd(a){var b=new Ad;b.a=a;return b}Fd("about:blank");function Gd(){this.a="";this.b=Hd}Gd.prototype.na=!0;Gd.prototype.ma=function(){return this.a.toString()};Gd.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Id(a){if(a instanceof Gd&&a.constructor===Gd&&a.b===Hd)return a.a;ta("expected object of type SafeHtml, got '"+a+"' of type "+ha(a));return"type_error:SafeHtml"}var Hd={};function Jd(a){var b=new Gd;b.a=a;return b}Jd("<!DOCTYPE html>");Jd("");Jd("<br>");function Kd(a,b){a.src=vd(b);if(null===ea)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ca.test(b)){ea=b;break b}ea=""}b=ea;b&&a.setAttribute("nonce",b)};function Ld(a){var b=document;return m(a)?b.getElementById(a):a}function Md(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.na&&(c=c.ma());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Nd.hasOwnProperty(d)?a.setAttribute(Nd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Nd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Od(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!od&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',cb(g.name),'"');if(g.type){f.push(' type="',cb(g.type),'"');var k={};ab(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(m(g)?f.className=g:ja(g)?f.className=g.join(" "):Md(f,g));2<d.length&&Pd(e,f,d);return f}
function Pd(a,b,c){function d(g){g&&b.appendChild(m(g)?a.createTextNode(g):g)}for(var e=2;e<c.length;e++){var f=c[e];!ka(f)||r(f)&&0<f.nodeType?d(f):w(Qd(f)?Ka(f):f,d)}}function Qd(a){if(a&&"number"==typeof a.length){if(r(a))return"function"==typeof a.item||"string"==typeof a.item;if(q(a))return"function"==typeof a.item}return!1};function Rd(a){var b=[];Sd(new Td,a,b);return b.join("")}function Td(){}
function Sd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ja(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Sd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ud(d,c),c.push(":"),Sd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ud(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Vd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Wd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Ud(a,b){b.push('"',a.replace(Wd,function(c){var d=Vd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Vd[c]=d);return d}),'"')};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Xd(){var a=J();return Pb&&!!$b&&11==$b||/Edge\/\d+/.test(a)}function Yd(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function Zd(a,b){b=b||l.window;var c="about:blank";a&&(c=Cd(Ed(a)).toString());b.location.href=c}function $d(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<$d(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function ae(){var a=J();a=be(a)!=ce?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Pb||!$b||9<$b}function de(a){a=(a||J()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ee(a){a=a||l.window;try{a.close()}catch(b){}}
function fe(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=J().toLowerCase();d&&(b.target=d,y(c,"crios/")&&(b.target="_blank"));be(J())==ge&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof Ad?c:Ed("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");(B("iPhone")&&!B("iPod")&&!B("iPad")||B("iPad")||B("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(g=d.document.createElement("A"),b instanceof Ad||b instanceof Ad||(b="object"==typeof b&&b.na?b.ma():String(b),Dd.test(b)||(b="about:invalid#zClosurez"),b=Fd(b)),g.href=Cd(b),g.setAttribute("target",
c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={}):a.noreferrer?(g=d.open("",c,g),a=Cd(b).toString(),g&&(Rb&&y(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a=Jd('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+cb(a)+'">'),g.document.write(Id(a)),g.document.close())):(g=d.open(Cd(b).toString(),c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus()}catch(k){}return g}
function he(a){return new C(function(b){function c(){Jc(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var ie=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,je=/^[^@]+@[^@]+$/;function ke(){var a=null;return(new C(function(b){"complete"==l.document.readyState?b():(a=function(){b()},uc(window,"load",a))})).s(function(b){G(window,"load",a);throw b;})}
function le(){return me(void 0)?ke().then(function(){return new C(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))}function me(a){a=a||J();return!("file:"!==ne()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function oe(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function pe(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function qe(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node")?"Node":pe()?"Worker":"Browser"}function re(){var a=qe();return"ReactNative"===a||"Node"===a}function se(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var ge="Firefox",ce="Chrome";
function be(a){var b=a.toLowerCase();if(y(b,"opera/")||y(b,"opr/")||y(b,"opios/"))return"Opera";if(y(b,"iemobile"))return"IEMobile";if(y(b,"msie")||y(b,"trident/"))return"IE";if(y(b,"edge/"))return"Edge";if(y(b,"firefox/"))return ge;if(y(b,"silk/"))return"Silk";if(y(b,"blackberry"))return"Blackberry";if(y(b,"webos"))return"Webos";if(!y(b,"safari/")||y(b,"chrome/")||y(b,"crios/")||y(b,"android"))if(!y(b,"chrome/")&&!y(b,"crios/")||y(b,"edge/")){if(y(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return ce;else return"Safari";return"Other"}var te={Wc:"FirebaseCore-web",Yc:"FirebaseUI-web"};function ue(a,b){b=b||[];var c=[],d={},e;for(e in te)d[te[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=qe();"Browser"===c?(d=J(),c=be(d)):"Worker"===c&&(d=J(),c=be(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function J(){return l.navigator&&l.navigator.userAgent||""}
function K(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function ve(){try{var a=l.localStorage,b=we();if(a)return a.setItem(b,"1"),a.removeItem(b),Xd()?!!l.indexedDB:!0}catch(c){return pe()&&!!l.indexedDB}return!1}function xe(){return(ye()||"chrome-extension:"===ne()||me())&&!re()&&ve()&&!pe()}function ye(){return"http:"===ne()||"https:"===ne()}function ne(){return l.location&&l.location.protocol||null}
function ze(a){a=a||J();return de(a)||be(a)==ge?!1:!0}function Ae(a){return"undefined"===typeof a?null:Rd(a)}function Be(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Ce(a){if(null!==a)return JSON.parse(a)}function we(a){return a?a:Math.floor(1E9*Math.random()).toString()}function De(a){a=a||J();return"Safari"==be(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ee(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Fe(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=J();b=qe();this.b=de(a)||"ReactNative"===b}
Fe.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(ye()||"chrome-extension:"===ne()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Ge(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function He(){var a=l.document,b=null;return Ge()||!a?D():(new C(function(c){b=function(){Ge()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Ie(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Je(){return!(!K("fireauth.oauthhelper",l)&&!K("fireauth.iframe",l))}
function Ke(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function Le(){var a=l.navigator;return a&&a.serviceWorker?D().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).s(function(){return null}):D(null)};var Me={};function Ne(a){Me[a]||(Me[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Oe;try{var Pe={};Object.defineProperty(Pe,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Pe,"abcd",{configurable:!0,enumerable:!0,value:2});Oe=2==Pe.abcd}catch(a){Oe=!1}function L(a,b,c){Oe?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function M(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&L(a,c,b[c])}function Qe(a){var b={};M(b,a);return b}function Re(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function Se(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Te(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)L(b,c,Te(a[c]))}return b};function Ue(a){var b={},c=a[Ve],d=a[We];a=a[Xe];if(!a||a!=Ye&&!c)throw Error("Invalid provider user info!");b[Ze]=d||null;b[$e]=c||null;L(this,af,a);L(this,bf,Te(b))}var Ye="EMAIL_SIGNIN",Ve="email",We="newEmail",Xe="requestType",$e="email",Ze="fromEmail",bf="data",af="operation";function N(a,b){this.code=cf+a;this.message=b||df[a]||""}u(N,Error);N.prototype.w=function(){return{code:this.code,message:this.message}};N.prototype.toJSON=function(){return this.w()};function ef(a){var b=a&&a.code;return b?new N(b.substring(cf.length),a.message):null}
var cf="auth/",df={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The OIDC ID token requires a valid unhashed nonce.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
"operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",
"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function ff(a){var b=a[gf];if("undefined"===typeof b)throw new N("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new N("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[hf];if(c&&"object"===typeof c){b=c[jf];var d=c[kf];c=c[lf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new N("argument-error",kf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new N("argument-error",lf+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new N("argument-error",jf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new N("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new N("argument-error",hf+" property must be a non null object when specified.");this.f=null;if((b=a[mf])&&"object"===
typeof b)if(b=b[nf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new N("argument-error",nf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new N("argument-error",mf+" property must be a non null object when specified.");b=a[of];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new N("argument-error",of+" property must be a boolean when specified.");this.c=!!b;a=a[pf];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new N("argument-error",pf+" property must be a non empty string when specified.");this.i=a||null}var hf="android",pf="dynamicLinkDomain",of="handleCodeInApp",mf="iOS",gf="url",kf="installApp",lf="minimumVersion",jf="packageName",nf="bundleId";
function qf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function rf(a){return Da(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var sf=null,tf=null;function uf(a){var b="";vf(a,function(c){b+=String.fromCharCode(c)});return b}function vf(a,b){function c(n){for(;d<a.length;){var p=a.charAt(d++),z=tf[p];if(null!=z)return z;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return n}wf();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}}
function wf(){if(!sf){sf={};tf={};for(var a=0;65>a;a++)sf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),tf[sf[a]]=a,62<=a&&(tf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function xf(a){this.c=a.sub;qa();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}xf.prototype.f=function(){return this.b};function yf(a){return(a=zf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new xf(a):null}function zf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(uf(a))}catch(d){}return null};var Af={bd:{bb:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://securetoken.googleapis.com/v1/token",id:"p"},dd:{bb:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",jb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},ed:{bb:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",jb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function Bf(a){for(var b in Af)if(Af[b].id===a)return a=Af[b],{firebaseEndpoint:a.bb,secureTokenEndpoint:a.jb};return null}var Cf;Cf=Bf("__EID__")?"__EID__":void 0;var Df="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Ef=["client_id","response_type","scope","redirect_uri","state"],Ff={Xc:{Na:"locale",Ba:500,Aa:600,Oa:"facebook.com",ib:Ef},Zc:{Na:null,Ba:500,Aa:620,Oa:"github.com",ib:Ef},$c:{Na:"hl",Ba:515,Aa:680,Oa:"google.com",ib:Ef},fd:{Na:"lang",Ba:485,Aa:705,Oa:"twitter.com",ib:Df}};function Gf(a){for(var b in Ff)if(Ff[b].Oa==a)return Ff[b];return null};function Hf(a){var b={};b["facebook.com"]=If;b["google.com"]=Jf;b["github.com"]=Kf;b["twitter.com"]=Lf;var c=a&&a[Mf];try{if(c)return b[c]?new b[c](a):new Nf(a);if("undefined"!==typeof a[Of])return new Pf(a)}catch(d){}return null}var Of="idToken",Mf="providerId";
function Pf(a){var b=a[Mf];if(!b&&a[Of]){var c=yf(a[Of]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);L(this,"providerId",b);L(this,"isNewUser",c)}function Nf(a){Pf.call(this,a);a=Ce(a.rawUserInfo||"{}");L(this,"profile",Te(a||{}))}u(Nf,Pf);
function If(a){Nf.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}u(If,Nf);function Kf(a){Nf.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");L(this,"username",this.profile&&this.profile.login||null)}u(Kf,Nf);function Jf(a){Nf.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}u(Jf,Nf);
function Lf(a){Nf.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");L(this,"username",a.screenName||null)}u(Lf,Nf);function Qf(a){this.a=fd(a)};function Rf(a){var b=fd(a),c=ed(b,"link"),d=ed(fd(c),"link");b=ed(b,"deep_link_id");return ed(fd(b),"link")||b||d||c||a};function Sf(){}function Tf(a,b){return a.then(function(c){if(c[Uf]){var d=yf(c[Uf]);if(!d||b!=d.c)throw new N("user-mismatch");return c}throw new N("user-mismatch");}).s(function(c){throw c&&c.code&&c.code==cf+"user-not-found"?new N("user-mismatch"):c;})}function Vf(a,b){if(b)this.a=b;else throw new N("internal-error","failed to construct a credential");L(this,"providerId",a);L(this,"signInMethod",a)}Vf.prototype.la=function(a){return Wf(a,Xf(this))};
Vf.prototype.b=function(a,b){var c=Xf(this);c.idToken=b;return Yf(a,c)};Vf.prototype.f=function(a,b){return Tf(Zf(a,Xf(this)),b)};function Xf(a){return{pendingToken:a.a,requestUri:"http://localhost"}}Vf.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};function $f(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Vf(a.providerId,a.pendingToken)}catch(b){}return null}
function ag(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&L(this,"idToken",b.idToken),b.accessToken&&L(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&L(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)L(this,"accessToken",b.oauthToken),L(this,"secret",b.oauthTokenSecret);else throw new N("internal-error","failed to construct a credential");L(this,"providerId",a);L(this,"signInMethod",c)}
ag.prototype.la=function(a){return Wf(a,bg(this))};ag.prototype.b=function(a,b){var c=bg(this);c.idToken=b;return Yf(a,c)};ag.prototype.f=function(a,b){var c=bg(this);return Tf(Zf(a,c),b)};
function bg(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:jd(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
ag.prototype.w=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function cg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new ag(a.providerId,b,a.signInMethod)}catch(c){}}return null}function dg(a,b){this.Fc=b||[];M(this,{providerId:a,isOAuthProvider:!0});this.zb={};this.eb=(Gf(a)||{}).Na||null;this.ab=null}
dg.prototype.Da=function(a){this.zb=Za(a);return this};function eg(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new N("argument-error",'SAML provider IDs must be prefixed with "saml."');dg.call(this,a,[])}u(eg,dg);function O(a){dg.call(this,a,Ef);this.a=[]}u(O,dg);O.prototype.ua=function(a){Ha(this.a,a)||this.a.push(a);return this};O.prototype.Fb=function(){return Ka(this.a)};
O.prototype.credential=function(a,b){var c;r(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new N("argument-error","credential failed: must provide the ID token and/or the access token.");return new ag(this.providerId,c,this.providerId)};function fg(){O.call(this,"facebook.com")}u(fg,O);L(fg,"PROVIDER_ID","facebook.com");L(fg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function gg(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new fg).credential({accessToken:b})}function hg(){O.call(this,"github.com")}u(hg,O);L(hg,"PROVIDER_ID","github.com");L(hg,"GITHUB_SIGN_IN_METHOD","github.com");
function ig(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new hg).credential({accessToken:b})}function jg(){O.call(this,"google.com");this.ua("profile")}u(jg,O);L(jg,"PROVIDER_ID","google.com");L(jg,"GOOGLE_SIGN_IN_METHOD","google.com");function kg(a,b){var c=a;r(a)&&(c=a.idToken,b=a.accessToken);return(new jg).credential({idToken:c,accessToken:b})}function lg(){dg.call(this,"twitter.com",Df)}u(lg,dg);
L(lg,"PROVIDER_ID","twitter.com");L(lg,"TWITTER_SIGN_IN_METHOD","twitter.com");function mg(a,b){var c=a;r(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new N("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new ag("twitter.com",c,"twitter.com")}
function ng(a,b,c){this.a=a;this.c=b;L(this,"providerId","password");L(this,"signInMethod",c===og.EMAIL_LINK_SIGN_IN_METHOD?og.EMAIL_LINK_SIGN_IN_METHOD:og.EMAIL_PASSWORD_SIGN_IN_METHOD)}ng.prototype.la=function(a){return this.signInMethod==og.EMAIL_LINK_SIGN_IN_METHOD?P(a,pg,{email:this.a,oobCode:this.c}):P(a,qg,{email:this.a,password:this.c})};
ng.prototype.b=function(a,b){return this.signInMethod==og.EMAIL_LINK_SIGN_IN_METHOD?P(a,rg,{idToken:b,email:this.a,oobCode:this.c}):P(a,sg,{idToken:b,email:this.a,password:this.c})};ng.prototype.f=function(a,b){return Tf(this.la(a),b)};ng.prototype.w=function(){return{email:this.a,password:this.c,signInMethod:this.signInMethod}};function tg(a){return a&&a.email&&a.password?new ng(a.email,a.password,a.signInMethod):null}function og(){M(this,{providerId:"password",isOAuthProvider:!1})}
function ug(a,b){b=vg(b);if(!b)throw new N("argument-error","Invalid email link!");return new ng(a,b,og.EMAIL_LINK_SIGN_IN_METHOD)}function vg(a){a=Rf(a);a=new Qf(a);var b=ed(a.a,"oobCode")||null;return"signIn"===(ed(a.a,"mode")||null)&&b?b:null}M(og,{PROVIDER_ID:"password"});M(og,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});M(og,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
function wg(a){if(!(a.Ua&&a.Ta||a.Fa&&a.$))throw new N("internal-error");this.a=a;L(this,"providerId","phone");L(this,"signInMethod","phone")}wg.prototype.la=function(a){return a.Va(xg(this))};wg.prototype.b=function(a,b){var c=xg(this);c.idToken=b;return P(a,yg,c)};wg.prototype.f=function(a,b){var c=xg(this);c.operation="REAUTH";a=P(a,zg,c);return Tf(a,b)};
wg.prototype.w=function(){var a={providerId:"phone"};this.a.Ua&&(a.verificationId=this.a.Ua);this.a.Ta&&(a.verificationCode=this.a.Ta);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.$&&(a.phoneNumber=this.a.$);return a};function Ag(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new wg(b)}return null}
function xg(a){return a.a.Fa&&a.a.$?{temporaryProof:a.a.Fa,phoneNumber:a.a.$}:{sessionInfo:a.a.Ua,code:a.a.Ta}}function Bg(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth()}catch(b){throw new N("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}M(this,{providerId:"phone",isOAuthProvider:!1})}
Bg.prototype.Va=function(a,b){var c=this.a.b;return D(b.verify()).then(function(d){if(!m(d))throw new N("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Cg(c,{phoneNumber:a,recaptchaToken:d}).then(function(e){"function"===typeof b.reset&&b.reset();return e},function(e){"function"===typeof b.reset&&b.reset();throw e;});default:throw new N("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function Dg(a,b){if(!a)throw new N("missing-verification-id");if(!b)throw new N("missing-verification-code");return new wg({Ua:a,Ta:b})}M(Bg,{PROVIDER_ID:"phone"});M(Bg,{PHONE_SIGN_IN_METHOD:"phone"});
function Eg(a){if(a.temporaryProof&&a.phoneNumber)return new wg({Fa:a.temporaryProof,$:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return kg(f,c);case "facebook.com":return gg(c);case "github.com":return ig(c);case "twitter.com":return mg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Vf(b,g):new ag(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new O(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(k){return null}}function Fg(a){if(!a.isOAuthProvider)throw new N("invalid-oauth-provider");};function Gg(a,b,c,d,e,f){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.h=f||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new N("invalid-auth-event");if(this.g&&!this.f)throw new N("invalid-auth-event");}else throw new N("invalid-auth-event");}Gg.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.i&&a.push(this.i);return a.join("-")};
Gg.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.h,error:this.a&&this.a.w()}};function Hg(a){a=a||{};return a.type?new Gg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&ef(a.error),a.postBody):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ig(){this.b=null;this.a=[]}var Jg=null;Ig.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=K("universalLinks.subscribe",l),"function"===typeof a&&a(null,this.b))};Ig.prototype.unsubscribe=function(a){x(this.a,function(b){return b==a})};function Kg(a){var b="unauthorized-domain",c=void 0,d=fd(a);a=d.b;d=d.c;"chrome-extension"==d?c=bb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=bb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
N.call(this,b,c)}u(Kg,N);function Lg(a,b,c){N.call(this,a,c);a=b||{};a.Ab&&L(this,"email",a.Ab);a.$&&L(this,"phoneNumber",a.$);a.credential&&L(this,"credential",a.credential)}u(Lg,N);Lg.prototype.w=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.w();b&&ab(a,b);return a};Lg.prototype.toJSON=function(){return this.w()};
function Mg(a){if(a.code){var b=a.code||"";0==b.indexOf(cf)&&(b=b.substring(cf.length));var c={credential:Eg(a)};if(a.email)c.Ab=a.email;else if(a.phoneNumber)c.$=a.phoneNumber;else if(!c.credential)return new N(b,a.message||void 0);return new Lg(b,c,a.message)}return null};function Ng(){}Ng.prototype.c=null;function Og(a){return a.c||(a.c=a.b())};var Pg;function Qg(){}u(Qg,Ng);Qg.prototype.a=function(){var a=Rg(this);return a?new ActiveXObject(a):new XMLHttpRequest};Qg.prototype.b=function(){var a={};Rg(this)&&(a[0]=!0,a[1]=!0);return a};
function Rg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}Pg=new Qg;function Sg(){}u(Sg,Ng);Sg.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Tg;throw Error("Unsupported browser");};Sg.prototype.b=function(){return{}};
function Tg(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=t(this.fc,this);this.a.onerror=t(this.Gb,this);this.a.onprogress=t(this.gc,this);this.a.ontimeout=t(this.kc,this)}h=Tg.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};h.abort=function(){this.a.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};h.fc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Ug(this,4)};h.Gb=function(){this.status=500;this.response=this.responseText="";Ug(this,4)};h.kc=function(){this.Gb()};
h.gc=function(){this.status=200;Ug(this,1)};function Ug(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Vg(a,b,c){this.reset(a,b,c,void 0,void 0)}Vg.prototype.a=null;var Wg=0;Vg.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Wg++;d||qa();delete this.a};function Xg(a){this.f=a;this.b=this.c=this.a=null}function Yg(a,b){this.name=a;this.value=b}Yg.prototype.toString=function(){return this.name};var Zg=new Yg("SEVERE",1E3),$g=new Yg("WARNING",900),ah=new Yg("CONFIG",700),bh=new Yg("FINE",500);function ch(a){if(a.c)return a.c;if(a.a)return ch(a.a);ta("Root logger has no level set.");return null}Xg.prototype.log=function(a,b,c){if(a.value>=ch(this).value)for(q(b)&&(b=b()),a=new Vg(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var dh={},eh=null;
function fh(a){eh||(eh=new Xg(""),dh[""]=eh,eh.c=ah);var b;if(!(b=dh[a])){b=new Xg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=fh(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;dh[a]=b}return b};function gh(a,b){a&&a.log(bh,b,void 0)};function hh(a){this.f=a}u(hh,Ng);hh.prototype.a=function(){return new ih(this.f)};hh.prototype.b=function(a){return function(){return a}}({});function ih(a){H.call(this);this.u=a;this.readyState=jh;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.i=new Headers;this.b=null;this.m="GET";this.g="";this.a=!1;this.h=fh("goog.net.FetchXmlHttp");this.l=this.c=this.f=null}u(ih,H);var jh=0;h=ih.prototype;
h.open=function(a,b){if(this.readyState!=jh)throw this.abort(),Error("Error reopening a connection");this.m=a;this.g=b;this.readyState=1;kh(this)};h.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.i,method:this.m,credentials:void 0,cache:void 0};a&&(b.body=a);this.u.fetch(new Request(this.g,b)).then(this.jc.bind(this),this.La.bind(this))};
h.abort=function(){this.response=this.responseText="";this.i=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,lh(this,!1));this.readyState=jh};
h.jc=function(a){this.a&&(this.f=a,this.b||(this.b=a.headers,this.readyState=2,kh(this)),this.a&&(this.readyState=3,kh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.hc.bind(this),this.La.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.l=new TextDecoder,mh(this)):a.text().then(this.ic.bind(this),this.La.bind(this)))))};function mh(a){a.c.read().then(a.ec.bind(a)).catch(a.La.bind(a))}
h.ec=function(a){if(this.a){var b=this.l.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?lh(this,!0):kh(this);3==this.readyState&&mh(this)}};h.ic=function(a){this.a&&(this.response=this.responseText=a,lh(this,!0))};h.hc=function(a){this.a&&(this.response=a,lh(this,!0))};h.La=function(a){var b=this.h;b&&b.log($g,"Failed to fetch url "+this.g,a instanceof Error?a:Error(a));this.a&&lh(this,!0)};
function lh(a,b){b&&a.f&&(a.status=a.f.status,a.statusText=a.f.statusText);a.readyState=4;a.f=null;a.c=null;a.l=null;kh(a)}h.setRequestHeader=function(a,b){this.i.append(a,b)};h.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.h)&&a.log($g,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")};
h.getAllResponseHeaders=function(){if(!this.b){var a=this.h;a&&a.log($g,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function kh(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function nh(a){H.call(this);this.headers=new Nc;this.D=a||null;this.c=!1;this.A=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.u=null;this.m=oh;this.v=this.O=!1}u(nh,H);var oh="";nh.prototype.b=fh("goog.net.XhrIo");var ph=/^https?$/i,qh=["POST","PUT"];
function rh(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.D?a.D.a():Pg.a();a.A=a.D?Og(a.D):Og(Pg);a.a.onreadystatechange=t(a.Jb,a);try{gh(a.b,sh(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(g){gh(a.b,sh(a,"Error opening Xhr: "+g.message));th(a,g);return}b=d||"";var f=new Nc(a.headers);e&&Mc(e,function(g,k){f.set(k,g)});e=Fa(f.U());d=l.FormData&&b instanceof
l.FormData;!Ha(qh,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,k){this.a.setRequestHeader(k,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{uh(a),0<a.g&&(a.v=vh(a.a),gh(a.b,sh(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=t(a.Ga,a)):a.u=Ic(a.Ga,a.g,a)),gh(a.b,sh(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){gh(a.b,
sh(a,"Send error: "+g.message)),th(a,g)}}function vh(a){return Pb&&Zb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ga(a){return"content-type"==a.toLowerCase()}h=nh.prototype;h.Ga=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",gh(this.b,sh(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function th(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;wh(a);xh(a)}
function wh(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}h.abort=function(){this.a&&this.c&&(gh(this.b,sh(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),xh(this))};h.va=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),xh(this,!0));nh.pb.va.call(this)};h.Jb=function(){this.qa||(this.I||this.i||this.f?yh(this):this.yc())};h.yc=function(){yh(this)};
function yh(a){if(a.c&&"undefined"!=typeof aa)if(a.A[1]&&4==zh(a)&&2==Ah(a))gh(a.b,sh(a,"Local request error detected and ignored"));else if(a.i&&4==zh(a))Ic(a.Jb,0,a);else if(a.dispatchEvent("readystatechange"),4==zh(a)){gh(a.b,sh(a,"Request complete"));a.c=!1;try{var b=Ah(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Qc)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!ph.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var k=2<zh(a)?a.a.statusText:""}catch(n){gh(a.b,"Can not get status: "+n.message),k=""}a.h=k+" ["+Ah(a)+"]";wh(a)}}finally{xh(a)}}}function xh(a,b){if(a.a){uh(a);var c=a.a,d=a.A[0]?fa:null;a.a=null;a.A=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Zg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function uh(a){a.a&&a.v&&(a.a.ontimeout=null);a.u&&(l.clearTimeout(a.u),a.u=null)}function zh(a){return a.a?a.a.readyState:0}function Ah(a){try{return 2<zh(a)?a.a.status:-1}catch(b){return-1}}function Bh(a){try{return a.a?a.a.responseText:""}catch(b){return gh(a.b,"Can not get responseText: "+b.message),""}}
h.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case oh:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Zg,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return gh(this.b,"Can not get response: "+b.message),null}};function sh(a,b){return b+" ["+a.N+" "+a.l+" "+Ah(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ch(a){var b=Dh;this.g=[];this.v=b;this.u=a||null;this.f=this.a=!1;this.c=void 0;this.l=this.A=this.i=!1;this.h=0;this.b=null;this.o=0}Ch.prototype.cancel=function(a){if(this.a)this.c instanceof Ch&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.o--,0>=b.o&&b.cancel())}this.v?this.v.call(this.u,this):this.l=!0;this.a||(a=new Eh(this),Fh(this),Gh(this,!1,a))}};Ch.prototype.m=function(a,b){this.i=!1;Gh(this,a,b)};function Gh(a,b,c){a.a=!0;a.c=c;a.f=!b;Hh(a)}
function Fh(a){if(a.a){if(!a.l)throw new Ih(a);a.l=!1}}function Jh(a,b){Kh(a,null,b,void 0)}function Kh(a,b,c,d){a.g.push([b,c,d]);a.a&&Hh(a)}Ch.prototype.then=function(a,b,c){var d,e,f=new C(function(g,k){d=g;e=k});Kh(this,d,function(g){g instanceof Eh?f.cancel():e(g)});return f.then(a,b,c)};Ch.prototype.$goog_Thenable=!0;function Lh(a){return Ea(a.g,function(b){return q(b[1])})}
function Hh(a){if(a.h&&a.a&&Lh(a)){var b=a.h,c=Mh[b];c&&(l.clearTimeout(c.a),delete Mh[b]);a.h=0}a.b&&(a.b.o--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var k=f.call(e||a.u,b);void 0!==k&&(a.f=a.f&&(k==b||k instanceof Error),a.c=b=k);if(ra(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(n){b=n,a.f=!0,Lh(a)||(c=!0)}}a.c=b;d&&(k=t(a.m,a,!0),d=t(a.m,a,!1),b instanceof Ch?(Kh(b,k,d),b.A=!0):b.then(k,d));c&&(b=
new Nh(b),Mh[b.a]=b,a.h=b.a)}function Ih(){v.call(this)}u(Ih,v);Ih.prototype.message="Deferred has already fired";Ih.prototype.name="AlreadyCalledError";function Eh(){v.call(this)}u(Eh,v);Eh.prototype.message="Deferred was canceled";Eh.prototype.name="CanceledError";function Nh(a){this.a=l.setTimeout(t(this.c,this),0);this.b=a}Nh.prototype.c=function(){delete Mh[this.a];throw this.b;};var Mh={};function Oh(a){var b={},c=b.document||document,d=vd(a).toString(),e=document.createElement("SCRIPT"),f={Lb:e,Ga:void 0},g=new Ch(f),k=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(k=window.setTimeout(function(){Ph(e,!0);var p=new Qh(Rh,"Timeout reached for loading script "+d);Fh(g);Gh(g,!1,p)},n),f.Ga=k);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Ph(e,b.hd||!1,k),Fh(g),Gh(g,!0,null))};e.onerror=function(){Ph(e,!0,k);var p=new Qh(Sh,"Error while loading script "+
d);Fh(g);Gh(g,!1,p)};f=b.attributes||{};ab(f,{type:"text/javascript",charset:"UTF-8"});Md(e,f);Kd(e,a);Th(c).appendChild(e);return g}function Th(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function Dh(){if(this&&this.Lb){var a=this.Lb;a&&"SCRIPT"==a.tagName&&Ph(a,!0,this.Ga)}}
function Ph(a,b,c){null!=c&&l.clearTimeout(c);a.onload=fa;a.onerror=fa;a.onreadystatechange=fa;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var Sh=0,Rh=1;function Qh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);v.call(this,c);this.code=a}u(Qh,v);function Uh(a){this.f=a}u(Uh,Ng);Uh.prototype.a=function(){return new this.f};Uh.prototype.b=function(){return{}};
function Vh(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.o=a.secureTokenTimeout||Wh;this.f=Za(a.secureTokenHeaders||Xh);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Yh;this.a=Za(a.firebaseHeaders||Zh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==qe();c=l.XMLHttpRequest||c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;if(!c&&
!pe())throw new N("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;pe()?this.c=new hh(self):re()?this.c=new Uh(c):this.c=new Sg}var $h,Uf="idToken",Wh=new Fe(3E4,6E4),Xh={"Content-Type":"application/x-www-form-urlencoded"},Yh=new Fe(3E4,6E4),Zh={"Content-Type":"application/json"};function ai(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function bi(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function ci(a,b,c,d,e,f,g){ae()||pe()?a=t(a.m,a):($h||($h=new C(function(k,n){di(k,n)})),a=t(a.l,a));a(b,c,d,e,f,g)}
Vh.prototype.m=function(a,b,c,d,e,f){if(pe()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new N("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new nh(this.c);if(f){g.g=Math.max(0,f);var k=setTimeout(function(){g.dispatchEvent("timeout")},f)}wc(g,"complete",function(){k&&clearTimeout(k);var n=null;try{n=
JSON.parse(Bh(this))||null}catch(p){n=null}b&&b(n)});Cc(g,"ready",function(){k&&clearTimeout(k);Kb(this)});Cc(g,"timeout",function(){k&&clearTimeout(k);Kb(this);b&&b(null)});rh(g,a,c,d,e)};var ei=new pd(qd,"https://apis.google.com/js/client.js?onload=%{onload}"),fi="__fcb"+Math.floor(1E6*Math.random()).toString();
function di(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[fi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=wd(ei,{onload:fi});Jh(Oh(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Vh.prototype.l=function(a,b,c,d,e){var f=this;$h.then(function(){window.gapi.client.setApiKey(f.b);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(k){window.gapi.auth.setToken(g);b&&b(k)}})}).s(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function gi(a,b){return new C(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?ci(a,a.i+"?key="+encodeURIComponent(a.b),function(e){e?e.error?d(hi(e)):e.access_token&&e.refresh_token?c(e):d(new N("internal-error")):d(new N("network-request-failed"))},"POST",jd(b).toString(),a.f,a.o.get()):d(new N("internal-error"))})}
function ii(a,b,c,d,e,f){var g=fd(a.g+b);I(g,"key",a.b);f&&I(g,"cb",qa().toString());var k="GET"==c;if(k)for(var n in d)d.hasOwnProperty(n)&&I(g,n,d[n]);return new C(function(p,z){ci(a,g.toString(),function(A){A?A.error?z(hi(A,e||{})):p(A):z(new N("network-request-failed"))},c,k?void 0:Rd(Be(d)),a.a,a.h.get())})}function ji(a){a=a.email;if(!m(a)||!je.test(a))throw new N("invalid-email");}function ki(a){"email"in a&&ji(a)}
function li(a,b){return P(a,mi,{identifier:b,continueUri:ye()?Yd():"http://localhost"}).then(function(c){return c.allProviders||[]})}function ni(a,b){return P(a,mi,{identifier:b,continueUri:ye()?Yd():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function oi(a){return P(a,pi,{}).then(function(b){return b.authorizedDomains||[]})}function qi(a){if(!a[Uf])throw new N("internal-error");}
function ri(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new N("internal-error");}else{if(!a.sessionInfo)throw new N("missing-verification-id");if(!a.code)throw new N("missing-verification-code");}}Vh.prototype.Ra=function(){return P(this,si,{})};Vh.prototype.qb=function(a,b){return P(this,ti,{idToken:a,email:b})};Vh.prototype.rb=function(a,b){return P(this,sg,{idToken:a,password:b})};var ui={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};h=Vh.prototype;
h.sb=function(a,b){var c={idToken:a},d=[];Xa(ui,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return P(this,ti,c)};h.lb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};ab(a,b);return P(this,vi,a)};h.mb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};ab(a,b);return P(this,wi,a)};h.kb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};ab(a,b);return P(this,xi,a)};function Cg(a,b){return P(a,yi,b)}h.Va=function(a){return P(this,zi,a)};
function Ai(a,b,c){return P(a,Bi,{idToken:b,deleteProvider:c})}function Ci(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new N("internal-error");}function Di(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Vc(a.postBody),nd(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function Ei(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Mg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Mg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=Mg(a)):a.errorMessage&&(b=Fi(a.errorMessage));if(b)throw b;if(!a[Uf])throw new N("internal-error");}function Wf(a,b){b.returnIdpCredential=!0;return P(a,Gi,b)}function Yf(a,b){b.returnIdpCredential=!0;return P(a,Hi,b)}
function Zf(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,Ii,b)}function Ji(a){if(!a.oobCode)throw new N("invalid-action-code");}h.$a=function(a,b){return P(this,Ki,{oobCode:a,newPassword:b})};h.Ja=function(a){return P(this,Li,{oobCode:a})};h.Xa=function(a){return P(this,Mi,{oobCode:a})};
var Mi={endpoint:"setAccountInfo",C:Ji,da:"email"},Li={endpoint:"resetPassword",C:Ji,J:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new N("internal-error");}},Ni={endpoint:"signupNewUser",C:function(a){ji(a);if(!a.password)throw new N("weak-password");},J:qi,R:!0},mi={endpoint:"createAuthUri"},Oi={endpoint:"deleteAccount",T:["idToken"]},Bi={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],C:function(a){if(!ja(a.deleteProvider))throw new N("internal-error");}},pg=
{endpoint:"emailLinkSignin",T:["email","oobCode"],C:ji,J:qi,R:!0},rg={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],C:ji,J:qi,R:!0},Pi={endpoint:"getAccountInfo"},wi={endpoint:"getOobConfirmationCode",T:["requestType"],C:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new N("internal-error");ji(a)},da:"email"},xi={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],C:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new N("internal-error");},da:"email"},vi={endpoint:"getOobConfirmationCode",
T:["requestType"],C:function(a){if("PASSWORD_RESET"!=a.requestType)throw new N("internal-error");ji(a)},da:"email"},pi={vb:!0,endpoint:"getProjectConfig",Ib:"GET"},Qi={vb:!0,endpoint:"getRecaptchaParam",Ib:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new N("internal-error");}},Ki={endpoint:"resetPassword",C:Ji,da:"email"},yi={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},ti={endpoint:"setAccountInfo",T:["idToken"],C:ki,R:!0},sg={endpoint:"setAccountInfo",
T:["idToken"],C:function(a){ki(a);if(!a.password)throw new N("weak-password");},J:qi,R:!0},si={endpoint:"signupNewUser",J:qi,R:!0},Gi={endpoint:"verifyAssertion",C:Ci,Pa:Di,J:Ei,R:!0},Ii={endpoint:"verifyAssertion",C:Ci,Pa:Di,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new N("user-not-found");if(a.errorMessage)throw Fi(a.errorMessage);if(!a[Uf])throw new N("internal-error");},R:!0},Hi={endpoint:"verifyAssertion",C:function(a){Ci(a);if(!a.idToken)throw new N("internal-error");
},Pa:Di,J:Ei,R:!0},Ri={endpoint:"verifyCustomToken",C:function(a){if(!a.token)throw new N("invalid-custom-token");},J:qi,R:!0},qg={endpoint:"verifyPassword",C:function(a){ji(a);if(!a.password)throw new N("wrong-password");},J:qi,R:!0},zi={endpoint:"verifyPhoneNumber",C:ri,J:qi},yg={endpoint:"verifyPhoneNumber",C:function(a){if(!a.idToken)throw new N("internal-error");ri(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Mg(a);qi(a)}},zg={Xb:{USER_NOT_FOUND:"user-not-found"},
endpoint:"verifyPhoneNumber",C:ri,J:qi};function P(a,b,c){if(!Se(c,b.T))return E(new N("internal-error"));var d=b.Ib||"POST",e;return D(c).then(b.C).then(function(){b.R&&(c.returnSecureToken=!0);return ii(a,b.endpoint,d,c,b.Xb,b.vb||!1)}).then(function(f){e=f;return b.Pa?b.Pa(c,e):e}).then(b.J).then(function(){if(!b.da)return e;if(!(b.da in e))throw new N("internal-error");return e[b.da]})}function Fi(a){return hi({error:{errors:[{message:a}],code:400,message:a}})}
function hi(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new N(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",ADMIN_ONLY_OPERATION:"admin-restricted-operation"};ab(d,
b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new N(d[e],b);!b&&a&&(b=Ae(a));return new N("internal-error",b)};function Si(a){this.b=a;this.a=null;this.gb=Ti(this)}
function Ti(a){return Ui().then(function(){return new C(function(b,c){K("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:K("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Vi.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Wi(a,b){return a.gb.then(function(){return new C(function(c){a.a.send(b.type,b,c,K("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Xi(a,b){a.gb.then(function(){a.a.register("authEvent",b,K("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Yi=new pd(qd,"https://apis.google.com/js/api.js?onload=%{onload}"),Zi=new Fe(3E4,6E4),Vi=new Fe(5E3,15E3),$i=null;
function Ui(){return $i?$i:$i=(new C(function(a,b){function c(){Ee();K("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ee();b(Error("Network Error"))},timeout:Zi.get()})}if(K("gapi.iframes.Iframe"))a();else if(K("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){K("gapi.load")?c():b(Error("Network Error"))};d=wd(Yi,{onload:d});D(Oh(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){$i=null;throw a;})};function aj(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=gd(this.i,"/__/auth/iframe");I(this.a,"apiKey",this.g);I(this.a,"appName",this.h);this.b=null;this.c=[]}aj.prototype.toString=function(){this.f?I(this.a,"v",this.f):md(this.a.a,"v");this.b?I(this.a,"eid",this.b):md(this.a.a,"eid");this.c.length?I(this.a,"fw",this.c.join(",")):md(this.a.a,"fw");return this.a.toString()};function bj(a,b,c,d,e){this.m=a;this.l=b;this.c=c;this.o=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
bj.prototype.toString=function(){var a=gd(this.m,"/__/auth/handler");I(a,"apiKey",this.l);I(a,"appName",this.c);I(a,"authType",this.o);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ea()}catch(k){c=null}b.ab=c;I(a,"providerId",this.a.providerId);b=this.a;c=Be(b.zb);for(var d in c)c[d]=c[d].toString();d=b.Fc;c=Za(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.eb&&b.ab&&!c[b.eb]&&(c[b.eb]=b.ab);Ya(c)||I(a,"customParameters",Ae(c))}"function"===typeof this.a.Fb&&
(b=this.a.Fb(),b.length&&I(a,"scopes",b.join(",")));this.i?I(a,"redirectUrl",this.i):md(a.a,"redirectUrl");this.g?I(a,"eventId",this.g):md(a.a,"eventId");this.h?I(a,"v",this.h):md(a.a,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!ed(a,g)&&I(a,g,this.b[g]);this.f?I(a,"eid",this.f):md(a.a,"eid");g=cj(this.c);g.length&&I(a,"fw",g.join(","));return a.toString()};function cj(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().ya()}catch(b){return[]}}
function dj(a,b,c,d,e){this.l=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.u=this.v=null;this.g=[];this.o=this.a=null}
function ej(a){var b=Yd();return oi(a).then(function(c){a:{var d=fd(b),e=d.c;d=d.b;for(var f=0;f<c.length;f++){var g=c[f];var k=d;var n=e;0==g.indexOf("chrome-extension://")?k=fd(g).b==k&&"chrome-extension"==n:"http"!=n&&"https"!=n?k=!1:ie.test(g)?k=k==g:(g=g.split(".").join("\\."),k=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(k));if(k){c=!0;break a}}c=!1}if(!c)throw new Kg(Yd());})}
function fj(a){if(a.o)return a.o;a.o=ke().then(function(){if(!a.u){var b=a.c,c=a.h,d=cj(a.b),e=new aj(a.l,a.f,a.b);e.f=b;e.b=c;e.c=Ka(d||[]);a.u=e.toString()}a.i=new Si(a.u);gj(a)});return a.o}h=dj.prototype;h.Ea=function(a,b,c){var d=new N("popup-closed-by-user"),e=new N("web-storage-unsupported"),f=this,g=!1;return this.ga().then(function(){hj(f).then(function(k){k||(a&&ee(a),b(e),g=!0)})}).s(function(){}).then(function(){if(!g)return he(a)}).then(function(){if(!g)return Jc(c).then(function(){b(d)})})};
h.Mb=function(){var a=J();return!ze(a)&&!De(a)};h.Hb=function(){return!1};
h.Db=function(a,b,c,d,e,f,g){if(!a)return E(new N("popup-blocked"));if(g&&!ze())return this.ga().s(function(n){ee(a);e(n)}),d(),D();this.a||(this.a=ej(ij(this)));var k=this;return this.a.then(function(){var n=k.ga().s(function(p){ee(a);e(p);throw p;});d();return n}).then(function(){Fg(c);if(!g){var n=jj(k.l,k.f,k.b,b,c,null,f,k.c,void 0,k.h);Zd(n,a)}}).s(function(n){"auth/network-request-failed"==n.code&&(k.a=null);throw n;})};
function ij(a){a.m||(a.v=a.c?ue(a.c,cj(a.b)):null,a.m=new Vh(a.f,Bf(a.h),a.v));return a.m}h.Ca=function(a,b,c){this.a||(this.a=ej(ij(this)));var d=this;return this.a.then(function(){Fg(b);var e=jj(d.l,d.f,d.b,a,b,Yd(),c,d.c,void 0,d.h);Zd(e)}).s(function(e){"auth/network-request-failed"==e.code&&(d.a=null);throw e;})};h.ga=function(){var a=this;return fj(this).then(function(){return a.i.gb}).s(function(){a.a=null;throw new N("network-request-failed");})};h.Qb=function(){return!0};
function jj(a,b,c,d,e,f,g,k,n,p){a=new bj(a,b,c,d,e);a.i=f;a.g=g;a.h=k;a.b=Za(n||null);a.f=p;return a.toString()}function gj(a){if(!a.i)throw Error("IfcHandler must be initialized!");Xi(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Hg(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})}
function hj(a){var b={type:"webStorageSupport"};return fj(a).then(function(){return Wi(a.i,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}h.wa=function(a){this.g.push(a)};h.Ka=function(a){x(this.g,function(b){return b==a})};function kj(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new N("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}h=kj.prototype;h.get=function(a){return D(this.a.getItem(a)).then(function(b){return b&&Ce(b)})};h.set=function(a,b){return D(this.a.setItem(a,Ae(b)))};h.P=function(a){return D(this.a.removeItem(a))};h.Y=function(){};h.ca=function(){};function lj(a){this.b=a;this.a={};this.c=t(this.f,this)}var mj=[];function nj(){var a=pe()?self:null;w(mj,function(c){c.b==a&&(b=c)});if(!b){var b=new lj(a);mj.push(b)}return b}
lj.prototype.f=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(D().then(function(){return f(a.origin,a.data.data)}))});wb(e).then(function(f){var g=[];w(f,function(k){g.push({fulfilled:k.Eb,value:k.value,reason:k.reason?k.reason.message:void 0})});w(g,function(k){for(var n in k)"undefined"===typeof k[n]&&delete k[n]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};lj.prototype.subscribe=function(a,b){Ya(this.a)&&this.b.addEventListener("message",this.c);"undefined"===typeof this.a[a]&&(this.a[a]=[]);this.a[a].push(b)};lj.prototype.unsubscribe=function(a,b){"undefined"!==typeof this.a[a]&&b?(x(this.a[a],function(c){return c==b}),0==this.a[a].length&&delete this.a[a]):b||delete this.a[a];Ya(this.a)&&this.b.removeEventListener("message",this.c)};function oj(a){this.a=a}oj.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function pj(a){this.c=a;this.b=!1;this.a=[]}
function qj(a,b,c,d){var e,f=c||{},g,k,n,p=null;if(a.b)return E(Error("connection_unavailable"));var z=d?800:50,A="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new C(function(da,fc){A?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),A.port1.start(),k=setTimeout(function(){fc(Error("unsupported_event"))},z),g=function(gc){gc.data.eventId===e&&("ack"===gc.data.status?(clearTimeout(k),n=setTimeout(function(){fc(Error("timeout"))},3E3)):"done"===gc.data.status?(clearTimeout(n),
"undefined"!==typeof gc.data.response?da(gc.data.response):fc(Error("unknown_error"))):(clearTimeout(k),clearTimeout(n),fc(Error("invalid_response"))))},p={messageChannel:A,onMessage:g},a.a.push(p),A.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[A.port2])):fc(Error("connection_unavailable"))})).then(function(da){rj(a,p);return da}).s(function(da){rj(a,p);throw da;})}
function rj(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());x(a.a,function(e){return e==b})}}pj.prototype.close=function(){for(;0<this.a.length;)rj(this,this.a[0]);this.b=!0};function sj(){if(!tj())throw new N("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.l=l.indexedDB;this.type="indexedDB";this.g=this.o=this.f=this.i=null;this.u=!1;this.h=null;var a=this;pe()&&self?(this.o=nj(),this.o.subscribe("keyChanged",function(b,c){return uj(a).then(function(d){0<d.length&&w(a.a,function(e){e(d)});return{keyProcessed:Ha(d,c.key)}})}),this.o.subscribe("ping",function(){return D(["keyChanged"])})):Le().then(function(b){if(a.h=b)a.g=new pj(new oj(b)),qj(a.g,"ping",null,
!0).then(function(c){c[0].fulfilled&&Ha(c[0].value,"keyChanged")&&(a.u=!0)}).s(function(){})})}var vj;function wj(a){return new C(function(b,c){var d=a.l.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function xj(a){return new C(function(b,c){var d=a.l.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):wj(a).then(function(){return xj(a)}).then(function(f){b(f)}).s(function(f){c(f)})}})}
function yj(a){a.m||(a.m=xj(a));return a.m}function tj(){try{return!!l.indexedDB}catch(a){return!1}}function zj(a){return a.objectStore("firebaseLocalStorage")}function Aj(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function Bj(a){return new C(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}h=sj.prototype;
h.set=function(a,b){var c=!1,d,e=this;return yj(this).then(function(f){d=f;f=zj(Aj(d,!0));return Bj(f.get(a))}).then(function(f){var g=zj(Aj(d,!0));if(f)return f.value=b,Bj(g.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return Bj(g.add(f))}).then(function(){e.c[a]=b;return Cj(e,a)}).ia(function(){c&&e.b--})};function Cj(a,b){return a.g&&a.h&&Ke()===a.h?qj(a.g,"keyChanged",{key:b},a.u).then(function(){}).s(function(){}):D()}
h.get=function(a){return yj(this).then(function(b){return Bj(zj(Aj(b,!1)).get(a))}).then(function(b){return b&&b.value})};h.P=function(a){var b=!1,c=this;return yj(this).then(function(d){b=!0;c.b++;return Bj(zj(Aj(d,!0))["delete"](a))}).then(function(){delete c.c[a];return Cj(c,a)}).ia(function(){b&&c.b--})};
function uj(a){return yj(a).then(function(b){var c=zj(Aj(b,!1));return c.getAll?Bj(c.getAll()):new C(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(k){(k=k.target.result)?(f.push(k.value),k["continue"]()):d(f)};g.onerror=function(k){e(k.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=$d(a.c,c);a.c=c}return d})}h.Y=function(a){0==this.a.length&&Dj(this);this.a.push(a)};
h.ca=function(a){x(this.a,function(b){return b==a});0==this.a.length&&Ej(this)};function Dj(a){function b(){a.f=setTimeout(function(){a.i=uj(a).then(function(c){0<c.length&&w(a.a,function(d){d(c)})}).then(function(){b()}).s(function(c){"STOP_EVENT"!=c.message&&b()})},800)}Ej(a);b()}function Ej(a){a.i&&a.i.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function Fj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=D().then(function(){if(tj()){var d=we(),e="__sak"+d;vj||(vj=new sj);c=vj;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.P(e)}).then(function(){return c}).s(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.Y(function(e){w(b.a,function(f){f(e)})});return d})}h=Fj.prototype;h.get=function(a){return this.b.then(function(b){return b.get(a)})};
h.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};h.P=function(a){return this.b.then(function(b){return b.P(a)})};h.Y=function(a){this.a.push(a)};h.ca=function(a){x(this.a,function(b){return b==a})};function Gj(){this.a={};this.type="inMemory"}h=Gj.prototype;h.get=function(a){return D(this.a[a])};h.set=function(a,b){this.a[a]=b;return D()};h.P=function(a){delete this.a[a];return D()};h.Y=function(){};h.ca=function(){};function Hj(){if(!Ij()){if("Node"==qe())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.a=Jj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;this.type="localStorage"}function Jj(){try{var a=l.localStorage,b=we();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Ij(){var a="Node"==qe();a=Jj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}h=Hj.prototype;h.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Ce(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Ae(b);null===d?c.P(a):c.a.setItem(a,d)})};h.P=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};
h.Y=function(a){l.window&&tc(l.window,"storage",a)};h.ca=function(a){l.window&&G(l.window,"storage",a)};function Kj(){this.type="nullStorage"}h=Kj.prototype;h.get=function(){return D(null)};h.set=function(){return D()};h.P=function(){return D()};h.Y=function(){};h.ca=function(){};function Lj(){if(!Mj()){if("Node"==qe())throw new N("internal-error","The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.a=Nj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function Nj(){try{var a=l.sessionStorage,b=we();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Mj(){var a="Node"==qe();a=Nj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}h=Lj.prototype;h.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Ce(c)})};h.set=function(a,b){var c=this;return D().then(function(){var d=Ae(b);null===d?c.P(a):c.a.setItem(a,d)})};h.P=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};h.Y=function(){};
h.ca=function(){};function Oj(){var a={};a.Browser=Pj;a.Node=Qj;a.ReactNative=Rj;a.Worker=Sj;this.a=a[qe()]}var Tj,Pj={B:Hj,Sa:Lj},Qj={B:Hj,Sa:Lj},Rj={B:kj,Sa:Kj},Sj={B:Hj,Sa:Kj};var Uj={ad:"local",NONE:"none",cd:"session"};function Vj(a){var b=new N("invalid-persistence-type"),c=new N("unsupported-persistence-type");a:{for(d in Uj)if(Uj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(qe()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!ve()&&"none"!==a)throw c;}}
function Wj(){var a=!De(J())&&oe()?!0:!1,b=ze(),c=ve();this.m=a;this.h=b;this.o=c;this.a={};Tj||(Tj=new Oj);a=Tj;try{this.g=!Xd()&&Je()||!l.indexedDB?new a.a.B:new Fj(pe()?new Gj:new a.a.B)}catch(d){this.g=new Gj,this.h=!0}try{this.i=new a.a.Sa}catch(d){this.i=new Gj}this.l=new Gj;this.f=t(this.Pb,this);this.b={}}var Xj;function Yj(){Xj||(Xj=new Wj);return Xj}function Zj(a,b){switch(b){case "session":return a.i;case "none":return a.l;default:return a.g}}
function ak(a,b){return"firebase:"+a.name+(b?":"+b:"")}function bk(a,b,c){var d=ak(b,c),e=Zj(a,b.B);return a.get(b,c).then(function(f){var g=null;try{g=Ce(l.localStorage.getItem(d))}catch(k){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}h=Wj.prototype;h.get=function(a,b){return Zj(this,a.B).get(ak(a,b))};function ck(a,b,c){c=ak(b,c);"local"==b.B&&(a.b[c]=null);return Zj(a,b.B).P(c)}
h.set=function(a,b,c){var d=ak(a,c),e=this,f=Zj(this,a.B);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.B&&(e.b[d]=g)})};h.addListener=function(a,b,c){a=ak(a,b);this.o&&(this.b[a]=l.localStorage.getItem(a));Ya(this.a)&&(Zj(this,"local").Y(this.f),this.h||(Xd()||!Je())&&l.indexedDB||!this.o||dk(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
h.removeListener=function(a,b,c){a=ak(a,b);this.a[a]&&(x(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);Ya(this.a)&&(Zj(this,"local").ca(this.f),ek(this))};function dk(a){ek(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new hc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Pb(c))}},1E3)}function ek(a){a.c&&(clearInterval(a.c),a.c=null)}
h.Pb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Ya(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Zj(this,"local").ca(this.f):ek(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.Ya(b)};Pb&&$b&&10==$b&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else w(a,t(this.Ya,this))};h.Ya=function(a){this.a[a]&&w(this.a[a],function(b){b()})};function fk(a){this.a=a;this.b=Yj()}var gk={name:"authEvent",B:"local"};function hk(a){return a.b.get(gk,a.a).then(function(b){return Hg(b)})};function ik(){this.a=Yj()};function jk(){this.b=-1};function kk(a,b){this.b=lk;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.o=l.Int32Array?new Int32Array(64):Array(64);void 0!==mk||(l.Int32Array?mk=new Int32Array(nk):mk=nk);this.reset()}var mk;u(kk,jk);for(var lk=64,ok=lk-1,pk=[],qk=0;qk<ok;qk++)pk[qk]=0;var rk=Ja(128,pk);kk.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Ka(this.h)};
function sk(a){for(var b=a.f,c=a.o,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var k=a.a[2]|0,n=a.a[3]|0,p=a.a[4]|0,z=a.a[5]|0,A=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var da=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&k^e&k)|0;g=p&z^~p&A;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|
p<<7))|0;g=g+(mk[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=A;A=z;z=p;p=n+g|0;n=k;k=e;e=d;d=g+da|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+k|0;a.a[3]=a.a[3]+n|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+z|0;a.a[6]=a.a[6]+A|0;a.a[7]=a.a[7]+f|0}
function tk(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(m(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(sk(a),e=0);else if(ka(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(sk(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var nk=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function uk(){kk.call(this,8,vk)}u(uk,kk);var vk=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function wk(a,b,c,d,e){this.l=a;this.i=b;this.o=c;this.m=d||null;this.u=e||null;this.h=b+":"+c;this.v=new ik;this.g=new fk(this.h);this.f=null;this.b=[];this.a=this.c=null}function xk(a){return new N("invalid-cordova-configuration",a)}h=wk.prototype;
h.ga=function(){return this.za?this.za:this.za=le().then(function(){if("function"!==typeof K("universalLinks.subscribe",l))throw xk("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof K("BuildInfo.packageName",l))throw xk("cordova-plugin-buildinfo is not installed");if("function"!==typeof K("cordova.plugins.browsertab.openUrl",l))throw xk("cordova-plugin-browsertab is not installed");if("function"!==typeof K("cordova.InAppBrowser.open",l))throw xk("cordova-plugin-inappbrowser is not installed");
},function(){throw new N("cordova-not-ready");})};function yk(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function zk(a){var b=new uk;tk(b,a);a=[];var c=8*b.g;56>b.c?tk(b,rk,56-b.c):tk(b,rk,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;sk(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return rf(a)}
h.Ea=function(a,b){b(new N("operation-not-supported-in-this-environment"));return D()};h.Db=function(){return E(new N("operation-not-supported-in-this-environment"))};h.Qb=function(){return!1};h.Mb=function(){return!0};h.Hb=function(){return!0};
h.Ca=function(a,b,c){if(this.c)return E(new N("redirect-operation-pending"));var d=this,e=l.document,f=null,g=null,k=null,n=null;return this.c=D().then(function(){Fg(b);return Ak(d)}).then(function(){return Bk(d,a,b,c)}).then(function(){return(new C(function(p,z){g=function(){var A=K("cordova.plugins.browsertab.close",l);p();"function"===typeof A&&A();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.wa(g);k=function(){f||(f=Jc(2E3).then(function(){z(new N("redirect-cancelled-by-user"))}))};
n=function(){Ge()&&k()};e.addEventListener("resume",k,!1);J().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).s(function(p){return Ck(d).then(function(){throw p;})})}).ia(function(){k&&e.removeEventListener("resume",k,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Ka(g);d.c=null})};
function Bk(a,b,c,d){var e=yk(),f=new Gg(b,d,null,e,new N("no-auth-event")),g=K("BuildInfo.packageName",l);if("string"!==typeof g)throw new N("invalid-cordova-configuration");var k=K("BuildInfo.displayName",l),n={};if(J().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(J().toLowerCase().match(/android/))n.apn=g;else return E(new N("operation-not-supported-in-this-environment"));k&&(n.appDisplayName=k);e=zk(e);n.sessionId=e;var p=jj(a.l,a.i,a.o,b,c,null,d,a.m,n,a.u);return a.ga().then(function(){var z=
a.h;return a.v.a.set(gk,f.w(),z)}).then(function(){var z=K("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof z)throw new N("invalid-cordova-configuration");var A=null;z(function(da){if(da){A=K("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new N("invalid-cordova-configuration");A(p)}else{A=K("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new N("invalid-cordova-configuration");da=J();a.a=A(p,da.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||da.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function Dk(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Ak(a){a.f||(a.f=a.ga().then(function(){return new C(function(b){function c(d){b(d);a.Ka(c);return!1}a.wa(c);Ek(a)})}));return a.f}function Ck(a){var b=null;return hk(a.g).then(function(c){b=c;c=a.g;return ck(c.b,gk,c.a)}).then(function(){return b})}
function Ek(a){function b(g){d=!0;e&&e.cancel();Ck(a).then(function(k){var n=c;if(k&&g&&g.url){var p=null;n=Rf(g.url);-1!=n.indexOf("/__/auth/callback")&&(p=fd(n),p=Ce(ed(p,"firebaseError")||null),p=(p="object"===typeof p?ef(p):null)?new Gg(k.c,k.b,null,null,p):new Gg(k.c,k.b,n,k.f));n=p||c}Dk(a,n)})}var c=new Gg("unknown",null,null,null,new N("no-auth-event")),d=!1,e=Jc(500).then(function(){return Ck(a).then(function(){d||Dk(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==g.toLowerCase().indexOf(K("BuildInfo.packageName",
l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(k){console.error(k)}};Jg||(Jg=new Ig);Jg.subscribe(b)}h.wa=function(a){this.b.push(a);Ak(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new Gg("unknown",null,null,null,new N("no-auth-event")),a(b))})};h.Ka=function(a){x(this.b,function(b){return b==a})};function Fk(a){this.a=a;this.b=Yj()}var Gk={name:"pendingRedirect",B:"session"};function Hk(a){return a.b.set(Gk,"pending",a.a)}function Ik(a){return ck(a.b,Gk,a.a)}function Jk(a){return a.b.get(Gk,a.a).then(function(b){return"pending"==b})};function Kk(a,b,c){this.i={};this.u=0;this.A=a;this.l=b;this.m=c;this.h=[];this.f=!1;this.o=t(this.cb,this);this.b=new Lk;this.v=new Mk;this.g=new Fk(this.l+":"+this.m);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.v;this.c.linkViaPopup=this.v;this.c.reauthViaPopup=this.v;this.a=Nk(this.A,this.l,this.m,Cf)}
function Nk(a,b,c,d){var e=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null;return me()?new wk(a,b,c,e,d):new dj(a,b,c,e,d)}h=Kk.prototype;h.reset=function(){this.f=!1;this.a.Ka(this.o);this.a=Nk(this.A,this.l,this.m);this.i={}};h.Za=function(){this.b.Za()};function Ok(a){a.f||(a.f=!0,a.a.wa(a.o));var b=a.a;return a.a.ga().s(function(c){a.a==b&&a.reset();throw c;})}
function Pk(a){a.a.Mb()&&Ok(a).s(function(b){var c=new Gg("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Qk(b)&&a.cb(c)});a.a.Hb()||Rk(a.b)}h.subscribe=function(a){Ha(this.h,a)||this.h.push(a);if(!this.f){var b=this;Jk(this.g).then(function(c){c?Ik(b.g).then(function(){Ok(b).s(function(d){var e=new Gg("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Qk(d)&&b.cb(e)})}):Pk(b)}).s(function(){Pk(b)})}};
h.unsubscribe=function(a){x(this.h,function(b){return b==a})};h.cb=function(a){if(!a)throw new N("invalid-auth-event");6E5<=qa()-this.u&&(this.i={},this.u=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.wb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.u=qa());b=!0;break}}Rk(this.b);return b};var Sk=new Fe(2E3,1E4),Tk=new Fe(3E4,6E4);Kk.prototype.fa=function(){return this.b.fa()};
function Uk(a,b,c,d,e,f){return a.a.Db(b,c,d,function(){a.f||(a.f=!0,a.a.wa(a.o))},function(){a.reset()},e,f)}function Qk(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}Kk.prototype.Ca=function(a,b,c){var d=this,e;return Hk(this.g).then(function(){return d.a.Ca(a,b,c).s(function(f){if(Qk(f))throw new N("operation-not-supported-in-this-environment");e=f;return Ik(d.g).then(function(){throw e;})}).then(function(){return d.a.Qb()?new C(function(){}):Ik(d.g).then(function(){return d.fa()}).then(function(){}).s(function(){})})})};
Kk.prototype.Ea=function(a,b,c,d){return this.a.Ea(c,function(e){a.ha(b,null,e,d)},Sk.get())};var Vk={};function Wk(a,b,c){var d=b+":"+c;Vk[d]||(Vk[d]=new Kk(a,b,c));return Vk[d]}function Lk(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}Lk.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Lk.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Xk(this,!0,null,a.a),D()):b.xa(c,d)?Yk(this,a,b):E(new N("invalid-auth-event")):(Xk(this,!1,null,null),D())}else E(new N("invalid-auth-event"))};function Rk(a){a.g||(a.g=!0,Xk(a,!1,null,null))}Lk.prototype.Za=function(){this.g&&!this.i&&Xk(this,!1,null,null)};
function Yk(a,b,c){c=c.xa(b.c,b.b);var d=b.g,e=b.f,f=b.h,g=!!b.c.match(/Redirect$/);c(d,e,f).then(function(k){Xk(a,g,k,null)}).s(function(k){Xk(a,g,null,k)})}function Zk(a,b){a.b=function(){return E(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function $k(a,b){a.b=function(){return D(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Xk(a,b,c,d){b?d?Zk(a,d):$k(a,c):$k(a,{user:null});a.f=[];a.c=[]}
Lk.prototype.fa=function(){var a=this;return new C(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),al(a))})};function al(a){var b=new N("timeout");a.a&&a.a.cancel();a.a=Jc(Tk.get()).then(function(){a.b||(a.g=!0,Xk(a,!0,null,b))})}function Mk(){}Mk.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.ha(a.c,null,a.a,a.b),D()):b.xa(c,d)?bl(a,b):E(new N("invalid-auth-event"))}else E(new N("invalid-auth-event"))};
function bl(a,b){var c=a.b,d=a.c;b.xa(d,c)(a.g,a.f,a.h).then(function(e){b.ha(d,e,null,c)}).s(function(e){b.ha(d,null,e,c)})};function cl(){this.tb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.tb},set:function(a){this.tb=a},enumerable:!1})};function dl(a,b){this.a=b;L(this,"verificationId",a)}dl.prototype.confirm=function(a){a=Dg(this.verificationId,a);return this.a(a)};function el(a,b,c,d){return(new Bg(a)).Va(b,c).then(function(e){return new dl(e,d)})};function fl(a){var b=zf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new N("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");M(this,{token:a,expirationTime:Ie(1E3*b.exp),authTime:Ie(1E3*b.auth_time),issuedAtTime:Ie(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function gl(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}gl.prototype.start=function(){this.a=this.c;hl(this,!0)};function il(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function hl(a,b){a.stop();a.b=Jc(il(a,b)).then(function(){return He()}).then(function(){return a.h()}).then(function(){hl(a,!0)}).s(function(c){a.i(c)&&hl(a,!1)})}
gl.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function jl(a){this.f=a;this.b=this.a=null;this.c=0}jl.prototype.w=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function kl(a,b){var c=b[Uf],d=b.refreshToken;b=ll(b.expiresIn);a.b=c;a.c=b;a.a=d}function ml(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function ll(a){return qa()+1E3*parseInt(a,10)}
function nl(a,b){return gi(a.f,b).then(function(c){a.b=c.access_token;a.c=ll(c.expires_in);a.a=c.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}jl.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?E(new N("user-token-expired")):a||!this.b||qa()>this.c-3E4?this.a?nl(this,{grant_type:"refresh_token",refresh_token:this.a}):D(null):D({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function ol(a,b){this.a=a||null;this.b=b||null;M(this,{lastSignInTime:Ie(b||null),creationTime:Ie(a||null)})}function pl(a){return new ol(a.a,a.b)}ol.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}};function ql(a,b,c,d,e,f){M(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function rl(a,b){F.call(this,a);for(var c in b)this[c]=b[c]}u(rl,F);
function Q(a,b,c){this.G=[];this.l=a.apiKey;this.m=a.appName;this.u=a.authDomain||null;a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?ue(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null;this.b=new Vh(this.l,Bf(Cf),a);this.h=new jl(this.b);sl(this,b[Uf]);kl(this.h,b);L(this,"refreshToken",this.h.a);tl(this,c||{});H.call(this);this.I=!1;this.u&&xe()&&(this.a=Wk(this.u,this.l,this.m));this.N=[];this.i=null;this.A=ul(this);this.V=t(this.Ha,this);var d=this;this.ka=null;this.ta=function(e){d.pa(e.g)};this.X=null;this.O=[];this.sa=function(e){vl(d,
e.c)};this.W=null}u(Q,H);Q.prototype.pa=function(a){this.ka=a;ai(this.b,a)};Q.prototype.ea=function(){return this.ka};function wl(a,b){a.X&&G(a.X,"languageCodeChanged",a.ta);(a.X=b)&&tc(b,"languageCodeChanged",a.ta)}function vl(a,b){a.O=b;bi(a.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?ue(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,a.O):null)}Q.prototype.ya=function(){return Ka(this.O)};function xl(a,b){a.W&&G(a.W,"frameworkChanged",a.sa);(a.W=b)&&tc(b,"frameworkChanged",a.sa)}Q.prototype.Ha=function(){this.A.b&&(this.A.stop(),this.A.start())};
function yl(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.m).auth()}catch(b){throw new N("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function ul(a){return new gl(function(){return a.F(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=a.h.c-qa()-3E5;return 0<b?b:0})}function zl(a){a.D||a.A.b||(a.A.start(),G(a,"tokenChanged",a.V),tc(a,"tokenChanged",a.V))}function Al(a){G(a,"tokenChanged",a.V);a.A.stop()}
function sl(a,b){a.ra=b;L(a,"_lat",b)}function Bl(a,b){x(a.N,function(c){return c==b})}function Cl(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return wb(b).then(function(){return a})}function Dl(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function tl(a,b){M(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new ol(b.createdAt,b.lastLoginAt),providerData:[]})}L(Q.prototype,"providerId","firebase");function El(){}function Fl(a){return D().then(function(){if(a.D)throw new N("app-deleted");})}function Gl(a){return Da(a.providerData,function(b){return b.providerId})}
function Hl(a,b){b&&(Il(a,b.providerId),a.providerData.push(b))}function Il(a,b){x(a.providerData,function(c){return c.providerId==b})}function Jl(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&L(a,b,c)}
function Kl(a,b){a!=b&&(M(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?L(a,"metadata",pl(b.metadata)):L(a,"metadata",new ol),w(b.providerData,function(c){Hl(a,c)}),ml(a.h,b.h),L(a,"refreshToken",a.h.a))}h=Q.prototype;h.reload=function(){var a=this;return R(this,Fl(this).then(function(){return Ll(a).then(function(){return Cl(a)}).then(El)}))};
function Ll(a){return a.F().then(function(b){var c=a.isAnonymous;return Ml(a,b).then(function(){c||Jl(a,"isAnonymous",!1);return b})})}h.dc=function(a){return this.F(a).then(function(b){return new fl(b)})};h.F=function(a){var b=this;return R(this,Fl(this).then(function(){return b.h.getToken(a)}).then(function(c){if(!c)throw new N("internal-error");c.accessToken!=b.ra&&(sl(b,c.accessToken),b.dispatchEvent(new rl("tokenChanged")));Jl(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function Nl(a,b){b[Uf]&&a.ra!=b[Uf]&&(kl(a.h,b),a.dispatchEvent(new rl("tokenChanged")),sl(a,b[Uf]),Jl(a,"refreshToken",a.h.a))}function Ml(a,b){return P(a.b,Pi,{idToken:b}).then(t(a.zc,a))}
h.zc=function(a){a=a.users;if(!a||!a.length)throw new N("internal-error");a=a[0];tl(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=Ol(a),c=0;c<b.length;c++)Hl(this,b[c]);Jl(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function Ol(a){return(a=a.providerUserInfo)&&a.length?Da(a,function(b){return new ql(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}h.hb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(d){Nl(b,d);c=Pl(b,d,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};
h.Ac=function(a){Ne("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead.");return this.hb(a).then(function(){})};function Ql(a,b){return Ll(a).then(function(){if(Ha(Gl(a),b))return Cl(a).then(function(){throw new N("provider-already-linked");})})}
h.fb=function(a){var b=this,c=null;return R(this,Ql(this,a.providerId).then(function(){return b.F()}).then(function(d){return a.b(b.b,d)}).then(function(d){c=Pl(b,d,"link");return Rl(b,d)}).then(function(){return c}))};h.rc=function(a){Ne("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead.");return this.fb(a).then(function(b){return b.user})};
h.sc=function(a,b){var c=this;return R(this,Ql(this,"phone").then(function(){return el(yl(c),a,b,t(c.fb,c))}))};h.Bc=function(a,b){var c=this;return R(this,D().then(function(){return el(yl(c),a,b,t(c.hb,c))}),!0)};function Pl(a,b,c){var d=Eg(b);b=Hf(b);return Qe({user:a,credential:d,additionalUserInfo:b,operationType:c})}function Rl(a,b){Nl(a,b);return a.reload().then(function(){return a})}
h.qb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.qb(c,a)}).then(function(c){Nl(b,c);return b.reload()}))};h.Tc=function(a){var b=this;return R(this,this.F().then(function(c){return a.b(b.b,c)}).then(function(c){Nl(b,c);return b.reload()}))};h.rb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.rb(c,a)}).then(function(c){Nl(b,c);return b.reload()}))};
h.sb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Fl(this);var b=this;return R(this,this.F().then(function(c){return b.b.sb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){Nl(b,c);Jl(b,"displayName",c.displayName||null);Jl(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(L(d,"displayName",b.displayName),L(d,"photoURL",b.photoURL))});return Cl(b)}).then(El))};
h.Rc=function(a){var b=this;return R(this,Ll(this).then(function(c){return Ha(Gl(b),a)?Ai(b.b,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0});w(Gl(b),function(f){e[f]||Il(b,f)});e[Bg.PROVIDER_ID]||L(b,"phoneNumber",null);return Cl(b)}):Cl(b).then(function(){throw new N("no-such-provider");})}))};
h.delete=function(){var a=this;return R(this,this.F().then(function(b){return P(a.b,Oi,{idToken:b})}).then(function(){a.dispatchEvent(new rl("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");wl(a,null);xl(a,null);a.G=[];a.D=!0;Al(a);L(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
h.wb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.aa||null)==b||"reauthViaRedirect"==a&&(this.aa||null)==b?!0:!1};h.ha=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
h.xa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?t(this.Bb,this):"reauthViaPopup"==a&&b==(this.g||null)?t(this.Cb,this):"linkViaRedirect"==a&&(this.aa||null)==b?t(this.Bb,this):"reauthViaRedirect"==a&&(this.aa||null)==b?t(this.Cb,this):null};h.tc=function(a){var b=this;return Sl(this,"linkViaPopup",a,function(){return Ql(b,a.providerId).then(function(){return Cl(b)})},!1)};h.Cc=function(a){return Sl(this,"reauthViaPopup",a,function(){return D()},!0)};
function Sl(a,b,c,d,e){if(!xe())return E(new N("operation-not-supported-in-this-environment"));if(a.i&&!e)return E(a.i);var f=Gf(c.providerId),g=we(a.uid+":::"),k=null;(!ze()||oe())&&a.u&&c.isOAuthProvider&&(k=jj(a.u,a.l,a.m,b,c,null,g,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var n=fe(k,f&&f.Ba,f&&f.Aa);d=d().then(function(){Tl(a);if(!e)return a.F().then(function(){})}).then(function(){return Uk(a.a,n,b,c,g,!!k)}).then(function(){return new C(function(p,z){a.ha(b,null,new N("cancelled-popup-request"),a.g||null);
a.f=p;a.v=z;a.g=g;a.c=a.a.Ea(a,b,n,g)})}).then(function(p){n&&ee(n);return p?Qe(p):null}).s(function(p){n&&ee(n);throw p;});return R(a,d,e)}h.uc=function(a){var b=this;return Ul(this,"linkViaRedirect",a,function(){return Ql(b,a.providerId)},!1)};h.Dc=function(a){return Ul(this,"reauthViaRedirect",a,function(){return D()},!0)};
function Ul(a,b,c,d,e){if(!xe())return E(new N("operation-not-supported-in-this-environment"));if(a.i&&!e)return E(a.i);var f=null,g=we(a.uid+":::");d=d().then(function(){Tl(a);if(!e)return a.F().then(function(){})}).then(function(){a.aa=g;return Cl(a)}).then(function(k){a.ba&&(k=a.ba,k=k.b.set(Vl,a.w(),k.a));return k}).then(function(){return a.a.Ca(b,c,g)}).s(function(k){f=k;if(a.ba)return Wl(a.ba);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function Tl(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new N("internal-error");throw new N("auth-domain-config-required");}}h.Bb=function(a,b,c){var d=this;this.c&&(this.c.cancel(),this.c=null);var e=null,f=this.F().then(function(g){return Yf(d.b,{requestUri:a,postBody:c,sessionId:b,idToken:g})}).then(function(g){e=Pl(d,g,"link");return Rl(d,g)}).then(function(){return e});return R(this,f)};
h.Cb=function(a,b,c){var d=this;this.c&&(this.c.cancel(),this.c=null);var e=null,f=D().then(function(){return Tf(Zf(d.b,{requestUri:a,sessionId:b,postBody:c}),d.uid)}).then(function(g){e=Pl(d,g,"reauthenticate");Nl(d,g);d.i=null;return d.reload()}).then(function(){return e});return R(this,f,!0)};h.kb=function(a){var b=this,c=null;return R(this,this.F().then(function(d){c=d;return"undefined"===typeof a||Ya(a)?{}:qf(new ff(a))}).then(function(d){return b.b.kb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=Xl(a,b,c);a.G.push(d);d.ia(function(){Ia(a.G,d)});return d}function Xl(a,b,c){return a.i&&!c?(b.cancel(),E(a.i)):b.s(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.i||a.dispatchEvent(new rl("userInvalidated")),a.i=d);throw d;})}h.toJSON=function(){return this.w()};
h.w=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.u,stsTokenManager:this.h.w(),redirectEventId:this.aa||null};this.metadata&&ab(a,this.metadata.w());w(this.providerData,function(b){a.providerData.push(Re(b))});return a};
function Yl(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[Uf]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-qa())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&w(a.providerData,function(e){e&&Hl(d,Qe(e))});a.redirectEventId&&(d.aa=a.redirectEventId);return d}
function Zl(a,b,c,d){var e=new Q(a,b);c&&(e.ba=c);d&&vl(e,d);return e.reload().then(function(){return e})}function $l(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.u,appName:a.m};var e=a.h,f={};f[Uf]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-qa())/1E3;b=new Q(b,f);c&&(b.ba=c);d&&vl(b,d);Kl(b,a);return b};function am(a){this.a=a;this.b=Yj()}var Vl={name:"redirectUser",B:"session"};function Wl(a){return ck(a.b,Vl,a.a)}function bm(a,b){return a.b.get(Vl,a.a).then(function(c){c&&b&&(c.authDomain=b);return Yl(c||{})})};function cm(a){this.a=a;this.b=Yj();this.c=null;this.f=dm(this);this.b.addListener(em("local"),this.a,t(this.g,this))}cm.prototype.g=function(){var a=this,b=em("local");fm(this,function(){return D().then(function(){return a.c&&"local"!=a.c.B?a.b.get(b,a.a):null}).then(function(c){if(c)return gm(a,"local").then(function(){a.c=b})})})};function gm(a,b){var c=[],d;for(d in Uj)Uj[d]!==b&&c.push(ck(a.b,em(Uj[d]),a.a));c.push(ck(a.b,hm,a.a));return vb(c)}
function dm(a){var b=em("local"),c=em("session"),d=em("none");return bk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(hm,a.a).then(function(k){return k?em(k):b})})})}).then(function(e){a.c=e;return gm(a,e.B)}).s(function(){a.c||(a.c=b)})}var hm={name:"persistence",B:"session"};function em(a){return{name:"authUser",B:a}}
cm.prototype.nb=function(a){var b=null,c=this;Vj(a);return fm(this,function(){return a!=c.c.B?c.b.get(c.c,c.a).then(function(d){b=d;return gm(c,a)}).then(function(){c.c=em(a);if(b)return c.b.set(c.c,b,c.a)}):D()})};function im(a){return fm(a,function(){return a.b.set(hm,a.c.B,a.a)})}function jm(a,b){return fm(a,function(){return a.b.set(a.c,b.w(),a.a)})}function km(a){return fm(a,function(){return ck(a.b,a.c,a.a)})}
function lm(a,b){return fm(a,function(){return a.b.get(a.c,a.a).then(function(c){c&&b&&(c.authDomain=b);return Yl(c||{})})})}function fm(a,b){a.f=a.f.then(b,b);return a.f};function mm(a){this.l=!1;L(this,"settings",new cl);L(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?ue(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null,this.b=new Vh(S(this).options&&S(this).options.apiKey,Bf(Cf),a);else throw new N("invalid-api-key");this.N=[];this.m=[];this.I=[];this.Tb=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.oc,this));this.O=void 0;this.Ub=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(t(this.pc,this));nm(this,null);this.h=new cm(S(this).options.apiKey+":"+S(this).name);this.A=
new am(S(this).options.apiKey+":"+S(this).name);this.V=T(this,om(this));this.i=T(this,pm(this));this.X=!1;this.ka=t(this.Oc,this);this.Ha=t(this.Z,this);this.ra=t(this.bc,this);this.sa=t(this.mc,this);this.ta=t(this.nc,this);qm(this);this.INTERNAL={};this.INTERNAL["delete"]=t(this.delete,this);this.INTERNAL.logFramework=t(this.vc,this);this.u=0;H.call(this);rm(this);this.G=[]}u(mm,H);function sm(a){F.call(this,"languageCodeChanged");this.g=a}u(sm,F);
function tm(a){F.call(this,"frameworkChanged");this.c=a}u(tm,F);h=mm.prototype;h.nb=function(a){a=this.h.nb(a);return T(this,a)};h.pa=function(a){this.W===a||this.l||(this.W=a,ai(this.b,this.W),this.dispatchEvent(new sm(this.ea())))};h.ea=function(){return this.W};h.Uc=function(){var a=l.navigator;this.pa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};h.vc=function(a){this.G.push(a);bi(this.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?ue(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,this.G):null);this.dispatchEvent(new tm(this.G))};
h.ya=function(){return Ka(this.G)};function rm(a){Object.defineProperty(a,"lc",{get:function(){return this.ea()},set:function(b){this.pa(b)},enumerable:!1});a.W=null}h.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).w()}};function um(a){return a.Sb||E(new N("auth-domain-config-required"))}
function qm(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&xe()&&(a.Sb=a.V.then(function(){if(!a.l){a.a=Wk(b,c,S(a).name);a.a.subscribe(a);U(a)&&Dl(U(a));if(a.D){Dl(a.D);var d=a.D;d.pa(a.ea());wl(d,a);d=a.D;vl(d,a.G);xl(d,a);a.D=null}return a.a}}))}h.wb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
h.ha=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};h.xa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?t(this.ac,this):null};
h.ac=function(a,b,c){var d=this;a={requestUri:a,postBody:c,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var e=null,f=null,g=Wf(d.b,a).then(function(k){e=Eg(k);f=Hf(k);return k});a=d.V.then(function(){return g}).then(function(k){return vm(d,k)}).then(function(){return Qe({user:U(d),credential:e,additionalUserInfo:f,operationType:"signIn"})});return T(this,a)};
h.Mc=function(a){if(!xe())return E(new N("operation-not-supported-in-this-environment"));var b=this,c=Gf(a.providerId),d=we(),e=null;(!ze()||oe())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=jj(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var f=fe(e,c&&c.Ba,c&&c.Aa);c=um(this).then(function(g){return Uk(g,f,"signInViaPopup",a,d,!!e)}).then(function(){return new C(function(g,k){b.ha("signInViaPopup",null,new N("cancelled-popup-request"),
b.g);b.f=g;b.v=k;b.g=d;b.c=b.a.Ea(b,"signInViaPopup",f,d)})}).then(function(g){f&&ee(f);return g?Qe(g):null}).s(function(g){f&&ee(f);throw g;});return T(this,c)};h.Nc=function(a){if(!xe())return E(new N("operation-not-supported-in-this-environment"));var b=this,c=um(this).then(function(){return im(b.h)}).then(function(){return b.a.Ca("signInViaRedirect",a)});return T(this,c)};
h.fa=function(){if(!xe())return E(new N("operation-not-supported-in-this-environment"));var a=this,b=um(this).then(function(){return a.a.fa()}).then(function(c){return c?Qe(c):null});return T(this,b)};
h.Sc=function(a){if(!a)return E(new N("null-user"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=$l(a,c,b.A,b.ya());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return Kl(U(b),a),b.Z(a);nm(b,d);Dl(d);return b.Z(d)}).then(function(){wm(b)}))};
function vm(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.V.then(function(){return Zl(c,b,a.A,a.ya())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return Kl(U(a),d),a.Z(d);nm(a,d);Dl(d);return a.Z(d)}).then(function(){wm(a)})}
function nm(a,b){U(a)&&(Bl(U(a),a.Ha),G(U(a),"tokenChanged",a.ra),G(U(a),"userDeleted",a.sa),G(U(a),"userInvalidated",a.ta),Al(U(a)));b&&(b.N.push(a.Ha),tc(b,"tokenChanged",a.ra),tc(b,"userDeleted",a.sa),tc(b,"userInvalidated",a.ta),0<a.u&&zl(b));L(a,"currentUser",b);b&&(b.pa(a.ea()),wl(b,a),vl(b,a.G),xl(b,a))}h.ob=function(){var a=this,b=this.i.then(function(){if(!U(a))return D();nm(a,null);return km(a.h).then(function(){wm(a)})});return T(this,b)};
function xm(a){var b=bm(a.A,S(a).options.authDomain).then(function(c){if(a.D=c)c.ba=a.A;return Wl(a.A)});return T(a,b)}function om(a){var b=S(a).options.authDomain,c=xm(a).then(function(){return lm(a.h,b)}).then(function(d){return d?(d.ba=a.A,a.D&&(a.D.aa||null)==(d.aa||null)?d:d.reload().then(function(){return jm(a.h,d).then(function(){return d})}).s(function(e){return"auth/network-request-failed"==e.code?d:km(a.h)})):null}).then(function(d){nm(a,d||null)});return T(a,c)}
function pm(a){return a.V.then(function(){return a.fa()}).s(function(){}).then(function(){if(!a.l)return a.ka()}).s(function(){}).then(function(){if(!a.l){a.X=!0;var b=a.h;b.b.addListener(em("local"),b.a,a.ka)}})}
h.Oc=function(){var a=this;return lm(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Kl(U(a),b),U(a).F();if(U(a)||b)nm(a,b),b&&(Dl(b),b.ba=a.A),a.a&&a.a.subscribe(a),wm(a)}})};h.Z=function(a){return jm(this.h,a)};h.bc=function(){wm(this);this.Z(U(this))};h.mc=function(){this.ob()};h.nc=function(){this.ob()};
function ym(a,b){var c=null,d=null;return T(a,b.then(function(e){c=Eg(e);d=Hf(e);return vm(a,e)}).then(function(){return Qe({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}h.oc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.pc=function(a){var b=this;zm(this,function(){a.next(U(b))})};h.xc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Tb(a,b,c)};
h.wc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){d.O=d.getUid();q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.Ub(a,b,c)};h.cc=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};h.Nb=function(a){var b=this;return this.i.then(function(){return ym(b,P(b.b,Ri,{token:a}))}).then(function(c){var d=c.user;Jl(d,"isAnonymous",!1);b.Z(d);return c})};
h.Gc=function(a){Ne("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead.");return this.Nb(a)};h.Hc=function(a,b){Ne("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead.");return this.Ob(a,b)};h.Ob=function(a,b){var c=this;return this.i.then(function(){return ym(c,P(c.b,qg,{email:a,password:b}))})};
h.yb=function(a,b){var c=this;return this.i.then(function(){return ym(c,P(c.b,Ni,{email:a,password:b}))})};h.Wb=function(a,b){Ne("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead.");return this.yb(a,b)};h.Jc=function(a){Ne("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead.");return this.Qa(a).then(function(b){return b.user})};
h.Qa=function(a){var b=this;return this.i.then(function(){return ym(b,a.la(b.b))})};h.Ra=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Qe({providerId:null,isNewUser:!1});return Qe({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return ym(a,a.b.Ra()).then(function(d){var e=d.user;Jl(e,"isAnonymous",!0);a.Z(e);return d})})};
h.Ic=function(){Ne("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead.");return this.Ra()};function S(a){return a.app}function U(a){return a.currentUser}h.getUid=function(){return U(this)&&U(this).uid||null};function Am(a){return U(a)&&U(a)._lat||null}
function wm(a){if(a.X){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Am(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](Am(a))}}h.Vb=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&zl(U(this))};h.Ec=function(a){var b=this;w(this.m,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&Al(U(this));this.removeAuthTokenListener(a)};
h.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Ha(b.m,a)&&a(Am(b))}))};h.removeAuthTokenListener=function(a){x(this.m,function(b){return b==a})};function zm(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Ha(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(Am(a)))}))}
h.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(em("local"),a.a,this.ka));this.a&&(this.a.unsubscribe(this),this.a.Za());return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve()};function T(a,b){a.N.push(b);b.ia(function(){Ia(a.N,b)});return b}
h.Zb=function(a){Ne("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead.");return T(this,li(this.b,a))};h.$b=function(a){return T(this,ni(this.b,a))};h.qc=function(a){return!!vg(a)};h.mb=function(a,b){var c=this;return T(this,D().then(function(){var d=new ff(b);if(!d.c)throw new N("argument-error",of+" must be true when sending sign in link to email");return qf(d)}).then(function(d){return c.b.mb(a,d)}).then(function(){}))};
h.Vc=function(a){return this.Ja(a).then(function(b){return b.data.email})};h.$a=function(a,b){return T(this,this.b.$a(a,b).then(function(){}))};h.Ja=function(a){return T(this,this.b.Ja(a).then(function(b){return new Ue(b)}))};h.Xa=function(a){return T(this,this.b.Xa(a).then(function(){}))};h.lb=function(a,b){var c=this;return T(this,D().then(function(){return"undefined"===typeof b||Ya(b)?{}:qf(new ff(b))}).then(function(d){return c.b.lb(a,d)}).then(function(){}))};
h.Lc=function(a,b){return T(this,el(this,a,b,t(this.Qa,this)))};h.Kc=function(a,b){var c=this;return T(this,D().then(function(){var d=ug(a,b||Yd());return c.Qa(d)}))};function Bm(){}Bm.prototype.render=function(){};Bm.prototype.reset=function(){};Bm.prototype.getResponse=function(){};Bm.prototype.execute=function(){};function Cm(){this.a={};this.b=1E12}var Dm=null;Cm.prototype.render=function(a,b){this.a[this.b.toString()]=new Em(a,b);return this.b++};Cm.prototype.reset=function(a){var b=Fm(this,a);a=Gm(a);b&&a&&(b.delete(),delete this.a[a])};Cm.prototype.getResponse=function(a){return(a=Fm(this,a))?a.getResponse():null};Cm.prototype.execute=function(a){(a=Fm(this,a))&&a.execute()};function Fm(a,b){return(b=Gm(b))?a.a[b]||null:null}function Gm(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function Em(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Ld(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():tc(this.f,"click",this.i)}Em.prototype.getResponse=function(){Hm(this);return this.b};
Em.prototype.execute=function(){Hm(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=se();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};Em.prototype.delete=function(){Hm(this);this.g=!0;clearTimeout(this.a);this.a=null;G(this.f,"click",this.i)};function Hm(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function Im(){}Im.prototype.g=function(){Dm||(Dm=new Cm);return D(Dm)};Im.prototype.c=function(){};var Jm=null;function Km(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var Lm=new pd(qd,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Mm=new Fe(3E4,6E4);
Km.prototype.g=function(a){var b=this;return new C(function(c,d){var e=setTimeout(function(){d(new N("network-request-failed"))},Mm.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(k,n){k=g(k,n);b.b++;return k};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new N("internal-error"));delete l[b.a]};var f=wd(Lm,{onload:b.a,hl:a||""});D(Oh(f)).s(function(){clearTimeout(e);d(new N("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};Km.prototype.c=function(){this.b--};var Nm=null;function Om(a,b,c,d,e,f,g){L(this,"type","recaptcha");this.c=this.f=null;this.D=!1;this.l=b;this.g=null;g?(Jm||(Jm=new Im),g=Jm):(Nm||(Nm=new Km),g=Nm);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[Pm])throw new N("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[Qm];if(!l.document)throw new N("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Ld(b)||!this.i&&Ld(b).hasChildNodes())throw new N("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Vh(a,f||null,e||null);this.v=d||function(){return null};var k=this;this.o=[];var n=this.a[Rm];this.a[Rm]=function(z){Sm(k,z);if("function"===typeof n)n(z);else if("string"===typeof n){var A=K(n,l);"function"===typeof A&&A(z)}};var p=this.a[Tm];this.a[Tm]=function(){Sm(k,null);if("function"===typeof p)p();else if("string"===typeof p){var z=
K(p,l);"function"===typeof z&&z()}}}var Rm="callback",Tm="expired-callback",Pm="sitekey",Qm="size";function Sm(a,b){for(var c=0;c<a.o.length;c++)try{a.o[c](b)}catch(d){}}function Um(a,b){x(a.o,function(c){return c==b})}function Vm(a,b){a.h.push(b);b.ia(function(){Ia(a.h,b)});return b}h=Om.prototype;
h.za=function(){var a=this;return this.f?this.f:this.f=Vm(this,D().then(function(){if(ye()&&!pe())return ke();throw new N("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.v())}).then(function(b){a.g=b;return P(a.u,Qi,{})}).then(function(b){a.a[Pm]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
h.render=function(){Wm(this);var a=this;return Vm(this,this.za().then(function(){if(null===a.c){var b=a.l;if(!a.i){var c=Ld(b);b=Od("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};h.verify=function(){Wm(this);var a=this;return Vm(this,this.render().then(function(b){return new C(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(Um(a,e),c(f))};a.o.push(e);a.i&&a.g.execute(a.c)}})}))};h.reset=function(){Wm(this);null!==this.c&&this.g.reset(this.c)};
function Wm(a){if(a.D)throw new N("internal-error","RecaptchaVerifier instance has been destroyed.");}h.clear=function(){Wm(this);this.D=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Ld(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};
function Xm(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()}catch(g){throw new N("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new N("invalid-api-key");var e=this,f=null;try{f=this.b.auth().ya()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?ue(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,f):null;Om.call(this,c,a,b,function(){try{var g=e.b.auth().ea()}catch(k){g=
null}return g},f,Bf(Cf),d)}u(Xm,Om);function Ym(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new N("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=Zm.length)throw new N("internal-error",
"Argument validator received an unsupported number of arguments.");c=Zm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new N("argument-error",a+" failed: "+d);}var Zm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:m}}function $m(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:r}}function an(a,b){return{name:a||"",K:"a function",optional:!!b,M:q}}function bn(a,b){return{name:a||"",K:"null",optional:!!b,M:ia}}function cn(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function dn(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof mm)}}}
function en(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App)}}}function fn(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.la||!c)}}}
function gn(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function hn(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&m(a.type)&&q(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(e){return a.M(e)||b.M(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=jn(d,a[c],b[c].j)}}function kn(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:pa(function(e){return this[e]},c),set:pa(function(e,f,g,k){Ym(e,[g],[k],!0);this[f]=k},d,c,b[c].ub),enumerable:!0})}}function Z(a,b,c,d){a[b]=jn(b,c,d)}
function jn(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);Ym(e,c,g);return b.apply(this,g)}if(!c)return b;var e=ln(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function ln(a){a=a.split(".");return a[a.length-1]};Y(mm.prototype,{Xa:{name:"applyActionCode",j:[V("code")]},Ja:{name:"checkActionCode",j:[V("code")]},$a:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},yb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Wb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Zb:{name:"fetchProvidersForEmail",j:[V("email")]},$b:{name:"fetchSignInMethodsForEmail",j:[V("email")]},fa:{name:"getRedirectResult",j:[]},qc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
wc:{name:"onAuthStateChanged",j:[X(W(),an(),"nextOrObserver"),an("opt_error",!0),an("opt_completed",!0)]},xc:{name:"onIdTokenChanged",j:[X(W(),an(),"nextOrObserver"),an("opt_error",!0),an("opt_completed",!0)]},lb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),bn(null,!0),"opt_actionCodeSettings",!0)]},mb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},nb:{name:"setPersistence",j:[V("persistence")]},Qa:{name:"signInAndRetrieveDataWithCredential",
j:[fn()]},Ra:{name:"signInAnonymously",j:[]},Ic:{name:"signInAnonymouslyAndRetrieveData",j:[]},Jc:{name:"signInWithCredential",j:[fn()]},Nb:{name:"signInWithCustomToken",j:[V("token")]},Gc:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Ob:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Kc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Hc:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Lc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
hn()]},Mc:{name:"signInWithPopup",j:[gn()]},Nc:{name:"signInWithRedirect",j:[gn()]},Sc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(b){return!!(b&&b instanceof Q)}}}(),bn(),"user")]},ob:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Uc:{name:"useDeviceLanguage",j:[]},Vc:{name:"verifyPasswordResetCode",j:[V("code")]}});kn(mm.prototype,{lc:{name:"languageCode",ub:X(V(),bn(),"languageCode")}});mm.Persistence=Uj;
mm.Persistence.LOCAL="local";mm.Persistence.SESSION="session";mm.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[$m("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[$m("opt_forceRefresh",!0)]},fb:{name:"linkAndRetrieveDataWithCredential",j:[fn()]},rc:{name:"linkWithCredential",j:[fn()]},sc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),hn()]},tc:{name:"linkWithPopup",j:[gn()]},uc:{name:"linkWithRedirect",j:[gn()]},hb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[fn()]},Ac:{name:"reauthenticateWithCredential",j:[fn()]},Bc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),hn()]},Cc:{name:"reauthenticateWithPopup",j:[gn()]},Dc:{name:"reauthenticateWithRedirect",j:[gn()]},reload:{name:"reload",j:[]},kb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),bn(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Rc:{name:"unlink",j:[V("provider")]},qb:{name:"updateEmail",j:[V("email")]},rb:{name:"updatePassword",j:[V("password")]},Tc:{name:"updatePhoneNumber",j:[fn("phone")]},sb:{name:"updateProfile",j:[W("profile")]}});
Y(Cm.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Bm.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(C.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}});kn(cl.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",ub:$m("appVerificationDisabledForTesting")}});Y(dl.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(Sf,"fromJSON",function(a){a=m(a)?JSON.parse(a):a;for(var b,c=[cg,tg,Ag,$f],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(og,"credential",function(a,b){return new ng(a,b)},[V("email"),V("password")]);Y(ng.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(fg.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(fg,"credential",gg,[X(V(),W(),"token")]);Z(og,"credentialWithLink",ug,[V("email"),V("emailLink")]);
Y(hg.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(hg,"credential",ig,[X(V(),W(),"token")]);Y(jg.prototype,{ua:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(jg,"credential",kg,[X(V(),X(W(),bn()),"idToken"),X(V(),bn(),"accessToken",!0)]);Y(lg.prototype,{Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(lg,"credential",mg,[X(V(),W(),"token"),V("secret",!0)]);
Y(O.prototype,{ua:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),bn()),"optionsOrIdToken"),X(V(),bn(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(ag.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(Vf.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Z(Bg,"credential",Dg,[V("verificationId"),V("verificationCode")]);Y(Bg.prototype,{Va:{name:"verifyPhoneNumber",j:[V("phoneNumber"),hn()]}});
Y(wg.prototype,{w:{name:"toJSON",j:[V(null,!0)]}});Y(N.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Lg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Kg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Xm.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService){var a={Auth:mm,AuthCredential:Sf,Error:N};Z(a,"EmailAuthProvider",og,[]);Z(a,"FacebookAuthProvider",fg,[]);Z(a,"GithubAuthProvider",hg,[]);Z(a,"GoogleAuthProvider",jg,[]);Z(a,"TwitterAuthProvider",lg,[]);Z(a,"OAuthProvider",O,[V("providerId")]);Z(a,"SAMLAuthProvider",eg,[V("providerId")]);Z(a,"PhoneAuthProvider",Bg,[dn()]);Z(a,"RecaptchaVerifier",Xm,[X(V(),cn(),"recaptchaContainer"),W("recaptchaParameters",
!0),en()]);_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService("auth",function(b,c){b=new mm(b);c({INTERNAL:{getUid:t(b.getUid,b),getToken:t(b.cc,b),addAuthTokenListener:t(b.Vb,b),removeAuthTokenListener:t(b.Ec,b)}});return b},a,function(b,c){if("create"===b)try{c.auth()}catch(d){}});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

//# sourceMappingURL=auth.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

const firebase = __webpack_require__(148);
const mobx = __webpack_require__(1);
__webpack_require__(147);

var provider = new firebase.auth.GoogleAuthProvider();

let user = mobx.observable({
  name: "",
  email: "",
  photoURL: "",
  isLoggedIn: false,

  loginWithGoogle() {
    
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(resp) {
        user.setData(resp.displayName, resp.email, resp.photoURL)
      })
      .catch(function(error) {
        console.log("error:", error);
      });
  },

  logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        user.setData("","","")
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  setData(name, email, url) {
    this.name = name;
    this.email = email;
    this.photoURL = url;
  },

  getUserInfo: function() {
    let name, email, photoURL, isLoggedIn;

    return new Promise((resolve, reject)=> {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const { displayName, email, photoURL } = user;
          resolve({
            displayName, email, photoURL
          })
        } else {
          resolve('Not logged in')
        }
      });
    })


  }
});

module.exports = {
  user
};


/***/ }),
/* 146 */,
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=index.esm.js.map


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(2);
var firebase = _interopDefault(__webpack_require__(131));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ })
/******/ ]);
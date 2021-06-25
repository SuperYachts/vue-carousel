(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e553");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueCarousel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6ce3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslateScroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("df52");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslateScroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslateScroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TranslateScroll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "98b8":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("98b8");


/***/ }),

/***/ "c973":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "df52":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e553":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1b5b3806-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueCarousel.vue?vue&type=template&id=c29bdbfc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('element-width',{staticClass:"efficient-carousel-container",class:{ panning: _vm.panning },style:({
        width: ("calc(100% + " + _vm.margin + "px)"),
        'margin-right': ("-" + _vm.surroundMargin + "px"),
        'margin-left': ("-" + _vm.surroundMargin + "px"),
    }),on:{"touchstart":_vm.startPanning,"touchend":_vm.stopPanning,"touchcancel":_vm.stopPanning,"touchmove":_vm.handlePanning,"mousedown":function($event){$event.preventDefault();return _vm.startPanning($event)},"mouseleave":_vm.stopPanning,"mouseup":_vm.stopPanning,"mousemove":_vm.handlePanning},model:{value:(_vm.clientWidth),callback:function ($$v) {_vm.clientWidth=$$v},expression:"clientWidth"}},[_c('translate-scroll',{attrs:{"value":_vm.translateScroll,"transition-duration":_vm.transitioning ? '0.5s' : '0s'},on:{"transitionend":_vm.handleTransitionEnd}},[_c('div',{staticClass:"efficient-carousel"},_vm._l((_vm.itemsRendered),function(ref){
    var item = ref.item;
    var index = ref.index;
return _c('div',{key:index,staticClass:"efficient-carousel-item",style:({
                    'padding-right': (_vm.halfMargin + "px"),
                    'padding-left': (_vm.halfMargin + "px"),
                    width: ((100 / _vm.numberInView) + "%"),
                })},[(_vm.isValidIndex(index))?_vm._t("default",null,{"item":item,"index":index}):_vm._e()],2)}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueCarousel.vue?vue&type=template&id=c29bdbfc&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1b5b3806-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/TranslateScroll.vue?vue&type=template&id=5c682dec&functional=true&
var TranslateScrollvue_type_template_id_5c682dec_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('div',{staticClass:"translate-scroll"},[_c('div',{staticClass:"translate-scroll-position",style:({
            transform: ("translateX(" + (_vm.props.value) + "px)"),
            transitionDuration: _vm.props.transitionDuration,
            transitionTimingFunction: _vm.props.transitionTimingFunction,
        }),on:{"transitionend":_vm.listeners.transitionend}},[_vm._t("default")],2)])}
var TranslateScrollvue_type_template_id_5c682dec_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/TranslateScroll.vue?vue&type=template&id=5c682dec&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/TranslateScroll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TranslateScrollvue_type_script_lang_js_ = ({
  name: 'translate-scroll',
  props: {
    value: {
      type: Number,
      required: true
    },
    transitionDuration: {
      type: String,
      default: '0s'
    },
    transitionTimingFunction: {
      type: String,
      default: 'ease'
    }
  }
});
// CONCATENATED MODULE: ./src/TranslateScroll.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TranslateScrollvue_type_script_lang_js_ = (TranslateScrollvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/TranslateScroll.vue?vue&type=style&index=0&lang=scss&
var TranslateScrollvue_type_style_index_0_lang_scss_ = __webpack_require__("6ce3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/TranslateScroll.vue






/* normalize component */

var component = normalizeComponent(
  src_TranslateScrollvue_type_script_lang_js_,
  TranslateScrollvue_type_template_id_5c682dec_functional_true_render,
  TranslateScrollvue_type_template_id_5c682dec_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var TranslateScroll = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1b5b3806-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ElementWidth.vue?vue&type=template&id=9440cb9e&
var ElementWidthvue_type_template_id_9440cb9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"element-width"},_vm.$listeners),[_c('global-events',{attrs:{"target":"window"},on:{"resize":_vm.setClientWidth}}),_vm._t("default")],2)}
var ElementWidthvue_type_template_id_9440cb9e_staticRenderFns = []


// CONCATENATED MODULE: ./src/ElementWidth.vue?vue&type=template&id=9440cb9e&

// CONCATENATED MODULE: ./node_modules/vue-global-events/dist/vue-global-events.es.js
/**
 * vue-global-events v1.1.2
 * (c) 2019 Damian Dulisz <damian.dulisz@gmail.com>, Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */

var _isIE;
function isIE () {
  return _isIE == null
    ? (_isIE = /msie|trident/.test(window.navigator.userAgent.toLowerCase()))
    : _isIE
}

var modifiersRE = /^[~!&]*/;
var nonEventNameCharsRE = /\W+/;
var names = {
  '!': 'capture',
  '~': 'once',
  '&': 'passive'
};

function extractEventOptions (eventDescriptor) {
  var ref = eventDescriptor.match(modifiersRE);
  var modifiers = ref[0];

  // IE only supports capture option and it has to be a boolean
  // https://github.com/shentao/vue-global-events/issues/14
  if (isIE()) {
    return modifiers.indexOf('!') > -1
  }

  return modifiers.split('').reduce(function (options, modifier) {
    options[names[modifier]] = true;
    return options
  }, {})
}

var vue_global_events_es_index = {
  name: 'GlobalEvents',
  props: {
    target: {
      type: String,
      default: 'document'
    },
    filter: {
      type: Function,
      default: function (e) { return true; }
    }
  },

  render: function (h) { return h(); },

  mounted: function mounted () {
    var this$1 = this;

    this._listeners = Object.create(null);
    Object.keys(this.$listeners).forEach(function (event) {
      var listener = this$1.$listeners[event];
      var handler = function (e) {
        this$1.filter(e, listener, event) && listener(e);
      };
      window[this$1.target].addEventListener(
        event.replace(nonEventNameCharsRE, ''),
        handler,
        extractEventOptions(event)
      );
      this$1._listeners[event] = handler;
    });
  },

  beforeDestroy: function beforeDestroy () {
    var this$1 = this;

    for (var event in this$1._listeners) {
      window[this$1.target].removeEventListener(
        event.replace(nonEventNameCharsRE, ''),
        this$1._listeners[event],
        extractEventOptions(event)
      );
    }
  }
};

/* harmony default export */ var vue_global_events_es = (vue_global_events_es_index);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/ElementWidth.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ElementWidthvue_type_script_lang_js_ = ({
  name: 'element-width',
  components: {
    GlobalEvents: vue_global_events_es
  },
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  mounted: function () {
    var _mounted = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();

            case 2:
              this.setClientWidth();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  updated: function () {
    var _updated = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.$nextTick();

            case 2:
              this.setClientWidth();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function updated() {
      return _updated.apply(this, arguments);
    }

    return updated;
  }(),
  methods: {
    /**
     * Emit the client width
     */
    setClientWidth: function setClientWidth() {
      var clientWidth = this.$el && this.$el.getBoundingClientRect ? Math.round(this.$el.getBoundingClientRect().width) : 1;
      this.$emit('input', clientWidth);
    }
  }
});
// CONCATENATED MODULE: ./src/ElementWidth.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ElementWidthvue_type_script_lang_js_ = (ElementWidthvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/ElementWidth.vue





/* normalize component */

var ElementWidth_component = normalizeComponent(
  src_ElementWidthvue_type_script_lang_js_,
  ElementWidthvue_type_template_id_9440cb9e_render,
  ElementWidthvue_type_template_id_9440cb9e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ElementWidth = (ElementWidth_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueCarousel.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/**
 * Modulus between 0 and MAX, not -MAX and MAX
 *
 * @param {Number} a
 * @param {Number} b
 *
 * @returns {Number}
 */

function modulus(a, b) {
  return (a % b + b) % b;
}

/* harmony default export */ var VueCarouselvue_type_script_lang_js_ = ({
  name: 'vue-carousel',
  components: {
    ElementWidth: ElementWidth,
    TranslateScroll: TranslateScroll
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    numberInView: {
      type: Number,
      default: 1
    },
    margin: {
      type: Number,
      default: 20
    },
    center: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    panningMinimumX: {
      type: Number,
      default: 8
    },
    panningMaximumY: {
      type: Number,
      default: 200
    },
    panningRatio: {
      type: Number,
      default: 2
    },
    marginError: {
      type: Number,
      default: 0
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      scroll: 0,
      translateScroll: 0,
      transitioning: false,
      clientWidth: 1,
      panning: false
    };
  },
  computed: {
    /**
     * The width of an individual item, including margins
     *
     * @returns {Number}
     */
    itemWidth: function itemWidth() {
      return Math.round(this.clientWidth / this.numberInView);
    },

    /**
     * The width of all possible items together
     *
     * @returns {Number}
     */
    totalWidth: function totalWidth() {
      return this.itemWidth * this.itemCount;
    },
    rawIndex: {
      /**
       * The unrounded index based on the scroll
       *
       * @returns {Number}
       */
      get: function get() {
        var roundToDigits = 100;
        return Math.round(roundToDigits * this.itemCount * (this.itemScroll / this.totalWidth)) / roundToDigits;
      },

      /**
       * Transition to the set index
       *
       * @param {Number} value
       */
      set: function set(value) {
        this.itemScroll = this.totalWidth * (value / this.itemCount);
      }
    },
    index: {
      /**
       * The index calculated by the current scroll
       *
       * @returns {Number}
       */
      get: function get() {
        return modulus(Math.ceil(this.rawIndex), this.itemCount);
      },

      /**
       * Set the rawIndex to the nearest value matching index
       *
       * @param {Number} value
       */
      set: function set(value) {
        this.rawIndex = value + Math.floor(this.rawIndex / this.itemCount) * this.itemCount;
      }
    },

    /**
     * Half of the margin width between items
     *
     * @returns {Number}
     */
    halfMargin: function halfMargin() {
      return this.margin / 2;
    },

    /**
     * Half margin but 1 pixel bigger to prevent accidental overlap
     *
     * @returns {Number}
     */
    surroundMargin: function surroundMargin() {
      return this.halfMargin - this.marginError;
    },

    /**
     * The number of items
     *
     * @returns {Number}
     */
    itemCount: function itemCount() {
      return this.items.length;
    },

    /**
     * Get start and end of render items
     *
     * @returns {{ start: Number, end: Number }}
     */
    startEnd: function startEnd() {
      var padding = 1;

      if (this.center) {
        var centerPadding = padding + Math.ceil(this.numberInView / 2);

        var _start = this.index - centerPadding;

        var _end = this.index + centerPadding;

        return {
          start: _start,
          end: _end
        };
      }

      var start = this.index - padding;
      var end = start + this.numberInView + padding;
      return {
        start: start,
        end: end
      };
    },

    /**
     * Which items to render in the DOM
     *
     * @returns {Array<Object>}
     */
    itemsRendered: function itemsRendered() {
      var items = [];
      var _this$startEnd = this.startEnd,
          start = _this$startEnd.start,
          end = _this$startEnd.end;

      for (var i = start; i <= end; i++) {
        var index = this.getItemIndex(i);
        items.push({
          index: i,
          item: this.items[index]
        });
      }

      return items;
    },
    itemScroll: {
      /**
       * Scroll adjusted for items
       *
       * @returns {Number}
       */
      get: function get() {
        return -this.scroll;
      },

      /**
       * Set the scroll based on the item scroll
       *
       * @param {Number} value
       */
      set: function set(value) {
        this.scroll = -value;
      }
    }
  },
  watch: {
    /**
     * Scroll adjusted for the translate
     *
     * @param {Number} to
     * @param {Number} from
     */
    scroll: function scroll(to, from) {
      this.runScrollTransition(to, from);
    },

    /**
     * Scroll adjusted for the translate
     */
    itemWidth: function itemWidth() {
      this.translateScroll = this.getTranslateScroll();
    },

    /**
     * Change index based on value
     *
     * @param {Number} index
     */
    value: function () {
      var _value = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(index) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(index < 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                this.index = index;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function value(_x) {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  },
  created: function created() {
    this.goingToNearest = false;
    this.initialScroll = null;
    this.initialTouchPosition = null;
    this.mousedown = false;
  },
  methods: {
    /**
     * Get scroll location for the translate
     *
     * @returns {Number}
     */
    getTranslateScroll: function getTranslateScroll() {
      var scroll = modulus(Math.round(this.scroll), this.itemWidth);

      if (this.center) {
        scroll -= this.numberInView % 2 === 0 ? this.itemWidth / 2 : this.itemWidth;
      }

      return scroll - this.itemWidth;
    },

    /**
     * Run the translate scroll CSS animation
     *
     * @param {Number} rawFrom
     * @param {Number} rawTo
     */
    runScrollTransition: function () {
      var _runScrollTransition = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(rawFrom, rawTo) {
        var to, startFrom;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.goingToNearest) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                to = this.getTranslateScroll();

                if (!this.panning) {
                  _context2.next = 6;
                  break;
                }

                this.translateScroll = to;
                return _context2.abrupt("return");

              case 6:
                startFrom = rawTo > rawFrom ? to + this.itemWidth : to - this.itemWidth;
                this.transitioning = false;
                this.translateScroll = startFrom;
                _context2.next = 11;
                return this.$nextTick();

              case 11:
                this.transitioning = true;
                this.translateScroll = to;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function runScrollTransition(_x2, _x3) {
        return _runScrollTransition.apply(this, arguments);
      }

      return runScrollTransition;
    }(),

    /**
     * Transition to the nearest index
     */
    transitionToNearest: function () {
      var _transitionToNearest = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        var oldRawIndex;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.index !== this.rawIndex)) {
                  _context3.next = 10;
                  break;
                }

                oldRawIndex = this.rawIndex;
                this.goingToNearest = true;
                this.index = Math.round(this.getItemIndex(this.rawIndex));

                if (!(oldRawIndex > this.rawIndex)) {
                  _context3.next = 8;
                  break;
                }

                this.translateScroll -= this.itemWidth;
                _context3.next = 8;
                return this.$nextTick();

              case 8:
                this.transitioning = true;
                this.translateScroll = this.getTranslateScroll();

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function transitionToNearest() {
        return _transitionToNearest.apply(this, arguments);
      }

      return transitionToNearest;
    }(),

    /**
     * Finish the CSS transition
     */
    handleTransitionEnd: function handleTransitionEnd() {
      this.transitioning = false;
      this.goingToNearest = false;
      this.$emit('input', this.index);
    },

    /**
     * Move to a different index
     *
     * @param {Number} distance
     */
    move: function move(distance) {
      this.index += Math.round(distance);
    },

    /**
     * Get an items modulus index
     *
     * @param {Number} index
     *
     * @returns {Number}
     */
    getItemIndex: function getItemIndex(index) {
      return modulus(index, this.itemCount);
    },

    /**
     * Get the touch position of an event
     *
     * @param {Event} e
     *
     * @returns {Object}
     */
    getTouchPosition: function getTouchPosition(e) {
      return {
        x: e.clientX || e.touches[0].clientX,
        y: e.clientY || e.touches[0].clientY
      };
    },

    /**
     * Start handling panning
     *
     * @param {Event} e
     */
    startPanning: function startPanning(e) {
      this.initialTouchPosition = this.getTouchPosition(e);
      this.initialScroll = this.itemScroll;
      this.mousedown = true;
    },

    /**
     * Stop handling panning
     *
     * @param {Event} e
     */
    stopPanning: function stopPanning(e) {
      this.mousedown = false;

      if (!this.panning) {
        return;
      }

      if (this.itemScroll !== this.initialScroll) {
        e.preventDefault();
      }

      this.panning = false;
      this.transitionToNearest();
    },

    /**
     * Check if an item index is valid
     *
     * @param {Number} index
     *
     * @returns {Boolean}
     */
    isValidIndex: function isValidIndex(index) {
      if (this.wrap) {
        return true;
      }

      return index >= 0 && index < this.items.length;
    },

    /**
     * Move the scroll position based on the distance the touch event
     * moved
     *
     * @param {Event} e
     */
    handlePanning: function handlePanning(e) {
      if (!this.mousedown) {
        return;
      }

      var currentTouchPosition = this.getTouchPosition(e);
      var distanceX = currentTouchPosition.x - this.initialTouchPosition.x;

      if (!this.isValidIndex(this.index - 1)) {
        if (distanceX > 0) {
          return;
        }
      }

      if (!this.isValidIndex(this.rawIndex + this.numberInView)) {
        if (distanceX < 0) {
          return;
        }
      }

      if (!this.panning) {
        var distanceXAbs = Math.abs(distanceX);
        var distanceYAbs = Math.abs(currentTouchPosition.y - this.initialTouchPosition.y); // Not enough movement overall

        if (distanceXAbs < this.panningMinimumX) {
          return;
        } // Too much vertical, must be trying to scroll


        if (distanceYAbs > this.panningMaximumY) {
          return;
        } // Not enough horizontal vs vertical movement


        if (distanceXAbs < distanceYAbs * this.panningRatio) {
          return;
        }
      }

      this.panning = true;
      this.transitioning = false;
      this.itemScroll = this.initialScroll - distanceX;
    }
  }
});
// CONCATENATED MODULE: ./src/VueCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueCarouselvue_type_script_lang_js_ = (VueCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VueCarousel.vue?vue&type=style&index=0&lang=scss&
var VueCarouselvue_type_style_index_0_lang_scss_ = __webpack_require__("00ae");

// CONCATENATED MODULE: ./src/VueCarousel.vue






/* normalize component */

var VueCarousel_component = normalizeComponent(
  src_VueCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueCarousel = (VueCarousel_component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (VueCarousel);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map
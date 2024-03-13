"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports2, module2) {
    "use strict";
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports2, module2) {
    "use strict";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports2, module2) {
    "use strict";
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports2, module2) {
    "use strict";
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports2, module2) {
    "use strict";
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e3) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports2, module2) {
    "use strict";
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports2, module2) {
    "use strict";
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports2, module2) {
    "use strict";
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports2, module2) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports2, module2) {
    "use strict";
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module2.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports2, module2) {
    "use strict";
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports2, module2) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports2, module2) {
    "use strict";
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports2, module2) {
    "use strict";
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports2, module2) {
    "use strict";
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e3) {
        }
        try {
          return func + "";
        } catch (e3) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports2, module2) {
    "use strict";
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports2, module2) {
    "use strict";
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue2;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports2, module2) {
    "use strict";
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports2, module2) {
    "use strict";
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports2, module2) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports2, module2) {
    "use strict";
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports2, module2) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data4 = this.__data__;
      if (nativeCreate) {
        var result = data4[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data4, key) ? data4[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports2, module2) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data4 = this.__data__;
      return nativeCreate ? data4[key] !== void 0 : hasOwnProperty.call(data4, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports2, module2) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data4 = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data4[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports2, module2) {
    "use strict";
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports2, module2) {
    "use strict";
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports2, module2) {
    "use strict";
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
    "use strict";
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data4 = this.__data__, index = assocIndexOf(data4, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data4.length - 1;
      if (index == lastIndex) {
        data4.pop();
      } else {
        splice.call(data4, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports2, module2) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data4 = this.__data__, index = assocIndexOf(data4, key);
      return index < 0 ? void 0 : data4[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports2, module2) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports2, module2) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data4 = this.__data__, index = assocIndexOf(data4, key);
      if (index < 0) {
        ++this.size;
        data4.push([key, value]);
      } else {
        data4[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports2, module2) {
    "use strict";
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports2, module2) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
    "use strict";
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports2, module2) {
    "use strict";
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports2, module2) {
    "use strict";
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data4 = map.__data__;
      return isKeyable(key) ? data4[typeof key == "string" ? "string" : "hash"] : data4.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data4 = getMapData(this, key), size = data4.size;
      data4.set(key, value);
      this.size += data4.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports2, module2) {
    "use strict";
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports2, module2) {
    "use strict";
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module2.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports2, module2) {
    "use strict";
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module2.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports2, module2) {
    "use strict";
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote2, subString) {
        result.push(quote2 ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module2.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports2, module2) {
    "use strict";
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module2.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports2, module2) {
    "use strict";
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports2, module2) {
    "use strict";
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module2.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports2, module2) {
    "use strict";
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module2.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports2, module2) {
    "use strict";
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports2, module2) {
    "use strict";
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module2.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports2, module2) {
    "use strict";
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module2.exports = get2;
  }
});

// node_modules/fast-deep-equal/es6/index.js
var require_es6 = __commonJS({
  "node_modules/fast-deep-equal/es6/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal2(a3, b2) {
      if (a3 === b2)
        return true;
      if (a3 && b2 && typeof a3 == "object" && typeof b2 == "object") {
        if (a3.constructor !== b2.constructor)
          return false;
        var length, i3, keys;
        if (Array.isArray(a3)) {
          length = a3.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal2(a3[i3], b2[i3]))
              return false;
          return true;
        }
        if (a3 instanceof Map && b2 instanceof Map) {
          if (a3.size !== b2.size)
            return false;
          for (i3 of a3.entries())
            if (!b2.has(i3[0]))
              return false;
          for (i3 of a3.entries())
            if (!equal2(i3[1], b2.get(i3[0])))
              return false;
          return true;
        }
        if (a3 instanceof Set && b2 instanceof Set) {
          if (a3.size !== b2.size)
            return false;
          for (i3 of a3.entries())
            if (!b2.has(i3[0]))
              return false;
          return true;
        }
        if (ArrayBuffer.isView(a3) && ArrayBuffer.isView(b2)) {
          length = a3.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (a3[i3] !== b2[i3])
              return false;
          return true;
        }
        if (a3.constructor === RegExp)
          return a3.source === b2.source && a3.flags === b2.flags;
        if (a3.valueOf !== Object.prototype.valueOf)
          return a3.valueOf() === b2.valueOf();
        if (a3.toString !== Object.prototype.toString)
          return a3.toString() === b2.toString();
        keys = Object.keys(a3);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3]))
            return false;
        for (i3 = length; i3-- !== 0; ) {
          var key = keys[i3];
          if (!equal2(a3[key], b2[key]))
            return false;
        }
        return true;
      }
      return a3 !== a3 && b2 !== b2;
    };
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
    "use strict";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module2.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports2, module2) {
    "use strict";
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports2, module2) {
    "use strict";
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
    "use strict";
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports2, module2) {
    "use strict";
    function baseIsNaN(value) {
      return value !== value;
    }
    module2.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports2, module2) {
    "use strict";
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module2.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports2, module2) {
    "use strict";
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module2.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports2, module2) {
    "use strict";
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module2.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports2, module2) {
    "use strict";
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module2.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports2, module2) {
    "use strict";
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports2, module2) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports2, module2) {
    "use strict";
    function noop() {
    }
    module2.exports = noop;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports2, module2) {
    "use strict";
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module2.exports = setToArray;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports2, module2) {
    "use strict";
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module2.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports2, module2) {
    "use strict";
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module2.exports = baseUniq;
  }
});

// node_modules/lodash/uniqWith.js
var require_uniqWith = __commonJS({
  "node_modules/lodash/uniqWith.js"(exports2, module2) {
    "use strict";
    var baseUniq = require_baseUniq();
    function uniqWith2(array, comparator) {
      comparator = typeof comparator == "function" ? comparator : void 0;
      return array && array.length ? baseUniq(array, void 0, comparator) : [];
    }
    module2.exports = uniqWith2;
  }
});

// node_modules/discord-api-types/gateway/common.js
var require_common = __commonJS({
  "node_modules/discord-api-types/gateway/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/gateway/v10.js
var require_v10 = __commonJS({
  "node_modules/discord-api-types/gateway/v10.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GatewayDispatchEvents = exports2.GatewayIntentBits = exports2.GatewayCloseCodes = exports2.GatewayOpcodes = exports2.GatewayVersion = void 0;
    __exportStar(require_common(), exports2);
    exports2.GatewayVersion = "10";
    var GatewayOpcodes2;
    (function(GatewayOpcodes3) {
      GatewayOpcodes3[GatewayOpcodes3["Dispatch"] = 0] = "Dispatch";
      GatewayOpcodes3[GatewayOpcodes3["Heartbeat"] = 1] = "Heartbeat";
      GatewayOpcodes3[GatewayOpcodes3["Identify"] = 2] = "Identify";
      GatewayOpcodes3[GatewayOpcodes3["PresenceUpdate"] = 3] = "PresenceUpdate";
      GatewayOpcodes3[GatewayOpcodes3["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
      GatewayOpcodes3[GatewayOpcodes3["Resume"] = 6] = "Resume";
      GatewayOpcodes3[GatewayOpcodes3["Reconnect"] = 7] = "Reconnect";
      GatewayOpcodes3[GatewayOpcodes3["RequestGuildMembers"] = 8] = "RequestGuildMembers";
      GatewayOpcodes3[GatewayOpcodes3["InvalidSession"] = 9] = "InvalidSession";
      GatewayOpcodes3[GatewayOpcodes3["Hello"] = 10] = "Hello";
      GatewayOpcodes3[GatewayOpcodes3["HeartbeatAck"] = 11] = "HeartbeatAck";
    })(GatewayOpcodes2 = exports2.GatewayOpcodes || (exports2.GatewayOpcodes = {}));
    var GatewayCloseCodes2;
    (function(GatewayCloseCodes3) {
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownError"] = 4e3] = "UnknownError";
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownOpcode"] = 4001] = "UnknownOpcode";
      GatewayCloseCodes3[GatewayCloseCodes3["DecodeError"] = 4002] = "DecodeError";
      GatewayCloseCodes3[GatewayCloseCodes3["NotAuthenticated"] = 4003] = "NotAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
      GatewayCloseCodes3[GatewayCloseCodes3["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidSeq"] = 4007] = "InvalidSeq";
      GatewayCloseCodes3[GatewayCloseCodes3["RateLimited"] = 4008] = "RateLimited";
      GatewayCloseCodes3[GatewayCloseCodes3["SessionTimedOut"] = 4009] = "SessionTimedOut";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidShard"] = 4010] = "InvalidShard";
      GatewayCloseCodes3[GatewayCloseCodes3["ShardingRequired"] = 4011] = "ShardingRequired";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidIntents"] = 4013] = "InvalidIntents";
      GatewayCloseCodes3[GatewayCloseCodes3["DisallowedIntents"] = 4014] = "DisallowedIntents";
    })(GatewayCloseCodes2 = exports2.GatewayCloseCodes || (exports2.GatewayCloseCodes = {}));
    var GatewayIntentBits3;
    (function(GatewayIntentBits4) {
      GatewayIntentBits4[GatewayIntentBits4["Guilds"] = 1] = "Guilds";
      GatewayIntentBits4[GatewayIntentBits4["GuildMembers"] = 2] = "GuildMembers";
      GatewayIntentBits4[GatewayIntentBits4["GuildModeration"] = 4] = "GuildModeration";
      GatewayIntentBits4[GatewayIntentBits4["GuildBans"] = 4] = "GuildBans";
      GatewayIntentBits4[GatewayIntentBits4["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
      GatewayIntentBits4[GatewayIntentBits4["GuildIntegrations"] = 16] = "GuildIntegrations";
      GatewayIntentBits4[GatewayIntentBits4["GuildWebhooks"] = 32] = "GuildWebhooks";
      GatewayIntentBits4[GatewayIntentBits4["GuildInvites"] = 64] = "GuildInvites";
      GatewayIntentBits4[GatewayIntentBits4["GuildVoiceStates"] = 128] = "GuildVoiceStates";
      GatewayIntentBits4[GatewayIntentBits4["GuildPresences"] = 256] = "GuildPresences";
      GatewayIntentBits4[GatewayIntentBits4["GuildMessages"] = 512] = "GuildMessages";
      GatewayIntentBits4[GatewayIntentBits4["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
      GatewayIntentBits4[GatewayIntentBits4["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
      GatewayIntentBits4[GatewayIntentBits4["DirectMessages"] = 4096] = "DirectMessages";
      GatewayIntentBits4[GatewayIntentBits4["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
      GatewayIntentBits4[GatewayIntentBits4["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
      GatewayIntentBits4[GatewayIntentBits4["MessageContent"] = 32768] = "MessageContent";
      GatewayIntentBits4[GatewayIntentBits4["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
      GatewayIntentBits4[GatewayIntentBits4["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
      GatewayIntentBits4[GatewayIntentBits4["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
    })(GatewayIntentBits3 = exports2.GatewayIntentBits || (exports2.GatewayIntentBits = {}));
    var GatewayDispatchEvents2;
    (function(GatewayDispatchEvents3) {
      GatewayDispatchEvents3["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
      GatewayDispatchEvents3["ChannelCreate"] = "CHANNEL_CREATE";
      GatewayDispatchEvents3["ChannelDelete"] = "CHANNEL_DELETE";
      GatewayDispatchEvents3["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
      GatewayDispatchEvents3["ChannelUpdate"] = "CHANNEL_UPDATE";
      GatewayDispatchEvents3["GuildBanAdd"] = "GUILD_BAN_ADD";
      GatewayDispatchEvents3["GuildBanRemove"] = "GUILD_BAN_REMOVE";
      GatewayDispatchEvents3["GuildCreate"] = "GUILD_CREATE";
      GatewayDispatchEvents3["GuildDelete"] = "GUILD_DELETE";
      GatewayDispatchEvents3["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
      GatewayDispatchEvents3["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
      GatewayDispatchEvents3["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
      GatewayDispatchEvents3["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
      GatewayDispatchEvents3["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
      GatewayDispatchEvents3["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
      GatewayDispatchEvents3["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
      GatewayDispatchEvents3["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
      GatewayDispatchEvents3["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
      GatewayDispatchEvents3["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
      GatewayDispatchEvents3["GuildUpdate"] = "GUILD_UPDATE";
      GatewayDispatchEvents3["IntegrationCreate"] = "INTEGRATION_CREATE";
      GatewayDispatchEvents3["IntegrationDelete"] = "INTEGRATION_DELETE";
      GatewayDispatchEvents3["IntegrationUpdate"] = "INTEGRATION_UPDATE";
      GatewayDispatchEvents3["InteractionCreate"] = "INTERACTION_CREATE";
      GatewayDispatchEvents3["InviteCreate"] = "INVITE_CREATE";
      GatewayDispatchEvents3["InviteDelete"] = "INVITE_DELETE";
      GatewayDispatchEvents3["MessageCreate"] = "MESSAGE_CREATE";
      GatewayDispatchEvents3["MessageDelete"] = "MESSAGE_DELETE";
      GatewayDispatchEvents3["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
      GatewayDispatchEvents3["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
      GatewayDispatchEvents3["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
      GatewayDispatchEvents3["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
      GatewayDispatchEvents3["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
      GatewayDispatchEvents3["MessageUpdate"] = "MESSAGE_UPDATE";
      GatewayDispatchEvents3["PresenceUpdate"] = "PRESENCE_UPDATE";
      GatewayDispatchEvents3["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
      GatewayDispatchEvents3["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
      GatewayDispatchEvents3["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
      GatewayDispatchEvents3["Ready"] = "READY";
      GatewayDispatchEvents3["Resumed"] = "RESUMED";
      GatewayDispatchEvents3["ThreadCreate"] = "THREAD_CREATE";
      GatewayDispatchEvents3["ThreadDelete"] = "THREAD_DELETE";
      GatewayDispatchEvents3["ThreadListSync"] = "THREAD_LIST_SYNC";
      GatewayDispatchEvents3["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
      GatewayDispatchEvents3["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
      GatewayDispatchEvents3["ThreadUpdate"] = "THREAD_UPDATE";
      GatewayDispatchEvents3["TypingStart"] = "TYPING_START";
      GatewayDispatchEvents3["UserUpdate"] = "USER_UPDATE";
      GatewayDispatchEvents3["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
      GatewayDispatchEvents3["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
      GatewayDispatchEvents3["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
      GatewayDispatchEvents3["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
      GatewayDispatchEvents3["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
      GatewayDispatchEvents3["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
      GatewayDispatchEvents3["AutoModerationRuleCreate"] = "AUTO_MODERATION_RULE_CREATE";
      GatewayDispatchEvents3["AutoModerationRuleUpdate"] = "AUTO_MODERATION_RULE_UPDATE";
      GatewayDispatchEvents3["AutoModerationRuleDelete"] = "AUTO_MODERATION_RULE_DELETE";
      GatewayDispatchEvents3["AutoModerationActionExecution"] = "AUTO_MODERATION_ACTION_EXECUTION";
      GatewayDispatchEvents3["GuildAuditLogEntryCreate"] = "GUILD_AUDIT_LOG_ENTRY_CREATE";
      GatewayDispatchEvents3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      GatewayDispatchEvents3["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
      GatewayDispatchEvents3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
    })(GatewayDispatchEvents2 = exports2.GatewayDispatchEvents || (exports2.GatewayDispatchEvents = {}));
  }
});

// node_modules/discord-api-types/globals.js
var require_globals = __commonJS({
  "node_modules/discord-api-types/globals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FormattingPatterns = void 0;
    exports2.FormattingPatterns = {
      /**
       * Regular expression for matching a user mention, strictly without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      User: /<@(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, strictly with a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithNickname: /<@!(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, with or without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a channel mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Channel: /<#(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Role: /<@&(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a application command mention
       *
       * The `fullName` (possibly including `name`, `subcommandOrGroup` and `subcommand`) and `id` group properties are present on the `exec` result of this expression
       */
      SlashCommand: (
        // eslint-disable-next-line unicorn/no-unsafe-regex
        /<\/(?<fullName>(?<name>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: (?<subcommandOrGroup>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?(?: (?<subcommand>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?):(?<id>\d{17,20})>/u
      ),
      /**
       * Regular expression for matching a custom emoji, either static or animated
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly an animated custom emoji
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly a static custom emoji
       *
       * The `name` and `id` group properties are present on the `exec` result of this expression
       */
      StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a timestamp, either default or custom styled
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      // eslint-disable-next-line prefer-named-capture-group
      Timestamp: /<t:(?<timestamp>-?\d{1,13})(:(?<style>[DFRTdft]))?>/,
      /**
       * Regular expression for matching strictly default styled timestamps
       *
       * The `timestamp` group property is present on the `exec` result of this expression
       */
      DefaultStyledTimestamp: /<t:(?<timestamp>-?\d{1,13})>/,
      /**
       * Regular expression for matching strictly custom styled timestamps
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      StyledTimestamp: /<t:(?<timestamp>-?\d{1,13}):(?<style>[DFRTdft])>/
    };
    Object.freeze(exports2.FormattingPatterns);
  }
});

// node_modules/discord-api-types/payloads/common.js
var require_common2 = __commonJS({
  "node_modules/discord-api-types/payloads/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PermissionFlagsBits = void 0;
    exports2.PermissionFlagsBits = {
      /**
       * Allows creation of instant invites
       *
       * Applies to channel types: Text, Voice, Stage
       */
      CreateInstantInvite: 1n << 0n,
      /**
       * Allows kicking members
       */
      // eslint-disable-next-line sonarjs/no-identical-expressions
      KickMembers: 1n << 1n,
      /**
       * Allows banning members
       */
      BanMembers: 1n << 2n,
      /**
       * Allows all permissions and bypasses channel permission overwrites
       */
      Administrator: 1n << 3n,
      /**
       * Allows management and editing of channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageChannels: 1n << 4n,
      /**
       * Allows management and editing of the guild
       */
      ManageGuild: 1n << 5n,
      /**
       * Allows for the addition of reactions to messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AddReactions: 1n << 6n,
      /**
       * Allows for viewing of audit logs
       */
      ViewAuditLog: 1n << 7n,
      /**
       * Allows for using priority speaker in a voice channel
       *
       * Applies to channel types: Voice
       */
      PrioritySpeaker: 1n << 8n,
      /**
       * Allows the user to go live
       *
       * Applies to channel types: Voice, Stage
       */
      Stream: 1n << 9n,
      /**
       * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ViewChannel: 1n << 10n,
      /**
       * Allows for sending messages in a channel and creating threads in a forum
       * (does not allow sending messages in threads)
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendMessages: 1n << 11n,
      /**
       * Allows for sending of `/tts` messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendTTSMessages: 1n << 12n,
      /**
       * Allows for deletion of other users messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageMessages: 1n << 13n,
      /**
       * Links sent by users with this permission will be auto-embedded
       *
       * Applies to channel types: Text, Voice, Stage
       */
      EmbedLinks: 1n << 14n,
      /**
       * Allows for uploading images and files
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AttachFiles: 1n << 15n,
      /**
       * Allows for reading of message history
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ReadMessageHistory: 1n << 16n,
      /**
       * Allows for using the `@everyone` tag to notify all users in a channel,
       * and the `@here` tag to notify all online users in a channel
       *
       * Applies to channel types: Text, Voice, Stage
       */
      MentionEveryone: 1n << 17n,
      /**
       * Allows the usage of custom emojis from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalEmojis: 1n << 18n,
      /**
       * Allows for viewing guild insights
       */
      ViewGuildInsights: 1n << 19n,
      /**
       * Allows for joining of a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      Connect: 1n << 20n,
      /**
       * Allows for speaking in a voice channel
       *
       * Applies to channel types: Voice
       */
      Speak: 1n << 21n,
      /**
       * Allows for muting members in a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      MuteMembers: 1n << 22n,
      /**
       * Allows for deafening of members in a voice channel
       *
       * Applies to channel types: Voice
       */
      DeafenMembers: 1n << 23n,
      /**
       * Allows for moving of members between voice channels
       *
       * Applies to channel types: Voice, Stage
       */
      MoveMembers: 1n << 24n,
      /**
       * Allows for using voice-activity-detection in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseVAD: 1n << 25n,
      /**
       * Allows for modification of own nickname
       */
      ChangeNickname: 1n << 26n,
      /**
       * Allows for modification of other users nicknames
       */
      ManageNicknames: 1n << 27n,
      /**
       * Allows management and editing of roles
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageRoles: 1n << 28n,
      /**
       * Allows management and editing of webhooks
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageWebhooks: 1n << 29n,
      /**
       * Allows management and editing of emojis, stickers, and soundboard sounds
       *
       * @deprecated This is the old name for {@apilink PermissionFlagsBits#ManageGuildExpressions}
       */
      ManageEmojisAndStickers: 1n << 30n,
      /**
       * Allows management and editing of emojis, stickers, and soundboard sounds
       */
      ManageGuildExpressions: 1n << 30n,
      /**
       * Allows members to use application commands, including slash commands and context menu commands
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseApplicationCommands: 1n << 31n,
      /**
       * Allows for requesting to speak in stage channels
       *
       * Applies to channel types: Stage
       */
      RequestToSpeak: 1n << 32n,
      /**
       * Allows for creating, editing, and deleting scheduled events
       *
       * Applies to channel types: Voice, Stage
       */
      ManageEvents: 1n << 33n,
      /**
       * Allows for deleting and archiving threads, and viewing all private threads
       *
       * Applies to channel types: Text
       */
      ManageThreads: 1n << 34n,
      /**
       * Allows for creating public and announcement threads
       *
       * Applies to channel types: Text
       */
      CreatePublicThreads: 1n << 35n,
      /**
       * Allows for creating private threads
       *
       * Applies to channel types: Text
       */
      CreatePrivateThreads: 1n << 36n,
      /**
       * Allows the usage of custom stickers from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalStickers: 1n << 37n,
      /**
       * Allows for sending messages in threads
       *
       * Applies to channel types: Text
       */
      SendMessagesInThreads: 1n << 38n,
      /**
       * Allows for using Activities (applications with the {@apilink ApplicationFlags.Embedded} flag) in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseEmbeddedActivities: 1n << 39n,
      /**
       * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads,
       * and from speaking in voice and stage channels
       */
      ModerateMembers: 1n << 40n,
      /**
       * Allows for viewing role subscription insights
       */
      ViewCreatorMonetizationAnalytics: 1n << 41n,
      /**
       * Allows for using soundboard in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseSoundboard: 1n << 42n,
      /**
       * Allows the usage of custom soundboard sounds from other servers
       *
       * Applies to channel types: Voice
       */
      UseExternalSounds: 1n << 45n,
      /**
       * Allows sending voice messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendVoiceMessages: 1n << 46n
    };
    Object.freeze(exports2.PermissionFlagsBits);
  }
});

// node_modules/discord-api-types/payloads/v10/application.js
var require_application = __commonJS({
  "node_modules/discord-api-types/payloads/v10/application.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationRoleConnectionMetadataType = exports2.ApplicationFlags = void 0;
    var ApplicationFlags2;
    (function(ApplicationFlags3) {
      ApplicationFlags3[ApplicationFlags3["EmbeddedReleased"] = 2] = "EmbeddedReleased";
      ApplicationFlags3[ApplicationFlags3["ManagedEmoji"] = 4] = "ManagedEmoji";
      ApplicationFlags3[ApplicationFlags3["EmbeddedIAP"] = 8] = "EmbeddedIAP";
      ApplicationFlags3[ApplicationFlags3["GroupDMCreate"] = 16] = "GroupDMCreate";
      ApplicationFlags3[ApplicationFlags3["ApplicationAutoModerationRuleCreateBadge"] = 64] = "ApplicationAutoModerationRuleCreateBadge";
      ApplicationFlags3[ApplicationFlags3["RPCHasConnected"] = 2048] = "RPCHasConnected";
      ApplicationFlags3[ApplicationFlags3["GatewayPresence"] = 4096] = "GatewayPresence";
      ApplicationFlags3[ApplicationFlags3["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
      ApplicationFlags3[ApplicationFlags3["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
      ApplicationFlags3[ApplicationFlags3["Embedded"] = 131072] = "Embedded";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
      ApplicationFlags3[ApplicationFlags3["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
      ApplicationFlags3[ApplicationFlags3["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
    })(ApplicationFlags2 = exports2.ApplicationFlags || (exports2.ApplicationFlags = {}));
    var ApplicationRoleConnectionMetadataType2;
    (function(ApplicationRoleConnectionMetadataType3) {
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerLessThanOrEqual"] = 1] = "IntegerLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerGreaterThanOrEqual"] = 2] = "IntegerGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerEqual"] = 3] = "IntegerEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerNotEqual"] = 4] = "IntegerNotEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeLessThanOrEqual"] = 5] = "DatetimeLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeGreaterThanOrEqual"] = 6] = "DatetimeGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanEqual"] = 7] = "BooleanEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanNotEqual"] = 8] = "BooleanNotEqual";
    })(ApplicationRoleConnectionMetadataType2 = exports2.ApplicationRoleConnectionMetadataType || (exports2.ApplicationRoleConnectionMetadataType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/auditLog.js
var require_auditLog = __commonJS({
  "node_modules/discord-api-types/payloads/v10/auditLog.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AuditLogOptionsType = exports2.AuditLogEvent = void 0;
    var AuditLogEvent2;
    (function(AuditLogEvent3) {
      AuditLogEvent3[AuditLogEvent3["GuildUpdate"] = 1] = "GuildUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelCreate"] = 10] = "ChannelCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelUpdate"] = 11] = "ChannelUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelDelete"] = 12] = "ChannelDelete";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
      AuditLogEvent3[AuditLogEvent3["MemberKick"] = 20] = "MemberKick";
      AuditLogEvent3[AuditLogEvent3["MemberPrune"] = 21] = "MemberPrune";
      AuditLogEvent3[AuditLogEvent3["MemberBanAdd"] = 22] = "MemberBanAdd";
      AuditLogEvent3[AuditLogEvent3["MemberBanRemove"] = 23] = "MemberBanRemove";
      AuditLogEvent3[AuditLogEvent3["MemberUpdate"] = 24] = "MemberUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberMove"] = 26] = "MemberMove";
      AuditLogEvent3[AuditLogEvent3["MemberDisconnect"] = 27] = "MemberDisconnect";
      AuditLogEvent3[AuditLogEvent3["BotAdd"] = 28] = "BotAdd";
      AuditLogEvent3[AuditLogEvent3["RoleCreate"] = 30] = "RoleCreate";
      AuditLogEvent3[AuditLogEvent3["RoleUpdate"] = 31] = "RoleUpdate";
      AuditLogEvent3[AuditLogEvent3["RoleDelete"] = 32] = "RoleDelete";
      AuditLogEvent3[AuditLogEvent3["InviteCreate"] = 40] = "InviteCreate";
      AuditLogEvent3[AuditLogEvent3["InviteUpdate"] = 41] = "InviteUpdate";
      AuditLogEvent3[AuditLogEvent3["InviteDelete"] = 42] = "InviteDelete";
      AuditLogEvent3[AuditLogEvent3["WebhookCreate"] = 50] = "WebhookCreate";
      AuditLogEvent3[AuditLogEvent3["WebhookUpdate"] = 51] = "WebhookUpdate";
      AuditLogEvent3[AuditLogEvent3["WebhookDelete"] = 52] = "WebhookDelete";
      AuditLogEvent3[AuditLogEvent3["EmojiCreate"] = 60] = "EmojiCreate";
      AuditLogEvent3[AuditLogEvent3["EmojiUpdate"] = 61] = "EmojiUpdate";
      AuditLogEvent3[AuditLogEvent3["EmojiDelete"] = 62] = "EmojiDelete";
      AuditLogEvent3[AuditLogEvent3["MessageDelete"] = 72] = "MessageDelete";
      AuditLogEvent3[AuditLogEvent3["MessageBulkDelete"] = 73] = "MessageBulkDelete";
      AuditLogEvent3[AuditLogEvent3["MessagePin"] = 74] = "MessagePin";
      AuditLogEvent3[AuditLogEvent3["MessageUnpin"] = 75] = "MessageUnpin";
      AuditLogEvent3[AuditLogEvent3["IntegrationCreate"] = 80] = "IntegrationCreate";
      AuditLogEvent3[AuditLogEvent3["IntegrationUpdate"] = 81] = "IntegrationUpdate";
      AuditLogEvent3[AuditLogEvent3["IntegrationDelete"] = 82] = "IntegrationDelete";
      AuditLogEvent3[AuditLogEvent3["StageInstanceCreate"] = 83] = "StageInstanceCreate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceDelete"] = 85] = "StageInstanceDelete";
      AuditLogEvent3[AuditLogEvent3["StickerCreate"] = 90] = "StickerCreate";
      AuditLogEvent3[AuditLogEvent3["StickerUpdate"] = 91] = "StickerUpdate";
      AuditLogEvent3[AuditLogEvent3["StickerDelete"] = 92] = "StickerDelete";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
      AuditLogEvent3[AuditLogEvent3["ThreadCreate"] = 110] = "ThreadCreate";
      AuditLogEvent3[AuditLogEvent3["ThreadUpdate"] = 111] = "ThreadUpdate";
      AuditLogEvent3[AuditLogEvent3["ThreadDelete"] = 112] = "ThreadDelete";
      AuditLogEvent3[AuditLogEvent3["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
      AuditLogEvent3[AuditLogEvent3["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
      AuditLogEvent3[AuditLogEvent3["AutoModerationFlagToChannel"] = 144] = "AutoModerationFlagToChannel";
      AuditLogEvent3[AuditLogEvent3["AutoModerationUserCommunicationDisabled"] = 145] = "AutoModerationUserCommunicationDisabled";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationRequestCreated"] = 150] = "CreatorMonetizationRequestCreated";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationTermsAccepted"] = 151] = "CreatorMonetizationTermsAccepted";
    })(AuditLogEvent2 = exports2.AuditLogEvent || (exports2.AuditLogEvent = {}));
    var AuditLogOptionsType2;
    (function(AuditLogOptionsType3) {
      AuditLogOptionsType3["Role"] = "0";
      AuditLogOptionsType3["Member"] = "1";
    })(AuditLogOptionsType2 = exports2.AuditLogOptionsType || (exports2.AuditLogOptionsType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/autoModeration.js
var require_autoModeration = __commonJS({
  "node_modules/discord-api-types/payloads/v10/autoModeration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AutoModerationActionType = exports2.AutoModerationRuleEventType = exports2.AutoModerationRuleKeywordPresetType = exports2.AutoModerationRuleTriggerType = void 0;
    var AutoModerationRuleTriggerType2;
    (function(AutoModerationRuleTriggerType3) {
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Keyword"] = 1] = "Keyword";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Spam"] = 3] = "Spam";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["KeywordPreset"] = 4] = "KeywordPreset";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["MentionSpam"] = 5] = "MentionSpam";
    })(AutoModerationRuleTriggerType2 = exports2.AutoModerationRuleTriggerType || (exports2.AutoModerationRuleTriggerType = {}));
    var AutoModerationRuleKeywordPresetType2;
    (function(AutoModerationRuleKeywordPresetType3) {
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Profanity"] = 1] = "Profanity";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["SexualContent"] = 2] = "SexualContent";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Slurs"] = 3] = "Slurs";
    })(AutoModerationRuleKeywordPresetType2 = exports2.AutoModerationRuleKeywordPresetType || (exports2.AutoModerationRuleKeywordPresetType = {}));
    var AutoModerationRuleEventType2;
    (function(AutoModerationRuleEventType3) {
      AutoModerationRuleEventType3[AutoModerationRuleEventType3["MessageSend"] = 1] = "MessageSend";
    })(AutoModerationRuleEventType2 = exports2.AutoModerationRuleEventType || (exports2.AutoModerationRuleEventType = {}));
    var AutoModerationActionType2;
    (function(AutoModerationActionType3) {
      AutoModerationActionType3[AutoModerationActionType3["BlockMessage"] = 1] = "BlockMessage";
      AutoModerationActionType3[AutoModerationActionType3["SendAlertMessage"] = 2] = "SendAlertMessage";
      AutoModerationActionType3[AutoModerationActionType3["Timeout"] = 3] = "Timeout";
    })(AutoModerationActionType2 = exports2.AutoModerationActionType || (exports2.AutoModerationActionType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/channel.js
var require_channel = __commonJS({
  "node_modules/discord-api-types/payloads/v10/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelFlags = exports2.SelectMenuDefaultValueType = exports2.TextInputStyle = exports2.ButtonStyle = exports2.ComponentType = exports2.AllowedMentionsTypes = exports2.AttachmentFlags = exports2.EmbedType = exports2.ThreadMemberFlags = exports2.ThreadAutoArchiveDuration = exports2.OverwriteType = exports2.MessageFlags = exports2.MessageActivityType = exports2.MessageType = exports2.VideoQualityMode = exports2.ChannelType = exports2.ForumLayoutType = exports2.SortOrderType = void 0;
    var SortOrderType2;
    (function(SortOrderType3) {
      SortOrderType3[SortOrderType3["LatestActivity"] = 0] = "LatestActivity";
      SortOrderType3[SortOrderType3["CreationDate"] = 1] = "CreationDate";
    })(SortOrderType2 = exports2.SortOrderType || (exports2.SortOrderType = {}));
    var ForumLayoutType2;
    (function(ForumLayoutType3) {
      ForumLayoutType3[ForumLayoutType3["NotSet"] = 0] = "NotSet";
      ForumLayoutType3[ForumLayoutType3["ListView"] = 1] = "ListView";
      ForumLayoutType3[ForumLayoutType3["GalleryView"] = 2] = "GalleryView";
    })(ForumLayoutType2 = exports2.ForumLayoutType || (exports2.ForumLayoutType = {}));
    var ChannelType4;
    (function(ChannelType5) {
      ChannelType5[ChannelType5["GuildText"] = 0] = "GuildText";
      ChannelType5[ChannelType5["DM"] = 1] = "DM";
      ChannelType5[ChannelType5["GuildVoice"] = 2] = "GuildVoice";
      ChannelType5[ChannelType5["GroupDM"] = 3] = "GroupDM";
      ChannelType5[ChannelType5["GuildCategory"] = 4] = "GuildCategory";
      ChannelType5[ChannelType5["GuildAnnouncement"] = 5] = "GuildAnnouncement";
      ChannelType5[ChannelType5["AnnouncementThread"] = 10] = "AnnouncementThread";
      ChannelType5[ChannelType5["PublicThread"] = 11] = "PublicThread";
      ChannelType5[ChannelType5["PrivateThread"] = 12] = "PrivateThread";
      ChannelType5[ChannelType5["GuildStageVoice"] = 13] = "GuildStageVoice";
      ChannelType5[ChannelType5["GuildDirectory"] = 14] = "GuildDirectory";
      ChannelType5[ChannelType5["GuildForum"] = 15] = "GuildForum";
      ChannelType5[ChannelType5["GuildMedia"] = 16] = "GuildMedia";
      ChannelType5[ChannelType5["GuildNews"] = 5] = "GuildNews";
      ChannelType5[ChannelType5["GuildNewsThread"] = 10] = "GuildNewsThread";
      ChannelType5[ChannelType5["GuildPublicThread"] = 11] = "GuildPublicThread";
      ChannelType5[ChannelType5["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    })(ChannelType4 = exports2.ChannelType || (exports2.ChannelType = {}));
    var VideoQualityMode2;
    (function(VideoQualityMode3) {
      VideoQualityMode3[VideoQualityMode3["Auto"] = 1] = "Auto";
      VideoQualityMode3[VideoQualityMode3["Full"] = 2] = "Full";
    })(VideoQualityMode2 = exports2.VideoQualityMode || (exports2.VideoQualityMode = {}));
    var MessageType2;
    (function(MessageType3) {
      MessageType3[MessageType3["Default"] = 0] = "Default";
      MessageType3[MessageType3["RecipientAdd"] = 1] = "RecipientAdd";
      MessageType3[MessageType3["RecipientRemove"] = 2] = "RecipientRemove";
      MessageType3[MessageType3["Call"] = 3] = "Call";
      MessageType3[MessageType3["ChannelNameChange"] = 4] = "ChannelNameChange";
      MessageType3[MessageType3["ChannelIconChange"] = 5] = "ChannelIconChange";
      MessageType3[MessageType3["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
      MessageType3[MessageType3["UserJoin"] = 7] = "UserJoin";
      MessageType3[MessageType3["GuildBoost"] = 8] = "GuildBoost";
      MessageType3[MessageType3["GuildBoostTier1"] = 9] = "GuildBoostTier1";
      MessageType3[MessageType3["GuildBoostTier2"] = 10] = "GuildBoostTier2";
      MessageType3[MessageType3["GuildBoostTier3"] = 11] = "GuildBoostTier3";
      MessageType3[MessageType3["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
      MessageType3[MessageType3["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
      MessageType3[MessageType3["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
      MessageType3[MessageType3["ThreadCreated"] = 18] = "ThreadCreated";
      MessageType3[MessageType3["Reply"] = 19] = "Reply";
      MessageType3[MessageType3["ChatInputCommand"] = 20] = "ChatInputCommand";
      MessageType3[MessageType3["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
      MessageType3[MessageType3["GuildInviteReminder"] = 22] = "GuildInviteReminder";
      MessageType3[MessageType3["ContextMenuCommand"] = 23] = "ContextMenuCommand";
      MessageType3[MessageType3["AutoModerationAction"] = 24] = "AutoModerationAction";
      MessageType3[MessageType3["RoleSubscriptionPurchase"] = 25] = "RoleSubscriptionPurchase";
      MessageType3[MessageType3["InteractionPremiumUpsell"] = 26] = "InteractionPremiumUpsell";
      MessageType3[MessageType3["StageStart"] = 27] = "StageStart";
      MessageType3[MessageType3["StageEnd"] = 28] = "StageEnd";
      MessageType3[MessageType3["StageSpeaker"] = 29] = "StageSpeaker";
      MessageType3[MessageType3["StageRaiseHand"] = 30] = "StageRaiseHand";
      MessageType3[MessageType3["StageTopic"] = 31] = "StageTopic";
      MessageType3[MessageType3["GuildApplicationPremiumSubscription"] = 32] = "GuildApplicationPremiumSubscription";
    })(MessageType2 = exports2.MessageType || (exports2.MessageType = {}));
    var MessageActivityType2;
    (function(MessageActivityType3) {
      MessageActivityType3[MessageActivityType3["Join"] = 1] = "Join";
      MessageActivityType3[MessageActivityType3["Spectate"] = 2] = "Spectate";
      MessageActivityType3[MessageActivityType3["Listen"] = 3] = "Listen";
      MessageActivityType3[MessageActivityType3["JoinRequest"] = 5] = "JoinRequest";
    })(MessageActivityType2 = exports2.MessageActivityType || (exports2.MessageActivityType = {}));
    var MessageFlags2;
    (function(MessageFlags3) {
      MessageFlags3[MessageFlags3["Crossposted"] = 1] = "Crossposted";
      MessageFlags3[MessageFlags3["IsCrosspost"] = 2] = "IsCrosspost";
      MessageFlags3[MessageFlags3["SuppressEmbeds"] = 4] = "SuppressEmbeds";
      MessageFlags3[MessageFlags3["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
      MessageFlags3[MessageFlags3["Urgent"] = 16] = "Urgent";
      MessageFlags3[MessageFlags3["HasThread"] = 32] = "HasThread";
      MessageFlags3[MessageFlags3["Ephemeral"] = 64] = "Ephemeral";
      MessageFlags3[MessageFlags3["Loading"] = 128] = "Loading";
      MessageFlags3[MessageFlags3["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
      MessageFlags3[MessageFlags3["ShouldShowLinkNotDiscordWarning"] = 1024] = "ShouldShowLinkNotDiscordWarning";
      MessageFlags3[MessageFlags3["SuppressNotifications"] = 4096] = "SuppressNotifications";
      MessageFlags3[MessageFlags3["IsVoiceMessage"] = 8192] = "IsVoiceMessage";
    })(MessageFlags2 = exports2.MessageFlags || (exports2.MessageFlags = {}));
    var OverwriteType2;
    (function(OverwriteType3) {
      OverwriteType3[OverwriteType3["Role"] = 0] = "Role";
      OverwriteType3[OverwriteType3["Member"] = 1] = "Member";
    })(OverwriteType2 = exports2.OverwriteType || (exports2.OverwriteType = {}));
    var ThreadAutoArchiveDuration2;
    (function(ThreadAutoArchiveDuration3) {
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneHour"] = 60] = "OneHour";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneDay"] = 1440] = "OneDay";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["ThreeDays"] = 4320] = "ThreeDays";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneWeek"] = 10080] = "OneWeek";
    })(ThreadAutoArchiveDuration2 = exports2.ThreadAutoArchiveDuration || (exports2.ThreadAutoArchiveDuration = {}));
    var ThreadMemberFlags2;
    (function(ThreadMemberFlags3) {
      ThreadMemberFlags3[ThreadMemberFlags3["HasInteracted"] = 1] = "HasInteracted";
      ThreadMemberFlags3[ThreadMemberFlags3["AllMessages"] = 2] = "AllMessages";
      ThreadMemberFlags3[ThreadMemberFlags3["OnlyMentions"] = 4] = "OnlyMentions";
      ThreadMemberFlags3[ThreadMemberFlags3["NoMessages"] = 8] = "NoMessages";
    })(ThreadMemberFlags2 = exports2.ThreadMemberFlags || (exports2.ThreadMemberFlags = {}));
    var EmbedType2;
    (function(EmbedType3) {
      EmbedType3["Rich"] = "rich";
      EmbedType3["Image"] = "image";
      EmbedType3["Video"] = "video";
      EmbedType3["GIFV"] = "gifv";
      EmbedType3["Article"] = "article";
      EmbedType3["Link"] = "link";
      EmbedType3["AutoModerationMessage"] = "auto_moderation_message";
    })(EmbedType2 = exports2.EmbedType || (exports2.EmbedType = {}));
    var AttachmentFlags2;
    (function(AttachmentFlags3) {
      AttachmentFlags3[AttachmentFlags3["IsRemix"] = 4] = "IsRemix";
    })(AttachmentFlags2 = exports2.AttachmentFlags || (exports2.AttachmentFlags = {}));
    var AllowedMentionsTypes2;
    (function(AllowedMentionsTypes3) {
      AllowedMentionsTypes3["Everyone"] = "everyone";
      AllowedMentionsTypes3["Role"] = "roles";
      AllowedMentionsTypes3["User"] = "users";
    })(AllowedMentionsTypes2 = exports2.AllowedMentionsTypes || (exports2.AllowedMentionsTypes = {}));
    var ComponentType2;
    (function(ComponentType3) {
      ComponentType3[ComponentType3["ActionRow"] = 1] = "ActionRow";
      ComponentType3[ComponentType3["Button"] = 2] = "Button";
      ComponentType3[ComponentType3["StringSelect"] = 3] = "StringSelect";
      ComponentType3[ComponentType3["TextInput"] = 4] = "TextInput";
      ComponentType3[ComponentType3["UserSelect"] = 5] = "UserSelect";
      ComponentType3[ComponentType3["RoleSelect"] = 6] = "RoleSelect";
      ComponentType3[ComponentType3["MentionableSelect"] = 7] = "MentionableSelect";
      ComponentType3[ComponentType3["ChannelSelect"] = 8] = "ChannelSelect";
      ComponentType3[ComponentType3["SelectMenu"] = 3] = "SelectMenu";
    })(ComponentType2 = exports2.ComponentType || (exports2.ComponentType = {}));
    var ButtonStyle2;
    (function(ButtonStyle3) {
      ButtonStyle3[ButtonStyle3["Primary"] = 1] = "Primary";
      ButtonStyle3[ButtonStyle3["Secondary"] = 2] = "Secondary";
      ButtonStyle3[ButtonStyle3["Success"] = 3] = "Success";
      ButtonStyle3[ButtonStyle3["Danger"] = 4] = "Danger";
      ButtonStyle3[ButtonStyle3["Link"] = 5] = "Link";
    })(ButtonStyle2 = exports2.ButtonStyle || (exports2.ButtonStyle = {}));
    var TextInputStyle2;
    (function(TextInputStyle3) {
      TextInputStyle3[TextInputStyle3["Short"] = 1] = "Short";
      TextInputStyle3[TextInputStyle3["Paragraph"] = 2] = "Paragraph";
    })(TextInputStyle2 = exports2.TextInputStyle || (exports2.TextInputStyle = {}));
    var SelectMenuDefaultValueType2;
    (function(SelectMenuDefaultValueType3) {
      SelectMenuDefaultValueType3["Channel"] = "channel";
      SelectMenuDefaultValueType3["Role"] = "role";
      SelectMenuDefaultValueType3["User"] = "user";
    })(SelectMenuDefaultValueType2 = exports2.SelectMenuDefaultValueType || (exports2.SelectMenuDefaultValueType = {}));
    var ChannelFlags2;
    (function(ChannelFlags3) {
      ChannelFlags3[ChannelFlags3["GuildFeedRemoved"] = 1] = "GuildFeedRemoved";
      ChannelFlags3[ChannelFlags3["Pinned"] = 2] = "Pinned";
      ChannelFlags3[ChannelFlags3["ActiveChannelsRemoved"] = 4] = "ActiveChannelsRemoved";
      ChannelFlags3[ChannelFlags3["RequireTag"] = 16] = "RequireTag";
      ChannelFlags3[ChannelFlags3["IsSpam"] = 32] = "IsSpam";
      ChannelFlags3[ChannelFlags3["IsGuildResourceChannel"] = 128] = "IsGuildResourceChannel";
      ChannelFlags3[ChannelFlags3["ClydeAI"] = 256] = "ClydeAI";
      ChannelFlags3[ChannelFlags3["IsScheduledForDeletion"] = 512] = "IsScheduledForDeletion";
      ChannelFlags3[ChannelFlags3["HideMediaDownloadOptions"] = 32768] = "HideMediaDownloadOptions";
    })(ChannelFlags2 = exports2.ChannelFlags || (exports2.ChannelFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/emoji.js
var require_emoji = __commonJS({
  "node_modules/discord-api-types/payloads/v10/emoji.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/gateway.js
var require_gateway = __commonJS({
  "node_modules/discord-api-types/payloads/v10/gateway.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ActivityFlags = exports2.ActivityType = exports2.ActivityPlatform = exports2.PresenceUpdateStatus = void 0;
    var PresenceUpdateStatus2;
    (function(PresenceUpdateStatus3) {
      PresenceUpdateStatus3["Online"] = "online";
      PresenceUpdateStatus3["DoNotDisturb"] = "dnd";
      PresenceUpdateStatus3["Idle"] = "idle";
      PresenceUpdateStatus3["Invisible"] = "invisible";
      PresenceUpdateStatus3["Offline"] = "offline";
    })(PresenceUpdateStatus2 = exports2.PresenceUpdateStatus || (exports2.PresenceUpdateStatus = {}));
    var ActivityPlatform2;
    (function(ActivityPlatform3) {
      ActivityPlatform3["Desktop"] = "desktop";
      ActivityPlatform3["Xbox"] = "xbox";
      ActivityPlatform3["Samsung"] = "samsung";
      ActivityPlatform3["IOS"] = "ios";
      ActivityPlatform3["Android"] = "android";
      ActivityPlatform3["Embedded"] = "embedded";
      ActivityPlatform3["PS4"] = "ps4";
      ActivityPlatform3["PS5"] = "ps5";
    })(ActivityPlatform2 = exports2.ActivityPlatform || (exports2.ActivityPlatform = {}));
    var ActivityType2;
    (function(ActivityType3) {
      ActivityType3[ActivityType3["Playing"] = 0] = "Playing";
      ActivityType3[ActivityType3["Streaming"] = 1] = "Streaming";
      ActivityType3[ActivityType3["Listening"] = 2] = "Listening";
      ActivityType3[ActivityType3["Watching"] = 3] = "Watching";
      ActivityType3[ActivityType3["Custom"] = 4] = "Custom";
      ActivityType3[ActivityType3["Competing"] = 5] = "Competing";
    })(ActivityType2 = exports2.ActivityType || (exports2.ActivityType = {}));
    var ActivityFlags2;
    (function(ActivityFlags3) {
      ActivityFlags3[ActivityFlags3["Instance"] = 1] = "Instance";
      ActivityFlags3[ActivityFlags3["Join"] = 2] = "Join";
      ActivityFlags3[ActivityFlags3["Spectate"] = 4] = "Spectate";
      ActivityFlags3[ActivityFlags3["JoinRequest"] = 8] = "JoinRequest";
      ActivityFlags3[ActivityFlags3["Sync"] = 16] = "Sync";
      ActivityFlags3[ActivityFlags3["Play"] = 32] = "Play";
      ActivityFlags3[ActivityFlags3["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
      ActivityFlags3[ActivityFlags3["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
      ActivityFlags3[ActivityFlags3["Embedded"] = 256] = "Embedded";
    })(ActivityFlags2 = exports2.ActivityFlags || (exports2.ActivityFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guild.js
var require_guild = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guild.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GuildOnboardingPromptType = exports2.GuildOnboardingMode = exports2.MembershipScreeningFieldType = exports2.GuildWidgetStyle = exports2.IntegrationExpireBehavior = exports2.GuildMemberFlags = exports2.GuildFeature = exports2.GuildSystemChannelFlags = exports2.GuildHubType = exports2.GuildPremiumTier = exports2.GuildVerificationLevel = exports2.GuildNSFWLevel = exports2.GuildMFALevel = exports2.GuildExplicitContentFilter = exports2.GuildDefaultMessageNotifications = void 0;
    var GuildDefaultMessageNotifications2;
    (function(GuildDefaultMessageNotifications3) {
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["AllMessages"] = 0] = "AllMessages";
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["OnlyMentions"] = 1] = "OnlyMentions";
    })(GuildDefaultMessageNotifications2 = exports2.GuildDefaultMessageNotifications || (exports2.GuildDefaultMessageNotifications = {}));
    var GuildExplicitContentFilter2;
    (function(GuildExplicitContentFilter3) {
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["Disabled"] = 0] = "Disabled";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["AllMembers"] = 2] = "AllMembers";
    })(GuildExplicitContentFilter2 = exports2.GuildExplicitContentFilter || (exports2.GuildExplicitContentFilter = {}));
    var GuildMFALevel2;
    (function(GuildMFALevel3) {
      GuildMFALevel3[GuildMFALevel3["None"] = 0] = "None";
      GuildMFALevel3[GuildMFALevel3["Elevated"] = 1] = "Elevated";
    })(GuildMFALevel2 = exports2.GuildMFALevel || (exports2.GuildMFALevel = {}));
    var GuildNSFWLevel2;
    (function(GuildNSFWLevel3) {
      GuildNSFWLevel3[GuildNSFWLevel3["Default"] = 0] = "Default";
      GuildNSFWLevel3[GuildNSFWLevel3["Explicit"] = 1] = "Explicit";
      GuildNSFWLevel3[GuildNSFWLevel3["Safe"] = 2] = "Safe";
      GuildNSFWLevel3[GuildNSFWLevel3["AgeRestricted"] = 3] = "AgeRestricted";
    })(GuildNSFWLevel2 = exports2.GuildNSFWLevel || (exports2.GuildNSFWLevel = {}));
    var GuildVerificationLevel2;
    (function(GuildVerificationLevel3) {
      GuildVerificationLevel3[GuildVerificationLevel3["None"] = 0] = "None";
      GuildVerificationLevel3[GuildVerificationLevel3["Low"] = 1] = "Low";
      GuildVerificationLevel3[GuildVerificationLevel3["Medium"] = 2] = "Medium";
      GuildVerificationLevel3[GuildVerificationLevel3["High"] = 3] = "High";
      GuildVerificationLevel3[GuildVerificationLevel3["VeryHigh"] = 4] = "VeryHigh";
    })(GuildVerificationLevel2 = exports2.GuildVerificationLevel || (exports2.GuildVerificationLevel = {}));
    var GuildPremiumTier2;
    (function(GuildPremiumTier3) {
      GuildPremiumTier3[GuildPremiumTier3["None"] = 0] = "None";
      GuildPremiumTier3[GuildPremiumTier3["Tier1"] = 1] = "Tier1";
      GuildPremiumTier3[GuildPremiumTier3["Tier2"] = 2] = "Tier2";
      GuildPremiumTier3[GuildPremiumTier3["Tier3"] = 3] = "Tier3";
    })(GuildPremiumTier2 = exports2.GuildPremiumTier || (exports2.GuildPremiumTier = {}));
    var GuildHubType2;
    (function(GuildHubType3) {
      GuildHubType3[GuildHubType3["Default"] = 0] = "Default";
      GuildHubType3[GuildHubType3["HighSchool"] = 1] = "HighSchool";
      GuildHubType3[GuildHubType3["College"] = 2] = "College";
    })(GuildHubType2 = exports2.GuildHubType || (exports2.GuildHubType = {}));
    var GuildSystemChannelFlags2;
    (function(GuildSystemChannelFlags3) {
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotifications"] = 16] = "SuppressRoleSubscriptionPurchaseNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotificationReplies"] = 32] = "SuppressRoleSubscriptionPurchaseNotificationReplies";
    })(GuildSystemChannelFlags2 = exports2.GuildSystemChannelFlags || (exports2.GuildSystemChannelFlags = {}));
    var GuildFeature2;
    (function(GuildFeature3) {
      GuildFeature3["AnimatedBanner"] = "ANIMATED_BANNER";
      GuildFeature3["AnimatedIcon"] = "ANIMATED_ICON";
      GuildFeature3["ApplicationCommandPermissionsV2"] = "APPLICATION_COMMAND_PERMISSIONS_V2";
      GuildFeature3["AutoModeration"] = "AUTO_MODERATION";
      GuildFeature3["Banner"] = "BANNER";
      GuildFeature3["Community"] = "COMMUNITY";
      GuildFeature3["CreatorMonetizableProvisional"] = "CREATOR_MONETIZABLE_PROVISIONAL";
      GuildFeature3["CreatorStorePage"] = "CREATOR_STORE_PAGE";
      GuildFeature3["DeveloperSupportServer"] = "DEVELOPER_SUPPORT_SERVER";
      GuildFeature3["Discoverable"] = "DISCOVERABLE";
      GuildFeature3["Featurable"] = "FEATURABLE";
      GuildFeature3["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
      GuildFeature3["Hub"] = "HUB";
      GuildFeature3["InvitesDisabled"] = "INVITES_DISABLED";
      GuildFeature3["InviteSplash"] = "INVITE_SPLASH";
      GuildFeature3["LinkedToHub"] = "LINKED_TO_HUB";
      GuildFeature3["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
      GuildFeature3["MonetizationEnabled"] = "MONETIZATION_ENABLED";
      GuildFeature3["MoreStickers"] = "MORE_STICKERS";
      GuildFeature3["News"] = "NEWS";
      GuildFeature3["Partnered"] = "PARTNERED";
      GuildFeature3["PreviewEnabled"] = "PREVIEW_ENABLED";
      GuildFeature3["PrivateThreads"] = "PRIVATE_THREADS";
      GuildFeature3["RaidAlertsDisabled"] = "RAID_ALERTS_DISABLED";
      GuildFeature3["RelayEnabled"] = "RELAY_ENABLED";
      GuildFeature3["RoleIcons"] = "ROLE_ICONS";
      GuildFeature3["RoleSubscriptionsAvailableForPurchase"] = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE";
      GuildFeature3["RoleSubscriptionsEnabled"] = "ROLE_SUBSCRIPTIONS_ENABLED";
      GuildFeature3["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
      GuildFeature3["VanityURL"] = "VANITY_URL";
      GuildFeature3["Verified"] = "VERIFIED";
      GuildFeature3["VIPRegions"] = "VIP_REGIONS";
      GuildFeature3["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
    })(GuildFeature2 = exports2.GuildFeature || (exports2.GuildFeature = {}));
    var GuildMemberFlags2;
    (function(GuildMemberFlags3) {
      GuildMemberFlags3[GuildMemberFlags3["DidRejoin"] = 1] = "DidRejoin";
      GuildMemberFlags3[GuildMemberFlags3["CompletedOnboarding"] = 2] = "CompletedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["BypassesVerification"] = 4] = "BypassesVerification";
      GuildMemberFlags3[GuildMemberFlags3["StartedOnboarding"] = 8] = "StartedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["StartedHomeActions"] = 32] = "StartedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["CompletedHomeActions"] = 64] = "CompletedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedUsernameOrGuildNickname"] = 128] = "AutomodQuarantinedUsernameOrGuildNickname";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedBio"] = 256] = "AutomodQuarantinedBio";
    })(GuildMemberFlags2 = exports2.GuildMemberFlags || (exports2.GuildMemberFlags = {}));
    var IntegrationExpireBehavior2;
    (function(IntegrationExpireBehavior3) {
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["RemoveRole"] = 0] = "RemoveRole";
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["Kick"] = 1] = "Kick";
    })(IntegrationExpireBehavior2 = exports2.IntegrationExpireBehavior || (exports2.IntegrationExpireBehavior = {}));
    var GuildWidgetStyle2;
    (function(GuildWidgetStyle3) {
      GuildWidgetStyle3["Shield"] = "shield";
      GuildWidgetStyle3["Banner1"] = "banner1";
      GuildWidgetStyle3["Banner2"] = "banner2";
      GuildWidgetStyle3["Banner3"] = "banner3";
      GuildWidgetStyle3["Banner4"] = "banner4";
    })(GuildWidgetStyle2 = exports2.GuildWidgetStyle || (exports2.GuildWidgetStyle = {}));
    var MembershipScreeningFieldType2;
    (function(MembershipScreeningFieldType3) {
      MembershipScreeningFieldType3["Terms"] = "TERMS";
    })(MembershipScreeningFieldType2 = exports2.MembershipScreeningFieldType || (exports2.MembershipScreeningFieldType = {}));
    var GuildOnboardingMode2;
    (function(GuildOnboardingMode3) {
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingDefault"] = 0] = "OnboardingDefault";
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingAdvanced"] = 1] = "OnboardingAdvanced";
    })(GuildOnboardingMode2 = exports2.GuildOnboardingMode || (exports2.GuildOnboardingMode = {}));
    var GuildOnboardingPromptType2;
    (function(GuildOnboardingPromptType3) {
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["MultipleChoice"] = 0] = "MultipleChoice";
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["Dropdown"] = 1] = "Dropdown";
    })(GuildOnboardingPromptType2 = exports2.GuildOnboardingPromptType || (exports2.GuildOnboardingPromptType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js
var require_guildScheduledEvent = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GuildScheduledEventPrivacyLevel = exports2.GuildScheduledEventStatus = exports2.GuildScheduledEventEntityType = void 0;
    var GuildScheduledEventEntityType2;
    (function(GuildScheduledEventEntityType3) {
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["StageInstance"] = 1] = "StageInstance";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["Voice"] = 2] = "Voice";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["External"] = 3] = "External";
    })(GuildScheduledEventEntityType2 = exports2.GuildScheduledEventEntityType || (exports2.GuildScheduledEventEntityType = {}));
    var GuildScheduledEventStatus2;
    (function(GuildScheduledEventStatus3) {
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Scheduled"] = 1] = "Scheduled";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Active"] = 2] = "Active";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Completed"] = 3] = "Completed";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Canceled"] = 4] = "Canceled";
    })(GuildScheduledEventStatus2 = exports2.GuildScheduledEventStatus || (exports2.GuildScheduledEventStatus = {}));
    var GuildScheduledEventPrivacyLevel2;
    (function(GuildScheduledEventPrivacyLevel3) {
      GuildScheduledEventPrivacyLevel3[GuildScheduledEventPrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(GuildScheduledEventPrivacyLevel2 = exports2.GuildScheduledEventPrivacyLevel || (exports2.GuildScheduledEventPrivacyLevel = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js
var require_attachment = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js
var require_base = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js
var require_boolean = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js
var require_channel2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js
var require_integer = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js
var require_mentionable = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js
var require_number = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js
var require_role = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js
var require_shared = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationCommandOptionType = void 0;
    var ApplicationCommandOptionType2;
    (function(ApplicationCommandOptionType3) {
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Subcommand"] = 1] = "Subcommand";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["SubcommandGroup"] = 2] = "SubcommandGroup";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["String"] = 3] = "String";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Integer"] = 4] = "Integer";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Boolean"] = 5] = "Boolean";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["User"] = 6] = "User";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Channel"] = 7] = "Channel";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Role"] = 8] = "Role";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Mentionable"] = 9] = "Mentionable";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Number"] = 10] = "Number";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Attachment"] = 11] = "Attachment";
    })(ApplicationCommandOptionType2 = exports2.ApplicationCommandOptionType || (exports2.ApplicationCommandOptionType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js
var require_string = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js
var require_subcommand = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js
var require_subcommandGroup = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js
var require_user = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js
var require_chatInput = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_attachment(), exports2);
    __exportStar(require_base(), exports2);
    __exportStar(require_boolean(), exports2);
    __exportStar(require_channel2(), exports2);
    __exportStar(require_integer(), exports2);
    __exportStar(require_mentionable(), exports2);
    __exportStar(require_number(), exports2);
    __exportStar(require_role(), exports2);
    __exportStar(require_shared(), exports2);
    __exportStar(require_string(), exports2);
    __exportStar(require_subcommand(), exports2);
    __exportStar(require_subcommandGroup(), exports2);
    __exportStar(require_user(), exports2);
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js
var require_contextMenu = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js
var require_permissions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.APIApplicationCommandPermissionsConstant = exports2.ApplicationCommandPermissionType = void 0;
    var ApplicationCommandPermissionType2;
    (function(ApplicationCommandPermissionType3) {
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Role"] = 1] = "Role";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["User"] = 2] = "User";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Channel"] = 3] = "Channel";
    })(ApplicationCommandPermissionType2 = exports2.ApplicationCommandPermissionType || (exports2.ApplicationCommandPermissionType = {}));
    exports2.APIApplicationCommandPermissionsConstant = {
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      Everyone: (guildId) => String(guildId),
      AllChannels: (guildId) => String(BigInt(guildId) - 1n)
    };
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js
var require_applicationCommands = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ApplicationCommandType = void 0;
    __exportStar(require_chatInput(), exports2);
    __exportStar(require_contextMenu(), exports2);
    __exportStar(require_permissions(), exports2);
    var ApplicationCommandType3;
    (function(ApplicationCommandType4) {
      ApplicationCommandType4[ApplicationCommandType4["ChatInput"] = 1] = "ChatInput";
      ApplicationCommandType4[ApplicationCommandType4["User"] = 2] = "User";
      ApplicationCommandType4[ApplicationCommandType4["Message"] = 3] = "Message";
    })(ApplicationCommandType3 = exports2.ApplicationCommandType || (exports2.ApplicationCommandType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js
var require_autocomplete = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/base.js
var require_base2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js
var require_messageComponents = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js
var require_modalSubmit = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/ping.js
var require_ping = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/ping.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/responses.js
var require_responses = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/responses.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InteractionResponseType = exports2.InteractionType = void 0;
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["Ping"] = 1] = "Ping";
      InteractionType3[InteractionType3["ApplicationCommand"] = 2] = "ApplicationCommand";
      InteractionType3[InteractionType3["MessageComponent"] = 3] = "MessageComponent";
      InteractionType3[InteractionType3["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
      InteractionType3[InteractionType3["ModalSubmit"] = 5] = "ModalSubmit";
    })(InteractionType2 = exports2.InteractionType || (exports2.InteractionType = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["Pong"] = 1] = "Pong";
      InteractionResponseType3[InteractionResponseType3["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
      InteractionResponseType3[InteractionResponseType3["UpdateMessage"] = 7] = "UpdateMessage";
      InteractionResponseType3[InteractionResponseType3["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
      InteractionResponseType3[InteractionResponseType3["Modal"] = 9] = "Modal";
      InteractionResponseType3[InteractionResponseType3["PremiumRequired"] = 10] = "PremiumRequired";
    })(InteractionResponseType2 = exports2.InteractionResponseType || (exports2.InteractionResponseType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/interactions.js
var require_interactions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/interactions.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_applicationCommands(), exports2);
    __exportStar(require_autocomplete(), exports2);
    __exportStar(require_base2(), exports2);
    __exportStar(require_messageComponents(), exports2);
    __exportStar(require_modalSubmit(), exports2);
    __exportStar(require_ping(), exports2);
    __exportStar(require_responses(), exports2);
  }
});

// node_modules/discord-api-types/payloads/v10/invite.js
var require_invite = __commonJS({
  "node_modules/discord-api-types/payloads/v10/invite.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InviteTargetType = void 0;
    var InviteTargetType2;
    (function(InviteTargetType3) {
      InviteTargetType3[InviteTargetType3["Stream"] = 1] = "Stream";
      InviteTargetType3[InviteTargetType3["EmbeddedApplication"] = 2] = "EmbeddedApplication";
    })(InviteTargetType2 = exports2.InviteTargetType || (exports2.InviteTargetType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/oauth2.js
var require_oauth2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/oauth2.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OAuth2Scopes = void 0;
    var OAuth2Scopes2;
    (function(OAuth2Scopes3) {
      OAuth2Scopes3["Bot"] = "bot";
      OAuth2Scopes3["Connections"] = "connections";
      OAuth2Scopes3["DMChannelsRead"] = "dm_channels.read";
      OAuth2Scopes3["Email"] = "email";
      OAuth2Scopes3["Identify"] = "identify";
      OAuth2Scopes3["Guilds"] = "guilds";
      OAuth2Scopes3["GuildsJoin"] = "guilds.join";
      OAuth2Scopes3["GuildsMembersRead"] = "guilds.members.read";
      OAuth2Scopes3["GroupDMJoins"] = "gdm.join";
      OAuth2Scopes3["MessagesRead"] = "messages.read";
      OAuth2Scopes3["RoleConnectionsWrite"] = "role_connections.write";
      OAuth2Scopes3["RPC"] = "rpc";
      OAuth2Scopes3["RPCNotificationsRead"] = "rpc.notifications.read";
      OAuth2Scopes3["WebhookIncoming"] = "webhook.incoming";
      OAuth2Scopes3["Voice"] = "voice";
      OAuth2Scopes3["ApplicationsBuildsUpload"] = "applications.builds.upload";
      OAuth2Scopes3["ApplicationsBuildsRead"] = "applications.builds.read";
      OAuth2Scopes3["ApplicationsStoreUpdate"] = "applications.store.update";
      OAuth2Scopes3["ApplicationsEntitlements"] = "applications.entitlements";
      OAuth2Scopes3["RelationshipsRead"] = "relationships.read";
      OAuth2Scopes3["ActivitiesRead"] = "activities.read";
      OAuth2Scopes3["ActivitiesWrite"] = "activities.write";
      OAuth2Scopes3["ApplicationsCommands"] = "applications.commands";
      OAuth2Scopes3["ApplicationsCommandsUpdate"] = "applications.commands.update";
      OAuth2Scopes3["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
    })(OAuth2Scopes2 = exports2.OAuth2Scopes || (exports2.OAuth2Scopes = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/permissions.js
var require_permissions2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/permissions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RoleFlags = void 0;
    var RoleFlags2;
    (function(RoleFlags3) {
      RoleFlags3[RoleFlags3["InPrompt"] = 1] = "InPrompt";
    })(RoleFlags2 = exports2.RoleFlags || (exports2.RoleFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/stageInstance.js
var require_stageInstance = __commonJS({
  "node_modules/discord-api-types/payloads/v10/stageInstance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StageInstancePrivacyLevel = void 0;
    var StageInstancePrivacyLevel2;
    (function(StageInstancePrivacyLevel3) {
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["Public"] = 1] = "Public";
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(StageInstancePrivacyLevel2 = exports2.StageInstancePrivacyLevel || (exports2.StageInstancePrivacyLevel = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/sticker.js
var require_sticker = __commonJS({
  "node_modules/discord-api-types/payloads/v10/sticker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StickerFormatType = exports2.StickerType = void 0;
    var StickerType2;
    (function(StickerType3) {
      StickerType3[StickerType3["Standard"] = 1] = "Standard";
      StickerType3[StickerType3["Guild"] = 2] = "Guild";
    })(StickerType2 = exports2.StickerType || (exports2.StickerType = {}));
    var StickerFormatType2;
    (function(StickerFormatType3) {
      StickerFormatType3[StickerFormatType3["PNG"] = 1] = "PNG";
      StickerFormatType3[StickerFormatType3["APNG"] = 2] = "APNG";
      StickerFormatType3[StickerFormatType3["Lottie"] = 3] = "Lottie";
      StickerFormatType3[StickerFormatType3["GIF"] = 4] = "GIF";
    })(StickerFormatType2 = exports2.StickerFormatType || (exports2.StickerFormatType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/teams.js
var require_teams = __commonJS({
  "node_modules/discord-api-types/payloads/v10/teams.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TeamMemberRole = exports2.TeamMemberMembershipState = void 0;
    var TeamMemberMembershipState2;
    (function(TeamMemberMembershipState3) {
      TeamMemberMembershipState3[TeamMemberMembershipState3["Invited"] = 1] = "Invited";
      TeamMemberMembershipState3[TeamMemberMembershipState3["Accepted"] = 2] = "Accepted";
    })(TeamMemberMembershipState2 = exports2.TeamMemberMembershipState || (exports2.TeamMemberMembershipState = {}));
    var TeamMemberRole2;
    (function(TeamMemberRole3) {
      TeamMemberRole3["Admin"] = "admin";
      TeamMemberRole3["Developer"] = "developer";
      TeamMemberRole3["ReadOnly"] = "read_only";
    })(TeamMemberRole2 = exports2.TeamMemberRole || (exports2.TeamMemberRole = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/template.js
var require_template = __commonJS({
  "node_modules/discord-api-types/payloads/v10/template.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/user.js
var require_user2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/user.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectionVisibility = exports2.ConnectionService = exports2.UserPremiumType = exports2.UserFlags = void 0;
    var UserFlags2;
    (function(UserFlags3) {
      UserFlags3[UserFlags3["Staff"] = 1] = "Staff";
      UserFlags3[UserFlags3["Partner"] = 2] = "Partner";
      UserFlags3[UserFlags3["Hypesquad"] = 4] = "Hypesquad";
      UserFlags3[UserFlags3["BugHunterLevel1"] = 8] = "BugHunterLevel1";
      UserFlags3[UserFlags3["MFASMS"] = 16] = "MFASMS";
      UserFlags3[UserFlags3["PremiumPromoDismissed"] = 32] = "PremiumPromoDismissed";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
      UserFlags3[UserFlags3["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
      UserFlags3[UserFlags3["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
      UserFlags3[UserFlags3["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
      UserFlags3[UserFlags3["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
      UserFlags3[UserFlags3["VerifiedBot"] = 65536] = "VerifiedBot";
      UserFlags3[UserFlags3["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
      UserFlags3[UserFlags3["CertifiedModerator"] = 262144] = "CertifiedModerator";
      UserFlags3[UserFlags3["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
      UserFlags3[UserFlags3["Spammer"] = 1048576] = "Spammer";
      UserFlags3[UserFlags3["DisablePremium"] = 2097152] = "DisablePremium";
      UserFlags3[UserFlags3["ActiveDeveloper"] = 4194304] = "ActiveDeveloper";
      UserFlags3[UserFlags3["Quarantined"] = 17592186044416] = "Quarantined";
      UserFlags3[UserFlags3["Collaborator"] = 1125899906842624] = "Collaborator";
      UserFlags3[UserFlags3["RestrictedCollaborator"] = 2251799813685248] = "RestrictedCollaborator";
    })(UserFlags2 = exports2.UserFlags || (exports2.UserFlags = {}));
    var UserPremiumType2;
    (function(UserPremiumType3) {
      UserPremiumType3[UserPremiumType3["None"] = 0] = "None";
      UserPremiumType3[UserPremiumType3["NitroClassic"] = 1] = "NitroClassic";
      UserPremiumType3[UserPremiumType3["Nitro"] = 2] = "Nitro";
      UserPremiumType3[UserPremiumType3["NitroBasic"] = 3] = "NitroBasic";
    })(UserPremiumType2 = exports2.UserPremiumType || (exports2.UserPremiumType = {}));
    var ConnectionService2;
    (function(ConnectionService3) {
      ConnectionService3["BattleNet"] = "battlenet";
      ConnectionService3["eBay"] = "ebay";
      ConnectionService3["EpicGames"] = "epicgames";
      ConnectionService3["Facebook"] = "facebook";
      ConnectionService3["GitHub"] = "github";
      ConnectionService3["Instagram"] = "instagram";
      ConnectionService3["LeagueOfLegends"] = "leagueoflegends";
      ConnectionService3["PayPal"] = "paypal";
      ConnectionService3["PlayStationNetwork"] = "playstation";
      ConnectionService3["Reddit"] = "reddit";
      ConnectionService3["RiotGames"] = "riotgames";
      ConnectionService3["Spotify"] = "spotify";
      ConnectionService3["Skype"] = "skype";
      ConnectionService3["Steam"] = "steam";
      ConnectionService3["TikTok"] = "tiktok";
      ConnectionService3["Twitch"] = "twitch";
      ConnectionService3["X"] = "twitter";
      ConnectionService3["Twitter"] = "twitter";
      ConnectionService3["Xbox"] = "xbox";
      ConnectionService3["YouTube"] = "youtube";
    })(ConnectionService2 = exports2.ConnectionService || (exports2.ConnectionService = {}));
    var ConnectionVisibility2;
    (function(ConnectionVisibility3) {
      ConnectionVisibility3[ConnectionVisibility3["None"] = 0] = "None";
      ConnectionVisibility3[ConnectionVisibility3["Everyone"] = 1] = "Everyone";
    })(ConnectionVisibility2 = exports2.ConnectionVisibility || (exports2.ConnectionVisibility = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/voice.js
var require_voice = __commonJS({
  "node_modules/discord-api-types/payloads/v10/voice.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/webhook.js
var require_webhook = __commonJS({
  "node_modules/discord-api-types/payloads/v10/webhook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WebhookType = void 0;
    var WebhookType2;
    (function(WebhookType3) {
      WebhookType3[WebhookType3["Incoming"] = 1] = "Incoming";
      WebhookType3[WebhookType3["ChannelFollower"] = 2] = "ChannelFollower";
      WebhookType3[WebhookType3["Application"] = 3] = "Application";
    })(WebhookType2 = exports2.WebhookType || (exports2.WebhookType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/monetization.js
var require_monetization = __commonJS({
  "node_modules/discord-api-types/payloads/v10/monetization.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SKUType = exports2.SKUFlags = exports2.EntitlementType = void 0;
    var EntitlementType2;
    (function(EntitlementType3) {
      EntitlementType3[EntitlementType3["ApplicationSubscription"] = 8] = "ApplicationSubscription";
    })(EntitlementType2 = exports2.EntitlementType || (exports2.EntitlementType = {}));
    var SKUFlags2;
    (function(SKUFlags3) {
      SKUFlags3[SKUFlags3["Available"] = 4] = "Available";
      SKUFlags3[SKUFlags3["GuildSubscription"] = 128] = "GuildSubscription";
      SKUFlags3[SKUFlags3["UserSubscription"] = 256] = "UserSubscription";
    })(SKUFlags2 = exports2.SKUFlags || (exports2.SKUFlags = {}));
    var SKUType2;
    (function(SKUType3) {
      SKUType3[SKUType3["Subscription"] = 5] = "Subscription";
      SKUType3[SKUType3["SubscriptionGroup"] = 6] = "SubscriptionGroup";
    })(SKUType2 = exports2.SKUType || (exports2.SKUType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/index.js
var require_v102 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_common2(), exports2);
    __exportStar(require_application(), exports2);
    __exportStar(require_auditLog(), exports2);
    __exportStar(require_autoModeration(), exports2);
    __exportStar(require_channel(), exports2);
    __exportStar(require_emoji(), exports2);
    __exportStar(require_gateway(), exports2);
    __exportStar(require_guild(), exports2);
    __exportStar(require_guildScheduledEvent(), exports2);
    __exportStar(require_interactions(), exports2);
    __exportStar(require_invite(), exports2);
    __exportStar(require_oauth2(), exports2);
    __exportStar(require_permissions2(), exports2);
    __exportStar(require_stageInstance(), exports2);
    __exportStar(require_sticker(), exports2);
    __exportStar(require_teams(), exports2);
    __exportStar(require_template(), exports2);
    __exportStar(require_user2(), exports2);
    __exportStar(require_voice(), exports2);
    __exportStar(require_webhook(), exports2);
    __exportStar(require_monetization(), exports2);
  }
});

// node_modules/discord-api-types/rest/common.js
var require_common3 = __commonJS({
  "node_modules/discord-api-types/rest/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Locale = exports2.RESTJSONErrorCodes = void 0;
    var RESTJSONErrorCodes2;
    (function(RESTJSONErrorCodes3) {
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GeneralError"] = 0] = "GeneralError";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownAccount"] = 10001] = "UnknownAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplication"] = 10002] = "UnknownApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownChannel"] = 10003] = "UnknownChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuild"] = 10004] = "UnknownGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownIntegration"] = 10005] = "UnknownIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInvite"] = 10006] = "UnknownInvite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMember"] = 10007] = "UnknownMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMessage"] = 10008] = "UnknownMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownProvider"] = 10010] = "UnknownProvider";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRole"] = 10011] = "UnknownRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownToken"] = 10012] = "UnknownToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownUser"] = 10013] = "UnknownUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEmoji"] = 10014] = "UnknownEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhook"] = 10015] = "UnknownWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSession"] = 10020] = "UnknownSession";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBan"] = 10026] = "UnknownBan";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSKU"] = 10027] = "UnknownSKU";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBuild"] = 10030] = "UnknownBuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownLobby"] = 10031] = "UnknownLobby";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBranch"] = 10032] = "UnknownBranch";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStream"] = 10049] = "UnknownStream";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSticker"] = 10060] = "UnknownSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInteraction"] = 10062] = "UnknownInteraction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownTag"] = 10087] = "UnknownTag";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGroupDMsReached"] = 30011] = "MaximumNumberOfGroupDMsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPremiumEmojisReached"] = 30056] = "MaximumNumberOfPremiumEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksPerGuildReached"] = 30058] = "MaximumNumberOfWebhooksPerGuildReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfChannelPermissionOverwritesReached"] = 30060] = "MaximumNumberOfChannelPermissionOverwritesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheChannelsForThisGuildAreTooLarge"] = 30061] = "TheChannelsForThisGuildAreTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["Unauthorized"] = 40001] = "Unauthorized";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServiceResourceIsBeingRateLimited"] = 40062] = "ServiceResourceIsBeingRateLimited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingAccess"] = 50001] = "MissingAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAccountType"] = 50002] = "InvalidAccountType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingPermissions"] = 50013] = "MissingPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidToken"] = 50014] = "InvalidToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRole"] = 50028] = "InvalidRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRecipients"] = 50033] = "InvalidRecipients";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActivityAction"] = 50039] = "InvalidActivityAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidGuild"] = 50055] = "InvalidGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRequestOrigin"] = 50067] = "InvalidRequestOrigin";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMessageType"] = 50068] = "InvalidMessageType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotModifyASystemWebhook"] = 50073] = "CannotModifyASystemWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor"] = 50091] = "TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnerCannotBePendingMember"] = 50131] = "OwnerCannotBePendingMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji"] = 50144] = "CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotConvertBetweenPremiumEmojiAndNormalEmoji"] = 50145] = "CannotConvertBetweenPremiumEmojiAndNormalEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesDoNotSupportAdditionalContent"] = 50159] = "VoiceMessagesDoNotSupportAdditionalContent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveASingleAudioAttachment"] = 50160] = "VoiceMessagesMustHaveASingleAudioAttachment";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveSupportingMetadata"] = 50161] = "VoiceMessagesMustHaveSupportingMetadata";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesCannotBeEdited"] = 50162] = "VoiceMessagesCannotBeEdited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteGuildSubscriptionIntegration"] = 50163] = "CannotDeleteGuildSubscriptionIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouCannotSendVoiceMessagesInThisChannel"] = 50173] = "YouCannotSendVoiceMessagesInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheUserAccountMustFirstBeVerified"] = 50178] = "TheUserAccountMustFirstBeVerified";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["APIResourceOverloaded"] = 13e4] = "APIResourceOverloaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadLocked"] = 160005] = "ThreadLocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateAFinishedEvent"] = 18e4] = "CannotUpdateAFinishedEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageWasBlockedByAutomaticModeration"] = 2e5] = "MessageWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageBlockedByHarmfulLinksFilter"] = 24e4] = "MessageBlockedByHarmfulLinksFilter";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEnableOnboardingRequirementsAreNotMet"] = 35e4] = "CannotEnableOnboardingRequirementsAreNotMet";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateOnboardingWhileBelowRequirements"] = 350001] = "CannotUpdateOnboardingWhileBelowRequirements";
    })(RESTJSONErrorCodes2 = exports2.RESTJSONErrorCodes || (exports2.RESTJSONErrorCodes = {}));
    var Locale2;
    (function(Locale3) {
      Locale3["Indonesian"] = "id";
      Locale3["EnglishUS"] = "en-US";
      Locale3["EnglishGB"] = "en-GB";
      Locale3["Bulgarian"] = "bg";
      Locale3["ChineseCN"] = "zh-CN";
      Locale3["ChineseTW"] = "zh-TW";
      Locale3["Croatian"] = "hr";
      Locale3["Czech"] = "cs";
      Locale3["Danish"] = "da";
      Locale3["Dutch"] = "nl";
      Locale3["Finnish"] = "fi";
      Locale3["French"] = "fr";
      Locale3["German"] = "de";
      Locale3["Greek"] = "el";
      Locale3["Hindi"] = "hi";
      Locale3["Hungarian"] = "hu";
      Locale3["Italian"] = "it";
      Locale3["Japanese"] = "ja";
      Locale3["Korean"] = "ko";
      Locale3["Lithuanian"] = "lt";
      Locale3["Norwegian"] = "no";
      Locale3["Polish"] = "pl";
      Locale3["PortugueseBR"] = "pt-BR";
      Locale3["Romanian"] = "ro";
      Locale3["Russian"] = "ru";
      Locale3["SpanishES"] = "es-ES";
      Locale3["Swedish"] = "sv-SE";
      Locale3["Thai"] = "th";
      Locale3["Turkish"] = "tr";
      Locale3["Ukrainian"] = "uk";
      Locale3["Vietnamese"] = "vi";
    })(Locale2 = exports2.Locale || (exports2.Locale = {}));
  }
});

// node_modules/discord-api-types/rest/v10/application.js
var require_application2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/application.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/auditLog.js
var require_auditLog2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/auditLog.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/autoModeration.js
var require_autoModeration2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/autoModeration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/channel.js
var require_channel3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/emoji.js
var require_emoji2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/emoji.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/gateway.js
var require_gateway2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/gateway.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guild.js
var require_guild2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guild.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guildScheduledEvent.js
var require_guildScheduledEvent2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guildScheduledEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/interactions.js
var require_interactions2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/interactions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/invite.js
var require_invite2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/invite.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/oauth2.js
var require_oauth22 = __commonJS({
  "node_modules/discord-api-types/rest/v10/oauth2.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/stageInstance.js
var require_stageInstance2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/stageInstance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/sticker.js
var require_sticker2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/sticker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/template.js
var require_template2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/template.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/user.js
var require_user3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/user.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/voice.js
var require_voice2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/voice.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/webhook.js
var require_webhook2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/webhook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/monetization.js
var require_monetization2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/monetization.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EntitlementOwnerType = void 0;
    var EntitlementOwnerType2;
    (function(EntitlementOwnerType3) {
      EntitlementOwnerType3[EntitlementOwnerType3["Guild"] = 1] = "Guild";
      EntitlementOwnerType3[EntitlementOwnerType3["User"] = 2] = "User";
    })(EntitlementOwnerType2 = exports2.EntitlementOwnerType || (exports2.EntitlementOwnerType = {}));
  }
});

// node_modules/discord-api-types/rest/v10/index.js
var require_v103 = __commonJS({
  "node_modules/discord-api-types/rest/v10/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OAuth2Routes = exports2.RouteBases = exports2.ImageFormat = exports2.CDNRoutes = exports2.StickerPackApplicationId = exports2.Routes = exports2.APIVersion = void 0;
    __exportStar(require_common3(), exports2);
    __exportStar(require_application2(), exports2);
    __exportStar(require_auditLog2(), exports2);
    __exportStar(require_autoModeration2(), exports2);
    __exportStar(require_channel3(), exports2);
    __exportStar(require_emoji2(), exports2);
    __exportStar(require_gateway2(), exports2);
    __exportStar(require_guild2(), exports2);
    __exportStar(require_guildScheduledEvent2(), exports2);
    __exportStar(require_interactions2(), exports2);
    __exportStar(require_invite2(), exports2);
    __exportStar(require_oauth22(), exports2);
    __exportStar(require_stageInstance2(), exports2);
    __exportStar(require_sticker2(), exports2);
    __exportStar(require_template2(), exports2);
    __exportStar(require_user3(), exports2);
    __exportStar(require_voice2(), exports2);
    __exportStar(require_webhook2(), exports2);
    __exportStar(require_monetization2(), exports2);
    exports2.APIVersion = "10";
    exports2.Routes = {
      /**
       * Route for:
       * - GET `/applications/{application.id}/role-connections/metadata`
       * - PUT `/applications/{application.id}/role-connections/metadata`
       */
      applicationRoleConnectionMetadata(applicationId) {
        return `/applications/${applicationId}/role-connections/metadata`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/auto-moderation/rules`
       * - POST `/guilds/{guild.id}/auto-moderation/rules`
       */
      guildAutoModerationRules(guildId) {
        return `/guilds/${guildId}/auto-moderation/rules`;
      },
      /**
       * Routes for:
       * - GET    `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - PATCH  `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       */
      guildAutoModerationRule(guildId, ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/audit-logs`
       */
      guildAuditLog(guildId) {
        return `/guilds/${guildId}/audit-logs`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}`
       * - PATCH  `/channels/{channel.id}`
       * - DELETE `/channels/{channel.id}`
       */
      channel(channelId) {
        return `/channels/${channelId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/messages`
       * - POST `/channels/{channel.id}/messages`
       */
      channelMessages(channelId) {
        return `/channels/${channelId}/messages`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}`
       * - PATCH  `/channels/{channel.id}/messages/{message.id}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}`
       */
      channelMessage(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
       */
      channelMessageCrosspost(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageOwnReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageUserReaction(channelId, messageId, emoji, userId) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
       */
      channelMessageAllReactions(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/reactions`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/bulk-delete`
       */
      channelBulkDelete(channelId) {
        return `/channels/${channelId}/messages/bulk-delete`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
       * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
       */
      channelPermission(channelId, overwriteId) {
        return `/channels/${channelId}/permissions/${overwriteId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/invites`
       * - POST `/channels/{channel.id}/invites`
       */
      channelInvites(channelId) {
        return `/channels/${channelId}/invites`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/followers`
       */
      channelFollowers(channelId) {
        return `/channels/${channelId}/followers`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/typing`
       */
      channelTyping(channelId) {
        return `/channels/${channelId}/typing`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/pins`
       */
      channelPins(channelId) {
        return `/channels/${channelId}/pins`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/pins/{message.id}`
       * - DELETE `/channels/{channel.id}/pins/{message.id}`
       */
      channelPin(channelId, messageId) {
        return `/channels/${channelId}/pins/${messageId}`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/recipients/{user.id}`
       * - DELETE `/channels/{channel.id}/recipients/{user.id}`
       */
      channelRecipient(channelId, userId) {
        return `/channels/${channelId}/recipients/${userId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/emojis`
       * - POST `/guilds/{guild.id}/emojis`
       */
      guildEmojis(guildId) {
        return `/guilds/${guildId}/emojis`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
       * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
       * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
       */
      guildEmoji(guildId, emojiId) {
        return `/guilds/${guildId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - POST `/guilds`
       */
      guilds() {
        return "/guilds";
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}`
       * - PATCH  `/guilds/{guild.id}`
       * - DELETE `/guilds/{guild.id}`
       */
      guild(guildId) {
        return `/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/preview`
       */
      guildPreview(guildId) {
        return `/guilds/${guildId}/preview`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/channels`
       * - POST  `/guilds/{guild.id}/channels`
       * - PATCH `/guilds/{guild.id}/channels`
       */
      guildChannels(guildId) {
        return `/guilds/${guildId}/channels`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/members/{user.id}`
       * - PUT    `/guilds/{guild.id}/members/{user.id}`
       * - PATCH  `/guilds/{guild.id}/members/@me`
       * - PATCH  `/guilds/{guild.id}/members/{user.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}`
       */
      guildMember(guildId, userId = "@me") {
        return `/guilds/${guildId}/members/${userId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members`
       */
      guildMembers(guildId) {
        return `/guilds/${guildId}/members`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members/search`
       */
      guildMembersSearch(guildId) {
        return `/guilds/${guildId}/members/search`;
      },
      /**
       * Route for:
       * - PATCH `/guilds/{guild.id}/members/@me/nick`
       *
       * @deprecated Use {@link Routes.guildMember} instead.
       */
      guildCurrentMemberNickname(guildId) {
        return `/guilds/${guildId}/members/@me/nick`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       */
      guildMemberRole(guildId, memberId, roleId) {
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/mfa`
       */
      guildMFA(guildId) {
        return `/guilds/${guildId}/mfa`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/bans`
       */
      guildBans(guildId) {
        return `/guilds/${guildId}/bans`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/bans/{user.id}`
       * - PUT    `/guilds/{guild.id}/bans/{user.id}`
       * - DELETE `/guilds/{guild.id}/bans/{user.id}`
       */
      guildBan(guildId, userId) {
        return `/guilds/${guildId}/bans/${userId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/roles`
       * - POST  `/guilds/{guild.id}/roles`
       * - PATCH `/guilds/{guild.id}/roles`
       */
      guildRoles(guildId) {
        return `/guilds/${guildId}/roles`;
      },
      /**
       * Route for:
       * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/roles/{role.id}`
       */
      guildRole(guildId, roleId) {
        return `/guilds/${guildId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/prune`
       * - POST `/guilds/{guild.id}/prune`
       */
      guildPrune(guildId) {
        return `/guilds/${guildId}/prune`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/regions`
       */
      guildVoiceRegions(guildId) {
        return `/guilds/${guildId}/regions`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/invites`
       */
      guildInvites(guildId) {
        return `/guilds/${guildId}/invites`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/integrations`
       */
      guildIntegrations(guildId) {
        return `/guilds/${guildId}/integrations`;
      },
      /**
       * Route for:
       * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
       */
      guildIntegration(guildId, integrationId) {
        return `/guilds/${guildId}/integrations/${integrationId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/widget`
       * - PATCH `/guilds/{guild.id}/widget`
       */
      guildWidgetSettings(guildId) {
        return `/guilds/${guildId}/widget`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.json`
       */
      guildWidgetJSON(guildId) {
        return `/guilds/${guildId}/widget.json`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/vanity-url`
       */
      guildVanityUrl(guildId) {
        return `/guilds/${guildId}/vanity-url`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.png`
       */
      guildWidgetImage(guildId) {
        return `/guilds/${guildId}/widget.png`;
      },
      /**
       * Route for:
       * - GET    `/invites/{invite.code}`
       * - DELETE `/invites/{invite.code}`
       */
      invite(code) {
        return `/invites/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/templates/{template.code}`
       * - POST `/guilds/templates/{template.code}`
       */
      template(code) {
        return `/guilds/templates/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/templates`
       * - POST `/guilds/{guild.id}/templates`
       */
      guildTemplates(guildId) {
        return `/guilds/${guildId}/templates`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/templates/{template.code}`
       * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
       * - DELETE `/guilds/{guild.id}/templates/{template.code}`
       */
      guildTemplate(guildId, code) {
        return `/guilds/${guildId}/templates/${code}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/threads`
       * - POST `/channels/{channel.id}/messages/{message.id}/threads`
       */
      threads(parentId, messageId) {
        const parts = ["", "channels", parentId];
        if (messageId)
          parts.push("messages", messageId);
        parts.push("threads");
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/threads/active`
       */
      guildActiveThreads(guildId) {
        return `/guilds/${guildId}/threads/active`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/threads/archived/public`
       * - GET `/channels/{channel.id}/threads/archived/private`
       */
      channelThreads(channelId, archivedStatus) {
        return `/channels/${channelId}/threads/archived/${archivedStatus}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/users/@me/threads/archived/private`
       */
      channelJoinedArchivedThreads(channelId) {
        return `/channels/${channelId}/users/@me/threads/archived/private`;
      },
      /**
       * Route for:
       * - GET    `/channels/{thread.id}/thread-members`
       * - GET    `/channels/{thread.id}/thread-members/{user.id}`
       * - PUT    `/channels/{thread.id}/thread-members/@me`
       * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
       * - DELETE `/channels/{thread.id}/thread-members/@me`
       * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
       */
      threadMembers(threadId, userId) {
        const parts = ["", "channels", threadId, "thread-members"];
        if (userId)
          parts.push(userId);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET   `/users/@me`
       * - GET   `/users/{user.id}`
       * - PATCH `/users/@me`
       *
       * @param [userId] The user ID, defaulted to `@me`
       */
      user(userId = "@me") {
        return `/users/${userId}`;
      },
      /**
       * Route for:
       * - GET `/users/@me/applications/{application.id}/role-connection`
       * - PUT `/users/@me/applications/{application.id}/role-connection`
       */
      userApplicationRoleConnection(applicationId) {
        return `/users/@me/applications/${applicationId}/role-connection`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds`
       */
      userGuilds() {
        return `/users/@me/guilds`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds/{guild.id}/member`
       */
      userGuildMember(guildId) {
        return `/users/@me/guilds/${guildId}/member`;
      },
      /**
       * Route for:
       * - DELETE `/users/@me/guilds/{guild.id}`
       */
      userGuild(guildId) {
        return `/users/@me/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - POST `/users/@me/channels`
       */
      userChannels() {
        return `/users/@me/channels`;
      },
      /**
       * Route for:
       * - GET `/users/@me/connections`
       */
      userConnections() {
        return `/users/@me/connections`;
      },
      /**
       * Route for:
       * - GET `/voice/regions`
       */
      voiceRegions() {
        return `/voice/regions`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/webhooks`
       * - POST `/channels/{channel.id}/webhooks`
       */
      channelWebhooks(channelId) {
        return `/channels/${channelId}/webhooks`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/webhooks`
       */
      guildWebhooks(guildId) {
        return `/guilds/${guildId}/webhooks`;
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}`
       * - PATCH  `/webhooks/{webhook.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
       * - DELETE `/webhooks/{webhook.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
       * - POST   `/webhooks/{webhook.id}/{webhook.token}`
       *
       * - POST   `/webhooks/{application.id}/{interaction.token}`
       */
      webhook(webhookId, webhookToken) {
        const parts = ["", "webhooks", webhookId];
        if (webhookToken)
          parts.push(webhookToken);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       *
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       */
      webhookMessage(webhookId, webhookToken, messageId = "@original") {
        return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
       * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
       */
      webhookPlatform(webhookId, webhookToken, platform) {
        return `/webhooks/${webhookId}/${webhookToken}/${platform}`;
      },
      /**
       * Route for:
       * - GET `/gateway`
       */
      gateway() {
        return `/gateway`;
      },
      /**
       * Route for:
       * - GET `/gateway/bot`
       */
      gatewayBot() {
        return `/gateway/bot`;
      },
      /**
       * Route for:
       * - GET `/oauth2/applications/@me`
       */
      oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/@me`
       */
      oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/authorize`
       */
      oauth2Authorization() {
        return `/oauth2/authorize`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token`
       */
      oauth2TokenExchange() {
        return `/oauth2/token`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token/revoke`
       */
      oauth2TokenRevocation() {
        return `/oauth2/token/revoke`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/commands`
       * - PUT  `/applications/{application.id}/commands`
       * - POST `/applications/{application.id}/commands`
       */
      applicationCommands(applicationId) {
        return `/applications/${applicationId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/commands/{command.id}`
       */
      applicationCommand(applicationId, commandId) {
        return `/applications/${applicationId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
       */
      applicationGuildCommands(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       */
      applicationGuildCommand(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
       */
      interactionCallback(interactionId, interactionToken) {
        return `/interactions/${interactionId}/${interactionToken}/callback`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/member-verification`
       * - PATCH `/guilds/{guild.id}/member-verification`
       */
      guildMemberVerification(guildId) {
        return `/guilds/${guildId}/member-verification`;
      },
      /**
       * Route for:
       * - PATCH `/guilds/{guild.id}/voice-states/@me`
       * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
       */
      guildVoiceState(guildId, userId = "@me") {
        return `/guilds/${guildId}/voice-states/${userId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       */
      guildApplicationCommandsPermissions(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       */
      applicationCommandPermissions(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/welcome-screen`
       * - PATCH `/guilds/{guild.id}/welcome-screen`
       */
      guildWelcomeScreen(guildId) {
        return `/guilds/${guildId}/welcome-screen`;
      },
      /**
       * Route for:
       * - POST `/stage-instances`
       */
      stageInstances() {
        return `/stage-instances`;
      },
      /**
       * Route for:
       * - GET `/stage-instances/{channel.id}`
       * - PATCH `/stage-instances/{channel.id}`
       * - DELETE `/stage-instances/{channel.id}`
       */
      stageInstance(channelId) {
        return `/stage-instances/${channelId}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}`
       */
      sticker(stickerId) {
        return `/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       */
      stickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       *
       * @deprecated Use {@link Routes.stickerPacks} instead.
       */
      nitroStickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/stickers`
       * - POST `/guilds/{guild.id}/stickers`
       */
      guildStickers(guildId) {
        return `/guilds/${guildId}/stickers`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
       * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
       * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
       */
      guildSticker(guildId, stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events`
       * - POST `/guilds/{guild.id}/scheduled-events`
       */
      guildScheduledEvents(guildId) {
        return `/guilds/${guildId}/scheduled-events`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       */
      guildScheduledEvent(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
       */
      guildScheduledEventUsers(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
      },
      /**
       * Route for:
       * - GET `/guilds/${guild.id}/onboarding`
       * - PUT `/guilds/${guild.id}/onboarding`
       */
      guildOnboarding(guildId) {
        return `/guilds/${guildId}/onboarding`;
      },
      /**
       * Route for:
       * - GET `/applications/@me`
       * - PATCH `/applications/@me`
       */
      currentApplication() {
        return "/applications/@me";
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements`
       * - POST `/applications/{application.id}/entitlements`
       */
      entitlements(applicationId) {
        return `/applications/${applicationId}/entitlements`;
      },
      /**
       * Route for:
       * - DELETE `/applications/{application.id}/entitlements/{entitlement.id}`
       */
      entitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/skus`
       */
      skus(applicationId) {
        return `/applications/${applicationId}/skus`;
      }
    };
    exports2.StickerPackApplicationId = "710982414301790216";
    exports2.CDNRoutes = {
      /**
       * Route for:
       * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      emoji(emojiId, format) {
        return `/emojis/${emojiId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/icons/{guild.id}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildIcon(guildId, guildIcon, format) {
        return `icons/${guildId}/${guildIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildSplash(guildId, guildSplash, format) {
        return `/splashes/${guildId}/${guildSplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
        return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildBanner(guildId, guildBanner, format) {
        return `/banners/${guildId}/${guildBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userBanner(userId, userBanner, format) {
        return `/banners/${userId}/${userBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/embed/avatars/{index}.png`
       *
       * The value for `index` parameter depends on whether the user is [migrated to the new username system](https://discord.com/developers/docs/change-log#unique-usernames-on-discord).
       * For users on the new username system, `index` will be `(user.id >> 22) % 6`.
       * For users on the legacy username system, `index` will be `user.discriminator % 5`.
       *
       * This route supports the extension: PNG
       */
      defaultUserAvatar(index) {
        return `/embed/avatars/${index}.png`;
      },
      /**
       * Route for:
       * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userAvatar(userId, userAvatar, format) {
        return `/avatars/${userId}/${userAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/users/{user.id}/{guild_member.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberAvatar(guildId, userId, memberAvatar, format) {
        return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/avatar-decorations/{user.id}/{user.avatar_decoration}.png`
       *
       * This route supports the extension: PNG
       */
      userAvatarDecoration(userId, userAvatarDecoration) {
        return `/avatar-decorations/${userId}/${userAvatarDecoration}.png`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationIcon(applicationId, applicationIcon, format) {
        return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationCover(applicationId, applicationCoverImage, format) {
        return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/{application.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationAsset(applicationId, applicationAssetId, format) {
        return `/app-assets/${applicationId}/${applicationAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      achievementIcon(applicationId, achievementId, achievementIconHash, format) {
        return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      stickerPackBanner(stickerPackBannerAssetId, format) {
        return `/app-assets/${exports2.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/${application.id}/store/${asset.id}.{png|jpeg|webp}}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      storePageAsset(applicationId, assetId) {
        return `/app-assets/${applicationId}/store/${assetId}.png`;
      },
      /**
       * Route for:
       * - GET `team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      teamIcon(teamId, teamIcon, format) {
        return `/team-icons/${teamId}/${teamIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}.{png|json}`
       *
       * This route supports the extensions: PNG, Lottie, GIF
       */
      sticker(stickerId, format) {
        return `/stickers/${stickerId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      roleIcon(roleId, roleIcon, format) {
        return `/role-icons/${roleId}/${roleIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
        return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberBanner(guildId, userId, guildMemberBanner, format) {
        return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
      }
    };
    var ImageFormat2;
    (function(ImageFormat3) {
      ImageFormat3["JPEG"] = "jpeg";
      ImageFormat3["PNG"] = "png";
      ImageFormat3["WebP"] = "webp";
      ImageFormat3["GIF"] = "gif";
      ImageFormat3["Lottie"] = "json";
    })(ImageFormat2 = exports2.ImageFormat || (exports2.ImageFormat = {}));
    exports2.RouteBases = {
      api: `https://discord.com/api/v${exports2.APIVersion}`,
      cdn: "https://cdn.discordapp.com",
      invite: "https://discord.gg",
      template: "https://discord.new",
      gift: "https://discord.gift",
      scheduledEvent: "https://discord.com/events"
    };
    Object.freeze(exports2.RouteBases);
    exports2.OAuth2Routes = {
      authorizationURL: `${exports2.RouteBases.api}${exports2.Routes.oauth2Authorization()}`,
      tokenURL: `${exports2.RouteBases.api}${exports2.Routes.oauth2TokenExchange()}`,
      /**
       * See https://tools.ietf.org/html/rfc7009
       */
      tokenRevocationURL: `${exports2.RouteBases.api}${exports2.Routes.oauth2TokenRevocation()}`
    };
    Object.freeze(exports2.OAuth2Routes);
  }
});

// node_modules/discord-api-types/rpc/common.js
var require_common4 = __commonJS({
  "node_modules/discord-api-types/rpc/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RPCCloseEventCodes = exports2.RPCErrorCodes = void 0;
    var RPCErrorCodes2;
    (function(RPCErrorCodes3) {
      RPCErrorCodes3[RPCErrorCodes3["UnknownError"] = 1e3] = "UnknownError";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPayload"] = 4e3] = "InvalidPayload";
      RPCErrorCodes3[RPCErrorCodes3["InvalidCommand"] = 4002] = "InvalidCommand";
      RPCErrorCodes3[RPCErrorCodes3["InvalidGuild"] = 4003] = "InvalidGuild";
      RPCErrorCodes3[RPCErrorCodes3["InvalidEvent"] = 4004] = "InvalidEvent";
      RPCErrorCodes3[RPCErrorCodes3["InvalidChannel"] = 4005] = "InvalidChannel";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPermissions"] = 4006] = "InvalidPermissions";
      RPCErrorCodes3[RPCErrorCodes3["InvalidClientId"] = 4007] = "InvalidClientId";
      RPCErrorCodes3[RPCErrorCodes3["InvalidOrigin"] = 4008] = "InvalidOrigin";
      RPCErrorCodes3[RPCErrorCodes3["InvalidToken"] = 4009] = "InvalidToken";
      RPCErrorCodes3[RPCErrorCodes3["InvalidUser"] = 4010] = "InvalidUser";
      RPCErrorCodes3[RPCErrorCodes3["OAuth2Error"] = 5e3] = "OAuth2Error";
      RPCErrorCodes3[RPCErrorCodes3["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
      RPCErrorCodes3[RPCErrorCodes3["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
    })(RPCErrorCodes2 = exports2.RPCErrorCodes || (exports2.RPCErrorCodes = {}));
    var RPCCloseEventCodes2;
    (function(RPCCloseEventCodes3) {
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidClientId"] = 4e3] = "InvalidClientId";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidOrigin"] = 4001] = "InvalidOrigin";
      RPCCloseEventCodes3[RPCCloseEventCodes3["RateLimited"] = 4002] = "RateLimited";
      RPCCloseEventCodes3[RPCCloseEventCodes3["TokenRevoked"] = 4003] = "TokenRevoked";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidVersion"] = 4004] = "InvalidVersion";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidEncoding"] = 4005] = "InvalidEncoding";
    })(RPCCloseEventCodes2 = exports2.RPCCloseEventCodes || (exports2.RPCCloseEventCodes = {}));
  }
});

// node_modules/discord-api-types/rpc/v10.js
var require_v104 = __commonJS({
  "node_modules/discord-api-types/rpc/v10.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_common4(), exports2);
  }
});

// node_modules/discord-api-types/utils/v10.js
var require_v105 = __commonJS({
  "node_modules/discord-api-types/utils/v10.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isContextMenuApplicationCommandInteraction = exports2.isChatInputApplicationCommandInteraction = exports2.isMessageComponentSelectMenuInteraction = exports2.isMessageComponentButtonInteraction = exports2.isMessageComponentInteraction = exports2.isInteractionButton = exports2.isLinkButton = exports2.isMessageComponentGuildInteraction = exports2.isMessageComponentDMInteraction = exports2.isApplicationCommandGuildInteraction = exports2.isApplicationCommandDMInteraction = exports2.isGuildInteraction = exports2.isDMInteraction = void 0;
    var index_1 = require_v102();
    function isDMInteraction(interaction) {
      return Reflect.has(interaction, "user");
    }
    exports2.isDMInteraction = isDMInteraction;
    function isGuildInteraction(interaction) {
      return Reflect.has(interaction, "guild_id");
    }
    exports2.isGuildInteraction = isGuildInteraction;
    function isApplicationCommandDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    exports2.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
    function isApplicationCommandGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    exports2.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
    function isMessageComponentDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    exports2.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
    function isMessageComponentGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    exports2.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
    function isLinkButton(component) {
      return component.style === index_1.ButtonStyle.Link;
    }
    exports2.isLinkButton = isLinkButton;
    function isInteractionButton(component) {
      return component.style !== index_1.ButtonStyle.Link;
    }
    exports2.isInteractionButton = isInteractionButton;
    function isMessageComponentInteraction(interaction) {
      return interaction.type === index_1.InteractionType.MessageComponent;
    }
    exports2.isMessageComponentInteraction = isMessageComponentInteraction;
    function isMessageComponentButtonInteraction(interaction) {
      return interaction.data.component_type === index_1.ComponentType.Button;
    }
    exports2.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
    function isMessageComponentSelectMenuInteraction(interaction) {
      return [
        index_1.ComponentType.StringSelect,
        index_1.ComponentType.UserSelect,
        index_1.ComponentType.RoleSelect,
        index_1.ComponentType.MentionableSelect,
        index_1.ComponentType.ChannelSelect
      ].includes(interaction.data.component_type);
    }
    exports2.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
    function isChatInputApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
    }
    exports2.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
    function isContextMenuApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User;
    }
    exports2.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
  }
});

// node_modules/discord-api-types/v10.js
var require_v106 = __commonJS({
  "node_modules/discord-api-types/v10.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m3[k2];
        } };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o3[k22] = m3[k2];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m3, exports3) {
      for (var p3 in m3)
        if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p3))
          __createBinding(exports3, m3, p3);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Utils = void 0;
    __exportStar(require_v10(), exports2);
    __exportStar(require_globals(), exports2);
    __exportStar(require_v102(), exports2);
    __exportStar(require_v103(), exports2);
    __exportStar(require_v104(), exports2);
    exports2.Utils = require_v105();
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal2(a3, b2) {
      if (a3 === b2)
        return true;
      if (a3 && b2 && typeof a3 == "object" && typeof b2 == "object") {
        if (a3.constructor !== b2.constructor)
          return false;
        var length, i3, keys;
        if (Array.isArray(a3)) {
          length = a3.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal2(a3[i3], b2[i3]))
              return false;
          return true;
        }
        if (a3.constructor === RegExp)
          return a3.source === b2.source && a3.flags === b2.flags;
        if (a3.valueOf !== Object.prototype.valueOf)
          return a3.valueOf() === b2.valueOf();
        if (a3.toString !== Object.prototype.toString)
          return a3.toString() === b2.toString();
        keys = Object.keys(a3);
        length = keys.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3]))
            return false;
        for (i3 = length; i3-- !== 0; ) {
          var key = keys[i3];
          if (!equal2(a3[key], b2[key]))
            return false;
        }
        return true;
      }
      return a3 !== a3 && b2 !== b2;
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getDailyNotes: () => getDailyNotes,
  getPage: () => getPage,
  sendDailyNotes: () => sendDailyNotes
});
module.exports = __toCommonJS(src_exports);
var import_discord5 = require("discord.js");

// src/config.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var { DISCORD_TOKEN, DISCORD_CLIENT_ID, GGM_TOKEN } = process.env;
if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error("Missing environment variables");
}
var config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  GGM_TOKEN
};

// src/commands/register.ts
var register_exports = {};
__export(register_exports, {
  data: () => data,
  execute: () => execute
});

// node_modules/@sapphire/shapeshift/dist/esm/index.mjs
var import_get = __toESM(require_get(), 1);
var import_es6 = __toESM(require_es6(), 1);
var import_uniqWith = __toESM(require_uniqWith(), 1);
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
var validationEnabled = true;
function setGlobalValidationEnabled(enabled) {
  validationEnabled = enabled;
}
__name(setGlobalValidationEnabled, "setGlobalValidationEnabled");
function getGlobalValidationEnabled() {
  return validationEnabled;
}
__name(getGlobalValidationEnabled, "getGlobalValidationEnabled");
var _Result = class _Result2 {
  constructor(success, value, error) {
    this.success = success;
    if (success) {
      this.value = value;
    } else {
      this.error = error;
    }
  }
  isOk() {
    return this.success;
  }
  isErr() {
    return !this.success;
  }
  unwrap() {
    if (this.isOk())
      return this.value;
    throw this.error;
  }
  static ok(value) {
    return new _Result2(true, value);
  }
  static err(error) {
    return new _Result2(false, void 0, error);
  }
};
__name(_Result, "Result");
var Result = _Result;
function getValue(valueOrFn) {
  return typeof valueOrFn === "function" ? valueOrFn() : valueOrFn;
}
__name(getValue, "getValue");
var e;
var t;
var n;
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
var o = e = {};
function i() {
  throw new Error("setTimeout has not been defined");
}
__name(i, "i");
function u() {
  throw new Error("clearTimeout has not been defined");
}
__name(u, "u");
function c(e3) {
  if (t === setTimeout)
    return setTimeout(e3, 0);
  if ((t === i || !t) && setTimeout)
    return t = setTimeout, setTimeout(e3, 0);
  try {
    return t(e3, 0);
  } catch (n3) {
    try {
      return t.call(null, e3, 0);
    } catch (n4) {
      return t.call(this || r, e3, 0);
    }
  }
}
__name(c, "c");
!function() {
  try {
    t = "function" == typeof setTimeout ? setTimeout : i;
  } catch (e3) {
    t = i;
  }
  try {
    n = "function" == typeof clearTimeout ? clearTimeout : u;
  } catch (e3) {
    n = u;
  }
}();
var l;
var s = [];
var f = false;
var a = -1;
function h() {
  f && l && (f = false, l.length ? s = l.concat(s) : a = -1, s.length && d());
}
__name(h, "h");
function d() {
  if (!f) {
    var e3 = c(h);
    f = true;
    for (var t3 = s.length; t3; ) {
      for (l = s, s = []; ++a < t3; )
        l && l[a].run();
      a = -1, t3 = s.length;
    }
    l = null, f = false, function(e4) {
      if (n === clearTimeout)
        return clearTimeout(e4);
      if ((n === u || !n) && clearTimeout)
        return n = clearTimeout, clearTimeout(e4);
      try {
        n(e4);
      } catch (t4) {
        try {
          return n.call(null, e4);
        } catch (t5) {
          return n.call(this || r, e4);
        }
      }
    }(e3);
  }
}
__name(d, "d");
function m(e3, t3) {
  (this || r).fun = e3, (this || r).array = t3;
}
__name(m, "m");
function p() {
}
__name(p, "p");
o.nextTick = function(e3) {
  var t3 = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n3 = 1; n3 < arguments.length; n3++)
      t3[n3 - 1] = arguments[n3];
  s.push(new m(e3, t3)), 1 !== s.length || f || c(d);
}, m.prototype.run = function() {
  (this || r).fun.apply(null, (this || r).array);
}, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = p, o.addListener = p, o.once = p, o.off = p, o.removeListener = p, o.removeAllListeners = p, o.emit = p, o.prependListener = p, o.prependOnceListener = p, o.listeners = function(e3) {
  return [];
}, o.binding = function(e3) {
  throw new Error("process.binding is not supported");
}, o.cwd = function() {
  return "/";
}, o.chdir = function(e3) {
  throw new Error("process.chdir is not supported");
}, o.umask = function() {
  return 0;
};
var T = e;
T.addListener;
T.argv;
T.binding;
T.browser;
T.chdir;
T.cwd;
T.emit;
T.env;
T.listeners;
T.nextTick;
T.off;
T.on;
T.once;
T.prependListener;
T.prependOnceListener;
T.removeAllListeners;
T.removeListener;
T.title;
T.umask;
T.version;
T.versions;
var t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var e2 = Object.prototype.toString;
var o2 = /* @__PURE__ */ __name(function(o3) {
  return !(t2 && o3 && "object" == typeof o3 && Symbol.toStringTag in o3) && "[object Arguments]" === e2.call(o3);
}, "o");
var n2 = /* @__PURE__ */ __name(function(t3) {
  return !!o2(t3) || null !== t3 && "object" == typeof t3 && "number" == typeof t3.length && t3.length >= 0 && "[object Array]" !== e2.call(t3) && "[object Function]" === e2.call(t3.callee);
}, "n");
var r2 = function() {
  return o2(arguments);
}();
o2.isLegacyArguments = n2;
var l2 = r2 ? o2 : n2;
var t$1 = Object.prototype.toString;
var o$1 = Function.prototype.toString;
var n$1 = /^\s*(?:function)?\*/;
var e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var r$1 = Object.getPrototypeOf;
var c2 = function() {
  if (!e$1)
    return false;
  try {
    return Function("return function*() {}")();
  } catch (t3) {
  }
}();
var u2 = c2 ? r$1(c2) : {};
var i2 = /* @__PURE__ */ __name(function(c3) {
  return "function" == typeof c3 && (!!n$1.test(o$1.call(c3)) || (e$1 ? r$1(c3) === u2 : "[object GeneratorFunction]" === t$1.call(c3)));
}, "i");
var t$2 = "function" == typeof Object.create ? function(t3, e3) {
  e3 && (t3.super_ = e3, t3.prototype = Object.create(e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
} : function(t3, e3) {
  if (e3) {
    t3.super_ = e3;
    var o3 = /* @__PURE__ */ __name(function() {
    }, "o");
    o3.prototype = e3.prototype, t3.prototype = new o3(), t3.prototype.constructor = t3;
  }
};
var i$1 = /* @__PURE__ */ __name(function(e3) {
  return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
}, "i$1");
var o$2 = {};
var u$1 = i$1;
var f2 = l2;
var a2 = i2;
function c$1(e3) {
  return e3.call.bind(e3);
}
__name(c$1, "c$1");
var s2 = "undefined" != typeof BigInt;
var p2 = "undefined" != typeof Symbol;
var y = p2 && void 0 !== Symbol.toStringTag;
var l$1 = "undefined" != typeof Uint8Array;
var d2 = "undefined" != typeof ArrayBuffer;
if (l$1 && y)
  var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
var m2 = c$1(Object.prototype.toString);
var h2 = c$1(Number.prototype.valueOf);
var j = c$1(String.prototype.valueOf);
var A = c$1(Boolean.prototype.valueOf);
if (s2)
  var w = c$1(BigInt.prototype.valueOf);
if (p2)
  var v = c$1(Symbol.prototype.valueOf);
function O(e3, t3) {
  if ("object" != typeof e3)
    return false;
  try {
    return t3(e3), true;
  } catch (e4) {
    return false;
  }
}
__name(O, "O");
function S(e3) {
  return l$1 && y ? void 0 !== b(e3) : B(e3) || k(e3) || E(e3) || D(e3) || U(e3) || P(e3) || x(e3) || I(e3) || M(e3) || z(e3) || F(e3);
}
__name(S, "S");
function B(e3) {
  return l$1 && y ? "Uint8Array" === b(e3) : "[object Uint8Array]" === m2(e3) || u$1(e3) && void 0 !== e3.buffer;
}
__name(B, "B");
function k(e3) {
  return l$1 && y ? "Uint8ClampedArray" === b(e3) : "[object Uint8ClampedArray]" === m2(e3);
}
__name(k, "k");
function E(e3) {
  return l$1 && y ? "Uint16Array" === b(e3) : "[object Uint16Array]" === m2(e3);
}
__name(E, "E");
function D(e3) {
  return l$1 && y ? "Uint32Array" === b(e3) : "[object Uint32Array]" === m2(e3);
}
__name(D, "D");
function U(e3) {
  return l$1 && y ? "Int8Array" === b(e3) : "[object Int8Array]" === m2(e3);
}
__name(U, "U");
function P(e3) {
  return l$1 && y ? "Int16Array" === b(e3) : "[object Int16Array]" === m2(e3);
}
__name(P, "P");
function x(e3) {
  return l$1 && y ? "Int32Array" === b(e3) : "[object Int32Array]" === m2(e3);
}
__name(x, "x");
function I(e3) {
  return l$1 && y ? "Float32Array" === b(e3) : "[object Float32Array]" === m2(e3);
}
__name(I, "I");
function M(e3) {
  return l$1 && y ? "Float64Array" === b(e3) : "[object Float64Array]" === m2(e3);
}
__name(M, "M");
function z(e3) {
  return l$1 && y ? "BigInt64Array" === b(e3) : "[object BigInt64Array]" === m2(e3);
}
__name(z, "z");
function F(e3) {
  return l$1 && y ? "BigUint64Array" === b(e3) : "[object BigUint64Array]" === m2(e3);
}
__name(F, "F");
function T2(e3) {
  return "[object Map]" === m2(e3);
}
__name(T2, "T");
function N(e3) {
  return "[object Set]" === m2(e3);
}
__name(N, "N");
function W(e3) {
  return "[object WeakMap]" === m2(e3);
}
__name(W, "W");
function $(e3) {
  return "[object WeakSet]" === m2(e3);
}
__name($, "$");
function C(e3) {
  return "[object ArrayBuffer]" === m2(e3);
}
__name(C, "C");
function V(e3) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e3) : e3 instanceof ArrayBuffer);
}
__name(V, "V");
function G(e3) {
  return "[object DataView]" === m2(e3);
}
__name(G, "G");
function R(e3) {
  return "undefined" != typeof DataView && (G.working ? G(e3) : e3 instanceof DataView);
}
__name(R, "R");
function J(e3) {
  return "[object SharedArrayBuffer]" === m2(e3);
}
__name(J, "J");
function _(e3) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e3) : e3 instanceof SharedArrayBuffer);
}
__name(_, "_");
function H(e3) {
  return O(e3, h2);
}
__name(H, "H");
function Z(e3) {
  return O(e3, j);
}
__name(Z, "Z");
function q(e3) {
  return O(e3, A);
}
__name(q, "q");
function K(e3) {
  return s2 && O(e3, w);
}
__name(K, "K");
function L(e3) {
  return p2 && O(e3, v);
}
__name(L, "L");
o$2.isArgumentsObject = f2, o$2.isGeneratorFunction = a2, o$2.isPromise = function(e3) {
  return "undefined" != typeof Promise && e3 instanceof Promise || null !== e3 && "object" == typeof e3 && "function" == typeof e3.then && "function" == typeof e3.catch;
}, o$2.isArrayBufferView = function(e3) {
  return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : S(e3) || R(e3);
}, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e3) {
  return "undefined" != typeof Map && (T2.working ? T2(e3) : e3 instanceof Map);
}, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e3) {
  return "undefined" != typeof Set && (N.working ? N(e3) : e3 instanceof Set);
}, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e3) {
  return "undefined" != typeof WeakMap && (W.working ? W(e3) : e3 instanceof WeakMap);
}, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e3) {
  return $(e3);
}, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e3) {
  return "[object AsyncFunction]" === m2(e3);
}, o$2.isMapIterator = function(e3) {
  return "[object Map Iterator]" === m2(e3);
}, o$2.isSetIterator = function(e3) {
  return "[object Set Iterator]" === m2(e3);
}, o$2.isGeneratorObject = function(e3) {
  return "[object Generator]" === m2(e3);
}, o$2.isWebAssemblyCompiledModule = function(e3) {
  return "[object WebAssembly.Module]" === m2(e3);
}, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e3) {
  return H(e3) || Z(e3) || q(e3) || K(e3) || L(e3);
}, o$2.isAnyArrayBuffer = function(e3) {
  return l$1 && (V(e3) || _(e3));
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e3) {
  Object.defineProperty(o$2, e3, { enumerable: false, value: function() {
    throw new Error(e3 + " is not supported in userland");
  } });
});
var Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
var X = {};
var Y = T;
var ee = Object.getOwnPropertyDescriptors || function(e3) {
  for (var t3 = Object.keys(e3), r3 = {}, n3 = 0; n3 < t3.length; n3++)
    r3[t3[n3]] = Object.getOwnPropertyDescriptor(e3, t3[n3]);
  return r3;
};
var te = /%[sdj%]/g;
X.format = function(e3) {
  if (!ge(e3)) {
    for (var t3 = [], r3 = 0; r3 < arguments.length; r3++)
      t3.push(oe(arguments[r3]));
    return t3.join(" ");
  }
  r3 = 1;
  for (var n3 = arguments, i3 = n3.length, o3 = String(e3).replace(te, function(e4) {
    if ("%%" === e4)
      return "%";
    if (r3 >= i3)
      return e4;
    switch (e4) {
      case "%s":
        return String(n3[r3++]);
      case "%d":
        return Number(n3[r3++]);
      case "%j":
        try {
          return JSON.stringify(n3[r3++]);
        } catch (e5) {
          return "[Circular]";
        }
      default:
        return e4;
    }
  }), u3 = n3[r3]; r3 < i3; u3 = n3[++r3])
    le(u3) || !he(u3) ? o3 += " " + u3 : o3 += " " + oe(u3);
  return o3;
}, X.deprecate = function(e3, t3) {
  if (void 0 !== Y && true === Y.noDeprecation)
    return e3;
  if (void 0 === Y)
    return function() {
      return X.deprecate(e3, t3).apply(this || Q, arguments);
    };
  var r3 = false;
  return function() {
    if (!r3) {
      if (Y.throwDeprecation)
        throw new Error(t3);
      Y.traceDeprecation ? console.trace(t3) : console.error(t3), r3 = true;
    }
    return e3.apply(this || Q, arguments);
  };
};
var re = {};
var ne = /^$/;
if (Y.env.NODE_DEBUG) {
  ie = Y.env.NODE_DEBUG;
  ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
}
var ie;
function oe(e3, t3) {
  var r3 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), ye(t3) ? r3.showHidden = t3 : t3 && X._extend(r3, t3), be(r3.showHidden) && (r3.showHidden = false), be(r3.depth) && (r3.depth = 2), be(r3.colors) && (r3.colors = false), be(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = ue), ae(r3, e3, r3.depth);
}
__name(oe, "oe");
function ue(e3, t3) {
  var r3 = oe.styles[t3];
  return r3 ? "\x1B[" + oe.colors[r3][0] + "m" + e3 + "\x1B[" + oe.colors[r3][1] + "m" : e3;
}
__name(ue, "ue");
function fe(e3, t3) {
  return e3;
}
__name(fe, "fe");
function ae(e3, t3, r3) {
  if (e3.customInspect && t3 && we(t3.inspect) && t3.inspect !== X.inspect && (!t3.constructor || t3.constructor.prototype !== t3)) {
    var n3 = t3.inspect(r3, e3);
    return ge(n3) || (n3 = ae(e3, n3, r3)), n3;
  }
  var i3 = function(e4, t4) {
    if (be(t4))
      return e4.stylize("undefined", "undefined");
    if (ge(t4)) {
      var r4 = "'" + JSON.stringify(t4).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e4.stylize(r4, "string");
    }
    if (de(t4))
      return e4.stylize("" + t4, "number");
    if (ye(t4))
      return e4.stylize("" + t4, "boolean");
    if (le(t4))
      return e4.stylize("null", "null");
  }(e3, t3);
  if (i3)
    return i3;
  var o3 = Object.keys(t3), u3 = function(e4) {
    var t4 = {};
    return e4.forEach(function(e5, r4) {
      t4[e5] = true;
    }), t4;
  }(o3);
  if (e3.showHidden && (o3 = Object.getOwnPropertyNames(t3)), Ae(t3) && (o3.indexOf("message") >= 0 || o3.indexOf("description") >= 0))
    return ce(t3);
  if (0 === o3.length) {
    if (we(t3)) {
      var f3 = t3.name ? ": " + t3.name : "";
      return e3.stylize("[Function" + f3 + "]", "special");
    }
    if (me(t3))
      return e3.stylize(RegExp.prototype.toString.call(t3), "regexp");
    if (je(t3))
      return e3.stylize(Date.prototype.toString.call(t3), "date");
    if (Ae(t3))
      return ce(t3);
  }
  var a3, c3 = "", s4 = false, p3 = ["{", "}"];
  (pe(t3) && (s4 = true, p3 = ["[", "]"]), we(t3)) && (c3 = " [Function" + (t3.name ? ": " + t3.name : "") + "]");
  return me(t3) && (c3 = " " + RegExp.prototype.toString.call(t3)), je(t3) && (c3 = " " + Date.prototype.toUTCString.call(t3)), Ae(t3) && (c3 = " " + ce(t3)), 0 !== o3.length || s4 && 0 != t3.length ? r3 < 0 ? me(t3) ? e3.stylize(RegExp.prototype.toString.call(t3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(t3), a3 = s4 ? function(e4, t4, r4, n4, i4) {
    for (var o4 = [], u4 = 0, f4 = t4.length; u4 < f4; ++u4)
      ke(t4, String(u4)) ? o4.push(se(e4, t4, r4, n4, String(u4), true)) : o4.push("");
    return i4.forEach(function(i5) {
      i5.match(/^\d+$/) || o4.push(se(e4, t4, r4, n4, i5, true));
    }), o4;
  }(e3, t3, r3, u3, o3) : o3.map(function(n4) {
    return se(e3, t3, r3, u3, n4, s4);
  }), e3.seen.pop(), function(e4, t4, r4) {
    var n4 = 0;
    if (e4.reduce(function(e5, t5) {
      return n4++, t5.indexOf("\n") >= 0 && n4++, e5 + t5.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r4[0] + ("" === t4 ? "" : t4 + "\n ") + " " + e4.join(",\n  ") + " " + r4[1];
    return r4[0] + t4 + " " + e4.join(", ") + " " + r4[1];
  }(a3, c3, p3)) : p3[0] + c3 + p3[1];
}
__name(ae, "ae");
function ce(e3) {
  return "[" + Error.prototype.toString.call(e3) + "]";
}
__name(ce, "ce");
function se(e3, t3, r3, n3, i3, o3) {
  var u3, f3, a3;
  if ((a3 = Object.getOwnPropertyDescriptor(t3, i3) || { value: t3[i3] }).get ? f3 = a3.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : a3.set && (f3 = e3.stylize("[Setter]", "special")), ke(n3, i3) || (u3 = "[" + i3 + "]"), f3 || (e3.seen.indexOf(a3.value) < 0 ? (f3 = le(r3) ? ae(e3, a3.value, null) : ae(e3, a3.value, r3 - 1)).indexOf("\n") > -1 && (f3 = o3 ? f3.split("\n").map(function(e4) {
    return "  " + e4;
  }).join("\n").substr(2) : "\n" + f3.split("\n").map(function(e4) {
    return "   " + e4;
  }).join("\n")) : f3 = e3.stylize("[Circular]", "special")), be(u3)) {
    if (o3 && i3.match(/^\d+$/))
      return f3;
    (u3 = JSON.stringify("" + i3)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u3 = u3.substr(1, u3.length - 2), u3 = e3.stylize(u3, "name")) : (u3 = u3.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u3 = e3.stylize(u3, "string"));
  }
  return u3 + ": " + f3;
}
__name(se, "se");
function pe(e3) {
  return Array.isArray(e3);
}
__name(pe, "pe");
function ye(e3) {
  return "boolean" == typeof e3;
}
__name(ye, "ye");
function le(e3) {
  return null === e3;
}
__name(le, "le");
function de(e3) {
  return "number" == typeof e3;
}
__name(de, "de");
function ge(e3) {
  return "string" == typeof e3;
}
__name(ge, "ge");
function be(e3) {
  return void 0 === e3;
}
__name(be, "be");
function me(e3) {
  return he(e3) && "[object RegExp]" === ve(e3);
}
__name(me, "me");
function he(e3) {
  return "object" == typeof e3 && null !== e3;
}
__name(he, "he");
function je(e3) {
  return he(e3) && "[object Date]" === ve(e3);
}
__name(je, "je");
function Ae(e3) {
  return he(e3) && ("[object Error]" === ve(e3) || e3 instanceof Error);
}
__name(Ae, "Ae");
function we(e3) {
  return "function" == typeof e3;
}
__name(we, "we");
function ve(e3) {
  return Object.prototype.toString.call(e3);
}
__name(ve, "ve");
function Oe(e3) {
  return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
}
__name(Oe, "Oe");
X.debuglog = function(e3) {
  if (e3 = e3.toUpperCase(), !re[e3])
    if (ne.test(e3)) {
      var t3 = Y.pid;
      re[e3] = function() {
        var r3 = X.format.apply(X, arguments);
        console.error("%s %d: %s", e3, t3, r3);
      };
    } else
      re[e3] = function() {
      };
  return re[e3];
}, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e3) {
  return null == e3;
}, X.isNumber = de, X.isString = ge, X.isSymbol = function(e3) {
  return "symbol" == typeof e3;
}, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e3) {
  return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
}, X.isBuffer = i$1;
var Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Be() {
  var e3 = /* @__PURE__ */ new Date(), t3 = [Oe(e3.getHours()), Oe(e3.getMinutes()), Oe(e3.getSeconds())].join(":");
  return [e3.getDate(), Se[e3.getMonth()], t3].join(" ");
}
__name(Be, "Be");
function ke(e3, t3) {
  return Object.prototype.hasOwnProperty.call(e3, t3);
}
__name(ke, "ke");
X.log = function() {
  console.log("%s - %s", Be(), X.format.apply(X, arguments));
}, X.inherits = t$2, X._extend = function(e3, t3) {
  if (!t3 || !he(t3))
    return e3;
  for (var r3 = Object.keys(t3), n3 = r3.length; n3--; )
    e3[r3[n3]] = t3[r3[n3]];
  return e3;
};
var Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function De(e3, t3) {
  if (!e3) {
    var r3 = new Error("Promise was rejected with a falsy value");
    r3.reason = e3, e3 = r3;
  }
  return t3(e3);
}
__name(De, "De");
X.promisify = function(e3) {
  if ("function" != typeof e3)
    throw new TypeError('The "original" argument must be of type Function');
  if (Ee && e3[Ee]) {
    var t3;
    if ("function" != typeof (t3 = e3[Ee]))
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), t3;
  }
  function t3() {
    for (var t4, r3, n3 = new Promise(function(e4, n4) {
      t4 = e4, r3 = n4;
    }), i3 = [], o3 = 0; o3 < arguments.length; o3++)
      i3.push(arguments[o3]);
    i3.push(function(e4, n4) {
      e4 ? r3(e4) : t4(n4);
    });
    try {
      e3.apply(this || Q, i3);
    } catch (e4) {
      r3(e4);
    }
    return n3;
  }
  __name(t3, "t");
  return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Ee && Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t3, ee(e3));
}, X.promisify.custom = Ee, X.callbackify = function(e3) {
  if ("function" != typeof e3)
    throw new TypeError('The "original" argument must be of type Function');
  function t3() {
    for (var t4 = [], r3 = 0; r3 < arguments.length; r3++)
      t4.push(arguments[r3]);
    var n3 = t4.pop();
    if ("function" != typeof n3)
      throw new TypeError("The last argument must be of type Function");
    var i3 = this || Q, o3 = /* @__PURE__ */ __name(function() {
      return n3.apply(i3, arguments);
    }, "o");
    e3.apply(this || Q, t4).then(function(e4) {
      Y.nextTick(o3.bind(null, null, e4));
    }, function(e4) {
      Y.nextTick(De.bind(null, e4, o3));
    });
  }
  __name(t3, "t");
  return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Object.defineProperties(t3, ee(e3)), t3;
};
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X.types;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
var inspect2 = X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X.types;
X.TextEncoder = globalThis.TextEncoder;
X.TextDecoder = globalThis.TextDecoder;
var customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
var customInspectSymbolStackLess = Symbol.for("nodejs.util.inspect.custom.stack-less");
var _BaseError = class _BaseError2 extends Error {
  [customInspectSymbol](depth, options) {
    return `${this[customInspectSymbolStackLess](depth, options)}
${this.stack.slice(this.stack.indexOf("\n"))}`;
  }
};
__name(_BaseError, "BaseError");
var BaseError = _BaseError;
var _BaseConstraintError = class _BaseConstraintError2 extends BaseError {
  constructor(constraint, message, given) {
    super(message);
    this.constraint = constraint;
    this.given = given;
  }
};
__name(_BaseConstraintError, "BaseConstraintError");
var BaseConstraintError = _BaseConstraintError;
var _ExpectedConstraintError = class _ExpectedConstraintError2 extends BaseConstraintError {
  constructor(constraint, message, given, expected) {
    super(constraint, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      constraint: this.constraint,
      given: this.given,
      expected: this.expected
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const constraint = options.stylize(this.constraint, "string");
    if (depth < 0) {
      return options.stylize(`[ExpectedConstraintError: ${constraint}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ExpectedConstraintError", "special")} > ${constraint}`;
    const message = options.stylize(this.message, "regexp");
    const expectedBlock = `
  ${options.stylize("Expected: ", "string")}${options.stylize(this.expected, "boolean")}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name(_ExpectedConstraintError, "ExpectedConstraintError");
var ExpectedConstraintError = _ExpectedConstraintError;
function whenConstraint(key, options, validator) {
  return {
    run(input, parent) {
      if (!parent) {
        return Result.err(new ExpectedConstraintError("s.object(T.when)", "Validator has no parent", parent, "Validator to have a parent"));
      }
      const isKeyArray = Array.isArray(key);
      const value = isKeyArray ? key.map((k2) => (0, import_get.default)(parent, k2)) : (0, import_get.default)(parent, key);
      const predicate = resolveBooleanIs(options, value, isKeyArray) ? options.then : options.otherwise;
      if (predicate) {
        return predicate(validator).run(input);
      }
      return Result.ok(input);
    }
  };
}
__name(whenConstraint, "whenConstraint");
function resolveBooleanIs(options, value, isKeyArray) {
  if (options.is === void 0) {
    return isKeyArray ? !value.some((val) => !val) : Boolean(value);
  }
  if (typeof options.is === "function") {
    return options.is(value);
  }
  return value === options.is;
}
__name(resolveBooleanIs, "resolveBooleanIs");
var _BaseValidator = class _BaseValidator2 {
  constructor(constraints = []) {
    this.constraints = [];
    this.isValidationEnabled = null;
    this.constraints = constraints;
  }
  setParent(parent) {
    this.parent = parent;
    return this;
  }
  get optional() {
    return new UnionValidator([new LiteralValidator(void 0), this.clone()]);
  }
  get nullable() {
    return new UnionValidator([new LiteralValidator(null), this.clone()]);
  }
  get nullish() {
    return new UnionValidator([new NullishValidator(), this.clone()]);
  }
  get array() {
    return new ArrayValidator(this.clone());
  }
  get set() {
    return new SetValidator(this.clone());
  }
  or(...predicates) {
    return new UnionValidator([this.clone(), ...predicates]);
  }
  transform(cb) {
    return this.addConstraint({ run: (input) => Result.ok(cb(input)) });
  }
  reshape(cb) {
    return this.addConstraint({ run: cb });
  }
  default(value) {
    return new DefaultValidator(this.clone(), value);
  }
  when(key, options) {
    return this.addConstraint(whenConstraint(key, options, this));
  }
  describe(description) {
    const clone = this.clone();
    clone.description = description;
    return clone;
  }
  run(value) {
    let result = this.handle(value);
    if (result.isErr())
      return result;
    for (const constraint of this.constraints) {
      result = constraint.run(result.value, this.parent);
      if (result.isErr())
        break;
    }
    return result;
  }
  parse(value) {
    if (!this.shouldRunConstraints) {
      return this.handle(value).unwrap();
    }
    return this.constraints.reduce((v2, constraint) => constraint.run(v2).unwrap(), this.handle(value).unwrap());
  }
  is(value) {
    return this.run(value).isOk();
  }
  /**
   * Sets if the validator should also run constraints or just do basic checks.
   * @param isValidationEnabled Whether this validator should be enabled or disabled. You can pass boolean or a function returning boolean which will be called just before parsing.
   * Set to `null` to go off of the global configuration.
   */
  setValidationEnabled(isValidationEnabled2) {
    const clone = this.clone();
    clone.isValidationEnabled = isValidationEnabled2;
    return clone;
  }
  getValidationEnabled() {
    return getValue(this.isValidationEnabled);
  }
  get shouldRunConstraints() {
    return getValue(this.isValidationEnabled) ?? getGlobalValidationEnabled();
  }
  clone() {
    const clone = Reflect.construct(this.constructor, [this.constraints]);
    clone.isValidationEnabled = this.isValidationEnabled;
    return clone;
  }
  addConstraint(constraint) {
    const clone = this.clone();
    clone.constraints = clone.constraints.concat(constraint);
    return clone;
  }
};
__name(_BaseValidator, "BaseValidator");
var BaseValidator = _BaseValidator;
function isUnique(input) {
  if (input.length < 2)
    return true;
  const uniqueArray2 = (0, import_uniqWith.default)(input, import_es6.default);
  return uniqueArray2.length === input.length;
}
__name(isUnique, "isUnique");
function lessThan(a3, b2) {
  return a3 < b2;
}
__name(lessThan, "lessThan");
function lessThanOrEqual(a3, b2) {
  return a3 <= b2;
}
__name(lessThanOrEqual, "lessThanOrEqual");
function greaterThan(a3, b2) {
  return a3 > b2;
}
__name(greaterThan, "greaterThan");
function greaterThanOrEqual(a3, b2) {
  return a3 >= b2;
}
__name(greaterThanOrEqual, "greaterThanOrEqual");
function equal(a3, b2) {
  return a3 === b2;
}
__name(equal, "equal");
function notEqual(a3, b2) {
  return a3 !== b2;
}
__name(notEqual, "notEqual");
function arrayLengthComparator(comparator, name, expected, length) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthComparator, "arrayLengthComparator");
function arrayLengthLessThan(value) {
  const expected = `expected.length < ${value}`;
  return arrayLengthComparator(lessThan, "s.array(T).lengthLessThan", expected, value);
}
__name(arrayLengthLessThan, "arrayLengthLessThan");
function arrayLengthLessThanOrEqual(value) {
  const expected = `expected.length <= ${value}`;
  return arrayLengthComparator(lessThanOrEqual, "s.array(T).lengthLessThanOrEqual", expected, value);
}
__name(arrayLengthLessThanOrEqual, "arrayLengthLessThanOrEqual");
function arrayLengthGreaterThan(value) {
  const expected = `expected.length > ${value}`;
  return arrayLengthComparator(greaterThan, "s.array(T).lengthGreaterThan", expected, value);
}
__name(arrayLengthGreaterThan, "arrayLengthGreaterThan");
function arrayLengthGreaterThanOrEqual(value) {
  const expected = `expected.length >= ${value}`;
  return arrayLengthComparator(greaterThanOrEqual, "s.array(T).lengthGreaterThanOrEqual", expected, value);
}
__name(arrayLengthGreaterThanOrEqual, "arrayLengthGreaterThanOrEqual");
function arrayLengthEqual(value) {
  const expected = `expected.length === ${value}`;
  return arrayLengthComparator(equal, "s.array(T).lengthEqual", expected, value);
}
__name(arrayLengthEqual, "arrayLengthEqual");
function arrayLengthNotEqual(value) {
  const expected = `expected.length !== ${value}`;
  return arrayLengthComparator(notEqual, "s.array(T).lengthNotEqual", expected, value);
}
__name(arrayLengthNotEqual, "arrayLengthNotEqual");
function arrayLengthRange(start, endBefore) {
  const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).lengthRange", "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthRange, "arrayLengthRange");
function arrayLengthRangeInclusive(start, end) {
  const expected = `expected.length >= ${start} && expected.length <= ${end}`;
  return {
    run(input) {
      return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).lengthRangeInclusive", "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthRangeInclusive, "arrayLengthRangeInclusive");
function arrayLengthRangeExclusive(startAfter, endBefore) {
  const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).lengthRangeExclusive", "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthRangeExclusive, "arrayLengthRangeExclusive");
var uniqueArray = {
  run(input) {
    return isUnique(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).unique", "Array values are not unique", input, "Expected all values to be unique"));
  }
};
var _CombinedPropertyError = class _CombinedPropertyError2 extends BaseError {
  constructor(errors) {
    super("Received one or more errors");
    this.errors = errors;
  }
  [customInspectSymbolStackLess](depth, options) {
    if (depth < 0) {
      return options.stylize("[CombinedPropertyError]", "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const header = `${options.stylize("CombinedPropertyError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
    const message = options.stylize(this.message, "regexp");
    const errors = this.errors.map(([key, error]) => {
      const property = _CombinedPropertyError2.formatProperty(key, options);
      const body = error[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
      return `  input${property}${padding}${body}`;
    }).join("\n\n");
    return `${header}
  ${message}

${errors}`;
  }
  static formatProperty(key, options) {
    if (typeof key === "string")
      return options.stylize(`.${key}`, "symbol");
    if (typeof key === "number")
      return `[${options.stylize(key.toString(), "number")}]`;
    return `[${options.stylize("Symbol", "symbol")}(${key.description})]`;
  }
};
__name(_CombinedPropertyError, "CombinedPropertyError");
var CombinedPropertyError = _CombinedPropertyError;
var _ValidationError = class _ValidationError2 extends BaseError {
  constructor(validator, message, given) {
    super(message);
    this.validator = validator;
    this.given = given;
  }
  toJSON() {
    return {
      name: this.name,
      validator: this.validator,
      given: this.given
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const validator = options.stylize(this.validator, "string");
    if (depth < 0) {
      return options.stylize(`[ValidationError: ${validator}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ValidationError", "special")} > ${validator}`;
    const message = options.stylize(this.message, "regexp");
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${givenBlock}`;
  }
};
__name(_ValidationError, "ValidationError");
var ValidationError = _ValidationError;
var _ArrayValidator = class _ArrayValidator2 extends BaseValidator {
  constructor(validator, constraints = []) {
    super(constraints);
    this.validator = validator;
  }
  lengthLessThan(length) {
    return this.addConstraint(arrayLengthLessThan(length));
  }
  lengthLessThanOrEqual(length) {
    return this.addConstraint(arrayLengthLessThanOrEqual(length));
  }
  lengthGreaterThan(length) {
    return this.addConstraint(arrayLengthGreaterThan(length));
  }
  lengthGreaterThanOrEqual(length) {
    return this.addConstraint(arrayLengthGreaterThanOrEqual(length));
  }
  lengthEqual(length) {
    return this.addConstraint(arrayLengthEqual(length));
  }
  lengthNotEqual(length) {
    return this.addConstraint(arrayLengthNotEqual(length));
  }
  lengthRange(start, endBefore) {
    return this.addConstraint(arrayLengthRange(start, endBefore));
  }
  lengthRangeInclusive(startAt, endAt) {
    return this.addConstraint(arrayLengthRangeInclusive(startAt, endAt));
  }
  lengthRangeExclusive(startAfter, endBefore) {
    return this.addConstraint(arrayLengthRangeExclusive(startAfter, endBefore));
  }
  get unique() {
    return this.addConstraint(uniqueArray);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.constraints]);
  }
  handle(values) {
    if (!Array.isArray(values)) {
      return Result.err(new ValidationError("s.array(T)", "Expected an array", values));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = [];
    for (let i3 = 0; i3 < values.length; i3++) {
      const result = this.validator.run(values[i3]);
      if (result.isOk())
        transformed.push(result.value);
      else
        errors.push([i3, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors));
  }
};
__name(_ArrayValidator, "ArrayValidator");
var ArrayValidator = _ArrayValidator;
function bigintComparator(comparator, name, expected, number) {
  return {
    run(input) {
      return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid bigint value", input, expected));
    }
  };
}
__name(bigintComparator, "bigintComparator");
function bigintLessThan(value) {
  const expected = `expected < ${value}n`;
  return bigintComparator(lessThan, "s.bigint.lessThan", expected, value);
}
__name(bigintLessThan, "bigintLessThan");
function bigintLessThanOrEqual(value) {
  const expected = `expected <= ${value}n`;
  return bigintComparator(lessThanOrEqual, "s.bigint.lessThanOrEqual", expected, value);
}
__name(bigintLessThanOrEqual, "bigintLessThanOrEqual");
function bigintGreaterThan(value) {
  const expected = `expected > ${value}n`;
  return bigintComparator(greaterThan, "s.bigint.greaterThan", expected, value);
}
__name(bigintGreaterThan, "bigintGreaterThan");
function bigintGreaterThanOrEqual(value) {
  const expected = `expected >= ${value}n`;
  return bigintComparator(greaterThanOrEqual, "s.bigint.greaterThanOrEqual", expected, value);
}
__name(bigintGreaterThanOrEqual, "bigintGreaterThanOrEqual");
function bigintEqual(value) {
  const expected = `expected === ${value}n`;
  return bigintComparator(equal, "s.bigint.equal", expected, value);
}
__name(bigintEqual, "bigintEqual");
function bigintNotEqual(value) {
  const expected = `expected !== ${value}n`;
  return bigintComparator(notEqual, "s.bigint.notEqual", expected, value);
}
__name(bigintNotEqual, "bigintNotEqual");
function bigintDivisibleBy(divider) {
  const expected = `expected % ${divider}n === 0n`;
  return {
    run(input) {
      return input % divider === 0n ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.bigint.divisibleBy", "BigInt is not divisible", input, expected));
    }
  };
}
__name(bigintDivisibleBy, "bigintDivisibleBy");
var _BigIntValidator = class _BigIntValidator2 extends BaseValidator {
  lessThan(number) {
    return this.addConstraint(bigintLessThan(number));
  }
  lessThanOrEqual(number) {
    return this.addConstraint(bigintLessThanOrEqual(number));
  }
  greaterThan(number) {
    return this.addConstraint(bigintGreaterThan(number));
  }
  greaterThanOrEqual(number) {
    return this.addConstraint(bigintGreaterThanOrEqual(number));
  }
  equal(number) {
    return this.addConstraint(bigintEqual(number));
  }
  notEqual(number) {
    return this.addConstraint(bigintNotEqual(number));
  }
  get positive() {
    return this.greaterThanOrEqual(0n);
  }
  get negative() {
    return this.lessThan(0n);
  }
  divisibleBy(number) {
    return this.addConstraint(bigintDivisibleBy(number));
  }
  get abs() {
    return this.transform((value) => value < 0 ? -value : value);
  }
  intN(bits) {
    return this.transform((value) => BigInt.asIntN(bits, value));
  }
  uintN(bits) {
    return this.transform((value) => BigInt.asUintN(bits, value));
  }
  handle(value) {
    return typeof value === "bigint" ? Result.ok(value) : Result.err(new ValidationError("s.bigint", "Expected a bigint primitive", value));
  }
};
__name(_BigIntValidator, "BigIntValidator");
var BigIntValidator = _BigIntValidator;
var booleanTrue = {
  run(input) {
    return input ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.boolean.true", "Invalid boolean value", input, "true"));
  }
};
var booleanFalse = {
  run(input) {
    return input ? Result.err(new ExpectedConstraintError("s.boolean.false", "Invalid boolean value", input, "false")) : Result.ok(input);
  }
};
var _BooleanValidator = class _BooleanValidator2 extends BaseValidator {
  get true() {
    return this.addConstraint(booleanTrue);
  }
  get false() {
    return this.addConstraint(booleanFalse);
  }
  equal(value) {
    return value ? this.true : this.false;
  }
  notEqual(value) {
    return value ? this.false : this.true;
  }
  handle(value) {
    return typeof value === "boolean" ? Result.ok(value) : Result.err(new ValidationError("s.boolean", "Expected a boolean primitive", value));
  }
};
__name(_BooleanValidator, "BooleanValidator");
var BooleanValidator = _BooleanValidator;
function dateComparator(comparator, name, expected, number) {
  return {
    run(input) {
      return comparator(input.getTime(), number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid Date value", input, expected));
    }
  };
}
__name(dateComparator, "dateComparator");
function dateLessThan(value) {
  const expected = `expected < ${value.toISOString()}`;
  return dateComparator(lessThan, "s.date.lessThan", expected, value.getTime());
}
__name(dateLessThan, "dateLessThan");
function dateLessThanOrEqual(value) {
  const expected = `expected <= ${value.toISOString()}`;
  return dateComparator(lessThanOrEqual, "s.date.lessThanOrEqual", expected, value.getTime());
}
__name(dateLessThanOrEqual, "dateLessThanOrEqual");
function dateGreaterThan(value) {
  const expected = `expected > ${value.toISOString()}`;
  return dateComparator(greaterThan, "s.date.greaterThan", expected, value.getTime());
}
__name(dateGreaterThan, "dateGreaterThan");
function dateGreaterThanOrEqual(value) {
  const expected = `expected >= ${value.toISOString()}`;
  return dateComparator(greaterThanOrEqual, "s.date.greaterThanOrEqual", expected, value.getTime());
}
__name(dateGreaterThanOrEqual, "dateGreaterThanOrEqual");
function dateEqual(value) {
  const expected = `expected === ${value.toISOString()}`;
  return dateComparator(equal, "s.date.equal", expected, value.getTime());
}
__name(dateEqual, "dateEqual");
function dateNotEqual(value) {
  const expected = `expected !== ${value.toISOString()}`;
  return dateComparator(notEqual, "s.date.notEqual", expected, value.getTime());
}
__name(dateNotEqual, "dateNotEqual");
var dateInvalid = {
  run(input) {
    return Number.isNaN(input.getTime()) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.date.invalid", "Invalid Date value", input, "expected === NaN"));
  }
};
var dateValid = {
  run(input) {
    return Number.isNaN(input.getTime()) ? Result.err(new ExpectedConstraintError("s.date.valid", "Invalid Date value", input, "expected !== NaN")) : Result.ok(input);
  }
};
var _DateValidator = class _DateValidator2 extends BaseValidator {
  lessThan(date) {
    return this.addConstraint(dateLessThan(new Date(date)));
  }
  lessThanOrEqual(date) {
    return this.addConstraint(dateLessThanOrEqual(new Date(date)));
  }
  greaterThan(date) {
    return this.addConstraint(dateGreaterThan(new Date(date)));
  }
  greaterThanOrEqual(date) {
    return this.addConstraint(dateGreaterThanOrEqual(new Date(date)));
  }
  equal(date) {
    const resolved = new Date(date);
    return Number.isNaN(resolved.getTime()) ? this.invalid : this.addConstraint(dateEqual(resolved));
  }
  notEqual(date) {
    const resolved = new Date(date);
    return Number.isNaN(resolved.getTime()) ? this.valid : this.addConstraint(dateNotEqual(resolved));
  }
  get valid() {
    return this.addConstraint(dateValid);
  }
  get invalid() {
    return this.addConstraint(dateInvalid);
  }
  handle(value) {
    return value instanceof Date ? Result.ok(value) : Result.err(new ValidationError("s.date", "Expected a Date", value));
  }
};
__name(_DateValidator, "DateValidator");
var DateValidator = _DateValidator;
var _ExpectedValidationError = class _ExpectedValidationError2 extends ValidationError {
  constructor(validator, message, given, expected) {
    super(validator, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      validator: this.validator,
      given: this.given,
      expected: this.expected
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const validator = options.stylize(this.validator, "string");
    if (depth < 0) {
      return options.stylize(`[ExpectedValidationError: ${validator}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const expected = inspect2(this.expected, newOptions).replace(/\n/g, padding);
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ExpectedValidationError", "special")} > ${validator}`;
    const message = options.stylize(this.message, "regexp");
    const expectedBlock = `
  ${options.stylize("Expected:", "string")}${padding}${expected}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name(_ExpectedValidationError, "ExpectedValidationError");
var ExpectedValidationError = _ExpectedValidationError;
var _InstanceValidator = class _InstanceValidator2 extends BaseValidator {
  constructor(expected, constraints = []) {
    super(constraints);
    this.expected = expected;
  }
  handle(value) {
    return value instanceof this.expected ? Result.ok(value) : Result.err(new ExpectedValidationError("s.instance(V)", "Expected", value, this.expected));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.expected, this.constraints]);
  }
};
__name(_InstanceValidator, "InstanceValidator");
var InstanceValidator = _InstanceValidator;
var _LiteralValidator = class _LiteralValidator2 extends BaseValidator {
  constructor(literal, constraints = []) {
    super(constraints);
    this.expected = literal;
  }
  handle(value) {
    return Object.is(value, this.expected) ? Result.ok(value) : Result.err(new ExpectedValidationError("s.literal(V)", "Expected values to be equals", value, this.expected));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.expected, this.constraints]);
  }
};
__name(_LiteralValidator, "LiteralValidator");
var LiteralValidator = _LiteralValidator;
var _NeverValidator = class _NeverValidator2 extends BaseValidator {
  handle(value) {
    return Result.err(new ValidationError("s.never", "Expected a value to not be passed", value));
  }
};
__name(_NeverValidator, "NeverValidator");
var NeverValidator = _NeverValidator;
var _NullishValidator = class _NullishValidator2 extends BaseValidator {
  handle(value) {
    return value === void 0 || value === null ? Result.ok(value) : Result.err(new ValidationError("s.nullish", "Expected undefined or null", value));
  }
};
__name(_NullishValidator, "NullishValidator");
var NullishValidator = _NullishValidator;
function numberComparator(comparator, name, expected, number) {
  return {
    run(input) {
      return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid number value", input, expected));
    }
  };
}
__name(numberComparator, "numberComparator");
function numberLessThan(value) {
  const expected = `expected < ${value}`;
  return numberComparator(lessThan, "s.number.lessThan", expected, value);
}
__name(numberLessThan, "numberLessThan");
function numberLessThanOrEqual(value) {
  const expected = `expected <= ${value}`;
  return numberComparator(lessThanOrEqual, "s.number.lessThanOrEqual", expected, value);
}
__name(numberLessThanOrEqual, "numberLessThanOrEqual");
function numberGreaterThan(value) {
  const expected = `expected > ${value}`;
  return numberComparator(greaterThan, "s.number.greaterThan", expected, value);
}
__name(numberGreaterThan, "numberGreaterThan");
function numberGreaterThanOrEqual(value) {
  const expected = `expected >= ${value}`;
  return numberComparator(greaterThanOrEqual, "s.number.greaterThanOrEqual", expected, value);
}
__name(numberGreaterThanOrEqual, "numberGreaterThanOrEqual");
function numberEqual(value) {
  const expected = `expected === ${value}`;
  return numberComparator(equal, "s.number.equal", expected, value);
}
__name(numberEqual, "numberEqual");
function numberNotEqual(value) {
  const expected = `expected !== ${value}`;
  return numberComparator(notEqual, "s.number.notEqual", expected, value);
}
__name(numberNotEqual, "numberNotEqual");
var numberInt = {
  run(input) {
    return Number.isInteger(input) ? Result.ok(input) : Result.err(
      new ExpectedConstraintError("s.number.int", "Given value is not an integer", input, "Number.isInteger(expected) to be true")
    );
  }
};
var numberSafeInt = {
  run(input) {
    return Number.isSafeInteger(input) ? Result.ok(input) : Result.err(
      new ExpectedConstraintError(
        "s.number.safeInt",
        "Given value is not a safe integer",
        input,
        "Number.isSafeInteger(expected) to be true"
      )
    );
  }
};
var numberFinite = {
  run(input) {
    return Number.isFinite(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.number.finite", "Given value is not finite", input, "Number.isFinite(expected) to be true"));
  }
};
var numberNaN = {
  run(input) {
    return Number.isNaN(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.number.equal(NaN)", "Invalid number value", input, "expected === NaN"));
  }
};
var numberNotNaN = {
  run(input) {
    return Number.isNaN(input) ? Result.err(new ExpectedConstraintError("s.number.notEqual(NaN)", "Invalid number value", input, "expected !== NaN")) : Result.ok(input);
  }
};
function numberDivisibleBy(divider) {
  const expected = `expected % ${divider} === 0`;
  return {
    run(input) {
      return input % divider === 0 ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.number.divisibleBy", "Number is not divisible", input, expected));
    }
  };
}
__name(numberDivisibleBy, "numberDivisibleBy");
var _NumberValidator = class _NumberValidator2 extends BaseValidator {
  lessThan(number) {
    return this.addConstraint(numberLessThan(number));
  }
  lessThanOrEqual(number) {
    return this.addConstraint(numberLessThanOrEqual(number));
  }
  greaterThan(number) {
    return this.addConstraint(numberGreaterThan(number));
  }
  greaterThanOrEqual(number) {
    return this.addConstraint(numberGreaterThanOrEqual(number));
  }
  equal(number) {
    return Number.isNaN(number) ? this.addConstraint(numberNaN) : this.addConstraint(numberEqual(number));
  }
  notEqual(number) {
    return Number.isNaN(number) ? this.addConstraint(numberNotNaN) : this.addConstraint(numberNotEqual(number));
  }
  get int() {
    return this.addConstraint(numberInt);
  }
  get safeInt() {
    return this.addConstraint(numberSafeInt);
  }
  get finite() {
    return this.addConstraint(numberFinite);
  }
  get positive() {
    return this.greaterThanOrEqual(0);
  }
  get negative() {
    return this.lessThan(0);
  }
  divisibleBy(divider) {
    return this.addConstraint(numberDivisibleBy(divider));
  }
  get abs() {
    return this.transform(Math.abs);
  }
  get sign() {
    return this.transform(Math.sign);
  }
  get trunc() {
    return this.transform(Math.trunc);
  }
  get floor() {
    return this.transform(Math.floor);
  }
  get fround() {
    return this.transform(Math.fround);
  }
  get round() {
    return this.transform(Math.round);
  }
  get ceil() {
    return this.transform(Math.ceil);
  }
  handle(value) {
    return typeof value === "number" ? Result.ok(value) : Result.err(new ValidationError("s.number", "Expected a number primitive", value));
  }
};
__name(_NumberValidator, "NumberValidator");
var NumberValidator = _NumberValidator;
var _MissingPropertyError = class _MissingPropertyError2 extends BaseError {
  constructor(property) {
    super("A required property is missing");
    this.property = property;
  }
  toJSON() {
    return {
      name: this.name,
      property: this.property
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const property = options.stylize(this.property.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[MissingPropertyError: ${property}]`, "special");
    }
    const header = `${options.stylize("MissingPropertyError", "special")} > ${property}`;
    const message = options.stylize(this.message, "regexp");
    return `${header}
  ${message}`;
  }
};
__name(_MissingPropertyError, "MissingPropertyError");
var MissingPropertyError = _MissingPropertyError;
var _UnknownPropertyError = class _UnknownPropertyError2 extends BaseError {
  constructor(property, value) {
    super("Received unexpected property");
    this.property = property;
    this.value = value;
  }
  toJSON() {
    return {
      name: this.name,
      property: this.property,
      value: this.value
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const property = options.stylize(this.property.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[UnknownPropertyError: ${property}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.value, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("UnknownPropertyError", "special")} > ${property}`;
    const message = options.stylize(this.message, "regexp");
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${givenBlock}`;
  }
};
__name(_UnknownPropertyError, "UnknownPropertyError");
var UnknownPropertyError = _UnknownPropertyError;
var _DefaultValidator = class _DefaultValidator2 extends BaseValidator {
  constructor(validator, value, constraints = []) {
    super(constraints);
    this.validator = validator;
    this.defaultValue = value;
  }
  default(value) {
    const clone = this.clone();
    clone.defaultValue = value;
    return clone;
  }
  handle(value) {
    return typeof value === "undefined" ? Result.ok(getValue(this.defaultValue)) : this.validator["handle"](value);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.defaultValue, this.constraints]);
  }
};
__name(_DefaultValidator, "DefaultValidator");
var DefaultValidator = _DefaultValidator;
var _CombinedError = class _CombinedError2 extends BaseError {
  constructor(errors) {
    super("Received one or more errors");
    this.errors = errors;
  }
  [customInspectSymbolStackLess](depth, options) {
    if (depth < 0) {
      return options.stylize("[CombinedError]", "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const header = `${options.stylize("CombinedError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
    const message = options.stylize(this.message, "regexp");
    const errors = this.errors.map((error, i3) => {
      const index = options.stylize((i3 + 1).toString(), "number");
      const body = error[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
      return `  ${index} ${body}`;
    }).join("\n\n");
    return `${header}
  ${message}

${errors}`;
  }
};
__name(_CombinedError, "CombinedError");
var CombinedError = _CombinedError;
var _UnionValidator = class _UnionValidator2 extends BaseValidator {
  constructor(validators, constraints = []) {
    super(constraints);
    this.validators = validators;
  }
  get optional() {
    if (this.validators.length === 0)
      return new _UnionValidator2([new LiteralValidator(void 0)], this.constraints);
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === void 0)
        return this.clone();
      if (validator.expected === null) {
        return new _UnionValidator2(
          [new NullishValidator(), ...this.validators.slice(1)],
          this.constraints
        );
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new LiteralValidator(void 0), ...this.validators]);
  }
  get required() {
    if (this.validators.length === 0)
      return this.clone();
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === void 0)
        return new _UnionValidator2(this.validators.slice(1), this.constraints);
    } else if (validator instanceof NullishValidator) {
      return new _UnionValidator2([new LiteralValidator(null), ...this.validators.slice(1)], this.constraints);
    }
    return this.clone();
  }
  get nullable() {
    if (this.validators.length === 0)
      return new _UnionValidator2([new LiteralValidator(null)], this.constraints);
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === null)
        return this.clone();
      if (validator.expected === void 0) {
        return new _UnionValidator2(
          [new NullishValidator(), ...this.validators.slice(1)],
          this.constraints
        );
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new LiteralValidator(null), ...this.validators]);
  }
  get nullish() {
    if (this.validators.length === 0)
      return new _UnionValidator2([new NullishValidator()], this.constraints);
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === null || validator.expected === void 0) {
        return new _UnionValidator2([new NullishValidator(), ...this.validators.slice(1)], this.constraints);
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new NullishValidator(), ...this.validators]);
  }
  or(...predicates) {
    return new _UnionValidator2([...this.validators, ...predicates]);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validators, this.constraints]);
  }
  handle(value) {
    const errors = [];
    for (const validator of this.validators) {
      const result = validator.run(value);
      if (result.isOk())
        return result;
      errors.push(result.error);
    }
    return Result.err(new CombinedError(errors));
  }
};
__name(_UnionValidator, "UnionValidator");
var UnionValidator = _UnionValidator;
var _ObjectValidator = class _ObjectValidator2 extends BaseValidator {
  constructor(shape, strategy = 0, constraints = []) {
    super(constraints);
    this.keys = [];
    this.requiredKeys = /* @__PURE__ */ new Map();
    this.possiblyUndefinedKeys = /* @__PURE__ */ new Map();
    this.possiblyUndefinedKeysWithDefaults = /* @__PURE__ */ new Map();
    this.shape = shape;
    this.strategy = strategy;
    switch (this.strategy) {
      case 0:
        this.handleStrategy = (value) => this.handleIgnoreStrategy(value);
        break;
      case 1: {
        this.handleStrategy = (value) => this.handleStrictStrategy(value);
        break;
      }
      case 2:
        this.handleStrategy = (value) => this.handlePassthroughStrategy(value);
        break;
    }
    const shapeEntries = Object.entries(shape);
    this.keys = shapeEntries.map(([key]) => key);
    for (const [key, validator] of shapeEntries) {
      if (validator instanceof UnionValidator) {
        const [possiblyLiteralOrNullishPredicate] = validator["validators"];
        if (possiblyLiteralOrNullishPredicate instanceof NullishValidator) {
          this.possiblyUndefinedKeys.set(key, validator);
        } else if (possiblyLiteralOrNullishPredicate instanceof LiteralValidator) {
          if (possiblyLiteralOrNullishPredicate.expected === void 0) {
            this.possiblyUndefinedKeys.set(key, validator);
          } else {
            this.requiredKeys.set(key, validator);
          }
        } else if (validator instanceof DefaultValidator) {
          this.possiblyUndefinedKeysWithDefaults.set(key, validator);
        } else {
          this.requiredKeys.set(key, validator);
        }
      } else if (validator instanceof NullishValidator) {
        this.possiblyUndefinedKeys.set(key, validator);
      } else if (validator instanceof LiteralValidator) {
        if (validator.expected === void 0) {
          this.possiblyUndefinedKeys.set(key, validator);
        } else {
          this.requiredKeys.set(key, validator);
        }
      } else if (validator instanceof DefaultValidator) {
        this.possiblyUndefinedKeysWithDefaults.set(key, validator);
      } else {
        this.requiredKeys.set(key, validator);
      }
    }
  }
  get strict() {
    return Reflect.construct(this.constructor, [this.shape, 1, this.constraints]);
  }
  get ignore() {
    return Reflect.construct(this.constructor, [this.shape, 0, this.constraints]);
  }
  get passthrough() {
    return Reflect.construct(this.constructor, [this.shape, 2, this.constraints]);
  }
  get partial() {
    const shape = Object.fromEntries(this.keys.map((key) => [key, this.shape[key].optional]));
    return Reflect.construct(this.constructor, [shape, this.strategy, this.constraints]);
  }
  get required() {
    const shape = Object.fromEntries(
      this.keys.map((key) => {
        let validator = this.shape[key];
        if (validator instanceof UnionValidator)
          validator = validator.required;
        return [key, validator];
      })
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, this.constraints]);
  }
  extend(schema) {
    const shape = { ...this.shape, ...schema instanceof _ObjectValidator2 ? schema.shape : schema };
    return Reflect.construct(this.constructor, [shape, this.strategy, this.constraints]);
  }
  pick(keys) {
    const shape = Object.fromEntries(
      keys.filter((key) => this.keys.includes(key)).map((key) => [key, this.shape[key]])
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, this.constraints]);
  }
  omit(keys) {
    const shape = Object.fromEntries(
      this.keys.filter((key) => !keys.includes(key)).map((key) => [key, this.shape[key]])
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, this.constraints]);
  }
  handle(value) {
    const typeOfValue = typeof value;
    if (typeOfValue !== "object") {
      return Result.err(new ValidationError("s.object(T)", `Expected the value to be an object, but received ${typeOfValue} instead`, value));
    }
    if (value === null) {
      return Result.err(new ValidationError("s.object(T)", "Expected the value to not be null", value));
    }
    if (Array.isArray(value)) {
      return Result.err(new ValidationError("s.object(T)", "Expected the value to not be an array", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    for (const predicate of Object.values(this.shape)) {
      predicate.setParent(this.parent ?? value);
    }
    return this.handleStrategy(value);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.shape, this.strategy, this.constraints]);
  }
  handleIgnoreStrategy(value) {
    const errors = [];
    const finalObject = {};
    const inputEntries = new Map(Object.entries(value));
    const runPredicate = /* @__PURE__ */ __name((key, predicate) => {
      const result = predicate.run(value[key]);
      if (result.isOk()) {
        finalObject[key] = result.value;
      } else {
        const error = result.error;
        errors.push([key, error]);
      }
    }, "runPredicate");
    for (const [key, predicate] of this.requiredKeys) {
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      } else {
        errors.push([key, new MissingPropertyError(key)]);
      }
    }
    for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
      inputEntries.delete(key);
      runPredicate(key, validator);
    }
    if (inputEntries.size === 0) {
      return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors));
    }
    const checkInputEntriesInsteadOfSchemaKeys = this.possiblyUndefinedKeys.size > inputEntries.size;
    if (checkInputEntriesInsteadOfSchemaKeys) {
      for (const [key] of inputEntries) {
        const predicate = this.possiblyUndefinedKeys.get(key);
        if (predicate) {
          runPredicate(key, predicate);
        }
      }
    } else {
      for (const [key, predicate] of this.possiblyUndefinedKeys) {
        if (inputEntries.delete(key)) {
          runPredicate(key, predicate);
        }
      }
    }
    return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors));
  }
  handleStrictStrategy(value) {
    const errors = [];
    const finalResult = {};
    const inputEntries = new Map(Object.entries(value));
    const runPredicate = /* @__PURE__ */ __name((key, predicate) => {
      const result = predicate.run(value[key]);
      if (result.isOk()) {
        finalResult[key] = result.value;
      } else {
        const error = result.error;
        errors.push([key, error]);
      }
    }, "runPredicate");
    for (const [key, predicate] of this.requiredKeys) {
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      } else {
        errors.push([key, new MissingPropertyError(key)]);
      }
    }
    for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
      inputEntries.delete(key);
      runPredicate(key, validator);
    }
    for (const [key, predicate] of this.possiblyUndefinedKeys) {
      if (inputEntries.size === 0) {
        break;
      }
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      }
    }
    if (inputEntries.size !== 0) {
      for (const [key, value2] of inputEntries.entries()) {
        errors.push([key, new UnknownPropertyError(key, value2)]);
      }
    }
    return errors.length === 0 ? Result.ok(finalResult) : Result.err(new CombinedPropertyError(errors));
  }
  handlePassthroughStrategy(value) {
    const result = this.handleIgnoreStrategy(value);
    return result.isErr() ? result : Result.ok({ ...value, ...result.value });
  }
};
__name(_ObjectValidator, "ObjectValidator");
var ObjectValidator = _ObjectValidator;
var _PassthroughValidator = class _PassthroughValidator2 extends BaseValidator {
  handle(value) {
    return Result.ok(value);
  }
};
__name(_PassthroughValidator, "PassthroughValidator");
var PassthroughValidator = _PassthroughValidator;
var _RecordValidator = class _RecordValidator2 extends BaseValidator {
  constructor(validator, constraints = []) {
    super(constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.constraints]);
  }
  handle(value) {
    if (typeof value !== "object") {
      return Result.err(new ValidationError("s.record(T)", "Expected an object", value));
    }
    if (value === null) {
      return Result.err(new ValidationError("s.record(T)", "Expected the value to not be null", value));
    }
    if (Array.isArray(value)) {
      return Result.err(new ValidationError("s.record(T)", "Expected the value to not be an array", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    const errors = [];
    const transformed = {};
    for (const [key, val] of Object.entries(value)) {
      const result = this.validator.run(val);
      if (result.isOk())
        transformed[key] = result.value;
      else
        errors.push([key, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors));
  }
};
__name(_RecordValidator, "RecordValidator");
var RecordValidator = _RecordValidator;
var _SetValidator = class _SetValidator2 extends BaseValidator {
  constructor(validator, constraints = []) {
    super(constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.constraints]);
  }
  handle(values) {
    if (!(values instanceof Set)) {
      return Result.err(new ValidationError("s.set(T)", "Expected a set", values));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = /* @__PURE__ */ new Set();
    for (const value of values) {
      const result = this.validator.run(value);
      if (result.isOk())
        transformed.add(result.value);
      else
        errors.push(result.error);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedError(errors));
  }
};
__name(_SetValidator, "SetValidator");
var SetValidator = _SetValidator;
var accountRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]$/i;
function validateEmail(email) {
  if (!email)
    return false;
  const atIndex = email.indexOf("@");
  if (atIndex === -1)
    return false;
  if (atIndex > 64)
    return false;
  const domainIndex = atIndex + 1;
  if (email.includes("@", domainIndex))
    return false;
  if (email.length - domainIndex > 255)
    return false;
  let dotIndex = email.indexOf(".", domainIndex);
  if (dotIndex === -1)
    return false;
  let lastDotIndex = domainIndex;
  do {
    if (dotIndex - lastDotIndex > 63)
      return false;
    lastDotIndex = dotIndex + 1;
  } while ((dotIndex = email.indexOf(".", lastDotIndex)) !== -1);
  if (email.length - lastDotIndex > 63)
    return false;
  return accountRegex.test(email.slice(0, atIndex)) && validateEmailDomain(email.slice(domainIndex));
}
__name(validateEmail, "validateEmail");
function validateEmailDomain(domain) {
  try {
    return new URL(`http://${domain}`).hostname === domain;
  } catch {
    return false;
  }
}
__name(validateEmailDomain, "validateEmailDomain");
var v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
var IPv4Reg = new RegExp(`^${v4Str}$`);
var v6Seg = "(?:[0-9a-fA-F]{1,4})";
var IPv6Reg = new RegExp(
  `^((?:${v6Seg}:){7}(?:${v6Seg}|:)|(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function isIPv4(s4) {
  return IPv4Reg.test(s4);
}
__name(isIPv4, "isIPv4");
function isIPv6(s4) {
  return IPv6Reg.test(s4);
}
__name(isIPv6, "isIPv6");
function isIP(s4) {
  if (isIPv4(s4))
    return 4;
  if (isIPv6(s4))
    return 6;
  return 0;
}
__name(isIP, "isIP");
var phoneNumberRegex = /^((?:\+|0{0,2})\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
function validatePhoneNumber(input) {
  return phoneNumberRegex.test(input);
}
__name(validatePhoneNumber, "validatePhoneNumber");
var _MultiplePossibilitiesConstraintError = class _MultiplePossibilitiesConstraintError2 extends BaseConstraintError {
  constructor(constraint, message, given, expected) {
    super(constraint, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      constraint: this.constraint,
      given: this.given,
      expected: this.expected
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const constraint = options.stylize(this.constraint, "string");
    if (depth < 0) {
      return options.stylize(`[MultiplePossibilitiesConstraintError: ${constraint}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const verticalLine = options.stylize("|", "undefined");
    const padding = `
  ${verticalLine} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("MultiplePossibilitiesConstraintError", "special")} > ${constraint}`;
    const message = options.stylize(this.message, "regexp");
    const expectedPadding = `
  ${verticalLine} - `;
    const expectedBlock = `
  ${options.stylize("Expected any of the following:", "string")}${expectedPadding}${this.expected.map((possible) => options.stylize(possible, "boolean")).join(expectedPadding)}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name(_MultiplePossibilitiesConstraintError, "MultiplePossibilitiesConstraintError");
var MultiplePossibilitiesConstraintError = _MultiplePossibilitiesConstraintError;
function combinedErrorFn(...fns) {
  switch (fns.length) {
    case 0:
      return () => null;
    case 1:
      return fns[0];
    case 2: {
      const [fn0, fn1] = fns;
      return (...params) => fn0(...params) || fn1(...params);
    }
    default: {
      return (...params) => {
        for (const fn of fns) {
          const result = fn(...params);
          if (result)
            return result;
        }
        return null;
      };
    }
  }
}
__name(combinedErrorFn, "combinedErrorFn");
function createUrlValidators(options) {
  const fns = [];
  if (options?.allowedProtocols?.length)
    fns.push(allowedProtocolsFn(options.allowedProtocols));
  if (options?.allowedDomains?.length)
    fns.push(allowedDomainsFn(options.allowedDomains));
  return combinedErrorFn(...fns);
}
__name(createUrlValidators, "createUrlValidators");
function allowedProtocolsFn(allowedProtocols) {
  return (input, url2) => allowedProtocols.includes(url2.protocol) ? null : new MultiplePossibilitiesConstraintError("s.string.url", "Invalid URL protocol", input, allowedProtocols);
}
__name(allowedProtocolsFn, "allowedProtocolsFn");
function allowedDomainsFn(allowedDomains) {
  return (input, url2) => allowedDomains.includes(url2.hostname) ? null : new MultiplePossibilitiesConstraintError("s.string.url", "Invalid URL domain", input, allowedDomains);
}
__name(allowedDomainsFn, "allowedDomainsFn");
function stringLengthComparator(comparator, name, expected, length) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid string length", input, expected));
    }
  };
}
__name(stringLengthComparator, "stringLengthComparator");
function stringLengthLessThan(length) {
  const expected = `expected.length < ${length}`;
  return stringLengthComparator(lessThan, "s.string.lengthLessThan", expected, length);
}
__name(stringLengthLessThan, "stringLengthLessThan");
function stringLengthLessThanOrEqual(length) {
  const expected = `expected.length <= ${length}`;
  return stringLengthComparator(lessThanOrEqual, "s.string.lengthLessThanOrEqual", expected, length);
}
__name(stringLengthLessThanOrEqual, "stringLengthLessThanOrEqual");
function stringLengthGreaterThan(length) {
  const expected = `expected.length > ${length}`;
  return stringLengthComparator(greaterThan, "s.string.lengthGreaterThan", expected, length);
}
__name(stringLengthGreaterThan, "stringLengthGreaterThan");
function stringLengthGreaterThanOrEqual(length) {
  const expected = `expected.length >= ${length}`;
  return stringLengthComparator(greaterThanOrEqual, "s.string.lengthGreaterThanOrEqual", expected, length);
}
__name(stringLengthGreaterThanOrEqual, "stringLengthGreaterThanOrEqual");
function stringLengthEqual(length) {
  const expected = `expected.length === ${length}`;
  return stringLengthComparator(equal, "s.string.lengthEqual", expected, length);
}
__name(stringLengthEqual, "stringLengthEqual");
function stringLengthNotEqual(length) {
  const expected = `expected.length !== ${length}`;
  return stringLengthComparator(notEqual, "s.string.lengthNotEqual", expected, length);
}
__name(stringLengthNotEqual, "stringLengthNotEqual");
function stringEmail() {
  return {
    run(input) {
      return validateEmail(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.string.email", "Invalid email address", input, "expected to be an email address"));
    }
  };
}
__name(stringEmail, "stringEmail");
function stringRegexValidator(type, expected, regex) {
  return {
    run(input) {
      return regex.test(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(type, "Invalid string format", input, expected));
    }
  };
}
__name(stringRegexValidator, "stringRegexValidator");
function stringUrl(options) {
  const validatorFn = createUrlValidators(options);
  return {
    run(input) {
      let url2;
      try {
        url2 = new URL(input);
      } catch {
        return Result.err(new ExpectedConstraintError("s.string.url", "Invalid URL", input, "expected to match a URL"));
      }
      const validatorFnResult = validatorFn(input, url2);
      if (validatorFnResult === null)
        return Result.ok(input);
      return Result.err(validatorFnResult);
    }
  };
}
__name(stringUrl, "stringUrl");
function stringIp(version) {
  const ipVersion = version ? `v${version}` : "";
  const validatorFn = version === 4 ? isIPv4 : version === 6 ? isIPv6 : isIP;
  const name = `s.string.ip${ipVersion}`;
  const message = `Invalid IP${ipVersion} address`;
  const expected = `expected to be an IP${ipVersion} address`;
  return {
    run(input) {
      return validatorFn(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, message, input, expected));
    }
  };
}
__name(stringIp, "stringIp");
function stringRegex(regex) {
  return stringRegexValidator("s.string.regex", `expected ${regex}.test(expected) to be true`, regex);
}
__name(stringRegex, "stringRegex");
function stringUuid({ version = 4, nullable = false } = {}) {
  version ?? (version = "1-5");
  const regex = new RegExp(
    `^(?:[0-9A-F]{8}-[0-9A-F]{4}-[${version}][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}${nullable ? "|00000000-0000-0000-0000-000000000000" : ""})$`,
    "i"
  );
  const expected = `expected to match UUID${typeof version === "number" ? `v${version}` : ` in range of ${version}`}`;
  return stringRegexValidator("s.string.uuid", expected, regex);
}
__name(stringUuid, "stringUuid");
function stringDate() {
  return {
    run(input) {
      const time2 = Date.parse(input);
      return Number.isNaN(time2) ? Result.err(
        new ExpectedConstraintError(
          "s.string.date",
          "Invalid date string",
          input,
          "expected to be a valid date string (in the ISO 8601 or ECMA-262 format)"
        )
      ) : Result.ok(input);
    }
  };
}
__name(stringDate, "stringDate");
function stringPhone() {
  return {
    run(input) {
      return validatePhoneNumber(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.string.phone", "Invalid phone number", input, "expected to be a phone number"));
    }
  };
}
__name(stringPhone, "stringPhone");
var _StringValidator = class _StringValidator2 extends BaseValidator {
  lengthLessThan(length) {
    return this.addConstraint(stringLengthLessThan(length));
  }
  lengthLessThanOrEqual(length) {
    return this.addConstraint(stringLengthLessThanOrEqual(length));
  }
  lengthGreaterThan(length) {
    return this.addConstraint(stringLengthGreaterThan(length));
  }
  lengthGreaterThanOrEqual(length) {
    return this.addConstraint(stringLengthGreaterThanOrEqual(length));
  }
  lengthEqual(length) {
    return this.addConstraint(stringLengthEqual(length));
  }
  lengthNotEqual(length) {
    return this.addConstraint(stringLengthNotEqual(length));
  }
  get email() {
    return this.addConstraint(stringEmail());
  }
  url(options) {
    return this.addConstraint(stringUrl(options));
  }
  uuid(options) {
    return this.addConstraint(stringUuid(options));
  }
  regex(regex) {
    return this.addConstraint(stringRegex(regex));
  }
  get date() {
    return this.addConstraint(stringDate());
  }
  get ipv4() {
    return this.ip(4);
  }
  get ipv6() {
    return this.ip(6);
  }
  ip(version) {
    return this.addConstraint(stringIp(version));
  }
  phone() {
    return this.addConstraint(stringPhone());
  }
  handle(value) {
    return typeof value === "string" ? Result.ok(value) : Result.err(new ValidationError("s.string", "Expected a string primitive", value));
  }
};
__name(_StringValidator, "StringValidator");
var StringValidator = _StringValidator;
var _TupleValidator = class _TupleValidator2 extends BaseValidator {
  constructor(validators, constraints = []) {
    super(constraints);
    this.validators = [];
    this.validators = validators;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validators, this.constraints]);
  }
  handle(values) {
    if (!Array.isArray(values)) {
      return Result.err(new ValidationError("s.tuple(T)", "Expected an array", values));
    }
    if (values.length !== this.validators.length) {
      return Result.err(new ValidationError("s.tuple(T)", `Expected an array of length ${this.validators.length}`, values));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = [];
    for (let i3 = 0; i3 < values.length; i3++) {
      const result = this.validators[i3].run(values[i3]);
      if (result.isOk())
        transformed.push(result.value);
      else
        errors.push([i3, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors));
  }
};
__name(_TupleValidator, "TupleValidator");
var TupleValidator = _TupleValidator;
var _MapValidator = class _MapValidator2 extends BaseValidator {
  constructor(keyValidator, valueValidator2, constraints = []) {
    super(constraints);
    this.keyValidator = keyValidator;
    this.valueValidator = valueValidator2;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.keyValidator, this.valueValidator, this.constraints]);
  }
  handle(value) {
    if (!(value instanceof Map)) {
      return Result.err(new ValidationError("s.map(K, V)", "Expected a map", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    const errors = [];
    const transformed = /* @__PURE__ */ new Map();
    for (const [key, val] of value.entries()) {
      const keyResult = this.keyValidator.run(key);
      const valueResult = this.valueValidator.run(val);
      const { length } = errors;
      if (keyResult.isErr())
        errors.push([key, keyResult.error]);
      if (valueResult.isErr())
        errors.push([key, valueResult.error]);
      if (errors.length === length)
        transformed.set(keyResult.value, valueResult.value);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors));
  }
};
__name(_MapValidator, "MapValidator");
var MapValidator = _MapValidator;
var _LazyValidator = class _LazyValidator2 extends BaseValidator {
  constructor(validator, constraints = []) {
    super(constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.constraints]);
  }
  handle(values) {
    return this.validator(values).run(values);
  }
};
__name(_LazyValidator, "LazyValidator");
var LazyValidator = _LazyValidator;
var _UnknownEnumValueError = class _UnknownEnumValueError2 extends BaseError {
  constructor(value, keys, enumMappings) {
    super("Expected the value to be one of the following enum values:");
    this.value = value;
    this.enumKeys = keys;
    this.enumMappings = enumMappings;
  }
  toJSON() {
    return {
      name: this.name,
      value: this.value,
      enumKeys: this.enumKeys,
      enumMappings: [...this.enumMappings.entries()]
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const value = options.stylize(this.value.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[UnknownEnumValueError: ${value}]`, "special");
    }
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const pairs = this.enumKeys.map((key) => {
      const enumValue = this.enumMappings.get(key);
      return `${options.stylize(key, "string")} or ${options.stylize(
        enumValue.toString(),
        typeof enumValue === "number" ? "number" : "string"
      )}`;
    }).join(padding);
    const header = `${options.stylize("UnknownEnumValueError", "special")} > ${value}`;
    const message = options.stylize(this.message, "regexp");
    const pairsBlock = `${padding}${pairs}`;
    return `${header}
  ${message}
${pairsBlock}`;
  }
};
__name(_UnknownEnumValueError, "UnknownEnumValueError");
var UnknownEnumValueError = _UnknownEnumValueError;
var _NativeEnumValidator = class _NativeEnumValidator2 extends BaseValidator {
  constructor(enumShape) {
    super();
    this.hasNumericElements = false;
    this.enumMapping = /* @__PURE__ */ new Map();
    this.enumShape = enumShape;
    this.enumKeys = Object.keys(enumShape).filter((key) => {
      return typeof enumShape[enumShape[key]] !== "number";
    });
    for (const key of this.enumKeys) {
      const enumValue = enumShape[key];
      this.enumMapping.set(key, enumValue);
      this.enumMapping.set(enumValue, enumValue);
      if (typeof enumValue === "number") {
        this.hasNumericElements = true;
        this.enumMapping.set(`${enumValue}`, enumValue);
      }
    }
  }
  handle(value) {
    const typeOfValue = typeof value;
    if (typeOfValue === "number") {
      if (!this.hasNumericElements) {
        return Result.err(new ValidationError("s.nativeEnum(T)", "Expected the value to be a string", value));
      }
    } else if (typeOfValue !== "string") {
      return Result.err(new ValidationError("s.nativeEnum(T)", "Expected the value to be a string or number", value));
    }
    const casted = value;
    const possibleEnumValue = this.enumMapping.get(casted);
    return typeof possibleEnumValue === "undefined" ? Result.err(new UnknownEnumValueError(casted, this.enumKeys, this.enumMapping)) : Result.ok(possibleEnumValue);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.enumShape]);
  }
};
__name(_NativeEnumValidator, "NativeEnumValidator");
var NativeEnumValidator = _NativeEnumValidator;
function typedArrayByteLengthComparator(comparator, name, expected, length) {
  return {
    run(input) {
      return comparator(input.byteLength, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid Typed Array byte length", input, expected));
    }
  };
}
__name(typedArrayByteLengthComparator, "typedArrayByteLengthComparator");
function typedArrayByteLengthLessThan(value) {
  const expected = `expected.byteLength < ${value}`;
  return typedArrayByteLengthComparator(lessThan, "s.typedArray(T).byteLengthLessThan", expected, value);
}
__name(typedArrayByteLengthLessThan, "typedArrayByteLengthLessThan");
function typedArrayByteLengthLessThanOrEqual(value) {
  const expected = `expected.byteLength <= ${value}`;
  return typedArrayByteLengthComparator(lessThanOrEqual, "s.typedArray(T).byteLengthLessThanOrEqual", expected, value);
}
__name(typedArrayByteLengthLessThanOrEqual, "typedArrayByteLengthLessThanOrEqual");
function typedArrayByteLengthGreaterThan(value) {
  const expected = `expected.byteLength > ${value}`;
  return typedArrayByteLengthComparator(greaterThan, "s.typedArray(T).byteLengthGreaterThan", expected, value);
}
__name(typedArrayByteLengthGreaterThan, "typedArrayByteLengthGreaterThan");
function typedArrayByteLengthGreaterThanOrEqual(value) {
  const expected = `expected.byteLength >= ${value}`;
  return typedArrayByteLengthComparator(greaterThanOrEqual, "s.typedArray(T).byteLengthGreaterThanOrEqual", expected, value);
}
__name(typedArrayByteLengthGreaterThanOrEqual, "typedArrayByteLengthGreaterThanOrEqual");
function typedArrayByteLengthEqual(value) {
  const expected = `expected.byteLength === ${value}`;
  return typedArrayByteLengthComparator(equal, "s.typedArray(T).byteLengthEqual", expected, value);
}
__name(typedArrayByteLengthEqual, "typedArrayByteLengthEqual");
function typedArrayByteLengthNotEqual(value) {
  const expected = `expected.byteLength !== ${value}`;
  return typedArrayByteLengthComparator(notEqual, "s.typedArray(T).byteLengthNotEqual", expected, value);
}
__name(typedArrayByteLengthNotEqual, "typedArrayByteLengthNotEqual");
function typedArrayByteLengthRange(start, endBefore) {
  const expected = `expected.byteLength >= ${start} && expected.byteLength < ${endBefore}`;
  return {
    run(input) {
      return input.byteLength >= start && input.byteLength < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.typedArray(T).byteLengthRange", "Invalid Typed Array byte length", input, expected));
    }
  };
}
__name(typedArrayByteLengthRange, "typedArrayByteLengthRange");
function typedArrayByteLengthRangeInclusive(start, end) {
  const expected = `expected.byteLength >= ${start} && expected.byteLength <= ${end}`;
  return {
    run(input) {
      return input.byteLength >= start && input.byteLength <= end ? Result.ok(input) : Result.err(
        new ExpectedConstraintError("s.typedArray(T).byteLengthRangeInclusive", "Invalid Typed Array byte length", input, expected)
      );
    }
  };
}
__name(typedArrayByteLengthRangeInclusive, "typedArrayByteLengthRangeInclusive");
function typedArrayByteLengthRangeExclusive(startAfter, endBefore) {
  const expected = `expected.byteLength > ${startAfter} && expected.byteLength < ${endBefore}`;
  return {
    run(input) {
      return input.byteLength > startAfter && input.byteLength < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError("s.typedArray(T).byteLengthRangeExclusive", "Invalid Typed Array byte length", input, expected)
      );
    }
  };
}
__name(typedArrayByteLengthRangeExclusive, "typedArrayByteLengthRangeExclusive");
function typedArrayLengthComparator(comparator, name, expected, length) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, "Invalid Typed Array length", input, expected));
    }
  };
}
__name(typedArrayLengthComparator, "typedArrayLengthComparator");
function typedArrayLengthLessThan(value) {
  const expected = `expected.length < ${value}`;
  return typedArrayLengthComparator(lessThan, "s.typedArray(T).lengthLessThan", expected, value);
}
__name(typedArrayLengthLessThan, "typedArrayLengthLessThan");
function typedArrayLengthLessThanOrEqual(value) {
  const expected = `expected.length <= ${value}`;
  return typedArrayLengthComparator(lessThanOrEqual, "s.typedArray(T).lengthLessThanOrEqual", expected, value);
}
__name(typedArrayLengthLessThanOrEqual, "typedArrayLengthLessThanOrEqual");
function typedArrayLengthGreaterThan(value) {
  const expected = `expected.length > ${value}`;
  return typedArrayLengthComparator(greaterThan, "s.typedArray(T).lengthGreaterThan", expected, value);
}
__name(typedArrayLengthGreaterThan, "typedArrayLengthGreaterThan");
function typedArrayLengthGreaterThanOrEqual(value) {
  const expected = `expected.length >= ${value}`;
  return typedArrayLengthComparator(greaterThanOrEqual, "s.typedArray(T).lengthGreaterThanOrEqual", expected, value);
}
__name(typedArrayLengthGreaterThanOrEqual, "typedArrayLengthGreaterThanOrEqual");
function typedArrayLengthEqual(value) {
  const expected = `expected.length === ${value}`;
  return typedArrayLengthComparator(equal, "s.typedArray(T).lengthEqual", expected, value);
}
__name(typedArrayLengthEqual, "typedArrayLengthEqual");
function typedArrayLengthNotEqual(value) {
  const expected = `expected.length !== ${value}`;
  return typedArrayLengthComparator(notEqual, "s.typedArray(T).lengthNotEqual", expected, value);
}
__name(typedArrayLengthNotEqual, "typedArrayLengthNotEqual");
function typedArrayLengthRange(start, endBefore) {
  const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.typedArray(T).lengthRange", "Invalid Typed Array length", input, expected));
    }
  };
}
__name(typedArrayLengthRange, "typedArrayLengthRange");
function typedArrayLengthRangeInclusive(start, end) {
  const expected = `expected.length >= ${start} && expected.length <= ${end}`;
  return {
    run(input) {
      return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.typedArray(T).lengthRangeInclusive", "Invalid Typed Array length", input, expected));
    }
  };
}
__name(typedArrayLengthRangeInclusive, "typedArrayLengthRangeInclusive");
function typedArrayLengthRangeExclusive(startAfter, endBefore) {
  const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.typedArray(T).lengthRangeExclusive", "Invalid Typed Array length", input, expected));
    }
  };
}
__name(typedArrayLengthRangeExclusive, "typedArrayLengthRangeExclusive");
var vowels = ["a", "e", "i", "o", "u"];
var aOrAn = /* @__PURE__ */ __name((word) => {
  return `${vowels.includes(word[0].toLowerCase()) ? "an" : "a"} ${word}`;
}, "aOrAn");
var TypedArrays = {
  Int8Array: (x2) => x2 instanceof Int8Array,
  Uint8Array: (x2) => x2 instanceof Uint8Array,
  Uint8ClampedArray: (x2) => x2 instanceof Uint8ClampedArray,
  Int16Array: (x2) => x2 instanceof Int16Array,
  Uint16Array: (x2) => x2 instanceof Uint16Array,
  Int32Array: (x2) => x2 instanceof Int32Array,
  Uint32Array: (x2) => x2 instanceof Uint32Array,
  Float32Array: (x2) => x2 instanceof Float32Array,
  Float64Array: (x2) => x2 instanceof Float64Array,
  BigInt64Array: (x2) => x2 instanceof BigInt64Array,
  BigUint64Array: (x2) => x2 instanceof BigUint64Array,
  TypedArray: (x2) => ArrayBuffer.isView(x2) && !(x2 instanceof DataView)
};
var _TypedArrayValidator = class _TypedArrayValidator2 extends BaseValidator {
  constructor(type, constraints = []) {
    super(constraints);
    this.type = type;
  }
  byteLengthLessThan(length) {
    return this.addConstraint(typedArrayByteLengthLessThan(length));
  }
  byteLengthLessThanOrEqual(length) {
    return this.addConstraint(typedArrayByteLengthLessThanOrEqual(length));
  }
  byteLengthGreaterThan(length) {
    return this.addConstraint(typedArrayByteLengthGreaterThan(length));
  }
  byteLengthGreaterThanOrEqual(length) {
    return this.addConstraint(typedArrayByteLengthGreaterThanOrEqual(length));
  }
  byteLengthEqual(length) {
    return this.addConstraint(typedArrayByteLengthEqual(length));
  }
  byteLengthNotEqual(length) {
    return this.addConstraint(typedArrayByteLengthNotEqual(length));
  }
  byteLengthRange(start, endBefore) {
    return this.addConstraint(typedArrayByteLengthRange(start, endBefore));
  }
  byteLengthRangeInclusive(startAt, endAt) {
    return this.addConstraint(typedArrayByteLengthRangeInclusive(startAt, endAt));
  }
  byteLengthRangeExclusive(startAfter, endBefore) {
    return this.addConstraint(typedArrayByteLengthRangeExclusive(startAfter, endBefore));
  }
  lengthLessThan(length) {
    return this.addConstraint(typedArrayLengthLessThan(length));
  }
  lengthLessThanOrEqual(length) {
    return this.addConstraint(typedArrayLengthLessThanOrEqual(length));
  }
  lengthGreaterThan(length) {
    return this.addConstraint(typedArrayLengthGreaterThan(length));
  }
  lengthGreaterThanOrEqual(length) {
    return this.addConstraint(typedArrayLengthGreaterThanOrEqual(length));
  }
  lengthEqual(length) {
    return this.addConstraint(typedArrayLengthEqual(length));
  }
  lengthNotEqual(length) {
    return this.addConstraint(typedArrayLengthNotEqual(length));
  }
  lengthRange(start, endBefore) {
    return this.addConstraint(typedArrayLengthRange(start, endBefore));
  }
  lengthRangeInclusive(startAt, endAt) {
    return this.addConstraint(typedArrayLengthRangeInclusive(startAt, endAt));
  }
  lengthRangeExclusive(startAfter, endBefore) {
    return this.addConstraint(typedArrayLengthRangeExclusive(startAfter, endBefore));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.type, this.constraints]);
  }
  handle(value) {
    return TypedArrays[this.type](value) ? Result.ok(value) : Result.err(new ValidationError("s.typedArray", `Expected ${aOrAn(this.type)}`, value));
  }
};
__name(_TypedArrayValidator, "TypedArrayValidator");
var TypedArrayValidator = _TypedArrayValidator;
var _Shapes = class _Shapes2 {
  get string() {
    return new StringValidator();
  }
  get number() {
    return new NumberValidator();
  }
  get bigint() {
    return new BigIntValidator();
  }
  get boolean() {
    return new BooleanValidator();
  }
  get date() {
    return new DateValidator();
  }
  object(shape) {
    return new ObjectValidator(shape);
  }
  get undefined() {
    return this.literal(void 0);
  }
  get null() {
    return this.literal(null);
  }
  get nullish() {
    return new NullishValidator();
  }
  get any() {
    return new PassthroughValidator();
  }
  get unknown() {
    return new PassthroughValidator();
  }
  get never() {
    return new NeverValidator();
  }
  enum(...values) {
    return this.union(...values.map((value) => this.literal(value)));
  }
  nativeEnum(enumShape) {
    return new NativeEnumValidator(enumShape);
  }
  literal(value) {
    if (value instanceof Date)
      return this.date.equal(value);
    return new LiteralValidator(value);
  }
  instance(expected) {
    return new InstanceValidator(expected);
  }
  union(...validators) {
    return new UnionValidator(validators);
  }
  array(validator) {
    return new ArrayValidator(validator);
  }
  typedArray(type = "TypedArray") {
    return new TypedArrayValidator(type);
  }
  get int8Array() {
    return this.typedArray("Int8Array");
  }
  get uint8Array() {
    return this.typedArray("Uint8Array");
  }
  get uint8ClampedArray() {
    return this.typedArray("Uint8ClampedArray");
  }
  get int16Array() {
    return this.typedArray("Int16Array");
  }
  get uint16Array() {
    return this.typedArray("Uint16Array");
  }
  get int32Array() {
    return this.typedArray("Int32Array");
  }
  get uint32Array() {
    return this.typedArray("Uint32Array");
  }
  get float32Array() {
    return this.typedArray("Float32Array");
  }
  get float64Array() {
    return this.typedArray("Float64Array");
  }
  get bigInt64Array() {
    return this.typedArray("BigInt64Array");
  }
  get bigUint64Array() {
    return this.typedArray("BigUint64Array");
  }
  tuple(validators) {
    return new TupleValidator(validators);
  }
  set(validator) {
    return new SetValidator(validator);
  }
  record(validator) {
    return new RecordValidator(validator);
  }
  map(keyValidator, valueValidator2) {
    return new MapValidator(keyValidator, valueValidator2);
  }
  lazy(validator) {
    return new LazyValidator(validator);
  }
};
__name(_Shapes, "Shapes");
var Shapes = _Shapes;
var s3 = new Shapes();

// node_modules/@discordjs/formatters/dist/index.mjs
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
function escapeMarkdown(text, options = {}) {
  const {
    codeBlock: codeBlock2 = true,
    inlineCode: inlineCode2 = true,
    bold: bold2 = true,
    italic: italic2 = true,
    underline = true,
    strikethrough: strikethrough2 = true,
    spoiler: spoiler2 = true,
    codeBlockContent = true,
    inlineCodeContent = true,
    escape = true,
    heading: heading2 = false,
    bulletedList = false,
    numberedList = false,
    maskedLink = false
  } = options;
  if (!codeBlockContent) {
    return text.split("```").map((subString, index, array) => {
      if (index % 2 && index !== array.length - 1)
        return subString;
      return escapeMarkdown(subString, {
        inlineCode: inlineCode2,
        bold: bold2,
        italic: italic2,
        underline,
        strikethrough: strikethrough2,
        spoiler: spoiler2,
        inlineCodeContent,
        escape,
        heading: heading2,
        bulletedList,
        numberedList,
        maskedLink
      });
    }).join(codeBlock2 ? "\\`\\`\\`" : "```");
  }
  if (!inlineCodeContent) {
    return text.split(/(?<=^|[^`])`(?=[^`]|$)/g).map((subString, index, array) => {
      if (index % 2 && index !== array.length - 1)
        return subString;
      return escapeMarkdown(subString, {
        codeBlock: codeBlock2,
        bold: bold2,
        italic: italic2,
        underline,
        strikethrough: strikethrough2,
        spoiler: spoiler2,
        escape,
        heading: heading2,
        bulletedList,
        numberedList,
        maskedLink
      });
    }).join(inlineCode2 ? "\\`" : "`");
  }
  let res = text;
  if (escape)
    res = escapeEscape(res);
  if (inlineCode2)
    res = escapeInlineCode(res);
  if (codeBlock2)
    res = escapeCodeBlock(res);
  if (italic2)
    res = escapeItalic(res);
  if (bold2)
    res = escapeBold(res);
  if (underline)
    res = escapeUnderline(res);
  if (strikethrough2)
    res = escapeStrikethrough(res);
  if (spoiler2)
    res = escapeSpoiler(res);
  if (heading2)
    res = escapeHeading(res);
  if (bulletedList)
    res = escapeBulletedList(res);
  if (numberedList)
    res = escapeNumberedList(res);
  if (maskedLink)
    res = escapeMaskedLink(res);
  return res;
}
__name2(escapeMarkdown, "escapeMarkdown");
function escapeCodeBlock(text) {
  return text.replaceAll("```", "\\`\\`\\`");
}
__name2(escapeCodeBlock, "escapeCodeBlock");
function escapeInlineCode(text) {
  return text.replaceAll(/(?<=^|[^`])``?(?=[^`]|$)/g, (match) => match.length === 2 ? "\\`\\`" : "\\`");
}
__name2(escapeInlineCode, "escapeInlineCode");
function escapeItalic(text) {
  let idx = 0;
  const newText = text.replaceAll(/(?<=^|[^*])\*([^*]|\*\*|$)/g, (_2, match) => {
    if (match === "**")
      return ++idx % 2 ? `\\*${match}` : `${match}\\*`;
    return `\\*${match}`;
  });
  idx = 0;
  return newText.replaceAll(/(?<=^|[^_])(?<!<a?:.+)_(?!:\d+>)([^_]|__|$)/g, (_2, match) => {
    if (match === "__")
      return ++idx % 2 ? `\\_${match}` : `${match}\\_`;
    return `\\_${match}`;
  });
}
__name2(escapeItalic, "escapeItalic");
function escapeBold(text) {
  let idx = 0;
  return text.replaceAll(/\*\*(\*)?/g, (_2, match) => {
    if (match)
      return ++idx % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
    return "\\*\\*";
  });
}
__name2(escapeBold, "escapeBold");
function escapeUnderline(text) {
  let idx = 0;
  return text.replaceAll(/(?<!<a?:.+)__(_)?(?!:\d+>)/g, (_2, match) => {
    if (match)
      return ++idx % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
    return "\\_\\_";
  });
}
__name2(escapeUnderline, "escapeUnderline");
function escapeStrikethrough(text) {
  return text.replaceAll("~~", "\\~\\~");
}
__name2(escapeStrikethrough, "escapeStrikethrough");
function escapeSpoiler(text) {
  return text.replaceAll("||", "\\|\\|");
}
__name2(escapeSpoiler, "escapeSpoiler");
function escapeEscape(text) {
  return text.replaceAll("\\", "\\\\");
}
__name2(escapeEscape, "escapeEscape");
function escapeHeading(text) {
  return text.replaceAll(/^( {0,2})([*-] )?( *)(#{1,3} )/gm, "$1$2$3\\$4");
}
__name2(escapeHeading, "escapeHeading");
function escapeBulletedList(text) {
  return text.replaceAll(/^( *)([*-])( +)/gm, "$1\\$2$3");
}
__name2(escapeBulletedList, "escapeBulletedList");
function escapeNumberedList(text) {
  return text.replaceAll(/^( *\d+)\./gm, "$1\\.");
}
__name2(escapeNumberedList, "escapeNumberedList");
function escapeMaskedLink(text) {
  return text.replaceAll(/\[.+]\(.+\)/gm, "\\$&");
}
__name2(escapeMaskedLink, "escapeMaskedLink");
function codeBlock(language, content) {
  return content === void 0 ? `\`\`\`
${language}
\`\`\`` : `\`\`\`${language}
${content}
\`\`\``;
}
__name2(codeBlock, "codeBlock");
function inlineCode(content) {
  return `\`${content}\``;
}
__name2(inlineCode, "inlineCode");
function italic(content) {
  return `_${content}_`;
}
__name2(italic, "italic");
function bold(content) {
  return `**${content}**`;
}
__name2(bold, "bold");
function underscore(content) {
  return `__${content}__`;
}
__name2(underscore, "underscore");
function strikethrough(content) {
  return `~~${content}~~`;
}
__name2(strikethrough, "strikethrough");
function quote(content) {
  return `> ${content}`;
}
__name2(quote, "quote");
function blockQuote(content) {
  return `>>> ${content}`;
}
__name2(blockQuote, "blockQuote");
function hideLinkEmbed(url2) {
  return `<${url2}>`;
}
__name2(hideLinkEmbed, "hideLinkEmbed");
function hyperlink(content, url2, title) {
  return title ? `[${content}](${url2} "${title}")` : `[${content}](${url2})`;
}
__name2(hyperlink, "hyperlink");
function spoiler(content) {
  return `||${content}||`;
}
__name2(spoiler, "spoiler");
function userMention(userId) {
  return `<@${userId}>`;
}
__name2(userMention, "userMention");
function channelMention(channelId) {
  return `<#${channelId}>`;
}
__name2(channelMention, "channelMention");
function roleMention(roleId) {
  return `<@&${roleId}>`;
}
__name2(roleMention, "roleMention");
function chatInputApplicationCommandMention(commandName, subcommandGroupName, subcommandName, commandId) {
  if (commandId !== void 0) {
    return `</${commandName} ${subcommandGroupName} ${subcommandName}:${commandId}>`;
  }
  if (subcommandName !== void 0) {
    return `</${commandName} ${subcommandGroupName}:${subcommandName}>`;
  }
  return `</${commandName}:${subcommandGroupName}>`;
}
__name2(chatInputApplicationCommandMention, "chatInputApplicationCommandMention");
function formatEmoji(emojiId, animated = false) {
  return `<${animated ? "a" : ""}:_:${emojiId}>`;
}
__name2(formatEmoji, "formatEmoji");
function channelLink(channelId, guildId) {
  return `https://discord.com/channels/${guildId ?? "@me"}/${channelId}`;
}
__name2(channelLink, "channelLink");
function messageLink(channelId, messageId, guildId) {
  return `${guildId === void 0 ? channelLink(channelId) : channelLink(channelId, guildId)}/${messageId}`;
}
__name2(messageLink, "messageLink");
function heading(content, level) {
  switch (level) {
    case 3:
      return `### ${content}`;
    case 2:
      return `## ${content}`;
    default:
      return `# ${content}`;
  }
}
__name2(heading, "heading");
function listCallback(element, startNumber, depth = 0) {
  if (Array.isArray(element)) {
    return element.map((element2) => listCallback(element2, startNumber, depth + 1)).join("\n");
  }
  return `${"  ".repeat(depth - 1)}${startNumber ? `${startNumber}.` : "-"} ${element}`;
}
__name2(listCallback, "listCallback");
function orderedList(list, startNumber = 1) {
  return listCallback(list, Math.max(startNumber, 1));
}
__name2(orderedList, "orderedList");
function unorderedList(list) {
  return listCallback(list);
}
__name2(unorderedList, "unorderedList");
function time(timeOrSeconds, style) {
  if (typeof timeOrSeconds !== "number") {
    timeOrSeconds = Math.floor((timeOrSeconds?.getTime() ?? Date.now()) / 1e3);
  }
  return typeof style === "string" ? `<t:${timeOrSeconds}:${style}>` : `<t:${timeOrSeconds}>`;
}
__name2(time, "time");

// node_modules/discord-api-types/v10.mjs
var import_v10 = __toESM(require_v106(), 1);
var APIApplicationCommandPermissionsConstant = import_v10.default.APIApplicationCommandPermissionsConstant;
var APIVersion = import_v10.default.APIVersion;
var ActivityFlags = import_v10.default.ActivityFlags;
var ActivityPlatform = import_v10.default.ActivityPlatform;
var ActivityType = import_v10.default.ActivityType;
var AllowedMentionsTypes = import_v10.default.AllowedMentionsTypes;
var ApplicationCommandOptionType = import_v10.default.ApplicationCommandOptionType;
var ApplicationCommandPermissionType = import_v10.default.ApplicationCommandPermissionType;
var ApplicationCommandType = import_v10.default.ApplicationCommandType;
var ApplicationFlags = import_v10.default.ApplicationFlags;
var ApplicationRoleConnectionMetadataType = import_v10.default.ApplicationRoleConnectionMetadataType;
var AttachmentFlags = import_v10.default.AttachmentFlags;
var AuditLogEvent = import_v10.default.AuditLogEvent;
var AuditLogOptionsType = import_v10.default.AuditLogOptionsType;
var AutoModerationActionType = import_v10.default.AutoModerationActionType;
var AutoModerationRuleEventType = import_v10.default.AutoModerationRuleEventType;
var AutoModerationRuleKeywordPresetType = import_v10.default.AutoModerationRuleKeywordPresetType;
var AutoModerationRuleTriggerType = import_v10.default.AutoModerationRuleTriggerType;
var ButtonStyle = import_v10.default.ButtonStyle;
var CDNRoutes = import_v10.default.CDNRoutes;
var ChannelFlags = import_v10.default.ChannelFlags;
var ChannelType = import_v10.default.ChannelType;
var ComponentType = import_v10.default.ComponentType;
var ConnectionService = import_v10.default.ConnectionService;
var ConnectionVisibility = import_v10.default.ConnectionVisibility;
var EmbedType = import_v10.default.EmbedType;
var EntitlementOwnerType = import_v10.default.EntitlementOwnerType;
var EntitlementType = import_v10.default.EntitlementType;
var FormattingPatterns = import_v10.default.FormattingPatterns;
var ForumLayoutType = import_v10.default.ForumLayoutType;
var GatewayCloseCodes = import_v10.default.GatewayCloseCodes;
var GatewayDispatchEvents = import_v10.default.GatewayDispatchEvents;
var GatewayIntentBits = import_v10.default.GatewayIntentBits;
var GatewayOpcodes = import_v10.default.GatewayOpcodes;
var GatewayVersion = import_v10.default.GatewayVersion;
var GuildDefaultMessageNotifications = import_v10.default.GuildDefaultMessageNotifications;
var GuildExplicitContentFilter = import_v10.default.GuildExplicitContentFilter;
var GuildFeature = import_v10.default.GuildFeature;
var GuildHubType = import_v10.default.GuildHubType;
var GuildMFALevel = import_v10.default.GuildMFALevel;
var GuildMemberFlags = import_v10.default.GuildMemberFlags;
var GuildNSFWLevel = import_v10.default.GuildNSFWLevel;
var GuildOnboardingMode = import_v10.default.GuildOnboardingMode;
var GuildOnboardingPromptType = import_v10.default.GuildOnboardingPromptType;
var GuildPremiumTier = import_v10.default.GuildPremiumTier;
var GuildScheduledEventEntityType = import_v10.default.GuildScheduledEventEntityType;
var GuildScheduledEventPrivacyLevel = import_v10.default.GuildScheduledEventPrivacyLevel;
var GuildScheduledEventStatus = import_v10.default.GuildScheduledEventStatus;
var GuildSystemChannelFlags = import_v10.default.GuildSystemChannelFlags;
var GuildVerificationLevel = import_v10.default.GuildVerificationLevel;
var GuildWidgetStyle = import_v10.default.GuildWidgetStyle;
var ImageFormat = import_v10.default.ImageFormat;
var IntegrationExpireBehavior = import_v10.default.IntegrationExpireBehavior;
var InteractionResponseType = import_v10.default.InteractionResponseType;
var InteractionType = import_v10.default.InteractionType;
var InviteTargetType = import_v10.default.InviteTargetType;
var Locale = import_v10.default.Locale;
var MembershipScreeningFieldType = import_v10.default.MembershipScreeningFieldType;
var MessageActivityType = import_v10.default.MessageActivityType;
var MessageFlags = import_v10.default.MessageFlags;
var MessageType = import_v10.default.MessageType;
var OAuth2Routes = import_v10.default.OAuth2Routes;
var OAuth2Scopes = import_v10.default.OAuth2Scopes;
var OverwriteType = import_v10.default.OverwriteType;
var PermissionFlagsBits = import_v10.default.PermissionFlagsBits;
var PresenceUpdateStatus = import_v10.default.PresenceUpdateStatus;
var RESTJSONErrorCodes = import_v10.default.RESTJSONErrorCodes;
var RPCCloseEventCodes = import_v10.default.RPCCloseEventCodes;
var RPCErrorCodes = import_v10.default.RPCErrorCodes;
var RoleFlags = import_v10.default.RoleFlags;
var RouteBases = import_v10.default.RouteBases;
var Routes = import_v10.default.Routes;
var SKUFlags = import_v10.default.SKUFlags;
var SKUType = import_v10.default.SKUType;
var SelectMenuDefaultValueType = import_v10.default.SelectMenuDefaultValueType;
var SortOrderType = import_v10.default.SortOrderType;
var StageInstancePrivacyLevel = import_v10.default.StageInstancePrivacyLevel;
var StickerFormatType = import_v10.default.StickerFormatType;
var StickerPackApplicationId = import_v10.default.StickerPackApplicationId;
var StickerType = import_v10.default.StickerType;
var TeamMemberMembershipState = import_v10.default.TeamMemberMembershipState;
var TeamMemberRole = import_v10.default.TeamMemberRole;
var TextInputStyle = import_v10.default.TextInputStyle;
var ThreadAutoArchiveDuration = import_v10.default.ThreadAutoArchiveDuration;
var ThreadMemberFlags = import_v10.default.ThreadMemberFlags;
var UserFlags = import_v10.default.UserFlags;
var UserPremiumType = import_v10.default.UserPremiumType;
var Utils = import_v10.default.Utils;
var VideoQualityMode = import_v10.default.VideoQualityMode;
var WebhookType = import_v10.default.WebhookType;

// node_modules/@discordjs/util/dist/index.mjs
var __defProp4 = Object.defineProperty;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
function lazy(cb) {
  let defaultValue;
  return () => defaultValue ?? (defaultValue = cb());
}
__name3(lazy, "lazy");
function* range(range2) {
  let rangeEnd;
  let start = 0;
  let step = 1;
  if (typeof range2 === "number") {
    rangeEnd = range2;
  } else {
    start = range2.start;
    rangeEnd = range2.end;
    step = range2.step ?? 1;
  }
  for (let index = start; index < rangeEnd; index += step) {
    yield index;
  }
}
__name3(range, "range");
function calculateShardId(guildId, shardCount) {
  return Number(BigInt(guildId) >> 22n) % shardCount;
}
__name3(calculateShardId, "calculateShardId");
function shouldUseGlobalFetchAndWebSocket() {
  if (typeof globalThis.process === "undefined") {
    return "fetch" in globalThis && "WebSocket" in globalThis;
  }
  if ("versions" in globalThis.process) {
    return "deno" in globalThis.process.versions || "bun" in globalThis.process.versions;
  }
  return false;
}
__name3(shouldUseGlobalFetchAndWebSocket, "shouldUseGlobalFetchAndWebSocket");
function getUserAgentAppendix() {
  if (typeof globalThis.EdgeRuntime !== "undefined") {
    return "Vercel-Edge-Functions";
  }
  if (typeof globalThis.R2 !== "undefined" && typeof globalThis.WebSocketPair !== "undefined") {
    return "Cloudflare-Workers";
  }
  if (typeof globalThis.Netlify !== "undefined") {
    return "Netlify-Edge-Functions";
  }
  if (typeof globalThis.process !== "object") {
    if (typeof globalThis.navigator === "object") {
      return globalThis.navigator.userAgent;
    }
    return "UnknownEnvironment";
  }
  if ("versions" in globalThis.process) {
    if ("deno" in globalThis.process.versions) {
      return `Deno/${globalThis.process.versions.deno}`;
    }
    if ("bun" in globalThis.process.versions) {
      return `Bun/${globalThis.process.versions.bun}`;
    }
    if ("node" in globalThis.process.versions) {
      return `Node.js/${globalThis.process.versions.node}`;
    }
  }
  return "UnknownEnvironment";
}
__name3(getUserAgentAppendix, "getUserAgentAppendix");
function isJSONEncodable(maybeEncodable) {
  return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
}
__name3(isJSONEncodable, "isJSONEncodable");
function isEquatable(maybeEquatable) {
  return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
}
__name3(isEquatable, "isEquatable");

// node_modules/@discordjs/builders/dist/index.mjs
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);

// node_modules/ts-mixer/dist/esm/index.js
var copyProps = (dest, src, exclude = []) => {
  const props = Object.getOwnPropertyDescriptors(src);
  for (let prop of exclude)
    delete props[prop];
  Object.defineProperties(dest, props);
};
var protoChain = (obj, currentChain = [obj]) => {
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return currentChain;
  return protoChain(proto, [...currentChain, proto]);
};
var nearestCommonProto = (...objs) => {
  if (objs.length === 0)
    return void 0;
  let commonProto = void 0;
  const protoChains = objs.map((obj) => protoChain(obj));
  while (protoChains.every((protoChain2) => protoChain2.length > 0)) {
    const protos = protoChains.map((protoChain2) => protoChain2.pop());
    const potentialCommonProto = protos[0];
    if (protos.every((proto) => proto === potentialCommonProto))
      commonProto = potentialCommonProto;
    else
      break;
  }
  return commonProto;
};
var hardMixProtos = (ingredients, constructor, exclude = []) => {
  var _a26;
  const base = (_a26 = nearestCommonProto(...ingredients)) !== null && _a26 !== void 0 ? _a26 : Object.prototype;
  const mixedProto = Object.create(base);
  const visitedProtos = protoChain(base);
  for (let prototype of ingredients) {
    let protos = protoChain(prototype);
    for (let i3 = protos.length - 1; i3 >= 0; i3--) {
      let newProto = protos[i3];
      if (visitedProtos.indexOf(newProto) === -1) {
        copyProps(mixedProto, newProto, ["constructor", ...exclude]);
        visitedProtos.push(newProto);
      }
    }
  }
  mixedProto.constructor = constructor;
  return mixedProto;
};
var unique = (arr) => arr.filter((e3, i3) => arr.indexOf(e3) == i3);
var getIngredientWithProp = (prop, ingredients) => {
  const protoChains = ingredients.map((ingredient) => protoChain(ingredient));
  let protoDepth = 0;
  let protosAreLeftToSearch = true;
  while (protosAreLeftToSearch) {
    protosAreLeftToSearch = false;
    for (let i3 = ingredients.length - 1; i3 >= 0; i3--) {
      const searchTarget = protoChains[i3][protoDepth];
      if (searchTarget !== void 0 && searchTarget !== null) {
        protosAreLeftToSearch = true;
        if (Object.getOwnPropertyDescriptor(searchTarget, prop) != void 0) {
          return protoChains[i3][0];
        }
      }
    }
    protoDepth++;
  }
  return void 0;
};
var proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
  getPrototypeOf() {
    return prototype;
  },
  setPrototypeOf() {
    throw Error("Cannot set prototype of Proxies created by ts-mixer");
  },
  getOwnPropertyDescriptor(_2, prop) {
    return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
  },
  defineProperty() {
    throw new Error("Cannot define new properties on Proxies created by ts-mixer");
  },
  has(_2, prop) {
    return getIngredientWithProp(prop, ingredients) !== void 0 || prototype[prop] !== void 0;
  },
  get(_2, prop) {
    return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
  },
  set(_2, prop, val) {
    const ingredientWithProp = getIngredientWithProp(prop, ingredients);
    if (ingredientWithProp === void 0)
      throw new Error("Cannot set new properties on Proxies created by ts-mixer");
    ingredientWithProp[prop] = val;
    return true;
  },
  deleteProperty() {
    throw new Error("Cannot delete properties on Proxies created by ts-mixer");
  },
  ownKeys() {
    return ingredients.map(Object.getOwnPropertyNames).reduce((prev, curr) => curr.concat(prev.filter((key) => curr.indexOf(key) < 0)));
  }
});
var softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);
var settings = {
  initFunction: null,
  staticsStrategy: "copy",
  prototypeStrategy: "copy",
  decoratorInheritance: "deep"
};
var mixins = /* @__PURE__ */ new WeakMap();
var getMixinsForClass = (clazz) => mixins.get(clazz);
var registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
var mergeObjectsOfDecorators = (o1, o22) => {
  var _a26, _b;
  const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o22)]);
  const mergedObject = {};
  for (let key of allKeys)
    mergedObject[key] = unique([...(_a26 = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a26 !== void 0 ? _a26 : [], ...(_b = o22 === null || o22 === void 0 ? void 0 : o22[key]) !== null && _b !== void 0 ? _b : []]);
  return mergedObject;
};
var mergePropertyAndMethodDecorators = (d1, d22) => {
  var _a26, _b, _c, _d;
  return {
    property: mergeObjectsOfDecorators((_a26 = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a26 !== void 0 ? _a26 : {}, (_b = d22 === null || d22 === void 0 ? void 0 : d22.property) !== null && _b !== void 0 ? _b : {}),
    method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d22 === null || d22 === void 0 ? void 0 : d22.method) !== null && _d !== void 0 ? _d : {})
  };
};
var mergeDecorators = (d1, d22) => {
  var _a26, _b, _c, _d, _e, _f;
  return {
    class: unique([...(_a26 = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a26 !== void 0 ? _a26 : [], ...(_b = d22 === null || d22 === void 0 ? void 0 : d22.class) !== null && _b !== void 0 ? _b : []]),
    static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d22 === null || d22 === void 0 ? void 0 : d22.static) !== null && _d !== void 0 ? _d : {}),
    instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d22 === null || d22 === void 0 ? void 0 : d22.instance) !== null && _f !== void 0 ? _f : {})
  };
};
var decorators = /* @__PURE__ */ new Map();
var findAllConstituentClasses = (...classes) => {
  var _a26;
  const allClasses = /* @__PURE__ */ new Set();
  const frontier = /* @__PURE__ */ new Set([...classes]);
  while (frontier.size > 0) {
    for (let clazz of frontier) {
      const protoChainClasses = protoChain(clazz.prototype).map((proto) => proto.constructor);
      const mixinClasses = (_a26 = getMixinsForClass(clazz)) !== null && _a26 !== void 0 ? _a26 : [];
      const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
      const newClasses = potentiallyNewClasses.filter((c3) => !allClasses.has(c3));
      for (let newClass of newClasses)
        frontier.add(newClass);
      allClasses.add(clazz);
      frontier.delete(clazz);
    }
  }
  return [...allClasses];
};
var deepDecoratorSearch = (...classes) => {
  const decoratorsForClassChain = findAllConstituentClasses(...classes).map((clazz) => decorators.get(clazz)).filter((decorators2) => !!decorators2);
  if (decoratorsForClassChain.length == 0)
    return {};
  if (decoratorsForClassChain.length == 1)
    return decoratorsForClassChain[0];
  return decoratorsForClassChain.reduce((d1, d22) => mergeDecorators(d1, d22));
};
var directDecoratorSearch = (...classes) => {
  const classDecorators = classes.map((clazz) => getDecoratorsForClass(clazz));
  if (classDecorators.length === 0)
    return {};
  if (classDecorators.length === 1)
    return classDecorators[0];
  return classDecorators.reduce((d1, d22) => mergeDecorators(d1, d22));
};
var getDecoratorsForClass = (clazz) => {
  let decoratorsForClass = decorators.get(clazz);
  if (!decoratorsForClass) {
    decoratorsForClass = {};
    decorators.set(clazz, decoratorsForClass);
  }
  return decoratorsForClass;
};
function Mixin(...constructors) {
  var _a26, _b, _c;
  const prototypes = constructors.map((constructor) => constructor.prototype);
  const initFunctionName = settings.initFunction;
  if (initFunctionName !== null) {
    const initFunctions = prototypes.map((proto) => proto[initFunctionName]).filter((func) => typeof func === "function");
    const combinedInitFunction = function(...args) {
      for (let initFunction of initFunctions)
        initFunction.apply(this, args);
    };
    const extraProto = { [initFunctionName]: combinedInitFunction };
    prototypes.push(extraProto);
  }
  function MixedClass(...args) {
    for (const constructor of constructors)
      copyProps(this, new constructor(...args));
    if (initFunctionName !== null && typeof this[initFunctionName] === "function")
      this[initFunctionName].apply(this, args);
  }
  MixedClass.prototype = settings.prototypeStrategy === "copy" ? hardMixProtos(prototypes, MixedClass) : softMixProtos(prototypes, MixedClass);
  Object.setPrototypeOf(MixedClass, settings.staticsStrategy === "copy" ? hardMixProtos(constructors, null, ["prototype"]) : proxyMix(constructors, Function.prototype));
  let DecoratedMixedClass = MixedClass;
  if (settings.decoratorInheritance !== "none") {
    const classDecorators = settings.decoratorInheritance === "deep" ? deepDecoratorSearch(...constructors) : directDecoratorSearch(...constructors);
    for (let decorator of (_a26 = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a26 !== void 0 ? _a26 : []) {
      const result = decorator(DecoratedMixedClass);
      if (result) {
        DecoratedMixedClass = result;
      }
    }
    applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
    applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
  }
  registerMixins(DecoratedMixedClass, constructors);
  return DecoratedMixedClass;
}
var applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
  const propDecorators = propAndMethodDecorators.property;
  const methodDecorators = propAndMethodDecorators.method;
  if (propDecorators)
    for (let key in propDecorators)
      for (let decorator of propDecorators[key])
        decorator(target, key);
  if (methodDecorators)
    for (let key in methodDecorators)
      for (let decorator of methodDecorators[key])
        decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
};
var mix = (...ingredients) => (decoratedClass) => {
  const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
  Object.defineProperty(mixedClass, "name", {
    value: decoratedClass.name,
    writable: false
  });
  return mixedClass;
};

// node_modules/@discordjs/builders/dist/index.mjs
var __defProp5 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
var __export2 = (target, all) => {
  for (var name in all)
    __defProp5(target, name, { get: all[name], enumerable: true });
};
var __decorateClass = (decorators2, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i3 = decorators2.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators2[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp5(target, key, result);
  return result;
};
var Assertions_exports = {};
__export2(Assertions_exports, {
  RGBPredicate: () => RGBPredicate,
  authorNamePredicate: () => authorNamePredicate,
  colorPredicate: () => colorPredicate,
  descriptionPredicate: () => descriptionPredicate,
  embedAuthorPredicate: () => embedAuthorPredicate,
  embedFieldPredicate: () => embedFieldPredicate,
  embedFieldsArrayPredicate: () => embedFieldsArrayPredicate,
  embedFooterPredicate: () => embedFooterPredicate,
  fieldInlinePredicate: () => fieldInlinePredicate,
  fieldLengthPredicate: () => fieldLengthPredicate,
  fieldNamePredicate: () => fieldNamePredicate,
  fieldValuePredicate: () => fieldValuePredicate,
  footerTextPredicate: () => footerTextPredicate,
  imageURLPredicate: () => imageURLPredicate,
  timestampPredicate: () => timestampPredicate,
  titlePredicate: () => titlePredicate,
  urlPredicate: () => urlPredicate,
  validateFieldLength: () => validateFieldLength
});
var validate = true;
function enableValidators() {
  return validate = true;
}
__name4(enableValidators, "enableValidators");
function disableValidators() {
  return validate = false;
}
__name4(disableValidators, "disableValidators");
function isValidationEnabled() {
  return validate;
}
__name4(isValidationEnabled, "isValidationEnabled");
var fieldNamePredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(256).setValidationEnabled(isValidationEnabled);
var fieldValuePredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(1024).setValidationEnabled(isValidationEnabled);
var fieldInlinePredicate = s3.boolean.optional;
var embedFieldPredicate = s3.object({
  name: fieldNamePredicate,
  value: fieldValuePredicate,
  inline: fieldInlinePredicate
}).setValidationEnabled(isValidationEnabled);
var embedFieldsArrayPredicate = embedFieldPredicate.array.setValidationEnabled(isValidationEnabled);
var fieldLengthPredicate = s3.number.lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateFieldLength(amountAdding, fields) {
  fieldLengthPredicate.parse((fields?.length ?? 0) + amountAdding);
}
__name4(validateFieldLength, "validateFieldLength");
var authorNamePredicate = fieldNamePredicate.nullable.setValidationEnabled(isValidationEnabled);
var imageURLPredicate = s3.string.url({
  allowedProtocols: ["http:", "https:", "attachment:"]
}).nullish.setValidationEnabled(isValidationEnabled);
var urlPredicate = s3.string.url({
  allowedProtocols: ["http:", "https:"]
}).nullish.setValidationEnabled(isValidationEnabled);
var embedAuthorPredicate = s3.object({
  name: authorNamePredicate,
  iconURL: imageURLPredicate,
  url: urlPredicate
}).setValidationEnabled(isValidationEnabled);
var RGBPredicate = s3.number.int.greaterThanOrEqual(0).lessThanOrEqual(255).setValidationEnabled(isValidationEnabled);
var colorPredicate = s3.number.int.greaterThanOrEqual(0).lessThanOrEqual(16777215).or(s3.tuple([RGBPredicate, RGBPredicate, RGBPredicate])).nullable.setValidationEnabled(isValidationEnabled);
var descriptionPredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4096).nullable.setValidationEnabled(isValidationEnabled);
var footerTextPredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(2048).nullable.setValidationEnabled(isValidationEnabled);
var embedFooterPredicate = s3.object({
  text: footerTextPredicate,
  iconURL: imageURLPredicate
}).setValidationEnabled(isValidationEnabled);
var timestampPredicate = s3.union(s3.number, s3.date).nullable.setValidationEnabled(isValidationEnabled);
var titlePredicate = fieldNamePredicate.nullable.setValidationEnabled(isValidationEnabled);
function normalizeArray(arr) {
  if (Array.isArray(arr[0]))
    return arr[0];
  return arr;
}
__name4(normalizeArray, "normalizeArray");
var _a;
var EmbedBuilder = (_a = class {
  /**
   * Creates a new embed from API data.
   *
   * @param data - The API data to create this embed with
   */
  constructor(data4 = {}) {
    /**
     * The API data associated with this embed.
     */
    __publicField(this, "data");
    this.data = { ...data4 };
    if (data4.timestamp)
      this.data.timestamp = new Date(data4.timestamp).toISOString();
  }
  /**
   * Appends fields to the embed.
   *
   * @remarks
   * This method accepts either an array of fields or a variable number of field parameters.
   * The maximum amount of fields that can be added is 25.
   * @example
   * Using an array:
   * ```ts
   * const fields: APIEmbedField[] = ...;
   * const embed = new EmbedBuilder()
   * 	.addFields(fields);
   * ```
   * @example
   * Using rest parameters (variadic):
   * ```ts
   * const embed = new EmbedBuilder()
   * 	.addFields(
   * 		{ name: 'Field 1', value: 'Value 1' },
   * 		{ name: 'Field 2', value: 'Value 2' },
   * 	);
   * ```
   * @param fields - The fields to add
   */
  addFields(...fields) {
    const normalizedFields = normalizeArray(fields);
    validateFieldLength(normalizedFields.length, this.data.fields);
    embedFieldsArrayPredicate.parse(normalizedFields);
    if (this.data.fields)
      this.data.fields.push(...normalizedFields);
    else
      this.data.fields = normalizedFields;
    return this;
  }
  /**
   * Removes, replaces, or inserts fields for this embed.
   *
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice | Array.prototype.splice()}.
   * The maximum amount of fields that can be added is 25.
   *
   * It's useful for modifying and adjusting order of the already-existing fields of an embed.
   * @example
   * Remove the first field:
   * ```ts
   * embed.spliceFields(0, 1);
   * ```
   * @example
   * Remove the first n fields:
   * ```ts
   * const n = 4;
   * embed.spliceFields(0, n);
   * ```
   * @example
   * Remove the last field:
   * ```ts
   * embed.spliceFields(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of fields to remove
   * @param fields - The replacing field objects
   */
  spliceFields(index, deleteCount, ...fields) {
    validateFieldLength(fields.length - deleteCount, this.data.fields);
    embedFieldsArrayPredicate.parse(fields);
    if (this.data.fields)
      this.data.fields.splice(index, deleteCount, ...fields);
    else
      this.data.fields = fields;
    return this;
  }
  /**
   * Sets the fields for this embed.
   *
   * @remarks
   * This method is an alias for {@link EmbedBuilder.spliceFields}. More specifically,
   * it splices the entire array of fields, replacing them with the provided fields.
   *
   * You can set a maximum of 25 fields.
   * @param fields - The fields to set
   */
  setFields(...fields) {
    this.spliceFields(0, this.data.fields?.length ?? 0, ...normalizeArray(fields));
    return this;
  }
  /**
   * Sets the author of this embed.
   *
   * @param options - The options to use
   */
  setAuthor(options) {
    if (options === null) {
      this.data.author = void 0;
      return this;
    }
    embedAuthorPredicate.parse(options);
    this.data.author = { name: options.name, url: options.url, icon_url: options.iconURL };
    return this;
  }
  /**
   * Sets the color of this embed.
   *
   * @param color - The color to use
   */
  setColor(color) {
    colorPredicate.parse(color);
    if (Array.isArray(color)) {
      const [red, green, blue] = color;
      this.data.color = (red << 16) + (green << 8) + blue;
      return this;
    }
    this.data.color = color ?? void 0;
    return this;
  }
  /**
   * Sets the description of this embed.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    descriptionPredicate.parse(description);
    this.data.description = description ?? void 0;
    return this;
  }
  /**
   * Sets the footer of this embed.
   *
   * @param options - The footer to use
   */
  setFooter(options) {
    if (options === null) {
      this.data.footer = void 0;
      return this;
    }
    embedFooterPredicate.parse(options);
    this.data.footer = { text: options.text, icon_url: options.iconURL };
    return this;
  }
  /**
   * Sets the image of this embed.
   *
   * @param url - The image URL to use
   */
  setImage(url2) {
    imageURLPredicate.parse(url2);
    this.data.image = url2 ? { url: url2 } : void 0;
    return this;
  }
  /**
   * Sets the thumbnail of this embed.
   *
   * @param url - The thumbnail URL to use
   */
  setThumbnail(url2) {
    imageURLPredicate.parse(url2);
    this.data.thumbnail = url2 ? { url: url2 } : void 0;
    return this;
  }
  /**
   * Sets the timestamp of this embed.
   *
   * @param timestamp - The timestamp or date to use
   */
  setTimestamp(timestamp = Date.now()) {
    timestampPredicate.parse(timestamp);
    this.data.timestamp = timestamp ? new Date(timestamp).toISOString() : void 0;
    return this;
  }
  /**
   * Sets the title for this embed.
   *
   * @param title - The title to use
   */
  setTitle(title) {
    titlePredicate.parse(title);
    this.data.title = title ?? void 0;
    return this;
  }
  /**
   * Sets the URL of this embed.
   *
   * @param url - The URL to use
   */
  setURL(url2) {
    urlPredicate.parse(url2);
    this.data.url = url2 ?? void 0;
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    return { ...this.data };
  }
}, __name4(_a, "EmbedBuilder"), _a);
var Assertions_exports2 = {};
__export2(Assertions_exports2, {
  buttonLabelValidator: () => buttonLabelValidator,
  buttonStyleValidator: () => buttonStyleValidator,
  channelTypesValidator: () => channelTypesValidator,
  customIdValidator: () => customIdValidator,
  defaultValidator: () => defaultValidator,
  disabledValidator: () => disabledValidator,
  emojiValidator: () => emojiValidator,
  jsonOptionValidator: () => jsonOptionValidator,
  labelValueDescriptionValidator: () => labelValueDescriptionValidator,
  minMaxValidator: () => minMaxValidator,
  optionValidator: () => optionValidator,
  optionsLengthValidator: () => optionsLengthValidator,
  optionsValidator: () => optionsValidator,
  placeholderValidator: () => placeholderValidator,
  urlValidator: () => urlValidator,
  validateRequiredButtonParameters: () => validateRequiredButtonParameters,
  validateRequiredSelectMenuOptionParameters: () => validateRequiredSelectMenuOptionParameters,
  validateRequiredSelectMenuParameters: () => validateRequiredSelectMenuParameters
});
var _a2;
var StringSelectMenuOptionBuilder = (_a2 = class {
  /**
   * Creates a new string select menu option from API data.
   *
   * @param data - The API data to create this string select menu option with
   * @example
   * Creating a string select menu option from an API data object:
   * ```ts
   * const selectMenuOption = new SelectMenuOptionBuilder({
   * 	label: 'catchy label',
   * 	value: '1',
   * });
   * ```
   * @example
   * Creating a string select menu option using setters and API data:
   * ```ts
   * const selectMenuOption = new SelectMenuOptionBuilder({
   * 	default: true,
   * 	value: '1',
   * })
   * 	.setLabel('woah');
   * ```
   */
  constructor(data4 = {}) {
    this.data = data4;
  }
  /**
   * Sets the label for this option.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = labelValueDescriptionValidator.parse(label);
    return this;
  }
  /**
   * Sets the value for this option.
   *
   * @param value - The value to use
   */
  setValue(value) {
    this.data.value = labelValueDescriptionValidator.parse(value);
    return this;
  }
  /**
   * Sets the description for this option.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    this.data.description = labelValueDescriptionValidator.parse(description);
    return this;
  }
  /**
   * Sets whether this option is selected by default.
   *
   * @param isDefault - Whether this option is selected by default
   */
  setDefault(isDefault = true) {
    this.data.default = defaultValidator.parse(isDefault);
    return this;
  }
  /**
   * Sets the emoji to display for this option.
   *
   * @param emoji - The emoji to use
   */
  setEmoji(emoji) {
    this.data.emoji = emojiValidator.parse(emoji);
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    validateRequiredSelectMenuOptionParameters(this.data.label, this.data.value);
    return {
      ...this.data
    };
  }
}, __name4(_a2, "StringSelectMenuOptionBuilder"), _a2);
var customIdValidator = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var emojiValidator = s3.object({
  id: s3.string,
  name: s3.string,
  animated: s3.boolean
}).partial.strict.setValidationEnabled(isValidationEnabled);
var disabledValidator = s3.boolean;
var buttonLabelValidator = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(80).setValidationEnabled(isValidationEnabled);
var buttonStyleValidator = s3.nativeEnum(ButtonStyle);
var placeholderValidator = s3.string.lengthLessThanOrEqual(150).setValidationEnabled(isValidationEnabled);
var minMaxValidator = s3.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
var labelValueDescriptionValidator = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var jsonOptionValidator = s3.object({
  label: labelValueDescriptionValidator,
  value: labelValueDescriptionValidator,
  description: labelValueDescriptionValidator.optional,
  emoji: emojiValidator.optional,
  default: s3.boolean.optional
}).setValidationEnabled(isValidationEnabled);
var optionValidator = s3.instance(StringSelectMenuOptionBuilder).setValidationEnabled(isValidationEnabled);
var optionsValidator = optionValidator.array.lengthGreaterThanOrEqual(0).setValidationEnabled(isValidationEnabled);
var optionsLengthValidator = s3.number.int.greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateRequiredSelectMenuParameters(options, customId) {
  customIdValidator.parse(customId);
  optionsValidator.parse(options);
}
__name4(validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters");
var defaultValidator = s3.boolean;
function validateRequiredSelectMenuOptionParameters(label, value) {
  labelValueDescriptionValidator.parse(label);
  labelValueDescriptionValidator.parse(value);
}
__name4(validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters");
var channelTypesValidator = s3.nativeEnum(ChannelType).array.setValidationEnabled(isValidationEnabled);
var urlValidator = s3.string.url({
  allowedProtocols: ["http:", "https:", "discord:"]
}).setValidationEnabled(isValidationEnabled);
function validateRequiredButtonParameters(style, label, emoji, customId, url2) {
  if (url2 && customId) {
    throw new RangeError("URL and custom id are mutually exclusive");
  }
  if (!label && !emoji) {
    throw new RangeError("Buttons must have a label and/or an emoji");
  }
  if (style === ButtonStyle.Link) {
    if (!url2) {
      throw new RangeError("Link buttons must have a url");
    }
  } else if (url2) {
    throw new RangeError("Non-link buttons cannot have a url");
  }
}
__name4(validateRequiredButtonParameters, "validateRequiredButtonParameters");
var _a3;
var ComponentBuilder = (_a3 = class {
  /**
   * Constructs a new kind of component.
   *
   * @param data - The data to construct a component out of
   */
  constructor(data4) {
    /**
     * The API data associated with this component.
     */
    __publicField(this, "data");
    this.data = data4;
  }
}, __name4(_a3, "ComponentBuilder"), _a3);
var _a4;
var ButtonBuilder = (_a4 = class extends ComponentBuilder {
  /**
   * Creates a new button from API data.
   *
   * @param data - The API data to create this button with
   * @example
   * Creating a button from an API data object:
   * ```ts
   * const button = new ButtonBuilder({
   * 	custom_id: 'a cool button',
   * 	style: ButtonStyle.Primary,
   * 	label: 'Click Me',
   * 	emoji: {
   * 		name: 'smile',
   * 		id: '123456789012345678',
   * 	},
   * });
   * ```
   * @example
   * Creating a button using setters and API data:
   * ```ts
   * const button = new ButtonBuilder({
   * 	style: ButtonStyle.Secondary,
   * 	label: 'Click Me',
   * })
   * 	.setEmoji({ name: '🙂' })
   * 	.setCustomId('another cool button');
   * ```
   */
  constructor(data4) {
    super({ type: ComponentType.Button, ...data4 });
  }
  /**
   * Sets the style of this button.
   *
   * @param style - The style to use
   */
  setStyle(style) {
    this.data.style = buttonStyleValidator.parse(style);
    return this;
  }
  /**
   * Sets the URL for this button.
   *
   * @remarks
   * This method is only available to buttons using the `Link` button style.
   * Only three types of URL schemes are currently supported: `https://`, `http://`, and `discord://`.
   * @param url - The URL to use
   */
  setURL(url2) {
    this.data.url = urlValidator.parse(url2);
    return this;
  }
  /**
   * Sets the custom id for this button.
   *
   * @remarks
   * This method is only applicable to buttons that are not using the `Link` button style.
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets the emoji to display on this button.
   *
   * @param emoji - The emoji to use
   */
  setEmoji(emoji) {
    this.data.emoji = emojiValidator.parse(emoji);
    return this;
  }
  /**
   * Sets whether this button is disabled.
   *
   * @param disabled - Whether to disable this button
   */
  setDisabled(disabled = true) {
    this.data.disabled = disabledValidator.parse(disabled);
    return this;
  }
  /**
   * Sets the label for this button.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = buttonLabelValidator.parse(label);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredButtonParameters(
      this.data.style,
      this.data.label,
      this.data.emoji,
      this.data.custom_id,
      this.data.url
    );
    return {
      ...this.data
    };
  }
}, __name4(_a4, "ButtonBuilder"), _a4);
var _a5;
var BaseSelectMenuBuilder = (_a5 = class extends ComponentBuilder {
  /**
   * Sets the placeholder for this select menu.
   *
   * @param placeholder - The placeholder to use
   */
  setPlaceholder(placeholder) {
    this.data.placeholder = placeholderValidator.parse(placeholder);
    return this;
  }
  /**
   * Sets the minimum values that must be selected in the select menu.
   *
   * @param minValues - The minimum values that must be selected
   */
  setMinValues(minValues) {
    this.data.min_values = minMaxValidator.parse(minValues);
    return this;
  }
  /**
   * Sets the maximum values that must be selected in the select menu.
   *
   * @param maxValues - The maximum values that must be selected
   */
  setMaxValues(maxValues) {
    this.data.max_values = minMaxValidator.parse(maxValues);
    return this;
  }
  /**
   * Sets the custom id for this select menu.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets whether this select menu is disabled.
   *
   * @param disabled - Whether this select menu is disabled
   */
  setDisabled(disabled = true) {
    this.data.disabled = disabledValidator.parse(disabled);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    customIdValidator.parse(this.data.custom_id);
    return {
      ...this.data
    };
  }
}, __name4(_a5, "BaseSelectMenuBuilder"), _a5);
var _a6;
var ChannelSelectMenuBuilder = (_a6 = class extends BaseSelectMenuBuilder {
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new ChannelSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new ChannelSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
   * 	.setMinValues(2);
   * ```
   */
  constructor(data4) {
    super({ ...data4, type: ComponentType.ChannelSelect });
  }
  /**
   * Adds channel types to this select menu.
   *
   * @param types - The channel types to use
   */
  addChannelTypes(...types) {
    var _a26;
    const normalizedTypes = normalizeArray(types);
    (_a26 = this.data).channel_types ?? (_a26.channel_types = []);
    this.data.channel_types.push(...channelTypesValidator.parse(normalizedTypes));
    return this;
  }
  /**
   * Sets channel types for this select menu.
   *
   * @param types - The channel types to use
   */
  setChannelTypes(...types) {
    var _a26;
    const normalizedTypes = normalizeArray(types);
    (_a26 = this.data).channel_types ?? (_a26.channel_types = []);
    this.data.channel_types.splice(0, this.data.channel_types.length, ...channelTypesValidator.parse(normalizedTypes));
    return this;
  }
  /**
   * Adds default channels to this auto populated select menu.
   *
   * @param channels - The channels to add
   */
  addDefaultChannels(...channels) {
    var _a26;
    const normalizedValues = normalizeArray(channels);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Channel
      }))
    );
    return this;
  }
  /**
   * Sets default channels to this auto populated select menu.
   *
   * @param channels - The channels to set
   */
  setDefaultChannels(...channels) {
    const normalizedValues = normalizeArray(channels);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Channel
    }));
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    customIdValidator.parse(this.data.custom_id);
    return {
      ...this.data
    };
  }
}, __name4(_a6, "ChannelSelectMenuBuilder"), _a6);
var _a7;
var MentionableSelectMenuBuilder = (_a7 = class extends BaseSelectMenuBuilder {
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new MentionableSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new MentionableSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data4) {
    super({ ...data4, type: ComponentType.MentionableSelect });
  }
  /**
   * Adds default roles to this auto populated select menu.
   *
   * @param roles - The roles to add
   */
  addDefaultRoles(...roles) {
    var _a26;
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Role
      }))
    );
    return this;
  }
  /**
   * Adds default users to this auto populated select menu.
   *
   * @param users - The users to add
   */
  addDefaultUsers(...users) {
    var _a26;
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.User
      }))
    );
    return this;
  }
  /**
   * Adds default values to this auto populated select menu.
   *
   * @param values - The values to add
   */
  addDefaultValues(...values) {
    var _a26;
    const normalizedValues = normalizeArray(values);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(...normalizedValues);
    return this;
  }
  /**
   * Sets default values to this auto populated select menu.
   *
   * @param values - The values to set
   */
  setDefaultValues(...values) {
    const normalizedValues = normalizeArray(values);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.slice();
    return this;
  }
}, __name4(_a7, "MentionableSelectMenuBuilder"), _a7);
var _a8;
var RoleSelectMenuBuilder = (_a8 = class extends BaseSelectMenuBuilder {
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new RoleSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new RoleSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data4) {
    super({ ...data4, type: ComponentType.RoleSelect });
  }
  /**
   * Adds default roles to this auto populated select menu.
   *
   * @param roles - The roles to add
   */
  addDefaultRoles(...roles) {
    var _a26;
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Role
      }))
    );
    return this;
  }
  /**
   * Sets default roles to this auto populated select menu.
   *
   * @param roles - The roles to set
   */
  setDefaultRoles(...roles) {
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Role
    }));
    return this;
  }
}, __name4(_a8, "RoleSelectMenuBuilder"), _a8);
var _a9;
var StringSelectMenuBuilder = (_a9 = class extends BaseSelectMenuBuilder {
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new StringSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * 	options: [
   * 		{ label: 'option 1', value: '1' },
   * 		{ label: 'option 2', value: '2' },
   * 		{ label: 'option 3', value: '3' },
   * 	],
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new StringSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1)
   * 	.addOptions({
   * 		label: 'Catchy',
   * 		value: 'catch',
   * 	});
   * ```
   */
  constructor(data4) {
    const { options, ...initData } = data4 ?? {};
    super({ ...initData, type: ComponentType.StringSelect });
    /**
     * The options within this select menu.
     */
    __publicField(this, "options");
    this.options = options?.map((option) => new StringSelectMenuOptionBuilder(option)) ?? [];
  }
  /**
   * Adds options to this select menu.
   *
   * @param options - The options to add
   */
  addOptions(...options) {
    const normalizedOptions = normalizeArray(options);
    optionsLengthValidator.parse(this.options.length + normalizedOptions.length);
    this.options.push(
      ...normalizedOptions.map(
        (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(jsonOptionValidator.parse(normalizedOption))
      )
    );
    return this;
  }
  /**
   * Sets the options for this select menu.
   *
   * @param options - The options to set
   */
  setOptions(...options) {
    return this.spliceOptions(0, this.options.length, ...options);
  }
  /**
   * Removes, replaces, or inserts options for this select menu.
   *
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.prototype.splice()}.
   * It's useful for modifying and adjusting the order of existing options.
   * @example
   * Remove the first option:
   * ```ts
   * selectMenu.spliceOptions(0, 1);
   * ```
   * @example
   * Remove the first n option:
   * ```ts
   * const n = 4;
   * selectMenu.spliceOptions(0, n);
   * ```
   * @example
   * Remove the last option:
   * ```ts
   * selectMenu.spliceOptions(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of options to remove
   * @param options - The replacing option objects or builders
   */
  spliceOptions(index, deleteCount, ...options) {
    const normalizedOptions = normalizeArray(options);
    const clone = [...this.options];
    clone.splice(
      index,
      deleteCount,
      ...normalizedOptions.map(
        (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(jsonOptionValidator.parse(normalizedOption))
      )
    );
    optionsLengthValidator.parse(clone.length);
    this.options.splice(0, this.options.length, ...clone);
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    validateRequiredSelectMenuParameters(this.options, this.data.custom_id);
    return {
      ...this.data,
      options: this.options.map((option) => option.toJSON())
    };
  }
}, __name4(_a9, "StringSelectMenuBuilder"), _a9);
var _a10;
var UserSelectMenuBuilder = (_a10 = class extends BaseSelectMenuBuilder {
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new UserSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new UserSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data4) {
    super({ ...data4, type: ComponentType.UserSelect });
  }
  /**
   * Adds default users to this auto populated select menu.
   *
   * @param users - The users to add
   */
  addDefaultUsers(...users) {
    var _a26;
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    (_a26 = this.data).default_values ?? (_a26.default_values = []);
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.User
      }))
    );
    return this;
  }
  /**
   * Sets default users to this auto populated select menu.
   *
   * @param users - The users to set
   */
  setDefaultUsers(...users) {
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.User
    }));
    return this;
  }
}, __name4(_a10, "UserSelectMenuBuilder"), _a10);
var Assertions_exports3 = {};
__export2(Assertions_exports3, {
  labelValidator: () => labelValidator,
  maxLengthValidator: () => maxLengthValidator,
  minLengthValidator: () => minLengthValidator,
  placeholderValidator: () => placeholderValidator2,
  requiredValidator: () => requiredValidator,
  textInputStyleValidator: () => textInputStyleValidator,
  validateRequiredParameters: () => validateRequiredParameters,
  valueValidator: () => valueValidator
});
var textInputStyleValidator = s3.nativeEnum(TextInputStyle);
var minLengthValidator = s3.number.int.greaterThanOrEqual(0).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var maxLengthValidator = s3.number.int.greaterThanOrEqual(1).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var requiredValidator = s3.boolean;
var valueValidator = s3.string.lengthLessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var placeholderValidator2 = s3.string.lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var labelValidator = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters(customId, style, label) {
  customIdValidator.parse(customId);
  textInputStyleValidator.parse(style);
  labelValidator.parse(label);
}
__name4(validateRequiredParameters, "validateRequiredParameters");
var _a11;
var TextInputBuilder = (_a11 = class extends ComponentBuilder {
  /**
   * Creates a new text input from API data.
   *
   * @param data - The API data to create this text input with
   * @example
   * Creating a select menu option from an API data object:
   * ```ts
   * const textInput = new TextInputBuilder({
   * 	custom_id: 'a cool select menu',
   * 	label: 'Type something',
   * 	style: TextInputStyle.Short,
   * });
   * ```
   * @example
   * Creating a select menu option using setters and API data:
   * ```ts
   * const textInput = new TextInputBuilder({
   * 	label: 'Type something else',
   * })
   * 	.setCustomId('woah')
   * 	.setStyle(TextInputStyle.Paragraph);
   * ```
   */
  constructor(data4) {
    super({ type: ComponentType.TextInput, ...data4 });
  }
  /**
   * Sets the custom id for this text input.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets the label for this text input.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = labelValidator.parse(label);
    return this;
  }
  /**
   * Sets the style for this text input.
   *
   * @param style - The style to use
   */
  setStyle(style) {
    this.data.style = textInputStyleValidator.parse(style);
    return this;
  }
  /**
   * Sets the minimum length of text for this text input.
   *
   * @param minLength - The minimum length of text for this text input
   */
  setMinLength(minLength) {
    this.data.min_length = minLengthValidator.parse(minLength);
    return this;
  }
  /**
   * Sets the maximum length of text for this text input.
   *
   * @param maxLength - The maximum length of text for this text input
   */
  setMaxLength(maxLength) {
    this.data.max_length = maxLengthValidator.parse(maxLength);
    return this;
  }
  /**
   * Sets the placeholder for this text input.
   *
   * @param placeholder - The placeholder to use
   */
  setPlaceholder(placeholder) {
    this.data.placeholder = placeholderValidator2.parse(placeholder);
    return this;
  }
  /**
   * Sets the value for this text input.
   *
   * @param value - The value to use
   */
  setValue(value) {
    this.data.value = valueValidator.parse(value);
    return this;
  }
  /**
   * Sets whether this text input is required.
   *
   * @param required - Whether this text input is required
   */
  setRequired(required = true) {
    this.data.required = requiredValidator.parse(required);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredParameters(this.data.custom_id, this.data.style, this.data.label);
    return {
      ...this.data
    };
  }
  /**
   * {@inheritDoc Equatable.equals}
   */
  equals(other) {
    if (isJSONEncodable(other)) {
      return (0, import_fast_deep_equal.default)(other.toJSON(), this.data);
    }
    return (0, import_fast_deep_equal.default)(other, this.data);
  }
}, __name4(_a11, "TextInputBuilder"), _a11);
function createComponentBuilder(data4) {
  if (data4 instanceof ComponentBuilder) {
    return data4;
  }
  switch (data4.type) {
    case ComponentType.ActionRow:
      return new ActionRowBuilder(data4);
    case ComponentType.Button:
      return new ButtonBuilder(data4);
    case ComponentType.StringSelect:
      return new StringSelectMenuBuilder(data4);
    case ComponentType.TextInput:
      return new TextInputBuilder(data4);
    case ComponentType.UserSelect:
      return new UserSelectMenuBuilder(data4);
    case ComponentType.RoleSelect:
      return new RoleSelectMenuBuilder(data4);
    case ComponentType.MentionableSelect:
      return new MentionableSelectMenuBuilder(data4);
    case ComponentType.ChannelSelect:
      return new ChannelSelectMenuBuilder(data4);
    default:
      throw new Error(`Cannot properly serialize component type: ${data4.type}`);
  }
}
__name4(createComponentBuilder, "createComponentBuilder");
var _a12;
var ActionRowBuilder = (_a12 = class extends ComponentBuilder {
  /**
   * Creates a new action row from API data.
   *
   * @param data - The API data to create this action row with
   * @example
   * Creating an action row from an API data object:
   * ```ts
   * const actionRow = new ActionRowBuilder({
   * 	components: [
   * 		{
   * 			custom_id: "custom id",
   * 			label: "Type something",
   * 			style: TextInputStyle.Short,
   * 			type: ComponentType.TextInput,
   * 		},
   * 	],
   * });
   * ```
   * @example
   * Creating an action row using setters and API data:
   * ```ts
   * const actionRow = new ActionRowBuilder({
   * 	components: [
   * 		{
   * 			custom_id: "custom id",
   * 			label: "Click me",
   * 			style: ButtonStyle.Primary,
   * 			type: ComponentType.Button,
   * 		},
   * 	],
   * })
   * 	.addComponents(button2, button3);
   * ```
   */
  constructor({ components, ...data4 } = {}) {
    super({ type: ComponentType.ActionRow, ...data4 });
    /**
     * The components within this action row.
     */
    __publicField(this, "components");
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
  }
  /**
   * Adds components to this action row.
   *
   * @param components - The components to add
   */
  addComponents(...components) {
    this.components.push(...normalizeArray(components));
    return this;
  }
  /**
   * Sets components for this action row.
   *
   * @param components - The components to set
   */
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray(components));
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
}, __name4(_a12, "ActionRowBuilder"), _a12);
var Assertions_exports4 = {};
__export2(Assertions_exports4, {
  componentsValidator: () => componentsValidator,
  titleValidator: () => titleValidator,
  validateRequiredParameters: () => validateRequiredParameters2
});
var titleValidator = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
var componentsValidator = s3.instance(ActionRowBuilder).array.lengthGreaterThanOrEqual(1).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters2(customId, title, components) {
  customIdValidator.parse(customId);
  titleValidator.parse(title);
  componentsValidator.parse(components);
}
__name4(validateRequiredParameters2, "validateRequiredParameters");
var _a13;
var ModalBuilder = (_a13 = class {
  /**
   * Creates a new modal from API data.
   *
   * @param data - The API data to create this modal with
   */
  constructor({ components, ...data4 } = {}) {
    /**
     * The API data associated with this modal.
     */
    __publicField(this, "data");
    /**
     * The components within this modal.
     */
    __publicField(this, "components", []);
    this.data = { ...data4 };
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
  }
  /**
   * Sets the title of this modal.
   *
   * @param title - The title to use
   */
  setTitle(title) {
    this.data.title = titleValidator.parse(title);
    return this;
  }
  /**
   * Sets the custom id of this modal.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Adds components to this modal.
   *
   * @param components - The components to add
   */
  addComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map(
        (component) => component instanceof ActionRowBuilder ? component : new ActionRowBuilder(component)
      )
    );
    return this;
  }
  /**
   * Sets components for this modal.
   *
   * @param components - The components to set
   */
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray(components));
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredParameters2(this.data.custom_id, this.data.title, this.components);
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
}, __name4(_a13, "ModalBuilder"), _a13);
var Assertions_exports5 = {};
__export2(Assertions_exports5, {
  assertReturnOfBuilder: () => assertReturnOfBuilder,
  localizationMapPredicate: () => localizationMapPredicate,
  validateChoicesLength: () => validateChoicesLength,
  validateDMPermission: () => validateDMPermission,
  validateDefaultMemberPermissions: () => validateDefaultMemberPermissions,
  validateDefaultPermission: () => validateDefaultPermission,
  validateDescription: () => validateDescription,
  validateLocale: () => validateLocale,
  validateLocalizationMap: () => validateLocalizationMap,
  validateMaxOptionsLength: () => validateMaxOptionsLength,
  validateNSFW: () => validateNSFW,
  validateName: () => validateName,
  validateRequired: () => validateRequired,
  validateRequiredParameters: () => validateRequiredParameters3
});
var namePredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/^[\p{Ll}\p{Lm}\p{Lo}\p{N}\p{sc=Devanagari}\p{sc=Thai}_-]+$/u).setValidationEnabled(isValidationEnabled);
function validateName(name) {
  namePredicate.parse(name);
}
__name4(validateName, "validateName");
var descriptionPredicate2 = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var localePredicate = s3.nativeEnum(Locale);
function validateDescription(description) {
  descriptionPredicate2.parse(description);
}
__name4(validateDescription, "validateDescription");
var maxArrayLengthPredicate = s3.unknown.array.lengthLessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateLocale(locale) {
  return localePredicate.parse(locale);
}
__name4(validateLocale, "validateLocale");
function validateMaxOptionsLength(options) {
  maxArrayLengthPredicate.parse(options);
}
__name4(validateMaxOptionsLength, "validateMaxOptionsLength");
function validateRequiredParameters3(name, description, options) {
  validateName(name);
  validateDescription(description);
  validateMaxOptionsLength(options);
}
__name4(validateRequiredParameters3, "validateRequiredParameters");
var booleanPredicate = s3.boolean;
function validateDefaultPermission(value) {
  booleanPredicate.parse(value);
}
__name4(validateDefaultPermission, "validateDefaultPermission");
function validateRequired(required) {
  booleanPredicate.parse(required);
}
__name4(validateRequired, "validateRequired");
var choicesLengthPredicate = s3.number.lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateChoicesLength(amountAdding, choices) {
  choicesLengthPredicate.parse((choices?.length ?? 0) + amountAdding);
}
__name4(validateChoicesLength, "validateChoicesLength");
function assertReturnOfBuilder(input, ExpectedInstanceOf) {
  s3.instance(ExpectedInstanceOf).parse(input);
}
__name4(assertReturnOfBuilder, "assertReturnOfBuilder");
var localizationMapPredicate = s3.object(Object.fromEntries(Object.values(Locale).map((locale) => [locale, s3.string.nullish]))).strict.nullish.setValidationEnabled(isValidationEnabled);
function validateLocalizationMap(value) {
  localizationMapPredicate.parse(value);
}
__name4(validateLocalizationMap, "validateLocalizationMap");
var dmPermissionPredicate = s3.boolean.nullish;
function validateDMPermission(value) {
  dmPermissionPredicate.parse(value);
}
__name4(validateDMPermission, "validateDMPermission");
var memberPermissionPredicate = s3.union(
  s3.bigint.transform((value) => value.toString()),
  s3.number.safeInt.transform((value) => value.toString()),
  s3.string.regex(/^\d+$/)
).nullish;
function validateDefaultMemberPermissions(permissions) {
  return memberPermissionPredicate.parse(permissions);
}
__name4(validateDefaultMemberPermissions, "validateDefaultMemberPermissions");
function validateNSFW(value) {
  booleanPredicate.parse(value);
}
__name4(validateNSFW, "validateNSFW");
var _a14;
var SharedNameAndDescription = (_a14 = class {
  constructor() {
    /**
     * The name of this command.
     */
    __publicField(this, "name");
    /**
     * The name localizations of this command.
     */
    __publicField(this, "name_localizations");
    /**
     * The description of this command.
     */
    __publicField(this, "description");
    /**
     * The description localizations of this command.
     */
    __publicField(this, "description_localizations");
  }
  /**
   * Sets the name of this command.
   *
   * @param name - The name to use
   */
  setName(name) {
    validateName(name);
    Reflect.set(this, "name", name);
    return this;
  }
  /**
   * Sets the description of this command.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    validateDescription(description);
    Reflect.set(this, "description", description);
    return this;
  }
  /**
   * Sets a name localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedName - The localized name for the given `locale`
   */
  setNameLocalization(locale, localizedName) {
    if (!this.name_localizations) {
      Reflect.set(this, "name_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedName === null) {
      this.name_localizations[parsedLocale] = null;
      return this;
    }
    validateName(localizedName);
    this.name_localizations[parsedLocale] = localizedName;
    return this;
  }
  /**
   * Sets the name localizations for this command.
   *
   * @param localizedNames - The object of localized names to set
   */
  setNameLocalizations(localizedNames) {
    if (localizedNames === null) {
      Reflect.set(this, "name_localizations", null);
      return this;
    }
    Reflect.set(this, "name_localizations", {});
    for (const args of Object.entries(localizedNames)) {
      this.setNameLocalization(...args);
    }
    return this;
  }
  /**
   * Sets a description localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedDescription - The localized description for the given locale
   */
  setDescriptionLocalization(locale, localizedDescription) {
    if (!this.description_localizations) {
      Reflect.set(this, "description_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedDescription === null) {
      this.description_localizations[parsedLocale] = null;
      return this;
    }
    validateDescription(localizedDescription);
    this.description_localizations[parsedLocale] = localizedDescription;
    return this;
  }
  /**
   * Sets the description localizations for this command.
   *
   * @param localizedDescriptions - The object of localized descriptions to set
   */
  setDescriptionLocalizations(localizedDescriptions) {
    if (localizedDescriptions === null) {
      Reflect.set(this, "description_localizations", null);
      return this;
    }
    Reflect.set(this, "description_localizations", {});
    for (const args of Object.entries(localizedDescriptions)) {
      this.setDescriptionLocalization(...args);
    }
    return this;
  }
}, __name4(_a14, "SharedNameAndDescription"), _a14);
var _a15;
var ApplicationCommandOptionBase = (_a15 = class extends SharedNameAndDescription {
  constructor() {
    super(...arguments);
    /**
     * Whether this option is required.
     *
     * @defaultValue `false`
     */
    __publicField(this, "required", false);
  }
  /**
   * Sets whether this option is required.
   *
   * @param required - Whether this option should be required
   */
  setRequired(required) {
    validateRequired(required);
    Reflect.set(this, "required", required);
    return this;
  }
  /**
   * This method runs required validators on this builder.
   */
  runRequiredValidations() {
    validateRequiredParameters3(this.name, this.description, []);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    validateRequired(this.required);
  }
}, __name4(_a15, "ApplicationCommandOptionBase"), _a15);
var _a16;
var SlashCommandAttachmentOption = (_a16 = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Attachment);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}, __name4(_a16, "SlashCommandAttachmentOption"), _a16);
var _a17;
var SlashCommandBooleanOption = (_a17 = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Boolean);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}, __name4(_a17, "SlashCommandBooleanOption"), _a17);
var allowedChannelTypes = [
  ChannelType.GuildText,
  ChannelType.GuildVoice,
  ChannelType.GuildCategory,
  ChannelType.GuildAnnouncement,
  ChannelType.AnnouncementThread,
  ChannelType.PublicThread,
  ChannelType.PrivateThread,
  ChannelType.GuildStageVoice,
  ChannelType.GuildForum,
  ChannelType.GuildMedia
];
var channelTypesPredicate = s3.array(s3.union(...allowedChannelTypes.map((type) => s3.literal(type))));
var _a18;
var ApplicationCommandOptionChannelTypesMixin = (_a18 = class {
  constructor() {
    /**
     * The channel types of this option.
     */
    __publicField(this, "channel_types");
  }
  /**
   * Adds channel types to this option.
   *
   * @param channelTypes - The channel types
   */
  addChannelTypes(...channelTypes) {
    if (this.channel_types === void 0) {
      Reflect.set(this, "channel_types", []);
    }
    this.channel_types.push(...channelTypesPredicate.parse(channelTypes));
    return this;
  }
}, __name4(_a18, "ApplicationCommandOptionChannelTypesMixin"), _a18);
var SlashCommandChannelOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Channel);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
__name4(SlashCommandChannelOption, "SlashCommandChannelOption");
SlashCommandChannelOption = __decorateClass([
  mix(ApplicationCommandOptionChannelTypesMixin)
], SlashCommandChannelOption);
var _a19;
var ApplicationCommandNumericOptionMinMaxValueMixin = (_a19 = class {
  constructor() {
    /**
     * The maximum value of this option.
     */
    __publicField(this, "max_value");
    /**
     * The minimum value of this option.
     */
    __publicField(this, "min_value");
  }
}, __name4(_a19, "ApplicationCommandNumericOptionMinMaxValueMixin"), _a19);
var stringPredicate = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100);
var numberPredicate = s3.number.greaterThan(Number.NEGATIVE_INFINITY).lessThan(Number.POSITIVE_INFINITY);
var choicesPredicate = s3.object({
  name: stringPredicate,
  name_localizations: localizationMapPredicate,
  value: s3.union(stringPredicate, numberPredicate)
}).array;
var booleanPredicate2 = s3.boolean;
var _a20;
var ApplicationCommandOptionWithChoicesAndAutocompleteMixin = (_a20 = class {
  constructor() {
    /**
     * The choices of this option.
     */
    __publicField(this, "choices");
    /**
     * Whether this option utilizes autocomplete.
     */
    __publicField(this, "autocomplete");
    /**
     * The type of this option.
     *
     * @privateRemarks Since this is present and this is a mixin, this is needed.
     */
    __publicField(this, "type");
  }
  /**
   * Adds multiple choices to this option.
   *
   * @param choices - The choices to add
   */
  addChoices(...choices) {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(choices);
    if (this.choices === void 0) {
      Reflect.set(this, "choices", []);
    }
    validateChoicesLength(choices.length, this.choices);
    for (const { name, name_localizations, value } of choices) {
      if (this.type === ApplicationCommandOptionType.String) {
        stringPredicate.parse(value);
      } else {
        numberPredicate.parse(value);
      }
      this.choices.push({ name, name_localizations, value });
    }
    return this;
  }
  /**
   * Sets multiple choices for this option.
   *
   * @param choices - The choices to set
   */
  setChoices(...choices) {
    if (choices.length > 0 && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(choices);
    Reflect.set(this, "choices", []);
    this.addChoices(...choices);
    return this;
  }
  /**
   * Whether this option uses autocomplete.
   *
   * @param autocomplete - Whether this option should use autocomplete
   */
  setAutocomplete(autocomplete) {
    booleanPredicate2.parse(autocomplete);
    if (autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    Reflect.set(this, "autocomplete", autocomplete);
    return this;
  }
}, __name4(_a20, "ApplicationCommandOptionWithChoicesAndAutocompleteMixin"), _a20);
var numberValidator = s3.number.int;
var SlashCommandIntegerOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Integer);
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
   */
  setMaxValue(max) {
    numberValidator.parse(max);
    Reflect.set(this, "max_value", max);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
   */
  setMinValue(min) {
    numberValidator.parse(min);
    Reflect.set(this, "min_value", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name4(SlashCommandIntegerOption, "SlashCommandIntegerOption");
SlashCommandIntegerOption = __decorateClass([
  mix(ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], SlashCommandIntegerOption);
var _a21;
var SlashCommandMentionableOption = (_a21 = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Mentionable);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}, __name4(_a21, "SlashCommandMentionableOption"), _a21);
var numberValidator2 = s3.number;
var SlashCommandNumberOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Number);
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
   */
  setMaxValue(max) {
    numberValidator2.parse(max);
    Reflect.set(this, "max_value", max);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
   */
  setMinValue(min) {
    numberValidator2.parse(min);
    Reflect.set(this, "min_value", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name4(SlashCommandNumberOption, "SlashCommandNumberOption");
SlashCommandNumberOption = __decorateClass([
  mix(ApplicationCommandNumericOptionMinMaxValueMixin, ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], SlashCommandNumberOption);
var _a22;
var SlashCommandRoleOption = (_a22 = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.Role);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}, __name4(_a22, "SlashCommandRoleOption"), _a22);
var minLengthValidator2 = s3.number.greaterThanOrEqual(0).lessThanOrEqual(6e3);
var maxLengthValidator2 = s3.number.greaterThanOrEqual(1).lessThanOrEqual(6e3);
var SlashCommandStringOption = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.String);
    /**
     * The maximum length of this option.
     */
    __publicField(this, "max_length");
    /**
     * The minimum length of this option.
     */
    __publicField(this, "min_length");
  }
  /**
   * Sets the maximum length of this string option.
   *
   * @param max - The maximum length this option can be
   */
  setMaxLength(max) {
    maxLengthValidator2.parse(max);
    Reflect.set(this, "max_length", max);
    return this;
  }
  /**
   * Sets the minimum length of this string option.
   *
   * @param min - The minimum length this option can be
   */
  setMinLength(min) {
    minLengthValidator2.parse(min);
    Reflect.set(this, "min_length", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name4(SlashCommandStringOption, "SlashCommandStringOption");
SlashCommandStringOption = __decorateClass([
  mix(ApplicationCommandOptionWithChoicesAndAutocompleteMixin)
], SlashCommandStringOption);
var _a23;
var SlashCommandUserOption = (_a23 = class extends ApplicationCommandOptionBase {
  constructor() {
    super(...arguments);
    /**
     * The type of this option.
     */
    __publicField(this, "type", ApplicationCommandOptionType.User);
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
}, __name4(_a23, "SlashCommandUserOption"), _a23);
var _a24;
var SharedSlashCommandOptions = (_a24 = class {
  constructor() {
    __publicField(this, "options");
  }
  /**
   * Adds a boolean option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addBooleanOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandBooleanOption);
  }
  /**
   * Adds a user option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addUserOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandUserOption);
  }
  /**
   * Adds a channel option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addChannelOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandChannelOption);
  }
  /**
   * Adds a role option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addRoleOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandRoleOption);
  }
  /**
   * Adds an attachment option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addAttachmentOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandAttachmentOption);
  }
  /**
   * Adds a mentionable option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addMentionableOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandMentionableOption);
  }
  /**
   * Adds a string option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addStringOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandStringOption);
  }
  /**
   * Adds an integer option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addIntegerOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandIntegerOption);
  }
  /**
   * Adds a number option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addNumberOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandNumberOption);
  }
  /**
   * Where the actual adding magic happens. ✨
   *
   * @param input - The input. What else?
   * @param Instance - The instance of whatever is being added
   * @internal
   */
  _sharedAddOptionMethod(input, Instance) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new Instance()) : input;
    assertReturnOfBuilder(result, Instance);
    options.push(result);
    return this;
  }
}, __name4(_a24, "SharedSlashCommandOptions"), _a24);
var SlashCommandSubcommandGroupBuilder = class {
  constructor() {
    /**
     * The name of this subcommand group.
     */
    __publicField(this, "name");
    /**
     * The description of this subcommand group.
     */
    __publicField(this, "description");
    /**
     * The subcommands within this subcommand group.
     */
    __publicField(this, "options", []);
  }
  /**
   * Adds a new subcommand to this group.
   *
   * @param input - A function that returns a subcommand builder or an already built builder
   */
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.SubcommandGroup,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
__name4(SlashCommandSubcommandGroupBuilder, "SlashCommandSubcommandGroupBuilder");
SlashCommandSubcommandGroupBuilder = __decorateClass([
  mix(SharedNameAndDescription)
], SlashCommandSubcommandGroupBuilder);
var SlashCommandSubcommandBuilder = class {
  constructor() {
    /**
     * The name of this subcommand.
     */
    __publicField(this, "name");
    /**
     * The description of this subcommand.
     */
    __publicField(this, "description");
    /**
     * The options within this subcommand.
     */
    __publicField(this, "options", []);
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.Subcommand,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
__name4(SlashCommandSubcommandBuilder, "SlashCommandSubcommandBuilder");
SlashCommandSubcommandBuilder = __decorateClass([
  mix(SharedNameAndDescription, SharedSlashCommandOptions)
], SlashCommandSubcommandBuilder);
var SlashCommandBuilder = class {
  constructor() {
    /**
     * The name of this command.
     */
    __publicField(this, "name");
    /**
     * The name localizations of this command.
     */
    __publicField(this, "name_localizations");
    /**
     * The description of this command.
     */
    __publicField(this, "description");
    /**
     * The description localizations of this command.
     */
    __publicField(this, "description_localizations");
    /**
     * The options of this command.
     */
    __publicField(this, "options", []);
    /**
     * Whether this command is enabled by default when the application is added to a guild.
     *
     * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
     */
    __publicField(this, "default_permission");
    /**
     * The set of permissions represented as a bit set for the command.
     */
    __publicField(this, "default_member_permissions");
    /**
     * Indicates whether the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This property is only for global commands.
     */
    __publicField(this, "dm_permission");
    /**
     * Whether this command is NSFW.
     */
    __publicField(this, "nsfw");
  }
  /**
   * Sets whether the command is enabled by default when the application is added to a guild.
   *
   * @remarks
   * If set to `false`, you will have to later `PUT` the permissions for this command.
   * @param value - Whether or not to enable this command by default
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated Use {@link SlashCommandBuilder.setDefaultMemberPermissions} or {@link SlashCommandBuilder.setDMPermission} instead.
   */
  setDefaultPermission(value) {
    validateDefaultPermission(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  /**
   * Sets the default permissions a member should have in order to run the command.
   *
   * @remarks
   * You can set this to `'0'` to disable the command by default.
   * @param permissions - The permissions bit field to set
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDefaultMemberPermissions(permissions) {
    const permissionValue = validateDefaultMemberPermissions(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  /**
   * Sets if the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This method is only for global commands.
   * @param enabled - Whether the command should be enabled in direct messages
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDMPermission(enabled) {
    validateDMPermission(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  /**
   * Sets whether this command is NSFW.
   *
   * @param nsfw - Whether this command is NSFW
   */
  setNSFW(nsfw = true) {
    validateNSFW(nsfw);
    Reflect.set(this, "nsfw", nsfw);
    return this;
  }
  /**
   * Adds a new subcommand group to this command.
   *
   * @param input - A function that returns a subcommand group builder or an already built builder
   */
  addSubcommandGroup(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandGroupBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandGroupBuilder);
    options.push(result);
    return this;
  }
  /**
   * Adds a new subcommand to this command.
   *
   * @param input - A function that returns a subcommand builder or an already built builder
   */
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    return {
      ...this,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
__name4(SlashCommandBuilder, "SlashCommandBuilder");
SlashCommandBuilder = __decorateClass([
  mix(SharedSlashCommandOptions, SharedNameAndDescription)
], SlashCommandBuilder);
var Assertions_exports6 = {};
__export2(Assertions_exports6, {
  validateDMPermission: () => validateDMPermission2,
  validateDefaultMemberPermissions: () => validateDefaultMemberPermissions2,
  validateDefaultPermission: () => validateDefaultPermission2,
  validateName: () => validateName2,
  validateRequiredParameters: () => validateRequiredParameters4,
  validateType: () => validateType
});
var namePredicate2 = s3.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/^( *[\p{P}\p{L}\p{N}\p{sc=Devanagari}\p{sc=Thai}]+ *)+$/u).setValidationEnabled(isValidationEnabled);
var typePredicate = s3.union(s3.literal(ApplicationCommandType.User), s3.literal(ApplicationCommandType.Message)).setValidationEnabled(isValidationEnabled);
var booleanPredicate3 = s3.boolean;
function validateDefaultPermission2(value) {
  booleanPredicate3.parse(value);
}
__name4(validateDefaultPermission2, "validateDefaultPermission");
function validateName2(name) {
  namePredicate2.parse(name);
}
__name4(validateName2, "validateName");
function validateType(type) {
  typePredicate.parse(type);
}
__name4(validateType, "validateType");
function validateRequiredParameters4(name, type) {
  validateName2(name);
  validateType(type);
}
__name4(validateRequiredParameters4, "validateRequiredParameters");
var dmPermissionPredicate2 = s3.boolean.nullish;
function validateDMPermission2(value) {
  dmPermissionPredicate2.parse(value);
}
__name4(validateDMPermission2, "validateDMPermission");
var memberPermissionPredicate2 = s3.union(
  s3.bigint.transform((value) => value.toString()),
  s3.number.safeInt.transform((value) => value.toString()),
  s3.string.regex(/^\d+$/)
).nullish;
function validateDefaultMemberPermissions2(permissions) {
  return memberPermissionPredicate2.parse(permissions);
}
__name4(validateDefaultMemberPermissions2, "validateDefaultMemberPermissions");
var _a25;
var ContextMenuCommandBuilder = (_a25 = class {
  constructor() {
    /**
     * The name of this command.
     */
    __publicField(this, "name");
    /**
     * The name localizations of this command.
     */
    __publicField(this, "name_localizations");
    /**
     * The type of this command.
     */
    __publicField(this, "type");
    /**
     * Whether this command is enabled by default when the application is added to a guild.
     *
     * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
     */
    __publicField(this, "default_permission");
    /**
     * The set of permissions represented as a bit set for the command.
     */
    __publicField(this, "default_member_permissions");
    /**
     * Indicates whether the command is available in direct messages with the application.
     *
     * @remarks
     * By default, commands are visible. This property is only for global commands.
     */
    __publicField(this, "dm_permission");
  }
  /**
   * Sets the name of this command.
   *
   * @param name - The name to use
   */
  setName(name) {
    validateName2(name);
    Reflect.set(this, "name", name);
    return this;
  }
  /**
   * Sets the type of this command.
   *
   * @param type - The type to use
   */
  setType(type) {
    validateType(type);
    Reflect.set(this, "type", type);
    return this;
  }
  /**
   * Sets whether the command is enabled by default when the application is added to a guild.
   *
   * @remarks
   * If set to `false`, you will have to later `PUT` the permissions for this command.
   * @param value - Whether to enable this command by default
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
   */
  setDefaultPermission(value) {
    validateDefaultPermission2(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  /**
   * Sets the default permissions a member should have in order to run this command.
   *
   * @remarks
   * You can set this to `'0'` to disable the command by default.
   * @param permissions - The permissions bit field to set
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDefaultMemberPermissions(permissions) {
    const permissionValue = validateDefaultMemberPermissions2(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  /**
   * Sets if the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This method is only for global commands.
   * @param enabled - Whether the command should be enabled in direct messages
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDMPermission(enabled) {
    validateDMPermission2(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  /**
   * Sets a name localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedName - The localized name for the given `locale`
   */
  setNameLocalization(locale, localizedName) {
    if (!this.name_localizations) {
      Reflect.set(this, "name_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedName === null) {
      this.name_localizations[parsedLocale] = null;
      return this;
    }
    validateName2(localizedName);
    this.name_localizations[parsedLocale] = localizedName;
    return this;
  }
  /**
   * Sets the name localizations for this command.
   *
   * @param localizedNames - The object of localized names to set
   */
  setNameLocalizations(localizedNames) {
    if (localizedNames === null) {
      Reflect.set(this, "name_localizations", null);
      return this;
    }
    Reflect.set(this, "name_localizations", {});
    for (const args of Object.entries(localizedNames))
      this.setNameLocalization(...args);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters4(this.name, this.type);
    validateLocalizationMap(this.name_localizations);
    return { ...this };
  }
}, __name4(_a25, "ContextMenuCommandBuilder"), _a25);
function embedLength(data4) {
  return (data4.title?.length ?? 0) + (data4.description?.length ?? 0) + (data4.fields?.reduce((prev, curr) => prev + curr.name.length + curr.value.length, 0) ?? 0) + (data4.footer?.text.length ?? 0) + (data4.author?.name.length ?? 0);
}
__name4(embedLength, "embedLength");

// src/commands/register.ts
var import_discord = require("discord.js");
var import_axios = __toESM(require("axios"));

// src/DB.ts
var import_promise = __toESM(require("mysql2/promise"));
var pool = import_promise.default.createPool({
  host: "devseok.com",
  user: "daily_alarm",
  database: "daily_alarm",
  password: process.env.DB_PW
});

// src/commands/register.ts
var url = "https://ggm.gondr.net/api/team/list";
var data = new import_discord.SlashCommandBuilder().setName("register").setDescription("\uB9E4\uB2C8\uC800\uC5D0 \uD300\uC744 \uB4F1\uB85D\uD569\uB2C8\uB2E4. (\uCC44\uB110 \uBBF8\uC785\uB825\uC2DC \uD604\uC7AC \uCC44\uB110\uC744 \uC54C\uB9BC \uCC44\uB110\uC73C\uB85C \uB4F1\uB85D\uD569\uB2C8\uB2E4.)").setNameLocalization("ko", "\uD300\uB4F1\uB85D").addStringOption((option) => {
  return option.setName("team_name").setDescription("\uD300 \uC774\uB984\uC744 \uC815\uD655\uD558\uAC8C \uAE30\uC785\uD574 \uC8FC\uC138\uC694.").setRequired(true).setNameLocalization("ko", "\uD300\uBA85");
}).addChannelOption((option) => {
  return option.setName("alarm_channel").setDescription("\uC77C\uAC04\uBCF4\uACE0\uC11C \uC54C\uB9BC\uC744 \uBCF4\uB0BC \uCC44\uB110\uC744 \uC785\uB825\uD558\uC138\uC694.").setRequired(false).addChannelTypes(import_discord.ChannelType.GuildText).setNameLocalization("ko", "\uCC44\uB110");
});
async function execute(interaction) {
  const teamName = interaction.options.getString("team_name");
  const embed = new EmbedBuilder();
  const guild = interaction.guild;
  if (!guild) {
    return await interaction.reply({ content: "\uB514\uC2A4\uCF54\uB4DC \uC11C\uBC84\uC5D0\uC11C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBA85\uB839\uC5B4\uC785\uB2C8\uB2E4.", ephemeral: true });
  }
  const now = new Date(Date.now());
  const res = await import_axios.default.get(url, {
    params: {
      year: now.getFullYear()
    }
  });
  const teamList = res.data.list;
  const team = teamList.find((t3) => t3.name == teamName);
  if (team) {
    embed.setTitle(`**${team.name}** \uD300\uC774 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`).setFields([
      { name: "\uD300 ID", value: `${team.id}`, inline: true },
      { name: "\uD300\uC6D0 \uC218", value: `${team.cnt}`, inline: true },
      { name: "\uD300\uC7A5", value: `${team.leader.name}`, inline: true }
    ]);
  } else {
    embed.setTitle("\uD574\uB2F9\uD558\uB294 \uD300\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.").setDescription(`https://ggm.gondr.net/project \uC5D0\uC11C \uD300\uBA85\uC744 \uC815\uD655\uD558\uAC8C \uCC3E\uC544 \uAE30\uC785\uD574 \uC8FC\uC138\uC694.`);
    return await interaction.reply({ embeds: [embed] });
  }
  const targetChannel = interaction.options.getChannel("alarm_channel") ?? interaction.channel;
  const webhook = await targetChannel.createWebhook({
    name: "\uC77C\uAC04\uBCF4\uACE0\uC11C \uC54C\uB9BC"
  });
  try {
    const sql = "INSERT INTO `team`(`id`, `name`, `cnt`, `guild`, `webhook_url`, `color`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [team.id, team.name, team.cnt, guild.id, webhook.url, team.color];
    const [result, fields] = await pool.query(sql, values);
  } catch (err) {
    const error = err;
    if (error.errno === 1062) {
      embed.setTitle("\uC774\uBBF8 \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4.").setFields([
        { name: "\uD300 ID", value: `${team.id}`, inline: true },
        { name: "\uD300\uC6D0 \uC218", value: `${team.cnt}`, inline: true },
        { name: "\uD300\uC7A5", value: `${team.leader.name}`, inline: true }
      ]);
      return await interaction.reply({ embeds: [embed] });
    }
    embed.setTitle("\uD300 \uC815\uBCF4\uB97C \uB4F1\uB85D\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.").setDescription(error.message);
    return await interaction.reply({ embeds: [embed] });
  }
  return await interaction.reply({ embeds: [embed] });
}

// src/commands/remove.ts
var remove_exports = {};
__export(remove_exports, {
  data: () => data2,
  execute: () => execute2
});
var import_discord2 = require("discord.js");
var data2 = new import_discord2.SlashCommandBuilder().setName("remove").setDescription("\uB9E4\uB2C8\uC800\uC5D0 \uB4F1\uB85D\uB41C \uD300\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4.").setNameLocalization("ko", "\uD300\uB4F1\uB85D\uD574\uC81C");
async function execute2(interaction) {
  const embed = new EmbedBuilder();
  const guild = interaction.guild;
  if (!guild) {
    return await interaction.reply({ content: "\uB514\uC2A4\uCF54\uB4DC \uC11C\uBC84\uC5D0\uC11C\uB9CC \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBA85\uB839\uC5B4\uC785\uB2C8\uB2E4.", ephemeral: true });
  }
  try {
    let sql = "SELECT `id`, `guild`, `webhook_url` FROM `team` WHERE `guild` = ?";
    let values = [guild.id];
    let [result, fields] = await pool.query(sql, values);
    const team = result[0];
    if (!team) {
      return await interaction.reply({ content: "\uB4F1\uB85D\uB41C \uD300\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", ephemeral: true });
    }
    if (team.guild == guild.id) {
      sql = "DELETE FROM `team` WHERE id = ?";
      values = [team.id];
      [result, fields] = await pool.query(sql, values);
    }
    let webhookId;
    const pattern = /\/webhooks\/(\d+)/;
    const matches = team.webhook_url.match(pattern);
    if (matches) {
      webhookId = matches[1];
    } else {
      embed.setTitle("\uD300 \uC815\uBCF4\uB97C \uB4F1\uB85D \uD574\uC81C\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.").setDescription(`${matches}`);
      return await interaction.reply({ embeds: [embed] });
    }
    const webhooks = await guild.fetchWebhooks();
    const webhook = webhooks.get(webhookId);
    if (webhook) {
      webhook.delete();
    }
  } catch (err) {
    console.log(err);
    embed.setTitle("\uD300 \uC815\uBCF4\uB97C \uB4F1\uB85D \uD574\uC81C\uD558\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.").setDescription(`${err}`);
    return await interaction.reply({ embeds: [embed] });
  }
  return await interaction.reply({ content: "\uD300 \uB4F1\uB85D\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uD574\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4!", ephemeral: true });
}

// src/commands/test.ts
var test_exports = {};
__export(test_exports, {
  data: () => data3,
  execute: () => execute3
});
var import_discord3 = require("discord.js");
var host = "ggm.gondr.net";
var data3 = new import_discord3.SlashCommandBuilder().setName("test").setDescription("\uD14C\uC2A4\uD2B8\uB85C \uC9C0\uC815\uD55C \uB0A0\uC790\uC758 \uC77C\uAC04\uBCF4\uACE0\uC11C\uB4E4\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4.").setNameLocalization("ko", "\uD14C\uC2A4\uD2B8");
async function execute3(interaction) {
  let team;
  try {
    const sql = "SELECT * FROM `team` WHERE `guild` = ?";
    const values = [interaction.guildId];
    const [rows, fields] = await pool.execute(sql, values);
    team = rows[0];
  } catch (err) {
    console.log(err);
    return await interaction.reply({ content: `${err}` });
  }
  if (!team) {
    return await interaction.reply({ content: "\uD300\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4! \uB4F1\uB85D\uC744 \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694." });
  }
  const list = await getDailyNotes(team, new Date(Date.now()));
  const webhookClient = new import_discord3.WebhookClient({ url: team.webhook_url });
  const embed = new EmbedBuilder().setTitle("**\uC77C\uAC04\uBCF4\uACE0\uC11C\uB97C \uC791\uC131\uD574\uC8FC\uC138\uC694! (\uD074\uB9AD \uC2DC \uC774\uB3D9)**").setURL(`http://${host}/project/team/${team.id}`).setFields(list).setTimestamp().setFooter({ text: `${list.length}/${team.cnt}` });
  webhookClient.send({
    embeds: [embed]
  });
  return await interaction.reply({ content: "\uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD588\uC2B5\uB2C8\uB2E4." });
}

// src/commands/index.ts
var commands = {
  register: register_exports,
  remove: remove_exports,
  test: test_exports
};

// src/deploy-commands.ts
var import_discord4 = require("discord.js");
var commandsData = Object.values(commands).map((command) => command.data);
var rest = new import_discord4.REST({ version: "10" }).setToken(config.DISCORD_TOKEN);
async function deployCommands({ guildId }) {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(
      import_discord4.Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
      {
        body: commandsData
      }
    );
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

// src/index.ts
var import_node_schedule = require("node-schedule");
var import_axios2 = __toESM(require("axios"));
var host2 = "ggm.gondr.net";
var client = new import_discord5.Client({
  intents: [
    import_discord5.GatewayIntentBits.Guilds,
    import_discord5.GatewayIntentBits.GuildMessages,
    import_discord5.GatewayIntentBits.DirectMessages
  ]
});
client.once("ready", async () => {
  console.log("Discord bot is ready! \u{1F916}");
  let guilds = await client.guilds.fetch();
  guilds.forEach(async (g2) => {
    await deployCommands({ guildId: g2.id });
  });
});
client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandType !== import_discord5.ApplicationCommandType.ChatInput) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName]) {
    console.log(commandName);
    commands[commandName].execute(interaction);
  }
});
(0, import_node_schedule.scheduleJob)("20 20 * * 1-5", sendDailyNotes);
(0, import_node_schedule.scheduleJob)("55 23 * * 1-5", sendDailyNotes);
client.login(config.DISCORD_TOKEN);
async function sendDailyNotes() {
  let registered;
  try {
    const sql = "SELECT * FROM `team`";
    const [rows, fields] = await pool.execute(sql);
    registered = rows;
  } catch (err) {
    return;
  }
  registered.forEach(async (team) => {
    const list = await getDailyNotes(team, new Date(Date.now()));
    const webhookClient = new import_discord5.WebhookClient({ url: team.webhook_url });
    const embed = new import_discord5.EmbedBuilder().setTitle("**\uC77C\uAC04\uBCF4\uACE0\uC11C\uB97C \uC791\uC131\uD574\uC8FC\uC138\uC694! (\uD074\uB9AD \uC2DC \uC774\uB3D9)**").setURL(`http://${host2}/project/team/${team.id}`).setFields(list).setTimestamp().setFooter({ text: `${list.length}/${team.cnt}` });
    webhookClient.send({
      content: "@everyone",
      embeds: [embed]
    });
  });
}
async function getDailyNotes(team, t3) {
  let page = await getPage(team, t3);
  let list = page.data.list;
  return list.map((note) => {
    return { name: note.name, value: note.content };
  });
}
async function getPage(team, t3) {
  return await import_axios2.default.get(`http://${host2}/api/team/record/daily?team=${team.id}&start_day=${t3.getFullYear()}-${t3.getMonth() + 1}-${t3.getDate()}`, {
    headers: { "Authorization": `Bearer ${config.GGM_TOKEN}` }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDailyNotes,
  getPage,
  sendDailyNotes
});
/*! Bundled license information:

@sapphire/shapeshift/dist/esm/index.mjs:
  (**
   * @license MIT
   * @copyright 2020 Colin McDonnell
   * @see https://github.com/colinhacks/zod/blob/master/LICENSE
   *)
*/

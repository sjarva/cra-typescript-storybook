(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DefaultWithoutLabel = undefined;

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  exports.default = {
    title: "Button",
    component: _Button.Button
  };

  const DefaultWithoutLabel = exports.DefaultWithoutLabel = () => React.createElement(_Button.Button, {
    label: "TESTING"
  });
});
//# sourceMappingURL=Button.stories.js.map
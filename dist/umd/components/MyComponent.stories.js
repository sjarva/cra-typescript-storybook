(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "react", "@storybook/react", "./MyComponent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("react"), require("@storybook/react"), require("./MyComponent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.react, global.react, global.MyComponent);
    global.undefined = mod.exports;
  }
})(this, function (module, _react, _react2, _MyComponent) {
  "use strict";

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

  (0, _react2.storiesOf)("Select | Catalog", module).add("Default", () => React.createElement(_MyComponent.MyComponent, null));
});
//# sourceMappingURL=MyComponent.stories.js.map
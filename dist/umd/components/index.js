(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./MyComponent", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./MyComponent"), require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.MyComponent, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _MyComponent, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_MyComponent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _MyComponent[key];
      }
    });
  });
  Object.keys(_Button).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Button[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map
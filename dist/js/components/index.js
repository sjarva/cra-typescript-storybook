"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MyComponent = require("./MyComponent");

Object.keys(_MyComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyComponent[key];
    }
  });
});

var _Button = require("./Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
});
//# sourceMappingURL=index.js.map
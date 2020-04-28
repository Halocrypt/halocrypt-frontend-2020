const { minify } = require("terser");

const fn = function () {
  window.__initConfig = {
    userAgent: navigator.userAgent,
    connType: navigator.connection && navigator.connection.effectiveType,
    mem: navigator.deviceMemory,
    isTouch: !!navigator.maxTouchPoints,
    es6: typeof Map === typeof Set,
  };
};

module.exports = minify(`(${fn})()`).code;

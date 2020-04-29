const { minify } = require("terser");

const fn = function () {
  function randString() {
    const hasCrypto = "crypto" in self;
    if (hasCrypto) {
      return crypto.getRandomValues(new Uint8Array(10)).join("-");
    }
    return String(Math.random());
  }
  window.__initConfig = {
    userAgent: navigator.userAgent,
    connType: navigator.connection && navigator.connection.effectiveType,
    mem: navigator.deviceMemory,
    isTouch: !!navigator.maxTouchPoints,
    es6: typeof Symbol == "function",
    session: randString(),
  };
};

module.exports = minify(`(${fn})()`).code;

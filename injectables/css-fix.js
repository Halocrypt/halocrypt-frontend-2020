const { minify } = require("terser");

const fn = function () {
  const hasTouchIntent = !!navigator.maxTouchPoints;
  if (hasTouchIntent) {
    const style = document.createElement("style");
    style.innerText = "*{cursor:pointer;}";
    document.head.appendChild(style);
  }
};

module.exports = minify(`(${fn})()`).code;

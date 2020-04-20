const { minify } = require("terser");

const fn = function () {
  var links = Array.from(
    document.querySelectorAll("link[rel='preload'][as='style']")
  );
  links.forEach(function (link) {
    link.rel = "stylesheet";
  });
};

module.exports = minify(`(${fn})()`).code;

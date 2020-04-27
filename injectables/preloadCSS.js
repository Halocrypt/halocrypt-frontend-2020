const { minify } = require("terser");

const fn = function () {
  var links = Array.from(
    document.querySelectorAll("link[rel='preload'][as='style']")
  );
  const once = { once: true };
  links.forEach(function (link) {
    link.addEventListener(
      "load",
      function () {
        link.rel = "stylesheet";
      },
      once
    );
  });
};

module.exports = minify(`(${fn})()`).code;

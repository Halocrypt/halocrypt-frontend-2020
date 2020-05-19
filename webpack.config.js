const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoPrefixPlugin = require("autoprefixer");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
  .default;

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlRuntimePlugin = require("html-webpack-inline-runtime-plugin");
const SRIPlugin = require("webpack-subresource-integrity");
const { basename } = require("path");
const isProd = basename(__filename).includes(".prod");
const mode = isProd ? "production" : "development";
const cfg = require("./.babelrc");
function prodOrDev(a, b) {
  return isProd ? a : b;
}

const jsLoaderOptions = (isLegacy) => ({
  test: /\.m?js$/,
  exclude: /(node_modules\/(?!@hydrophobefireman))|(injectables)/,
  use: {
    loader: "babel-loader",
    options: cfg.env[isLegacy ? "legacy" : "modern"],
  },
});
const cssLoaderOptions = {
  test: /\.css$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: { ident: "postcss", plugins: [autoPrefixPlugin()] },
    },
  ],
};
const contentLoaderOptions = {
  test: /\.(png|jpg|gif|ico|svg)$/,
  use: [{ loader: "url-loader", options: { fallback: "file-loader" } }],
};
function getCfg(isLegacy) {
  return {
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
    devServer: {
      contentBase: `${__dirname}/docs`,
      compress: !0,
      port: 4200,
      historyApiFallback: true,
    },
    module: {
      rules: [
        jsLoaderOptions(isLegacy),
        cssLoaderOptions,
        contentLoaderOptions,
      ],
    },
    entry: `${__dirname}/static/App.js`,
    output: {
      publicPath: isProd ? "/docs/" : "/",
      ecmaVersion: isLegacy ? 5 : 6,
      path: `${__dirname}/docs`,
      filename: `${isLegacy ? "legacy" : "es6"}/[name]-[contenthash].js`,
    },
    mode,
    optimization: {
      minimizer: prodOrDev([new TerserWebpackPlugin({ parallel: !0 })], []),
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: "body",
        template: `${__dirname}/index.html`,
        xhtml: !0,
        favicon: "./favicon.ico",

        minify: prodOrDev(
          {
            collapseBooleanAttributes: !0,
            collapseWhitespace: !0,
            html5: !0,
            minifyCSS: !0,
            removeEmptyAttributes: !0,
            removeRedundantAttributes: !0,
          },
          !1
        ),
      }),
      new MiniCssExtractPlugin({}),
      isProd
        ? new OptimizeCSSAssetsPlugin({ cssProcessor: require("cssnano") })
        : null,
      isProd ? new HTMLInlineCSSWebpackPlugin({}) : null,
      new HtmlRuntimePlugin(),
      new SRIPlugin({
        hashFuncNames: ["sha256", "sha384","sha512"],
        enabled: isProd,
      }),
    ].filter(Boolean),
  };
}

module.exports = getCfg(false);

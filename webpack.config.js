const path = require("path");

module.exports = {
  entry: "./characters.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
};

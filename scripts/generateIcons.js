const path = require("path");

const { reactIconsGeneratorFromSVGDir } = require("easy-icons");

const SVG_DIR = path.resolve(__dirname, "../public/svg");
const ICON_OUTPUT_DIR = path.resolve(__dirname, "../src/icons");

reactIconsGeneratorFromSVGDir({
  entry: SVG_DIR,
  output: ICON_OUTPUT_DIR,
  typescript: true,
});

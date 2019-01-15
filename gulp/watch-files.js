const {watch, series} = require(`gulp`);
const generateCSS = require(`./generate-css`);
const generateScripts = require(`./generate-scripts`);
const copyHtml = require(`./copy-html`);
const copyAssets = require(`./copy-assets`);
const generateSVG = require(`./generate-svg`);
const generateWEBP = require(`./generate-webp`);
const minifyImages = require(`./minify-images`);

const watchFiles = (options) => {
  return function _watchFiles() {
    watch(`source/sass/**/*.scss`, generateCSS(options));
    watch(`source/js/**/*.js`, generateScripts(options));
    watch(`source/**/*.html`, copyHtml);
    watch(`source/img/svg-sprite/*.svg`, series(generateSVG, copyAssets));
    watch(`source/img/before-optimize/*.{png,jpg,svg,jpeg}`, series(generateWEBP, minifyImages(options), copyAssets));
    watch(`source/fonts/**/*.{woff,woff2}`, copyAssets);
  };
};

module.exports = watchFiles;

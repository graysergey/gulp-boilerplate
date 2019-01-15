const {watch, series} = require(`gulp`);
const generateCSS = require(`./generate-css`);
const generateScripts = require(`./generate-scripts`);
const copyHtml = require(`./copy-html`);
const copy = require(`./copy`);
const generateSVG = require(`./generate-svg`);
const generateWEBP = require(`./generate-webp`);
const minifyImages = require(`./minify-images`);

const watchFiles = (options) => {
  return () => {
    watch(`source/sass/**/*.scss`, generateCSS(options));
    watch(`source/js/**/*.js`, generateScripts(options));
    watch(`source/**/*.html`, copyHtml);
    watch(`source/img/svg-sprite/*.svg`, series(generateSVG, copy));
    watch(`source/img/before-optimize/*.{png,jpg,svg}`, series(generateWEBP, minifyImages, copy));
    watch(`source/fonts/**/*.{woff,woff2}`, copy);
  };
};

module.exports = watchFiles;

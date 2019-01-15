const {task, series, parallel} = require(`gulp`);
const {
  clean,
  copyAssets,
  generateSVG,
  generateWEBP,
  minifyImages,
  copyHtml,
  generateCSS,
  generateScripts,
  Server,
  watchFiles,
  cleanImages
} = require(`./gulp`);

const productionOptions = {mode: `production`, sourceMap: false, optimizeImages: true};
task(`build`, series(
    clean,
    cleanImages,
    generateSVG,
    generateWEBP,
    minifyImages(productionOptions),
    copyAssets,
    copyHtml,
    generateCSS(productionOptions),
    generateScripts(productionOptions)
));

const server = new Server();
const devOptions = {mode: `development`, sourceMap: true, optimizeImages: false};
task(`start`, series(
    clean,
    cleanImages,
    generateSVG,
    generateWEBP,
    minifyImages(devOptions),
    copyAssets,
    copyHtml,
    generateCSS(devOptions),
    generateScripts(devOptions),
    parallel(server.init.bind(server), watchFiles(devOptions))
));

const {task, series, parallel} = require(`gulp`);
const {
  clean,
  copyAssets,
  generateSVG,
  generateWEBP,
  minifyImages,
  generateHtml,
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
    generateHtml,
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
    generateHtml,
    generateCSS(devOptions),
    generateScripts(devOptions),
    parallel(server.init.bind(server), watchFiles(devOptions))
));

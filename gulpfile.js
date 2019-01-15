const {task, series, parallel} = require(`gulp`);
const {
  clean,
  copy,
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

const productionOptions = {mode: `production`, sourceMap: false};
task(`build`, series(
    clean,
    cleanImages,
    generateSVG,
    generateWEBP,
    minifyImages,
    copy,
    copyHtml,
    generateCSS(productionOptions),
    generateScripts(productionOptions)
));

const server = new Server();
const devOptions = {mode: `development`, sourceMap: true};
task(`start`, series(
    clean,
    cleanImages,
    generateSVG,
    generateWEBP,
    minifyImages,
    copy,
    copyHtml,
    generateCSS(devOptions),
    generateScripts(devOptions),
    parallel(server.init.bind(server), watchFiles(devOptions))
));

const gulp = require(`gulp`);
const {
  clean,
  copy,
  generateSVG,
  generateWEBP,
  minifyImages,
  copyHtml,
  generateCSS,
  generateScripts
} = require(`./gulp`);


gulp.task(`build`, gulp.series(
    clean,
    generateSVG,
    generateWEBP,
    minifyImages,
    copy,
    copyHtml,
    generateCSS({sourceMap: false}),
    generateScripts({mode: `production`, sourceMap: false})
));

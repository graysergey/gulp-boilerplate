const gulp = require(`gulp`);
const {
  clean,
  copy,
  generateSVG,
  generateWEBP,
  minifyImages
} = require(`./gulp/index`);


gulp.task(`build`, gulp.series(clean, generateSVG, generateWEBP, minifyImages, copy));

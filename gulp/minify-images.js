const {src, dest} = require(`gulp`);
const imagemin = require(`gulp-imagemin`);
const empty = require(`gulp-empty-pipe`);

const minifyImages = (options) => {
  return () => {
    return src(`source/img/before-optimize/*.{png,jpg,svg}`)
    .pipe(options.optimizeImages
      && imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true}),
        imagemin.svgo()
      ])
      || empty())
    .pipe(dest(`source/img`));
  };
};

module.exports = minifyImages;

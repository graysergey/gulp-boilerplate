const {src, dest} = require(`gulp`);
const imagemin = require(`gulp-imagemin`);

const minifyImages = () => {
  return src(`source/img/before-optimize/*.{png,jpg,svg}`)
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(dest(`source/img`));
};

module.exports = minifyImages;

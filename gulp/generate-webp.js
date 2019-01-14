const {src, dest} = require(`gulp`);
const webp = require(`gulp-webp`);

const generateWEBP = () => {
  return src(`source/img/before-optimize/*.{png,jpg,svg}`)
    .pipe(webp({quality: 90}))
    .pipe(dest(`source/img`));
};

module.exports = generateWEBP;

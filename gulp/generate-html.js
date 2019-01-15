const {src, dest} = require(`gulp`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);

const generateHtml = () => {
  return src(`source/*.html`)
  .pipe(posthtml([
    include()
  ]))
  .pipe(dest(`dist`));
};

module.exports = generateHtml;

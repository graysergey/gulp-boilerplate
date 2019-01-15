const {src, dest} = require(`gulp`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const expressions = require(`posthtml-expressions`);

const generateHtml = () => {
  return src(`source/*.html`)
  .pipe(posthtml([
    include(),
    expressions()
  ]))
  .pipe(dest(`dist`));
};

module.exports = generateHtml;

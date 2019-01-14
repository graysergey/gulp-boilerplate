const {src, dest} = require(`gulp`);
const plumber = require(`gulp-plumber`);
const webpack = require(`webpack-stream`);
const named = require(`vinyl-named`);

const generateScripts = (options) => {
  return function _generateScripts() {
    return src(`source/js/main.js`)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpack({
      mode: options.mode,
      output: {filename: `main.min.js`},
      devtool: options.sourceMap && `source-map`,
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: `babel-loader`,
              options: {
                presets: [`@babel/preset-env`]
              }
            }
          }
        ]
      },
    }))
    .pipe(dest(`dist/js/`));
  };
};

module.exports = generateScripts;

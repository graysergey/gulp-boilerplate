const {src, dest} = require(`gulp`);

const copyAssets = () => {
  return src([
    `source/fonts/**/*.{woff,woff2}`,
    `source/img/*.{jpg,jpeg,png,webp,svg}`,
  ],
  {base: `source/`})
    .pipe(dest(`dist`));
};

module.exports = copyAssets;

const Config = {
  PRODUCTION_OPTIONS: { // Options for build
    mode: `production`, // Webpack mode
    sourceMap: false, // Build source maps for CSS and JS
    optimizeImages: true // Minify images
  },
  DEVELOPER_OPTIONS: { // Options for developing
    mode: `development`, // Webpack mode
    sourceMap: true, // Build source maps for CSS and JS
    optimizeImages: false // Minify images
  }
};

module.exports = Config;

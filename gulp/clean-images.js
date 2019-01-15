const del = require(`del`);

const cleanImages = () => del(`source/img/*.{png,jpg,jpeg,webp,svg}`);

module.exports = cleanImages;

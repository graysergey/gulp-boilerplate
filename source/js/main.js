// import '@babel/polyfill';

document.addEventListener(`DOMContentLoaded`, () => {
  const indicator = document.createElement(`p`);
  indicator.innerHTML = `js loaded!`;
  document.body.appendChild(indicator);
});

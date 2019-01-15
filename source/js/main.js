// import '@babel/polyfill'; // use if need IE support with ES6

document.addEventListener(`DOMContentLoaded`, () => {
  const indicator = document.createElement(`p`);
  indicator.innerHTML = `JS loaded!`;
  indicator.classList.add(`gulp__text`);
  const parentSection = document.querySelector(`.gulp`);
  parentSection.appendChild(indicator);
});

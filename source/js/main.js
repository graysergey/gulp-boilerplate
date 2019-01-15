// import '@babel/polyfill'; // Polyfill for babel
// import 'picturefill'; // Polyfill for IE <picture> tag

document.addEventListener(`DOMContentLoaded`, () => {
  const indicator = document.createElement(`p`);
  indicator.innerHTML = `JS loaded!`;
  indicator.classList.add(`gulp__text`);
  const parentSection = document.querySelector(`.gulp`);
  parentSection.appendChild(indicator);
});

import '../styles/main.css';
import '../styles/utils.css';
import confetti from './vendor.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello World</h1>
  <div class="flex-container">
    <img src="/static/eleventy.svg" class="brand">
    <img src="/static/rollup.svg" class="brand">
  </div>
`;

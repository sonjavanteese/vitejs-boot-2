import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  component,
  store,
} from 'reefjs';

import javascriptLogo from './javascript.svg';

// document.querySelector('#app').innerHTML 
const temp1 = () => `
  <div class="container">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <p><strong>${appData.greeting}, ${appData.name}!</strong></p>
    <div class="card">
      <button id="counter" type="button">Count is ${appData.count}</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;



// let {store, component} = reef;

// Create a reactive appData store
let appData = store({
	greeting: 'Hello',
	name: 'World',
  count: 0
});


const ClickHandler = (event) => {
  let c1 = event.target.closest('#counter');
  if (c1) {
    appData.count = appData.count + 1
  };
};





function run() {
  console.log("app run");
  component('#app', temp1);
}

document.addEventListener("click", ClickHandler);
document.addEventListener('reef:render', function (event) {
	console.log('The UI was just updated inside this element.');
	console.log(event.target);

});
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded");
  run();
});

setTimeout(function () {
  appData.greeting = "Nwp-Studio";
}, 5000);
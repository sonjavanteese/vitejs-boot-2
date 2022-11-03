import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import {
  component,
  store,
} from 'reefjs';

import router from './routes';

router
  .add(/about/, () => {
    appData.name = 'About';
    console.log('welcome in about page');
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    appData.name = 'Data';
    console.log(`products: ${id} specification: ${specification}`);
  })
  .add('', () => {
    appData.name = 'Home';
    console.log('welcome in catch all controller');
  });

// document.querySelector('#app').innerHTML 
const temp1 = () => `
  <div class="container">
    <a href="#/">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#/about">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="/#/products/12/specification/10"><img src="/vite.svg" class="logo" alt="Vite logo" /></a>
    <h1>Hello Vite!</h1>
    <p><strong>${appData.greeting}, ${appData.name}!</strong></p>
    ${appData.name !== 'About' ? `
    <div class="card">
      <button id="counter" type="button">Count is ${appData.count}</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>` : ``}
  </div>
`;




let appData = store({
	greeting: 'Nwp-Studio',
	name: 'Start',
  count: 0,
  route_id: 0,
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
// document.addEventListener('reef:render', function (event) {
// 	console.log('The UI was just updated inside this element.');
// 	console.log(event.target);

// });
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded");
  run();
});


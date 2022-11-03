const temp1 = (data) => `
  <div class="container">
    <a href="#/">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="#/about">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="/#/products/12/specification/10"><img src="/vite.svg" class="logo" alt="Vite logo" /></a>
    <h1>Hello Vite!</h1>
    <p><strong>${data.greeting}, ${data.name}!</strong></p>
    <div class="card">
      <button id="counter" type="button">Count is ${data.count}</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;


export default temp1;
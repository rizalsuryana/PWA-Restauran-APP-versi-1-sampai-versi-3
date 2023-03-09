/* eslint-disable no-plusplus */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './view/app';
import swRegister from './utils/sw-regist';

console.log('Hello Coders! :)');

const app = new App({
  button: document.querySelector('#smartButton'),
  drawer: document.querySelector('.navigasi'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

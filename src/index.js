import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@webcomponents/custom-elements';
import * as serviceWorker from './serviceWorker';

class searchMask extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

  }

  connectedCallback() {
  	let mountPoint = document.createElement('span');
    this.appendChild(mountPoint);
  	ReactDOM.render(<App />,mountPoint);
  }
  disconnectedCallback() {

  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

customElements.define('search-mask', searchMask);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

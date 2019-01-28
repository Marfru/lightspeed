import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './components/styles/_main.scss'

import App from './components/App';

import cartStore from './stores/CartStore';
import productStore from './stores/ProductStore';

const stores = {
  cartStore,
  productStore
};

// For easier debugging
window._____APP_STATE_____ = cartStore;


ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));

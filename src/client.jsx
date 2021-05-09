import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import configureStore from '@redux/configureStore';

import App from './App';

const store = configureStore(window.PRELOADED_STATE);

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

loadableReady(() => {
  hydrate(app, document.getElementById('root'));
});

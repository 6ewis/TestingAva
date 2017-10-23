import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import inventory from './modules/inventory';
import App from './components/app';
import reducers from './rootReducer';

const store = createStore(
  reducers,
  applyMiddleware()
)

store.dispatch(inventory.actions.getAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

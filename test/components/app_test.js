import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../src/components/app';
import { chocolates } from '../../data/inventory.json';

const mockStore = configureStore();
const initialState = 
  { inventory: {
      products: chocolates
    },
    cart: {
      addedIds:  [],
      quantityByID: {}
    }
};

test('renders without crashing', t => {
  const div = document.createElement('div');
  const store = mockStore(initialState);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

import test from 'ava';
import cart from '../../../src/modules/cart';
import { chocolates } from '../../../data/inventory.json';

const { addToCart, remove, removeAll } = cart.actions;
const { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL_ITEMS } = cart.actionTypes;
const reducer = cart.reducer;

const initialState = {
    addedIds: [0,1,1,1,0,2,3],
    quantityByID: {0: 2, 1: 3, 2: 1, 3: 1}
};

test(ADD_TO_CART, t => {
  const updatedState = {
    addedIds: [0,1,1,1,0,2,3, 42],
    quantityByID: {0: 2, 1: 3, 2: 1, 3: 1, 42: 1}
  };

  t.deepEqual(reducer(initialState, addToCart(42)), updatedState);
});

test(REMOVE_ITEM, t => {
    const updatedState = {
    addedIds: [0,0,2,3],
    quantityByID: {0: 2, 2: 1, 3: 1} 
  };

  t.deepEqual(reducer(initialState, remove(1)), updatedState);
});

test(REMOVE_ALL_ITEMS, t => {
  const updatedState = {
    addedIds: [],
    quantityByID: {}
  };

  t.deepEqual(reducer(initialState, removeAll(42)), updatedState);
});

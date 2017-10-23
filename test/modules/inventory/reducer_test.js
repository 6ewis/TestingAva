import test from 'ava';
import inventory from '../../../src/modules/inventory';
import { chocolates } from '../../../data/inventory.json';

const { getAllProducts } = inventory.actions;
const { RECEIVE_INVENTORY } = inventory.actionTypes;
const reducer = inventory.reducer;

test(RECEIVE_INVENTORY, t => {
  const updatedState = {
    products: chocolates 
  };

  t.deepEqual(reducer(undefined, getAllProducts()), updatedState);
});

import test from 'ava';
import inventory from '../../../src/modules/inventory';
import { chocolates } from '../../../data/inventory.json';

const { getAllProducts } = inventory.actions;
const { RECEIVE_INVENTORY } = inventory.actionTypes;

test('getAllProducts action', t => {
  t.deepEqual(getAllProducts(), {
    type: RECEIVE_INVENTORY,
    products: chocolates
  });
});

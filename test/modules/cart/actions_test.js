import test from 'ava';
import cart from '../../../src/modules/cart';
import { chocolates } from '../../../data/inventory.json';

const { addToCart, remove, removeAll } = cart.actions;
const { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL_ITEMS } = cart.actionTypes;

test('addToCart action', t => {
  const productID = 42;
  t.deepEqual(addToCart(productID), {
    type: ADD_TO_CART,
    productID: productID
  });
});

test('remove action', t => {
  const productID = 42;
  t.deepEqual(remove(productID), {
    type: REMOVE_ITEM,
    productID: productID
  });
});

test('removeAll action', t => {
  t.deepEqual(removeAll(), {
    type: REMOVE_ALL_ITEMS
  });
});

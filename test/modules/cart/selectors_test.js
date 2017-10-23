import test from 'ava';
import cart from '../../../src/modules/cart';
import { chocolates } from '../../../data/inventory.json';

const { getCartProducts, getTotal } = cart.selectors;

const initialState = 
  { inventory: {
      products: chocolates
    },
    cart: {
      addedIds: [2,1,1,1,2],
      quantityByID: {2: 2, 1: 3}
    }
};

test('#getCartProducts', t => {
  const result = [
    {
      "description": "Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.",
      "id": 1,
      "type": "milk",
      "price": 1.50,
       qty: 3,
       total: 4.5
    },
    {
      "description": "Dark chocolate has the most chocolate liquor and the most intense chocolate flavor. Look for bitter, roasted, fruit, earthy, woodsy and/or nutty notes.",
      "id": 2,
      "type": "dark",
      "price": 2.50,
       qty: 2,
       total: 5
    },
 ];

  t.deepEqual(getCartProducts(initialState), result);
});

test('#getTotal', t => {
  const result = 9.5;
  t.deepEqual(getTotal(initialState), result);
});

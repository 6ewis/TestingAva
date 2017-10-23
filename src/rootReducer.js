import { combineReducers } from 'redux';
import inventory from './modules/inventory';
import cart from './modules/cart';

export default combineReducers({
  inventory: inventory.reducer,
  cart: cart.reducer
});

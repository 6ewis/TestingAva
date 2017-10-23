import { chocolates } from '../../../data/inventory.json';
import * as t from './actionTypes';

export const remove = productID => {
  return {
    type: t.REMOVE_ITEM,
    productID: productID
  };
}

export const removeAll = () => {
  return {
    type: t.REMOVE_ALL_ITEMS
  }
}

export const addToCart = productID => {
  return {
    type: t.ADD_TO_CART,
    productID: productID
  };
}

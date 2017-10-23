import { chocolates } from '../../../data/inventory.json';
import * as t from './actionTypes';

export const getAllProducts = () => {
  return {
    type: t.RECEIVE_INVENTORY,
    products: chocolates
  };
}

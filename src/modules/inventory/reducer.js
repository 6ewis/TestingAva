import * as t from './actionTypes';
import R from 'ramda';

const initialState = {
  products: []
};

export default (state = initialState, action) => {
 switch(action.type) {
   case t.RECEIVE_INVENTORY:
     return R.merge(state, {products: action.products});
   default:
     return state;
 }
}

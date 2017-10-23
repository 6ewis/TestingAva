import * as t from './actionTypes';
import R from 'ramda';

const initialState = {
  addedIds: [],
  quantityByID: {}
};

export default (state = initialState, action) => {
 const ID = action.productID;
 switch(action.type) {
   case t.REMOVE_ITEM:
     return  R.evolve({
       addedIds: R.reject( n => n === ID), 
       quantityByID: R.dissoc(ID)
       }, state)
   case t.REMOVE_ALL_ITEMS:
     return initialState;
   case t.ADD_TO_CART:
     return  R.evolve({
       addedIds: R.append(ID), 
       quantityByID: R.assoc( ID, R.inc(state.quantityByID[ID] || 0) )
       }, state)
   default:
     return state;
 }
}

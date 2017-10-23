import R from 'ramda';

export const getCartProducts = (state) => {
  //only select products that have been added to the cart 
  //return those products with their qty
  const { inventory, cart } = state;
  const { products } = inventory;
  const { addedIds, quantityByID } = cart;

  const transformation = (acc, next) => { 

    const ID = R.prop('id')(next);
    const qty = quantityByID[ID];
    const price = next.price;
    const total = parseFloat((qty * price).toFixed(2));
    const newProps = { qty: qty, total: total };

    R.contains(ID, addedIds) ?
      acc.push(R.merge(next, newProps)) :
      null
    return acc
  }

  return R.reduce(transformation, [], products)
};

export const getTotal = (state) => {
  const transformation = (total, next) => total + next.total;
  return R.reduce(transformation, 0, getCartProducts(state));
};

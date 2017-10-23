import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';

const renderButton = isCart =>
  //we show different label depending on whether it's for the cart or the inventory
  isCart ?
  "Remove from Cart" :
  "Add to Cart"

const renderRow = (product, fn, isCart) => 
   <tr key={product.id}>
     <th scope="row">{product.type}</th>
     { isCart ? null : <td>{ product.description }</td>  }
     <td>{product.price}</td>
     { isCart ? <td>{ product.qty }</td> : null }
     <td>
       <Button
         style={{cursor: 'pointer'}}
         color="success" 
         onClick={fn.bind(null, product.id)}>{ renderButton(isCart) }
       </Button>
     </td>
   </tr>;

const Row = ({products, fn, isCart}) =>
    <tbody>
      {
      products ?
      products.map(product => renderRow(product, fn, isCart)) :
      null
      }
    </tbody>;

//should I insert isCart as a proptypes?
Row.propTypes = {
  products: PropTypes.array.isRequired,
  fn: PropTypes.func.isRequired
};

export default Row;

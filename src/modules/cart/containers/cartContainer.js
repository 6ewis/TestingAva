import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { remove, removeAll } from '../actions';
import ViewCart from '../components/viewCart';
import { getCartProducts, getTotal } from '../selectors' ;

const CartContainer = props => 
  <ViewCart {...props} />

const mapStateToProps = (state) => {
  return { 
    products: getCartProducts(state),
    total: getTotal(state)
  };
}

export default connect(
  mapStateToProps,
  { fn: remove, removeAll }
)(CartContainer)

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cart from '../../cart';
import InventoryTable from '../components/inventoryTable';

const InventoryContainer = props =>
  <InventoryTable {...props} />

const mapStateToProps = ({ inventory }) => inventory;

export default connect(
  mapStateToProps,
  { fn: cart.actions.addToCart }
)(InventoryContainer)

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CartModal from './cartModal';

export default (props) => {
  return (
    <div>
      <CartModal buttonLabel="View cart" {...props} />
    </div>
  );
};

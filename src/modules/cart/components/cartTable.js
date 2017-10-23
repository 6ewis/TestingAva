import React from 'react';
import { Table } from 'reactstrap';
import shared from '../../shared';
import R from 'ramda';

const { Row, CategoryRow } = shared;

export default (props) => {
  const newProps = { ...props, ...{ isCart: true } };

  return (
    R.isEmpty(props.products) ?
    <div> There are no items in your cart! </div> :
    <div>
      <Table striped hover>
        <CategoryRow columns={ ['Item', 'Price', 'Qty', ""] } />
        <Row {...newProps} />
      </Table>
      <div> Total: { props.total } </div>
    </div>
  );
};

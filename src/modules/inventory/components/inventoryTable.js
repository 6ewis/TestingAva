import React from 'react';
import { Table } from 'reactstrap';
import shared from '../../shared';

const { Row, CategoryRow } = shared;

export default (props) => {
  return (
    <Table striped hover>
      <CategoryRow columns={['Type', 'Description', 'Price', ""]} />
      <Row {...props}/>
    </Table>
  );
};

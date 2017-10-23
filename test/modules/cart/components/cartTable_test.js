import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import shared from '../../../../src/modules/shared';
import cart from '../../../../src/modules/cart';
import { chocolates } from '../../../../data/inventory.json';

const { CategoryRow, Row } = shared;
const { CartTable } = cart.components;

test('renders CategoryRow and Row', t => {
  const wrapper = shallow( <CartTable /> );
  t.true(wrapper.containsAllMatchingElements([
   <CategoryRow />,
   <Row />
  ]));
});

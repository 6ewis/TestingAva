import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import shared from '../../../../src/modules/shared';
import inventory from '../../../../src/modules/inventory';
import { chocolates } from '../../../../data/inventory.json';

const { CategoryRow, Row } = shared;
const { InventoryTable } = inventory.components;

test('renders CategoryRow and Row', t => {
  const wrapper = shallow( <InventoryTable /> );
  t.true(wrapper.containsAllMatchingElements([
   <CategoryRow />,
   <Row />
  ]));
})

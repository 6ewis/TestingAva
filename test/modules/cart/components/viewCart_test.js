import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import cart from '../../../../src/modules/cart';
import { chocolates } from '../../../../data/inventory.json';
import CartModal from '../../../../src/modules/cart/components/cartModal.js';

const { ViewCart } = cart.components;

test('renders CartModal', t => {
  const wrapper = shallow( <ViewCart /> );
  t.true(wrapper.containsAllMatchingElements([
   <CartModal />
  ]));
});

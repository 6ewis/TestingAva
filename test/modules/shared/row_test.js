import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import shared from '../../../src/modules/shared';
import { chocolates } from '../../../data/inventory.json';

const { Row } = shared;

test('renders zero items', t => {
  const wrapper = shallow(
    <Row />
  );
  t.is(wrapper.find('tr').length, 0);
});

test('renders some items', t => {
  const props = {products: chocolates, fn: () => {}};
  const wrapper = shallow(
    <Row {...props} />
  );
  t.is(wrapper.find('tr').length, 4);
});

test('executes #fn when clicked with its id', t => {
  const fn = sinon.spy();
  const props = {products: chocolates, fn: fn};
  const wrapper = shallow(
    <Row {...props} />
  );

  wrapper.find('Button').first().simulate('click');
  t.true(fn.calledWith(props.products[0].id));
});

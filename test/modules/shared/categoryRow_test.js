import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import shared from '../../../src/modules/shared';

const { CategoryRow } = shared;

test('renders zero items', t => {
  const wrapper = shallow(
    <CategoryRow />
  );
  t.is(wrapper.find('th').length, 0);
});

test('renders undefined items', t => {
  const wrapper = shallow(
    <CategoryRow columns={ undefined }/>
  );
  t.is(wrapper.find('th').length, 0);
});

test('renders some items', t => {
  const items = ['Type', 'Description', 'Price'];
  const wrapper = shallow(
    <CategoryRow columns={items}/>
  );
  t.is(wrapper.find('th').length, 3);
});

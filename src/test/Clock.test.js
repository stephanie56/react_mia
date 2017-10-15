import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../containers/Clock';

it('Clock renders without error', () => {
  const component = shallow(<Clock />);
  expect(component.exists()).toEqual(true);
});

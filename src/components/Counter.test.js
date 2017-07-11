import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

it('Counter renders without error', () => {
  const component = shallow(<Counter />);
  expect(component.exists()).toEqual(true);
});

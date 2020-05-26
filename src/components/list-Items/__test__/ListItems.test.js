import React from 'react';
import { render } from '@testing-library/react';
import { ListItems } from '../ListItems';
test('ListItems', () => {
  const item = { title: 'By Amazon', points:671, comments:678 };
  render(<ListItems item={item} />);
  expect(render()).toMatchSnapshot();
});
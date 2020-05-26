import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';

import {ListContainer} from '../ListContainer';

jest.mock('axios');

test('ListContainer', () => {
    const url = 'https://hn.algolia.com/api/v1/search?page=1'
  const { getByText } = render(<ListContainer/>);

  axiosMock.get.mockResolvedValueOnce({
    response: { data : { hits: [{ title: 'By Amazon', points:671, comments:678 }]}}
  });
  fireEvent.click(getByText('More'));

  expect(axiosMock.get).toHaveBeenCalledTimes(2);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(render()).toMatchSnapshot();
});
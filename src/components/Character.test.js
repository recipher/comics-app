import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';
import Character from './Character';

const CHARACTER = {
  id: 1234,
  name: 'Captain Marvel',
  description: '...',
  image: 'image.jpg',
};

it('should match snapshot', () => {
  const { container } = render(<Character {...CHARACTER} />);

  expect(container).toMatchSnapshot();
});

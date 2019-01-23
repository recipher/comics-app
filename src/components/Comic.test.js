import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render } from 'react-testing-library';
import Comic from './Comic';

const COMIC = {
  id: 1234,
  title: 'Captain Marvel',
  description: '...',
  image: 'image.jpg',
};

it('should match snapshot', () => {
  const { container } = render(<Comic {...COMIC} />);

  expect(container).toMatchSnapshot();
});

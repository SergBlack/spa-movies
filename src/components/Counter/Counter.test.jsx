import React from 'react';
import renderer from 'react-test-renderer';

import Counter from './index';

it('render with props', () => {
  const tree = renderer.create(
    <Counter
      count={42}
      text="Answer to the Ultimate Question of Life, the Universe, and Everything"
    />,
  );
  expect(tree).toMatchSnapshot();
});

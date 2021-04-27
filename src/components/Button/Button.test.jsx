import React from 'react';
import { render } from '@helpers/testUtils';

import Button from './index';

describe('Button', () => {
  test('renders Button snapshot', () => {
    const { asFragment } = render(
      <Button
        type="button"
        text="Text button"
        height="60px"
        width="200px"
        color="red"
        shape="square"
        uppercase
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

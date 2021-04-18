import React from 'react';
import { render } from '@helpers/testUtils';

import FormLayout from './index';

const SomeComponent = () => <div>Some content</div>;

describe('FormLayout', () => {
  test('renders FormLayout snapshot', () => {
    const { asFragment } = render(
      <FormLayout title="FormLayout title">
        <SomeComponent />
      </FormLayout>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render, waitFor } from '@helpers/testUtils';
import userEvent from '@testing-library/user-event';
import MovieForm from './MovieForm';

describe('Add movie', () => {
  describe('with valid inputs', () => {
    test('calls the onSubmit function', async () => {
      const onSubmit = jest.fn();

      const { getByLabelText, getByText, getByRole } = render(<MovieForm onSubmit={onSubmit} />);

      userEvent.type(getByLabelText(/title/i), 'Test movie');
      userEvent.type(getByLabelText(/release date/i), '1990-01-01');
      userEvent.type(getByLabelText(/poster path/i), 'http://test.com');
      userEvent.type(getByLabelText(/overview/i), 'Test movie overview');
      userEvent.click(getByText(/select genre/i));
      userEvent.click(getByText(/action/i));
      userEvent.click(getByText(/adventure/i));
      userEvent.type(getByLabelText(/tagline/i), 'Test movie tagline');
      userEvent.type(getByLabelText(/runtime/i), '180');

      userEvent.click(getByRole('button', { name: /save/i }));

      await waitFor(
        () => expect(onSubmit).toHaveBeenCalledWith({
          title: 'Test movie',
          tagline: 'Test movie tagline',
          release_date: '1990-01-01',
          poster_path: 'http://test.com',
          overview: 'Test movie overview',
          genres: ['Action', 'Adventure'],
          runtime: 180,
        },
        expect.anything()),
      );
    });
  });

  describe('with invalid inputs', () => {
    test('renders the required error', async () => {
      const { getByRole, container } = render(<MovieForm />);

      userEvent.click(getByRole('button', { name: /save/i }));

      await waitFor(() => {
        expect(container.innerHTML).toMatch('Required');
      });
    });

    test('renders the invalid poster url error', async () => {
      const { getByLabelText, getByRole, container } = render(<MovieForm />);

      userEvent.type(getByLabelText(/poster path/i), 'invalid url');

      await userEvent.click(getByRole('button', { name: /save/i }));

      await waitFor(() => {
        expect(container.innerHTML).toMatch('Url must be valid');
      });
    });
  });
});

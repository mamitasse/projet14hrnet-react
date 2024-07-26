import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';

test('renders CreateEmployee component', () => {
  render(
    <MemoryRouter>
      <CreateEmployee />
    </MemoryRouter>
  );
  expect(screen.getByText(/HRnet/i)).toBeInTheDocument();
});

test('validates form input', () => {
  render(
    <MemoryRouter>
      <CreateEmployee />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText(/Save/i));
  expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
});


// src/__tests__/CreateEmployee.test.js
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';
import { renderWithProviders } from '../testUtils'; // Assurez-vous d'importer la bonne fonction utilitaire

// Simulez window.alert pour éviter des erreurs pendant les tests
beforeAll(() => {
  global.alert = jest.fn();
});

test('renders CreateEmployee component', () => {
  renderWithProviders(
    <MemoryRouter>
      <CreateEmployee />
    </MemoryRouter>
  );
  expect(screen.getByText(/HRnet/i)).toBeInTheDocument();
});

test('validates form input', () => {
  renderWithProviders(
    <MemoryRouter>
      <CreateEmployee />
    </MemoryRouter>
  );
  
});

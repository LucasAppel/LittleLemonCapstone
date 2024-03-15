import { fireEvent, render, screen } from '@testing-library/react';
import Main from '../Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchAPI } from 'restaurantAPI'; // Annahme, dass fetchAPI importiert wurde

jest.mock('restaurantAPI', () => ({
  fetchAPI: jest.fn()
}));

describe('Main component', () => {
  beforeEach(() => {
    // @ts-ignore
    fetchAPI.mockResolvedValueOnce(['17:00', '18:00', '19:00']);
  });

  test('times are displayed correctly', async () => {
    render(
      <Router>
        <Main />
      </Router>
    );

    const reserveButton = screen.getByText('Reserve a Table');
    fireEvent.click(reserveButton);

    // Warten, bis die verfügbaren Zeiten angezeigt werden
    await screen.findByText('17:00');

    // Überprüfen, ob die initialen Zeiten korrekt angezeigt werden
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
    // ... und so weiter für die restlichen Zeiten
  });

  // Weitere Tests können hier hinzugefügt werden, um die Funktionalität weiter zu überprüfen
});

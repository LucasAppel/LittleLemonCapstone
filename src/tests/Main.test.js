import { fireEvent, render, screen } from '@testing-library/react';
import Main from '../Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Main component', () => {
  // Finden Sie den Button und klicken Sie darauf
  render(
    <Router>
      <Main />
    </Router>
      );
  const button = screen.getByText('Reserve a Table');
  fireEvent.click(button);


  test('initializeTimes function', () => {
    // Überprüfen Sie, ob die initialen Zeiten korrekt angezeigt werden
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    // ... und so weiter für die restlichen Zeiten
  });

  test('updateTimes function', () => {
    render(
      <Router>
        <Main />
      </Router>
        );

    // Überprüfen Sie, ob die initialen Zeiten korrekt angezeigt werden
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    // ... und so weiter für die restlichen Zeiten

  });
})
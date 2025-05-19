import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);

  const heading  = screen.getByRole('heading', { name: /toast exercise/i});
  expect(heading).toBeInTheDocument();
});

test('renders content section heading', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', { name: /liked form submissions/i });
  expect(sectionHeading).toBeInTheDocument();
});

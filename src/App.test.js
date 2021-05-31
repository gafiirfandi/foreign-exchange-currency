import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Foreign Exchange Currency title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Foreign Exchange Currency/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
  const { getByText } = render(<App/>)
  const linkElement = getByText(/Hello World/i)
  expect(linkElement).toBeInTheDocument()
});

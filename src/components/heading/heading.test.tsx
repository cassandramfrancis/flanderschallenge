import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Heading } from './heading';

/** Really really simple test of a react component */
test('Displays a heading with text', async () => {
  render(<Heading>Test</Heading>);
  await screen.findByRole('heading');
  expect(screen.getByRole('heading')).toHaveTextContent('Test');
})
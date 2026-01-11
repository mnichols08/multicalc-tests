// src/Form.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { OperandProvider } from './context/OperandContext'; 

test('button is disabled if input is empty', async () => {
  const user = userEvent.setup();
  render(
    <OperandProvider>
      <Form />
    </OperandProvider>
  );

  const input = screen.getByLabelText('Calculate with:');
  const button = screen.getByRole('button', { name: 'Submit' });

  await user.clear(input);

  expect(button).toBeDisabled();
});

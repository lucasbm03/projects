import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

describe('testing clicks', () => {
  test('the page should have two inputs e one button', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const buttonEntrar = screen.getByRole('button', { name: 'Entrar' });

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(buttonEntrar).toBeInTheDocument();
  });
});

describe('testing clicks', () => {
  test('validate inputs e disabled button', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const buttonEntrar = screen.getByRole('button', { name: 'Entrar' });

    expect(buttonEntrar).toBeDisabled();
    userEvent.type(inputEmail, 'teste@gmail.com');
    userEvent.type(inputSenha, '123456');
    expect(buttonEntrar).toBeEnabled();

    userEvent.click(buttonEntrar);
    expect(history.location.pathname).toBe('/carteira');
  });
});

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Wallet from '../../pages/Wallet';
import { renderWithRedux } from './renderWith';

const btnAdd = /Adicionar Despesa/i;
const inputDesc = 'description-input';
const Val = 'value-input';
describe('testing page Wallet', () => {
  test('the page should have email, initial value e others inputs', () => {
    const initialState = {
      user: {
        email: 'gabigontijo1@icloud.com',
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE',
        ],
        expenses: [],
        editor: false,
        idToEdit: 0,
        totalSum: 0,
      },
    };

    renderWithRedux(<Wallet />, { initialState });
    const userEmail = screen.getByText('Email:gabigontijo1@icloud.com');
    expect(userEmail).toBeInTheDocument();

    const valueT = screen.getByTestId('total-field');
    expect(valueT).toBeInTheDocument();

    const inputDesacription = screen.getByTestId(inputDesc);
    expect(inputDesacription).toBeInTheDocument();
    expect(inputDesacription).toHaveValue('');

    const inputValue = screen.getByTestId(Val);
    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue('');

    const currency = screen.getByTestId('currency-input');
    expect(currency).toBeInTheDocument();
    expect(currency).toHaveValue('USD');

    const method = screen.getByTestId('method-input');
    expect(method).toBeInTheDocument();
    expect(method).toHaveValue('Dinheiro');

    const tag = screen.getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveValue('Alimentação');

    const btnAdicionarDespesa = screen.getByRole('button', { name: btnAdd });
    expect(btnAdicionarDespesa).toBeInTheDocument();
    expect(btnAdicionarDespesa).toBeEnabled();
  });
});

describe('testing btn Adc despesas', () => {
  test('the btn should send informations for stateGlobal', async () => {
    const initialState = {
      user: {
        email: 'gabigontijo1@gmail.com',
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE',
        ],
        expenses: [],
        editor: false,
        idToEdit: 0,
        totalSum: 0,
      },
    };

    renderWithRedux(<Wallet />, { initialState });

    const inputValue = screen.getByTestId(Val);
    const inputDesacription = screen.getByTestId(inputDesc);
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const btnAdicionarDespesa = screen.getByRole('button', { name: btnAdd });
    const table = screen.getByRole('columnheader', { name: /descrição/i });

    userEvent.type(inputValue, '30');
    userEvent.type(inputDesacription, ['almoço']);
    userEvent.selectOptions(currency, ['CAD']);
    userEvent.selectOptions(method, ['Dinheiro']);
    userEvent.selectOptions(tag, ['Lazer']);
    userEvent.click(btnAdicionarDespesa);
    expect(inputValue).toHaveValue('');
    expect(inputDesacription).toHaveValue('');
    expect(table).toBeInTheDocument();
    const btnExcluir = await screen.findByRole('button', { name: /Excluir/i });
    expect(btnExcluir).toBeInTheDocument();
  });
});

describe('testing table expenses', () => {
  test('table add new expense and edit and update informations', async () => {
    const initialState = {
      user: {
        email: 'gabigontijo1@icloud.com',
      },
      wallet: {
        currencies: [
          'USD',
          'CAD',
          'GBP',
          'ARS',
          'BTC',
          'LTC',
          'EUR',
          'JPY',
          'CHF',
          'AUD',
          'CNY',
          'ILS',
          'ETH',
          'XRP',
          'DOGE',
        ],
        expenses: [],
        editor: false,
        idToEdit: 0,
        totalSum: 0,
      },
    };

    renderWithRedux(<Wallet />, { initialState });

    const inputValue = screen.getByTestId(Val);
    const inputDesacription = screen.getByTestId(inputDesc);
    const btnAdicionarDespesa = screen.getByRole('button', { name: btnAdd });

    userEvent.type(inputValue, '30');
    userEvent.type(inputDesacription, ['almoço']);
    userEvent.click(btnAdicionarDespesa);
    const tdDescription = await screen.findByRole('cell', { name: /30.00/i });
    expect(tdDescription).toBeInTheDocument();
    const btnExcluir = await screen.findByRole('button', { name: /Excluir/i });
    userEvent.click(btnExcluir);
    expect(tdDescription).not.toBeInTheDocument();

    userEvent.type(inputValue, '30');
    userEvent.type(inputDesacription, ['almoço']);
    userEvent.click(btnAdicionarDespesa);
    const btnEdit = await screen.findByRole('button', { name: /Editar/i });
    userEvent.click(btnEdit);
    const btnEditDesp = screen.getByRole('button', { name: /Editar despesa/i });
    expect(btnEditDesp).toBeInTheDocument();

    userEvent.type(inputValue, '20');
    userEvent.type(inputDesacription, ['lanche']);
    userEvent.click(btnEditDesp);
    expect(screen.getByRole('cell', { name: /20.00/i })).toBeInTheDocument();
    expect(btnAdicionarDespesa).toBeInTheDocument();
  });
});

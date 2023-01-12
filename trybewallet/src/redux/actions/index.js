export const LOGIN_CLICK = 'LOGIN_CLICK';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const loginClickAction = (payload) => ({
  type: LOGIN_CLICK,
  payload,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});

export const getCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export function APICurrencies() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      delete result.USDT;
      dispatch(getCurrencies(Object.keys(result)));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
export function APIExpenses(expenses) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const result = await response.json();
      delete result.USDT;
      dispatch(addExpenses({ ...expenses, exchangeRates: result,
      }));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpenseAction = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

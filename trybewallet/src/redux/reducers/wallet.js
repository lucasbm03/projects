import { ADD_CURRENCIES, FAILED_REQUEST,
  ADD_EXPENSES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.expenses }],
    };

  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      errorMessage: action.error,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== +action.id)],
    };
  default:
    return state;
  }
};

export default wallet;

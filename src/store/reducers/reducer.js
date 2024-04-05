// reducers.js

import { ADD_INCOME, ADD_EXPENSE, ADD_CATEGORY, REMOVE_EXPENSE, REMOVE_INCOME } from '../actions/action';

const initialState = {
  incomes: [],
  expenses: [],
  categories: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case REMOVE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter(item => item.income !== action.payload)
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(item => item.expense !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;

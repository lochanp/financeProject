// actions.js

export const ADD_INCOME = 'ADD_INCOME';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_INCOME = 'REMOVE_INCOME';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const addIncome = (income, category) => ({
  type: ADD_INCOME,
  payload: { income, category }
});

export const addExpense = (expense, category) => ({
  type: ADD_EXPENSE,
  payload: { expense, category }
});

export const addCategory = newCategory => ({
  type: ADD_CATEGORY,
  payload: newCategory
});

export const removeIncome = itemId => ({
  type: REMOVE_INCOME,
  payload: itemId
});

export const removeExpense = itemId => ({
  type: REMOVE_EXPENSE,
  payload: itemId
});

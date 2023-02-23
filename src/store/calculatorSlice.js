import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: '0',
    operator: null,
    previousValue: null,
  },
  reducers: {
    inputDigit: (state, action) => {
      const digit = action.payload;
      state.value = state.value === '0' ? digit : state.value + digit;
    },
    inputDecimal: (state) => {
      if (!state.value.includes('.')) {
        state.value += '.';
      }
    },
    deleteNum: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
    },
    reset: (state) => {
      state.value = '0';
      state.operator = null;
      state.previousValue = null;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.previousValue = state.value;
      state.value = '0';
    },
    calculate: (state) => {
      const { operator, previousValue, value } = state;
      const prev = parseFloat(previousValue);
      const current = parseFloat(value);
      if (operator === '+') {
        state.value = (prev + current).toString();
      } else if (operator === '-') {
        state.value = (prev - current).toString();
      } else if (operator === '*') {
        state.value = (prev * current).toString();
      } else if (operator === '/') {
        state.value = (prev / current).toString();
      }
      state.operator = null;
      state.previousValue = null;
    },
  },
});

export const {
  inputDigit,
  inputDecimal,
  deleteNum,
  reset,
  setOperator,
  calculate,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

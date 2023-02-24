import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
});

export default store;

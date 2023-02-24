import { createSlice } from '@reduxjs/toolkit';

const themes = {
  0: 'dark',
  1: 'light',
  2: 'purp',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: themes[0],
  },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = themes[action.payload];
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;

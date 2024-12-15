// src/features/editorSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    tailwindClasses: '',
    theme: 'light', // Initial theme set to light
  },
  reducers: {
    updateTailwindClasses: (state, action) => {
      state.tailwindClasses = action.payload;
    },
    resetClasses: (state) => {
      state.tailwindClasses = '';
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { updateTailwindClasses, resetClasses, toggleTheme } = editorSlice.actions;
export default editorSlice.reducer;

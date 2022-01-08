import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDark: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDark } = themeSlice.actions;
export default themeSlice.reducer;

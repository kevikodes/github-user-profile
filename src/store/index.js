import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    theme: themeReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  direction: "ltr",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleDirection: (state, action) => {
      state.direction = action.payload;
    },
  },
});

export const {
  toggleMode,
  toggleDirection,
} = themeSlice.actions;
export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggle } = displaySlice.actions;
export default displaySlice.reducer;

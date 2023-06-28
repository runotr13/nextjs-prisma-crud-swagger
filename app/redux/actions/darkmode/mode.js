import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "mode",
  initialState: { mode: false },
  reducers: {
    darkMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});
export const { darkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

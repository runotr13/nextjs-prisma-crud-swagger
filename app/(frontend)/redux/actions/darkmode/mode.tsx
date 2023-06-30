// "use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkModeState {
  mode: boolean;
}

const initialState: DarkModeState = { mode: false };

const modeReducer = createSlice({
  name: "mode",
  initialState,
  reducers: {
    darkMode: (state, action: PayloadAction<boolean>) => {
      state.mode = action.payload;
      localStorage.setItem("mode", String(action.payload));
    },
  },
});

export const { darkMode } = modeReducer.actions;
export default modeReducer.reducer;
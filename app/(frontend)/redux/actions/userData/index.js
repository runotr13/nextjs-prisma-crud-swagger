import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userData",
  initialState: { userData: "" },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

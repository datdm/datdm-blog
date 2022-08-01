import { createSlice } from "@reduxjs/toolkit";

export interface App {
  srcSelected: string;
}

export const initialStateApp = {
  srcSelected: "",
};

const appSlice = createSlice({
  name: "app",
  initialState: initialStateApp,
  reducers: {
    setSrcSelected: (state, action) => {
      state.srcSelected = action.payload || "";
    },
  },
});

export const { setSrcSelected } = appSlice.actions;

export default appSlice.reducer;

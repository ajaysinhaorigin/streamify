import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    buttonName: "Home",
  },
  reducers: {
    setButtonName: (state, actions) => {
      state.buttonName = actions.payload;
    },
  },
});

export const { setButtonName } = sidebarSlice.actions;

export default sidebarSlice.reducer;

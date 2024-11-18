import { createSlice } from "@reduxjs/toolkit";

const buttonListSlice = createSlice({
  name: "buttonList",
  initialState: {
    buttonList: [],
  },
  reducers: {
    addButtonList: (state, actions) => {
      state.buttonList = actions.payload;
    },
  },
});

export const { addButtonList } = buttonListSlice.actions;

export default buttonListSlice.reducer;

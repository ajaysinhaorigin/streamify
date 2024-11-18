import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {},
  reducers: {
    cacheSuggestions: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { cacheSuggestions } = suggestionSlice.actions;

export default suggestionSlice.reducer;

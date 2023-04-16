import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const searcResultSlice = createSlice({
  name: "searchResult",
  initialState: { value: [] },
  reducers: {
    setSearchResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchResult } = searcResultSlice.actions;
export default searcResultSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    emailId: null,
    myCart: [],
    orderHistory: [],
    totalCartItems: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state.emailId = action.payload.emailId;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

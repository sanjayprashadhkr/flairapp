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
      state.myCart = action.payload.myCart;
      state.orderHistory = action.payload.orderHistory;
      state.totalCartItems = action.payload.totalCartItems;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

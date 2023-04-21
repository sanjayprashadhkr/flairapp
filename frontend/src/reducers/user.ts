import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    emailId: null,
    myCart: [] as any,
    orderHistory: [],
    totalCartItems: 0,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("set user called");
      state.emailId = action.payload.emailId;
      state.myCart = action.payload.myCart;
      state.orderHistory = action.payload.orderHistory;
      state.totalCartItems = action.payload.totalCartItems;
    },
    updateCart: (state, action) => {
      state.totalCartItems += action.payload.quantity;
      state.myCart.push({
        productid: action.payload.productid,
        quantity: action.payload.quantity,
      });
    },
  },
});

export const { setUser, updateCart } = userSlice.actions;

export default userSlice.reducer;

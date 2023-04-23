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
    removeCartItem: (state, action) => {
      console.log("HELLLLLLLLLLLLO");
      const idToBeRemoved = action.payload.productid;
      console.log("THIS IS THE ID TO BE REMOVED", idToBeRemoved);

      state.myCart = state.myCart.filter((product: any) => {
        console.log("product", product.productid);
        if (product.productid === idToBeRemoved) {
          console.log("product quantity", product.quantity);
          state.totalCartItems -= product.quantity;
        }
        return product.productid !== idToBeRemoved;
      });
    },
  },
});

export const { setUser, updateCart, removeCartItem } = userSlice.actions;

export default userSlice.reducer;

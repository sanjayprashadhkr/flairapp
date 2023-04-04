import { createSlice } from "@reduxjs/toolkit";
import { productdata } from "../data/productdata";

export const productSlice = createSlice({
  name: "product",
  initialState: { value: productdata },
  reducers: {},
});

export default productSlice.reducer;

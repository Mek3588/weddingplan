import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


function convertToNumber(value) {
  return parseFloat(value.replace(/,/g, ""));
}

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast("Already Item in planner");
      } else {
        toast("Item Add successfully");
        const price = convertToNumber(action.payload.price); 
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: price }, 
        ];
      }
    },
    deleteCartItem: (state, action) => {
      toast("One Item Delete");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;

      const price = convertToNumber(state.cartItem[index].price); 
      const total = price * qtyInc;

      state.cartItem[index].qty = qtyInc;
      state.cartItem[index].total = total; 
    },
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty;

        const price = convertToNumber(state.cartItem[index].price); 
        const total = price * qtyDec;

        state.cartItem[index].qty = qtyDec;
        state.cartItem[index].total = total; 
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;

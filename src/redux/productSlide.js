import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  tourList: [],
  cartItem: []
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setDatatour: (state, action) => {
      console.log(action);
      state.tourList = [...action.payload];
    },
    addCartItem: (state, action) => {
      console.log(action);
      const total = action.payload.price;
      state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }];
    },
    deleteCartItem: (state, action) => {
      console.log(action.payload);
      const deletedItem = state.cartItem.find(item => item._id === action.payload);
      toast.success(`${deletedItem.name} has been removed`);
      
      const index = state.cartItem.findIndex(el => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    }
  }
});

export const { setDatatour, addCartItem, deleteCartItem } = tourSlice.actions;
export default tourSlice.reducer;

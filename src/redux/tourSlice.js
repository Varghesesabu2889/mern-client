import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  tourList: [],
  cityItem: []
};

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setDatatour: (state, action) => {
      state.tourList = [...action.payload];
    },
    addcityItem: (state, action) => {
      const total = action.payload.price;
      state.cityItem = [...state.cityItem, { ...action.payload, qty: 1, total: total }];
    },
    deletecityItem: (state, action) => {
      const deletedItem = state.cityItem.find(item => item._id === action.payload);
      toast.success(`${deletedItem.name} has been removed`);
      
      const index = state.cityItem.findIndex(el => el._id === action.payload);
      state.cityItem.splice(index, 1);
    }
  }
});

export const { setDatatour, addcityItem, deletecityItem } = tourSlice.actions;
export default tourSlice.reducer;

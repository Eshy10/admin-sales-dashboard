import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sales } from '../../../types';

interface SalesState {
  sales: Sales[];
}

const initialState: SalesState = {
  sales: [],
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setSales: (state, action: PayloadAction<Sales[]>) => {
      state.sales = action.payload;
    },
  },
});

export const { setSales } = salesSlice.actions;

export const saleseducer = salesSlice.reducer;


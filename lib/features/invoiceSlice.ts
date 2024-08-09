import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInvoiceState {
  drivers: Array<any>;
  trucks: Array<any>;
  page: number;
  dispatch: any
}

const initialState: IInvoiceState = {
  drivers: [],
  trucks: [],
  page: 1,
  dispatch: {}
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setDriverState: (state, action: PayloadAction<Array<any>>) => {
      state.drivers = action.payload;
    },
    setTrucksState: (state, action: PayloadAction<Array<any>>) => {
      state.trucks = action.payload;
    },
    setPageState: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setDispatchState: (state, action: PayloadAction<any>) => {
      state.dispatch = action.payload;
    },
  },
});

export const { setDriverState, setTrucksState, setPageState,setDispatchState } = invoiceSlice.actions;
export const invoiceReducer = invoiceSlice.reducer;
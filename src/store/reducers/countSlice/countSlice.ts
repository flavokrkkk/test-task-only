import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CountState } from "./types";

const initialState = <CountState>{
  count: 1,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: (create) => ({
    setCount: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.count = payload;
    }),
  }),
});

export const countReducer = countSlice.reducer;
export const countActions = countSlice.actions;

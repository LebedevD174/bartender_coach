import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { BarwareType } from './types/barware';

const initialState: BarwareType = {
  barware: [],
  error: undefined,
};

export const loadBarware = createAsyncThunk('barware/loadBarware', () =>
  api.fetchBarwareLoad(),
);

const baraweSlice = createSlice({
  name: 'barware',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBarware.fulfilled, (state, action) => {
        state.barware = action.payload.barware;
      })
      .addCase(loadBarware.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default baraweSlice.reducer;

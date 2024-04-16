import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { TechType } from './types/tech';

const initialState: TechType = {
  techs: [],
  error: undefined,
};

export const loadTech = createAsyncThunk('barware/loadTech', () =>
  api.fetchTechLoad(),
);

const techsSlice = createSlice({
  name: 'techs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTech.fulfilled, (state, action) => {
        state.techs = action.payload.techs;
      })
      .addCase(loadTech.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default techsSlice.reducer;

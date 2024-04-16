import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../../app/api';
import type { FeatureType } from './types/features';

const initialState: FeatureType = {
  features: [],
  error: undefined,
};

export const loadFeatures = createAsyncThunk('features/loadFeatures', () =>
  api.fetchFeaturesLoad(),
);

const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFeatures.fulfilled, (state, action) => {
        state.features = action.payload.features;
      })
      .addCase(loadFeatures.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default featuresSlice.reducer;

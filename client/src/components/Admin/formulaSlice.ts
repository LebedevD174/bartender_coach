import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import type { Formula, FormulaType } from '../Cocktails/types/cocktail';


const initialState: FormulaType = {
    formulas: undefined,
    error: undefined,
};

export const addFormula = createAsyncThunk('formulas/addFormulas', (formulas: Formula[]) =>
  api.fetchFormulaAdd(formulas),
);

const cocktailsSlice = createSlice({
  name: 'formulas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFormula.fulfilled, (state, action) => {
        state.formulas = action.payload.message;
      })
      .addCase(addFormula.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default cocktailsSlice.reducer;

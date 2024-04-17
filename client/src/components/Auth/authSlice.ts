/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// tasks/tasksSlice.ts
import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import type { UserWithoutId, UserAuth, UserType } from './types/User';
import * as api from '../../app/api'

const initialState: UserType = {
    user: undefined,
    error: undefined,
};

export const userReg = createAsyncThunk('sign/registration',(obj:UserWithoutId) => api.fetchRegistration(obj));
export const userLog = createAsyncThunk('sign/authorization',(obj:UserAuth) => api.fetchAuth(obj));
export const userCheck = createAsyncThunk('sign/check',() => api.fetchCheck());
export const userLogout = createAsyncThunk('sign/logout', () => api.fetchLogout())

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
          state.error = undefined;
        },
      },
    extraReducers: (builder) => {
        builder
            .addCase(userReg.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.error = undefined; 
            })
            .addCase(userReg.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(userLog.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(userLog.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(userCheck.fulfilled, (state, action) => {
                state.user = action.payload.user;
            })
            .addCase(userCheck.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.user = undefined;
            })
            .addCase(userLogout.rejected, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export default authSlice.reducer;
export const {clearError} = authSlice.actions
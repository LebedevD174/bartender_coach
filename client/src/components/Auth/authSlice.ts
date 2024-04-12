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

export const userReg = createAsyncThunk('sign/registration',(obj:UserWithoutId) => api.fetchAuth(obj));
// export const userLog = createAsyncThunk('sign/authorization',(obj:UserAuth) => api.fetchRegistration(obj));

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userReg.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(userReg.rejected, (state, action) => {
                state.error = action.error.message;
            })
            // .addCase(userLog.fulfilled, (state, action) => {
            //     state.user = action.payload;
            // })
            // .addCase(userLog.rejected, (state, action) => {
            //     state.error = action.error.message;
            // })
    },
});

export default authSlice.reducer;
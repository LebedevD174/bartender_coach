/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// tasks/tasksSlice.ts
import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import type { Profile, ProfileType, ProfileWithoutID } from './types/Profile';
import * as api from '../../app/api'

const initialState: ProfileType = {
    profile: undefined,
    error: undefined,
};

export const profileUpdate = createAsyncThunk('profile/update',(obj:ProfileWithoutID, id: number)  => api.fetchUpdateProfile(obj, id));

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(profileUpdate.fulfilled, (state, action) => {
                state.profile = action.payload;
            })
            .addCase(profileUpdate.rejected, (state, action) => {
                state.error = action.error.message;
            })
    },
});

export default profileSlice.reducer;
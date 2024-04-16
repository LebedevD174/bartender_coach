/* eslint-disable arrow-body-style */
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

export const profileLoad = createAsyncThunk('profile/load',(id: number)  => api.fetchLoadProfile(id));
export const profileLogout = createAsyncThunk('profile/logout', async () => {return undefined;});
export const profileUpdate = createAsyncThunk(
    'profile/update',
    (data: FormData) => api.fetchUpdateProfile(data)
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(profileLoad.fulfilled, (state, action) => {
                console.log(action.payload);
                state.profile = action.payload.profile;
            })
            .addCase(profileLoad.rejected, (state, action) => {
                console.log(action.payload);
                state.error = action.error.message;
            })
            .addCase(profileUpdate.fulfilled, (state, action) => {
                console.log(action.payload);
                state.profile = action.payload;
            })
            .addCase(profileUpdate.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(profileLogout.fulfilled, (state) => {
                state.profile = undefined; 
              });
    },
});

export default profileSlice.reducer;
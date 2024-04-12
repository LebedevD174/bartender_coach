
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import * as api from '../../app/api';
// import { CocktailType } from './types/cocktail';

// const initialState: CocktailType = {
//   cocktails: [],
//   error: undefined,
// };

// export const loadTasks = createAsyncThunk('tasks/loadTasks', () => api.fetchTasks());
// export const addTasks = createAsyncThunk('tasks/addTasks', (task: Task) =>
//   api.fetchAddDanyaTask(task),
// );

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // показываем как меняется state если загрузка прошла успешно
//       .addCase(loadTasks.fulfilled, (state, action) => {
//         // здесь можно мутировать state
//         // RTK создаст копию state автоматически
//         state.tasks = action.payload;
//       })
//       .addCase(loadTasks.rejected, (state, action) => {
//         // показываем как меняется state если загрузка не прошла
//         state.error = action.error.message;
//       })
//       .addCase(loadTasks.pending, (state, action) => {
//         // показываем как меняется state если загрузка не прошла
//         /// / loader
//       })
//       .addCase(addTasks.fulfilled, (state, action) => {
//         state.tasks.push(action.payload);
//       });
//   },
// });

// export default tasksSlice.reducer;

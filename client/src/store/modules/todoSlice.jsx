import { createSlice } from '@reduxjs/toolkit';
import { delTodos, getTodos, postTodos, putTodos } from './getAsync';

const initialState = {
    todos: [],
    loading: true,
    error: null,
};
let no = initialState.todos.length + 1;
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                state.loading = true;
                state.todos = [];
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(delTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.filter((todo) => todo._id !== action.payload);
            })
            .addCase(putTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = state.todos.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                );
            })
            .addCase(postTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.unshift(action.payload);
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch todos';
            });
    },
});
export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

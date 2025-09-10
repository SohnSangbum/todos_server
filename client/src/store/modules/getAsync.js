import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `http://localhost:8000`;
//조회

export const getTodos = createAsyncThunk('todos/getTodos', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//삭제
export const delTodos = createAsyncThunk('todos/delTodos', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${API_URL}/todos/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const postTodos = createAsyncThunk('todos/postTodos', async (text, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { text, isChk: false });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//수정
export const putTodos = createAsyncThunk('todos/putTodos', async (obj, { rejectWithValue }) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${obj._id}`, obj);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

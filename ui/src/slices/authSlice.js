import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, getCurrentUser } from '../api/authAPI';
import { fetchMyOrders } from './orderSlice';

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
  const response = await login(credentials);
  const data = response.data;
  localStorage.setItem('token', data.token);
  return data;
});

export const fetchMe = createAsyncThunk('auth/me', async (_, { getState }) => {
  const response = await getCurrentUser();
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    orders: [],
    status: 'idle', // Add a status field for loading state
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.orders = [];
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'; // Set loading state while login is pending
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'succeeded'; // Set succeeded state after successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed'; // Set failed state if login is rejected
      })
      .addCase(fetchMe.pending, (state) => {
        state.status = 'loading'; // Set loading state while fetching user details
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded'; // Set succeeded state after fetching user details
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed'; // Set failed state if fetching user details is rejected
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.orders = action.payload.data;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

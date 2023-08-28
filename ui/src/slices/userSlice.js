// slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUser as createUserAPI,
  getUserList as getAllUsersAPI,
  getUserById as getUserByIdAPI,
  updateUser as updateUserAPI,
} from '../api/usersAPI';

// Async thunks
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const data = await getAllUsersAPI();
  return data;
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId) => {
  const data = await getUserByIdAPI(userId);
  return data;
});

export const createNewUser = createAsyncThunk('users/createUser', async (newUser) => {
  const data = await createUserAPI(newUser);
  return data;
});

export const editUser = createAsyncThunk('users/editUser', async ({ id, updatedData }) => {
  const data = await updateUserAPI(id, updatedData);
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    selectedUser: null, // To store details of a single user when fetched by ID
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.data.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
  }
});

export default userSlice.reducer;

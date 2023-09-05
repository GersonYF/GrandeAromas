// slices/subscriptionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createSubscription as createSubscriptionAPI,
  getAllSubscriptions as getAllSubscriptionsAPI,
  getSubscriptionById as getSubscriptionByIdAPI,
  updateSubscription as updateSubscriptionAPI,
  deleteSubscription as deleteSubscriptionAPI,
} from '../api/subscriptionAPI';

// Async thunks
export const fetchSubscriptions = createAsyncThunk('subscriptions/fetchSubscriptions', async () => {
  const data = await getAllSubscriptionsAPI();
  return data;
});

export const fetchSubscriptionById = createAsyncThunk('subscriptions/fetchSubscriptionById', async (subscriptionId) => {
  const data = await getSubscriptionByIdAPI(subscriptionId);
  return data;
});

export const createNewSubscription = createAsyncThunk('subscriptions/createSubscription', async (newSubscription) => {
  const data = await createSubscriptionAPI(newSubscription);
  return data;
});

export const editSubscription = createAsyncThunk('subscriptions/editSubscription', async ({ id, updatedData }) => {
  const data = await updateSubscriptionAPI(id, updatedData);
  return data;
});

export const removeSubscription = createAsyncThunk('subscriptions/removeSubscription', async (subscriptionId) => {
  await deleteSubscriptionAPI(subscriptionId);
  return subscriptionId;
});

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    data: [],
    selectedSubscription: null, // To store details of a single subscription when fetched by ID
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSubscriptionById.fulfilled, (state, action) => {
        state.selectedSubscription = action.payload;
      })
      .addCase(createNewSubscription.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editSubscription.fulfilled, (state, action) => {
        const index = state.data.findIndex(sub => sub.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeSubscription.fulfilled, (state, action) => {
        state.data = state.data.filter(sub => sub.id !== action.payload);
      });
  }
});

export default subscriptionSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProductSubscription as createProductSubscriptionAPI,
  getAllProductSubscriptions as getAllProductSubscriptionsAPI,
  deleteProductSubscription as deleteProductSubscriptionAPI,
} from '../api/productSubscriptionAPI';

// Async thunks
export const fetchProductSubscriptions = createAsyncThunk('productSubscriptions/fetchProductSubscriptions', async () => {
  const data = await getAllProductSubscriptionsAPI();
  return data;
});

export const createNewProductSubscription = createAsyncThunk('productSubscriptions/createProductSubscription', async (newSubscription) => {
  const data = await createProductSubscriptionAPI(newSubscription);
  return data;
});

export const removeProductSubscription = createAsyncThunk('productSubscriptions/removeProductSubscription', async (subscriptionId) => {
  await deleteProductSubscriptionAPI(subscriptionId);
  return subscriptionId;
});

const productSubscriptionSlice = createSlice({
  name: 'productSubscriptions',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSubscriptions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductSubscriptions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductSubscriptions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewProductSubscription.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(removeProductSubscription.fulfilled, (state, action) => {
        state.data = state.data.filter(subscription => subscription.id !== action.payload);
      });
  }
});

export default productSubscriptionSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProductOrder as createProductOrderAPI,
  getAllProductOrders as getAllProductOrdersAPI,
  getProductOrderById as getProductOrderByIdAPI,
  updateProductOrder as updateProductOrderAPI,
  deleteProductOrder as deleteProductOrderAPI,
} from '../api/productOrderAPI';

// Async thunks
export const fetchProductOrders = createAsyncThunk('productOrders/fetchProductOrders', async () => {
  const data = await getAllProductOrdersAPI();
  return data;
});

export const fetchProductOrderById = createAsyncThunk('productOrders/fetchProductOrderById', async (orderId) => {
  const data = await getProductOrderByIdAPI(orderId);
  return data;
});

export const createNewProductOrder = createAsyncThunk('productOrders/createProductOrder', async (newOrder) => {
  const data = await createProductOrderAPI(newOrder);
  return data;
});

export const editProductOrder = createAsyncThunk('productOrders/editProductOrder', async ({ id, updatedData }) => {
  const data = await updateProductOrderAPI(id, updatedData);
  return data;
});

export const removeProductOrder = createAsyncThunk('productOrders/removeProductOrder', async (orderId) => {
  await deleteProductOrderAPI(orderId);
  return orderId;
});

const productOrderSlice = createSlice({
  name: 'productOrders',
  initialState: {
    data: [],
    selectedOrder: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductOrderById.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
      })
      .addCase(createNewProductOrder.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editProductOrder.fulfilled, (state, action) => {
        const index = state.data.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeProductOrder.fulfilled, (state, action) => {
        state.data = state.data.filter(order => order.id !== action.payload);
      });
  }
});

export default productOrderSlice.reducer;

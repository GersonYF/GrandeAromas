import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createOrder as createOrderAPI,
  getAllOrders as getAllOrdersAPI,
  getOrderById as getOrderByIdAPI,
  updateOrder as updateOrderAPI,
  deleteOrder as deleteOrderAPI,
} from '../api/ordersAPI';

// Async thunks
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const data = await getAllOrdersAPI();
  return data;
});

export const fetchOrderById = createAsyncThunk('orders/fetchOrderById', async (orderId) => {
  const data = await getOrderByIdAPI(orderId);
  return data;
});

export const createNewOrder = createAsyncThunk('orders/createOrder', async (newOrder) => {
  const data = await createOrderAPI(newOrder);
  return data;
});

export const editOrder = createAsyncThunk('orders/editOrder', async ({ id, updatedData }) => {
  const data = await updateOrderAPI(id, updatedData);
  return data;
});

export const removeOrder = createAsyncThunk('orders/removeOrder', async (orderId) => {
  await deleteOrderAPI(orderId);
  return orderId;
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    data: [],
    selectedOrder: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.data.push(action.payload.data);
        state.selectedOrder = action.payload.data;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        const index = state.data.findIndex(order => order.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeOrder.fulfilled, (state, action) => {
        state.data = state.data.filter(order => order.id !== action.payload);
      });
  }
});

export default orderSlice.reducer;

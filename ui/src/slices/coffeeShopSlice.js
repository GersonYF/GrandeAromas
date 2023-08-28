import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createCoffeeShop as createCoffeeShopAPI,
  getAllCoffeeShops as getAllCoffeeShopsAPI,
  getCoffeeShopById as getCoffeeShopByIdAPI,
  updateCoffeeShop as updateCoffeeShopAPI,
  deleteCoffeeShop as deleteCoffeeShopAPI,
} from '../api/coffeeShopAPI';

// Async thunks
export const fetchCoffeeShops = createAsyncThunk('coffeeShops/fetchCoffeeShops', async () => {
  const data = await getAllCoffeeShopsAPI();
  return data;
});

export const fetchCoffeeShopById = createAsyncThunk('coffeeShops/fetchCoffeeShopById', async (shopId) => {
  const data = await getCoffeeShopByIdAPI(shopId);
  return data;
});

export const createNewCoffeeShop = createAsyncThunk('coffeeShops/createCoffeeShop', async (newShop) => {
  const data = await createCoffeeShopAPI(newShop);
  return data;
});

export const editCoffeeShop = createAsyncThunk('coffeeShops/editCoffeeShop', async ({ id, updatedData }) => {
  const data = await updateCoffeeShopAPI(id, updatedData);
  return data;
});

export const removeCoffeeShop = createAsyncThunk('coffeeShops/removeCoffeeShop', async (shopId) => {
  await deleteCoffeeShopAPI(shopId);
  return shopId;
});

const coffeeShopSlice = createSlice({
  name: 'coffeeShops',
  initialState: {
    data: [],
    selectedCoffeeShop: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeShops.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoffeeShops.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCoffeeShops.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCoffeeShopById.fulfilled, (state, action) => {
        state.selectedCoffeeShop = action.payload;
      })
      .addCase(createNewCoffeeShop.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editCoffeeShop.fulfilled, (state, action) => {
        const index = state.data.findIndex(shop => shop.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeCoffeeShop.fulfilled, (state, action) => {
        state.data = state.data.filter(shop => shop.id !== action.payload);
      });
  }
});

export default coffeeShopSlice.reducer;

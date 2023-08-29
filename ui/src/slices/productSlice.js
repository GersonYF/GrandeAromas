import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProduct as createProductAPI,
  getAllProducts as getAllProductsAPI,
  getProductById as getProductByIdAPI,
  updateProduct as updateProductAPI,
  deleteProduct as deleteProductAPI,
} from '../api/productAPI';

// Async thunks
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await getAllProductsAPI();
  return data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
  const data = await getProductByIdAPI(productId);
  return data;
});

export const createNewProduct = createAsyncThunk('products/createProduct', async (newProduct) => {
  const data = await createProductAPI(newProduct);
  return data;
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, updatedData }) => {
  const data = await updateProductAPI(id, updatedData);
  return data;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (productId) => {
  await deleteProductAPI(productId);
  return productId;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    selectedProduct: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action?.payload?.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.data = state.data.filter(product => product.id !== action.payload);
      });
  }
});

export default productSlice.reducer;

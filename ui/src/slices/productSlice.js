import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProduct as createProductAPI,
  getAllProducts as getAllProductsAPI,
  getProductById as getProductByIdAPI,
  updateProduct as updateProductAPI,
  deleteProduct as deleteProductAPI,
} from '../api/productAPI';

import { getProductReviewsByProductIdAPI } from '../api/productAPI';

export const fetchProductReviewsByProductId = createAsyncThunk(
  'products/fetchProductReviewsByProductId',
  async (productId) => {
    const data = await getProductReviewsByProductIdAPI(productId);
    return data;
  }
);

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
    reviews: [],
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
        console.log("action", action.payload)
        state.selectedProduct = action.payload.data;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.data.push(action.payload.data);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload.data;
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.data = state.data.filter(product => product.id !== action.payload);
      })
      .addCase(fetchProductReviewsByProductId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductReviewsByProductId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload.data;  // update the reviews in the state
      })
      .addCase(fetchProductReviewsByProductId.rejected, (state, action) => {
        state.status = 'failed';
        state.reviews = []
        state.error = action.error.message;
      })
  }
});

export default productSlice.reducer;

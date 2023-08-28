import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProductCategory as createProductCategoryAPI,
  getAllProductCategories as getAllProductCategoriesAPI,
  getProductCategoryById as getProductCategoryByIdAPI,
  updateProductCategory as updateProductCategoryAPI,
  deleteProductCategory as deleteProductCategoryAPI,
} from '../api/productCategoryAPI';

// Async thunks
export const fetchProductCategories = createAsyncThunk('productCategories/fetchProductCategories', async () => {
  const data = await getAllProductCategoriesAPI();
  return data;
});

export const fetchProductCategoryById = createAsyncThunk('productCategories/fetchProductCategoryById', async (categoryId) => {
  const data = await getProductCategoryByIdAPI(categoryId);
  return data;
});

export const createNewProductCategory = createAsyncThunk('productCategories/createProductCategory', async (newCategory) => {
  const data = await createProductCategoryAPI(newCategory);
  return data;
});

export const editProductCategory = createAsyncThunk('productCategories/editProductCategory', async ({ id, updatedData }) => {
  const data = await updateProductCategoryAPI(id, updatedData);
  return data;
});

export const removeProductCategory = createAsyncThunk('productCategories/removeProductCategory', async (categoryId) => {
  await deleteProductCategoryAPI(categoryId);
  return categoryId;
});

const productCategorySlice = createSlice({
  name: 'productCategories',
  initialState: {
    data: [],
    selectedCategory: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductCategoryById.fulfilled, (state, action) => {
        state.selectedCategory = action.payload;
      })
      .addCase(createNewProductCategory.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editProductCategory.fulfilled, (state, action) => {
        const index = state.data.findIndex(cat => cat.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeProductCategory.fulfilled, (state, action) => {
        state.data = state.data.filter(cat => cat.id !== action.payload);
      });
  }
});

export default productCategorySlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProductReview as createProductReviewAPI,
  getAllProductReviews as getAllProductReviewsAPI,
  getProductReviewById as getProductReviewByIdAPI,
  updateProductReview as updateProductReviewAPI,
  deleteProductReview as deleteProductReviewAPI,
} from '../api/productReviewsAPI';

// Async thunks
export const fetchProductReviews = createAsyncThunk('productReviews/fetchProductReviews', async () => {
  const data = await getAllProductReviewsAPI();
  return data;
});

export const fetchProductReviewById = createAsyncThunk('productReviews/fetchProductReviewById', async (reviewId) => {
  const data = await getProductReviewByIdAPI(reviewId);
  return data;
});

export const createNewProductReview = createAsyncThunk('productReviews/createProductReview', async (newReview) => {
  const data = await createProductReviewAPI(newReview);
  return data;
});

export const editProductReview = createAsyncThunk('productReviews/editProductReview', async ({ id, updatedData }) => {
  const data = await updateProductReviewAPI(id, updatedData);
  return data;
});

export const removeProductReview = createAsyncThunk('productReviews/removeProductReview', async (reviewId) => {
  await deleteProductReviewAPI(reviewId);
  return reviewId;
});

const productReviewSlice = createSlice({
  name: 'productReviews',
  initialState: {
    data: [],
    selectedReview: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductReviewById.fulfilled, (state, action) => {
        state.selectedReview = action.payload;
      })
      .addCase(createNewProductReview.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editProductReview.fulfilled, (state, action) => {
        const index = state.data.findIndex(review => review.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeProductReview.fulfilled, (state, action) => {
        state.data = state.data.filter(review => review.id !== action.payload);
      });
  }
});

export default productReviewSlice.reducer;

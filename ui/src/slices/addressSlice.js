// slices/addressSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createAddress as createAddressAPI,
  getAllAddresses,
  getAddressById as getAddressByIdAPI,  // Make sure to have this in your API
  updateAddress as updateAddressAPI,
  deleteAddress as deleteAddressAPI,
} from '../api/addressAPI'; // Adjust the path based on your folder structure

// Async thunks
export const fetchAddresses = createAsyncThunk('addresses/fetchAddresses', async () => {
  const data = await getAllAddresses();
  return data;
});

export const fetchAddressById = createAsyncThunk('addresses/fetchAddressById', async (addressId) => {
  const data = await getAddressByIdAPI(addressId);
  return data;
});

// Async thunks
export const createNewAddress = createAsyncThunk('addresses/createAddress', async (newAddress) => {
  const data = await createAddressAPI(newAddress);
  return data;
});

export const editAddress = createAsyncThunk('addresses/editAddress', async ({ id, updatedData }) => {
  const data = await updateAddressAPI(id, updatedData);
  return data;
});

export const removeAddress = createAsyncThunk('addresses/removeAddress', async (addressId) => {
  await deleteAddressAPI(addressId);
  return addressId;
});

const addressSlice = createSlice({
  name: 'addresses',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    selectedAddress: null // For holding the details of a selected address
  },
  reducers: {
    clearSelectedAddress: (state) => {
      state.selectedAddress = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createNewAddress.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        const index = state.data.findIndex(address => address.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.data = state.data.filter(address => address.id !== action.payload);
      })
      .addCase(fetchAddressById.fulfilled, (state, action) => {
        state.selectedAddress = action.payload;
      });
    },
});

export const { clearSelectedAddress } = addressSlice.actions;
export default addressSlice.reducer;

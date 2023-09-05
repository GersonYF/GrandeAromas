import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // { id: productId, quantity: x }
    shippingAddress: null,  // Temporary address storage
    paymentAddress: null,  // Temporary address storage
    status: 'idle',
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.product;
      const quantityToAdd = action.payload.quantityToAdd || 1;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.items.push({...product, quantity: quantityToAdd});
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setPaymentAddress: (state, action) => {
      state.paymentAddress = action.payload;
    },
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setShippingAddress, setPaymentAddress } = cartSlice.actions;

export default cartSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import authSlice from './authSlice'
import addressSlice from './addressSlice'
import orderSlice from './orderSlice'
import productSlice from './productSlice'
import coffeeShopSlice from './coffeeShopSlice'
import productCategorySlice from './productCategorySlice'
import productOrderSlice from './productOrderSlice'
import productReviewSlice from './productReviewSlice'
import productSubscriptionSlice from './productSubscriptionSlice'
import subscriptionSlice from './subscriptionSlice'

export default configureStore({
  reducer: {
    users: userSlice,
    auth: authSlice,
    addresses: addressSlice,
    orders: orderSlice,
    products: productSlice,
    coffeeShops: coffeeShopSlice,
    productCategories: productCategorySlice,
    productOrders: productOrderSlice,
    productReviews: productReviewSlice,
    productsSubscriptions: productSubscriptionSlice,
    subscriptions: subscriptionSlice,
  }
})
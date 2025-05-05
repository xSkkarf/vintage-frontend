import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./categories/categoriesSlice"
import productsSlice from "./products/productsSlice"
import cartSlice from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    categoriesSlice,
    productsSlice,
    cartSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
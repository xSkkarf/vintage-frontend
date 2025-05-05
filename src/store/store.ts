import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items", "count"],
};

const rootReducer = combineReducers({
  categoriesSlice,
  productsSlice,
  cartSlice: persistReducer(cartPersistConfig, cartSlice),
});

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import authorReducer from "../slices/authorSlice";
import categoryReducer from "../slices/categorySlice"
import sourceReducer from "../slices/sourceSlice"
import mangaReducer from "../slices/mangaSlice"
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  authors: authorReducer,
  categories: categoryReducer,
  sources: sourceReducer,
  mangas: mangaReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const storeRedux = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default storeRedux;

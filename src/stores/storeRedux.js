import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import authorReducer from "../slices/authorSlice";
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

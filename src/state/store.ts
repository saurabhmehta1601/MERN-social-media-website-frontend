/* 
 Reference on how to setup redux persist with redux toolkit :
 https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
*/
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import displayReducer from "./features/displaySlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  display: displayReducer,
});

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
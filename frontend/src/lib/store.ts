// src/lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './features/photos/photosSlice'; // Ensure correct import

export const makeStore = () => {
  return configureStore({
    reducer: {
      photos: photosReducer, // Ensure correct reducer usage
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

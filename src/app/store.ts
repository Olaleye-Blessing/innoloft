import { configureStore } from '@reduxjs/toolkit'
import configReducer from '@/app/slices/config'

export const store = configureStore({
  reducer: {
    config: configReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch

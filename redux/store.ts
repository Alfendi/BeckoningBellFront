import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from "./services/apiSlice"
import authReducer from "./features/authSlice"

// Configures store. If we have node environment set to production, then we're not going to show the devTools. Otherwise, we will not show it for safety.
export const makeStore = () =>
    configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer // Access different states.
        },
        middleware: getDefaultMiddleware => // Needed for RTK Query to work.
            getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    })

// This is for TS.
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
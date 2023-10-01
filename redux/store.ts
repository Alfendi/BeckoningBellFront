import { configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./services/apiSlice"
import authReducer from "./features/authSlice"

// Configures store. If we have node environment set to production, then we're not going to show the devTools. Otherwise, we will not show it for safety.
export const store =
    configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer // Access different states.
        },
        middleware: getDefaultMiddleware => // Needed for RTK Query to work.
            getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production'
        // devTools: true
})

// This is for TS.
export type RootState = ReturnType<(typeof store)['getState']>
export type AppDispatch = (typeof store)['dispatch']
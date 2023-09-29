import { createSlice } from '@reduxjs/toolkit'

interface AuthState{
    isAuthenticated: boolean,
    isLoading: boolean
}


// Two global states.
const initialState = {
    isAuthenticated: false, // False by default. Use to see whether a user is logged in or not, showing different things on a page depending on the state. 
    isLoading: true, // Initial state of app, used in conjunction with verify endpoint. "Do we have a valid access token in the cookies?"
} as AuthState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuthenticated = true // We can directly access isAuthenticated's state with Redux Toolkit. Mutate current state directly.
        },
        logout: state => {
            state.isAuthenticated = false
        },
        finishInitialLoad: state => {
            state.isLoading = false // Dispatch once verify is complete, flipping the state to false.
        }
    }
})

export const {setAuth, logout, finishInitialLoad } = authSlice.actions
export default authSlice.reducer
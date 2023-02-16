import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action) => {
            return action.payload;
        },
        authLogout: (state) => {
            return initialState
        }
    }
})

// Action creators are generated for each case reducer function
export const { authLogin, authLogout } = authSlice.actions

export default authSlice.reducer

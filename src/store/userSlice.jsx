import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    _id: "",
    name: "",
    email: "",
    role: "",
    token: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id
            state.name = action.payload.name
            state.email = action.payload.email
            state.role = action.payload.role
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        logout: (state, action) => {
            state._id = ""
            state.name = ""
            state.email = ""
            state.role = ""
            state.token = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken, logout } = userSlice.actions

export default userSlice.reducer
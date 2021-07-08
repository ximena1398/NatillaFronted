import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    seller: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEthnicitys(state, { payload }) {
            state.ethnicitys = payload
        }
    }
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer

export { userActions, userReducer }
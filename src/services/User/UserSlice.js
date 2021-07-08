import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Campañas: [],
    seller: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCampañas(state, { payload }) {
            state.Campañas = payload
        },
        getCampañas() {

        }
    }
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer

export { userActions, userReducer }
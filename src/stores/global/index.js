import {createSlice} from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        address: '',
        userAccount: '',
        whiteListCheck: false
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setUserAccount: (state, action) => {
            state.userAccount = action.payload
        },
        setWhiteListCheck: (state, action) => {
            state.whiteListCheck = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setAddress, setUserAccount, setWhiteListCheck} = globalSlice.actions

export default globalSlice.reducer
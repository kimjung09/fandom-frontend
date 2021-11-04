import {createSlice} from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        address: '',
        userAccount:''
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setUserAccount: (state, action) => {
            state.userAccount = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setAddress,setUserAccount} = globalSlice.actions

export default globalSlice.reducer
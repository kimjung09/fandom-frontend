import {createSlice} from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        address: ''
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {setAddress} = globalSlice.actions

export default globalSlice.reducer
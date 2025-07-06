import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    changeValue(state, action) {
        state.value = action.payload
    }
  },
})


export const {changeValue } = filterSlice.actions

export default filterSlice.reducer
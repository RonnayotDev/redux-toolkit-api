import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const attractionSlice = createSlice({
  name: 'attraction',
  initialState,
  reducers: {
    setAttractonID: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAttractonID } = attractionSlice.actions

export default attractionSlice.reducer
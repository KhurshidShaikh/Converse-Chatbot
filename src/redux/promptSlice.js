import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const promptSlice = createSlice({
  name: 'prompt',
  initialState,
  reducers: {
    updatePrompt: (state, action) => {
      state.value = action.payload
    },
   
  },
})


export const { updatePrompt} = promptSlice.actions

export default promptSlice.reducer
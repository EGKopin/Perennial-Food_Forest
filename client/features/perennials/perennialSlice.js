import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  perennials: [],
  isError: false,
  isSuccess: false,
  isLoading: false, //for showing a spinner or something
  message: ''
}

export const perennialSlice = createSlice({
  name: 'perennials',
  initialState,
  reducers: {
    reset: (state) => initialState //this is because if we have different users we don't want anything to persist
  },
  extraReducers: () => {}
})

export const { reset } = perennialSlice.actions
export default perennialSlice.reducer
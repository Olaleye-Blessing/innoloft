import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '@/configs'
import { RootState } from '../store'
import { Product } from '@/interfaces/Product'

interface ProductState {
  status: 'idle' | 'loading' | 'failed'
  error: string | undefined
  data: Product | null
}

const initialState: ProductState = {
  status: 'loading',
  error: undefined,
  data: null,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = 'idle'
      state.data = action.payload
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Product>(`${BASE_URL}/product/6781/`)
      return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const selectConfig = (state: RootState) => state.product

export default productSlice.reducer

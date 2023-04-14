import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { APP_ID, BASE_URL } from '@/configs'
import { RootState } from '../store'

type Config = {
  id: number
  logo: string
  mainColor: string
  hasUserSection: boolean
}

interface ConfigState {
  status: 'idle' | 'loading' | 'failed'
  error: string | undefined
  data: Config | null
}

const initialState: ConfigState = {
  status: 'loading',
  error: undefined,
  data: null,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfig.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchConfig.fulfilled, (state, action) => {
      state.status = 'idle'
      state.data = action.payload
    })
    builder.addCase(fetchConfig.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

export const fetchConfig = createAsyncThunk(
  'config/fetchConfig',
  async (_payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/configuration/${APP_ID}/`)
      return data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const selectConfig = (state: RootState) => state.config.data

export default configSlice.reducer

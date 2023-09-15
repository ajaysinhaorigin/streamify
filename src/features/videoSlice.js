import { createSlice } from '@reduxjs/toolkit'

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    loading: true,
    error: {
      show: false,
      msg: '',
    },
  },
  reducers: {
    setVideos: (state, actions) => {
      state.videos = actions.payload
      state.loading = false
      state.error.show = false
      state.error.msg = ''
    },
    setLoading: (state) => {
      state.loading = true
    },
    setError: (state, actions) => {
      state.error.show = true
      state.error.msg = actions.payload
      state.loading = false
    },
  },
})

export const { setVideos, setLoading, setError } = videoSlice.actions

export default videoSlice.reducer

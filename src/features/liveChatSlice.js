import { createSlice } from '@reduxjs/toolkit'
import { LIVE_MESSAGE_QUANTITY } from '../common/helperFunctions'

const liveChatSlice = createSlice({
  name: 'liveChat',
  initialState: {
    liveChat: [],
  },
  reducers: {
    addLiveMessage: (state, actions) => {
      state.liveChat.splice(LIVE_MESSAGE_QUANTITY, 1)
      state.liveChat.unshift(actions.payload)
    },
  },
})

export const { addLiveMessage } = liveChatSlice.actions

export default liveChatSlice.reducer

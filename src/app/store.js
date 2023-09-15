import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/appSlice'
import suggestionSlice from '../features/suggestionSlice'
import liveChatSlice from '../features/liveChatSlice'
import videoSlice from '../features/videoSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    suggestions: suggestionSlice,
    liveChat: liveChatSlice,
  },
})
export default store

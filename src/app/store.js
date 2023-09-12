import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/appSlice'
import suggestionSlice from '../features/suggestionSlice'
import liveChatSlice from '../features/liveChatSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    suggestions: suggestionSlice,
    liveChat: liveChatSlice,
  },
})
export default store

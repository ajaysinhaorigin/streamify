import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/appSlice'
import suggestionSlice from '../features/suggestionSlice'
import liveChatSlice from '../features/liveChatSlice'
import videoSlice from '../features/videoSlice'
import buttonListSlice from '../features/buttonListSlice'
import sidebarSlice from '../features/sidebarSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    suggestions: suggestionSlice,
    liveChat: liveChatSlice,
    buttonList: buttonListSlice,
    sidebar: sidebarSlice,
  },
})
export default store

import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../features/appSlice'
import suggestionSlice from '../features/suggestionSlice'

const store = configureStore({
  reducer: {
    app: appSlice,
    suggestions: suggestionSlice,
  },
})
export default store

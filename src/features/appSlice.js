import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOn: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOn = !state.isMenuOn
    },
    closeMenu: (state) => {
      state.isMenuOn = false
    },
    openMenu: (state) => {
      state.isMenuOn = true
    },
  },
})

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions

export default appSlice.reducer

/*
 * @Author: your name
 * @Date: 2021-08-17 19:41:44
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 20:05:04
 * @FilePath: /react-vblog/src/store/index.ts
 */
import { configureStore } from '@reduxjs/toolkit'
import user from './reducer/user';
// ...

export const store = configureStore({
  reducer: {
		user
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
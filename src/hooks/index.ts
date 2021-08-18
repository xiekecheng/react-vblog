/*
 * @Author: your name
 * @Date: 2021-08-17 19:44:03
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 19:44:33
 * @FilePath: /react-vblog/src/hooks/hooks.ts
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
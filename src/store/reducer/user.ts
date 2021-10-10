/*
 * @Author: your name
 * @Date: 2021-08-17 19:45:13
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 20:13:18
 * @FilePath: /react-vblog/src/store/reducer/user.ts
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLogin } from '@/api/user'
import Cookies from 'js-cookie'
export const login = createAsyncThunk('user/login', async (data:object) => {
	const info = await fetchLogin(data)
	console.log('info',info.data.token)
	Cookies.set('token',info.data.token)
	return info.data.token
})

interface UserState {
	value: number
	token: any
}

const initialState: UserState = {
	value: 0,
	token: Cookies.get('token'),
}

export const counterSlice = createSlice({
	name: 'user',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.token = action.payload
		})
	},
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer

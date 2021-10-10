import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { GoodsState } from '@/types'
import { fetchProducts } from '@/api/goods'



// 使用createAsyncThunk处理异步任务，比如调接口
// export const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )
export const fetchGoodsList = createAsyncThunk(
	'goods/fetchGoodsList',
	async () => {
		const result = await fetchProducts()
		console.log(result)
		return result.data.data
	}
)
// 定义初始值
const initialState: GoodsState = {
	value: 0,
	goodsList: [],
}
export const counterSlice = createSlice({
	// Reducer名称
	name: 'goods',
	// 定义初始值
	initialState,
	// 定义同步方法
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder
			// .addCase(fetchUserById.fulfilled, (state, action) => {
			// 	// Add user to the state array
			// 	state.entities.push(action.payload)
			// })
			.addCase(fetchGoodsList.fulfilled, (state, action) => {
				state.goodsList = action.payload
			})
	},
})

// 抛出同步方法
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

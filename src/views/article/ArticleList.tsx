/*
 * @Author: your name
 * @Date: 2021-08-17 15:12:43
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 16:51:43
 * @FilePath: /react-vblog/src/views/article/ArticleList.tsx
 */
import React from 'react'
import {
	Input,
	Select,
	Space,
} from 'antd'
import FormList from './components/FormList'
const { Search } = Input
const { Option } = Select
const ArticleList = () => {
	console.log(2222);
	const onSearch = (value: any) => console.log(value)
	return (
		<div>
			<h1>文章列表</h1>
			{/* 搜索框 开始 */}
			<div>
				<Space>
					<Search
						style={{ width: '250px' }}
						placeholder='搜索文章'
						allowClear
						enterButton='Search'
						size='large'
						onSearch={onSearch}
					/>
					<Select defaultValue='Zhejiang' size='large'>
						<Option value='Zhejiang'>Zhejiang</Option>
						<Option value='Jiangsu'>Jiangsu</Option>
					</Select>
				</Space>
			</div>
			{/* 搜索框 结束 */}

			{/* 文章列表 开始 */}
			<FormList />
			{/* 文章列表 结束 */}
		</div>
	)
}

export default ArticleList

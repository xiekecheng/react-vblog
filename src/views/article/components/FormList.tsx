/*
 * @Author: your name
 * @Date: 2021-08-19 14:43:06
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 14:55:56
 * @FilePath: /react-vblog/src/views/article/components/FormList.tsx
 */
import React, { useState } from 'react'
import { Table, Button } from 'antd'

const FormList = () => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
	]

	const data = []
	for (let i = 0; i < 46; i++) {
		data.push({
			key: i,
			name: `Edward King ${i}`,
			age: 32,
			address: `London, Park Lane no. ${i}`,
		})
	}

	// const [state,setState] = useState({
	// 	selectedRowKeys: [], // Check here to configure the default column
	// 	loading: false,
	// })

	const [selectedRowKeys,setSelectedRowKeys] = useState([])
	const [loading,setLoading] = useState(false)
	// state = {
	// 	selectedRowKeys: [], // Check here to configure the default column
	// 	loading: false,
	// }

	const start = () => {
		// this.setState({ loading: true })
		setLoading(true)
		// ajax request after empty completing
		setTimeout(() => {
			// this.setState({
			// 	selectedRowKeys: [],
			// 	loading: false,
			// })
			// 清空
			setLoading(false)
			setSelectedRowKeys([])

		}, 1000)
	}

	const onSelectChange = (selectedRowKeys: React.SetStateAction<never[]>) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys)
		// this.setState({ selectedRowKeys })
		setSelectedRowKeys(selectedRowKeys)
	}

	// const { loading, selectedRowKeys } = this.state
	const rowSelection:any = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	
	const hasSelected = selectedRowKeys.length > 0
	return (
		<>
			<div>
				<div style={{ marginBottom: 16 ,marginTop:16 }}>
					<Button
						type='primary'
						onClick={start}
						disabled={!hasSelected}
						loading={loading}
					>
						Reload
					</Button>
					<span style={{ marginLeft: 8 }}>
						{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
					</span>
				</div>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={data}
				/>
			</div>
		</>
	)
}

export default FormList

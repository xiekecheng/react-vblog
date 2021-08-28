/*
 * @Author: your name
 * @Date: 2021-08-27 16:37:52
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:48:02
 * @FilePath: /react-vblog/src/views/right/components/RightTable.tsx
 */
import React from 'react'
import { Table } from 'antd'

const columns: any = [
	{
		title: '权益卡名称',
		width: 100,
		dataIndex: 'name',
		key: 'name',
		fixed: 'left',
	},
	{
		title: '领取条件',
		width: 100,
		dataIndex: 'age',
		key: 'age',
		// fixed: 'left',
	},
	{
		title: '有效期',
		dataIndex: 'address',
		key: '1',
		width: 150,
	},
	{
		title: '权益',
		dataIndex: 'address',
		key: '2',
		width: 150,
	},
	{
		title: '领卡用户数',
		dataIndex: 'address',
		key: '3',
		width: 150,
	},

	{
		title: '操作',
		key: 'operation',
		fixed: 'right',
		width: 60,
		render: () => <a>编辑</a>,
	},
]

const data: any[] = []
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `使用中权益卡 ${i}`,
		age: 32,
		address: `London Park no. ${i}`,
	})
}
const RightTable = () => {
	return (
		<div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
			,
		</div>
	)
}

export default RightTable

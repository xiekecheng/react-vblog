/*
 * @Author: your name
 * @Date: 2021-08-27 16:37:52
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:34:05
 * @FilePath: /react-vblog/src/views/right/components/ReceiveTable.tsx
 */
import React from 'react'
import { Table } from 'antd'

const columns: any = [
	{
		title: '领取时间',
		width: 100,
		dataIndex: 'name',
		key: 'name',
		// fixed: 'left',
	},
	{
		title: '卡号',
		width: 100,
		dataIndex: 'age',
		key: 'age',
		// fixed: 'left',
	},
	{
		title: '权益卡|类型',
		dataIndex: 'address',
		key: '1',
		width: 150,
	},
	{
		title: '领卡人',
		dataIndex: 'address',
		key: '2',
		width: 150,
	},
	{
		title: '发卡人',
		dataIndex: 'address',
		key: '3',
		width: 150,
	},

	{
		title: '状态',
		key: 'operation',
		width: 100,
		dataIndex: 'address',
		// render: () => <a>action</a>,
	},
	{
		title: '操作',
		dataIndex: 'operation',
		key: 'operation',
		fixed: 'right',
		width: 150,
		render: () => <a>编辑</a>,
	},
]

const data: any[] = []
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edrward ${i}`,
		age: 32,
		address: `London Park no. ${i}`,
	})
}
const RightTable = () => {
	return (
		<div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1200, y: 300 }} />
			,
		</div>
	)
}

export default RightTable

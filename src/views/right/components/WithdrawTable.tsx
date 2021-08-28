/*
 * @Author: your name
 * @Date: 2021-08-27 16:37:52
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:32:37
 * @FilePath: /react-vblog/src/views/right/components/WithdrawTable.tsx
 */
import React from 'react'
import { Table } from 'antd'

const columns: any = [
	{
		title: '退卡时间',
		width: 40,
		dataIndex: 'name',
		key: 'name',
		// fixed: 'left',
	},
	{
		title: '卡号',
		width: 60,
		dataIndex: 'age',
		key: 'age',
		// fixed: 'left',
	},
	{
		title: '权益卡|类型',
		dataIndex: 'address',
		key: '1',
		width: 40,
	},
	{
		title: '退卡金额',
		dataIndex: 'address',
		key: '2',
		width: 40,
	},
	{
		title: '会员',
		dataIndex: 'address',
		key: '3',
		width: 40,
	},

	{
		title: '操作人',
		key: 'operation',
		width: 40,
		dataIndex: 'address',
		// render: () => <a>action</a>,
	},
	{
		title: '操作',
		dataIndex: 'operation',
		key: 'operation',
		// fixed: 'right',
		width: 40,
		render: () => <a>编辑</a>,
	},
]

const data: any[] = []
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edrward ${i}`,
		age: 32,
		address: `London no. ${i}`,
	})
}
const RightTable = () => {
	return (
		<div>
			<Table columns={columns} dataSource={data} scroll={{ x: 1000, y: 300 }} />
			,
		</div>
	)
}

export default RightTable

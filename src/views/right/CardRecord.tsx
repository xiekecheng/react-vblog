/*
 * @Author: your name
 * @Date: 2021-08-27 15:58:45
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:43:26
 * @FilePath: /react-vblog/src/views/right/CardRecord.tsx
 */

import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row } from 'antd'
import ReceiveTable from './components/ReceiveTable'
const CardRecord = () => {
	return (
		<div>
			{/* <h1>领卡记录</h1> */}
			<Row>
				<Col offset={20}>
					<Input
						style={{ marginBottom: '15px' }}
						size='large'
						placeholder='请输入权益卡名称'
						suffix={
							<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
						}
					/>
				</Col>
			</Row>
			<ReceiveTable />
		</div>
	)
}

export default CardRecord

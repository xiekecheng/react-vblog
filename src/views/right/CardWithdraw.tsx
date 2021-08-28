/*
 * @Author: your name
 * @Date: 2021-08-27 15:59:55
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:35:45
 * @FilePath: /react-vblog/src/views/right/CardWithdraw.tsx
 */
import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row } from 'antd'
import React from 'react'
import WithdrawTable from './components/WithdrawTable'
const CardWithdraw = () => {
	return (
		<div>
			{/* <h1>退卡记录</h1> */}
			<Row>
				<Col offset={20}>
				<Input
				style={{marginBottom:'15px'}}
						size='large'
						placeholder='请输入权益卡名称'
						suffix={
							// <Tooltip title='Extra information'>
								<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
							// </Tooltip>
						}
					/></Col>
			</Row>
			<WithdrawTable />
		</div>
	)
}

export default CardWithdraw

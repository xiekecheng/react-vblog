/*
 * @Author: your name
 * @Date: 2021-08-27 15:53:13
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:51:08
 * @FilePath: /react-vblog/src/views/right/RightManage.tsx
 */
import { Col, Row } from 'antd'
import React from 'react'
import { Button } from 'antd'
import { Input, Tooltip } from 'antd'
import { Tabs } from 'antd'
import {
	InfoCircleOutlined,
	SearchOutlined,
	UserOutlined,
} from '@ant-design/icons'
import RightTable from './components/RightTable'
import RightBandedTable from './components/RightBanedTable';
import RightPastTable from './components/RightPastTable';
const { TabPane } = Tabs
const RightManage = () => {
	function callback(key: any) {
		console.log(key)
	}
	return (
		<div className='my-right-manage'>
			{/* <h1>权益卡管理</h1> */}
			<Row justify='space-between' style={{marginBottom:'15px'}}>
				<Col>
					<Button style={{backgroundColor:'#155BD4'}} size='large' type='primary'>
						新建权益卡
					</Button>
				</Col>
				<Col>
					<Input
						size='large'
						placeholder='请输入权益卡名称'
						suffix={
							// <Tooltip title='Extra information'>
							<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
							// </Tooltip>
						}
					/>
				</Col>
			</Row>
			<Tabs size='large' onChange={callback} type='card'>
				<TabPane tab='使用中' key='1'>
					<RightTable />
				</TabPane>
				<TabPane tab='已禁用' key='2'>
					<RightBandedTable />
				</TabPane>
				<TabPane tab='已过期' key='3'>
					<RightPastTable />
				</TabPane>
			</Tabs>
			,
		</div>
	)
}

export default RightManage

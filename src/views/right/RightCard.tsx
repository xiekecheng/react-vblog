/*
 * @Author: your name
 * @Date: 2021-08-27 15:43:19
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 16:23:45
 * @FilePath: /react-vblog/src/views/right/RightCard.tsx
 */
import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import { Route, Switch, useHistory } from 'react-router-dom'
import loadable from '@loadable/component'
const { TabPane } = Tabs
const RightManage = loadable(() => import('@/views/right/RightManage'))
const CardRecord = loadable(() => import('@/views/right/CardRecord'))
const CardWithdraw = loadable(() => import('@/views/right/CardWithdraw'))
const RightCard = () => {
	const history = useHistory()
	useEffect(() => {
		history.push('/right_card/rightManage')
	}, [])
	// 标签页路由跳转
	function callback(key: any) {
		// history.push('/right_card/rightManage')
		switch (key) {
			case '1':
				history.push('/right_card/rightManage')
				break
			case '2':
				history.push('/right_card/cardRecord')
				break
			case '3':
				history.push('/right_card/cardWithdraw')
				break
			default:
				break
		}
	}
	return (
		<div>
			<h1>权益卡</h1>
			<Tabs defaultActiveKey='1' size='large' onChange={callback}>
				<TabPane tab='权益卡管理' key='1'>
					{/* Content of Tab Pane 1 */}
				</TabPane>
				<TabPane tab='领卡记录' key='2'>
					{/* Content of Tab Pane 2 */}
				</TabPane>
				<TabPane tab='退卡记录' key='3'>
					{/* Content of Tab Pane 3 */}
				</TabPane>
			</Tabs>
			<div>
				<Switch>
					<Route path='/right_card/rightManage'>
						<RightManage />
					</Route>
					<Route path='/right_card/cardRecord'>
						<CardRecord />
					</Route>
					<Route path='/right_card/cardWithdraw'>
						<CardWithdraw />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default RightCard

/*
 * @Author: your name
 * @Date: 2021-08-17 20:26:48
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 01:09:11
 * @FilePath: /react-vblog/src/views/layout/components/LayoutSider.tsx
 */
import React from 'react'
import { Menu } from 'antd'
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const LayoutSider = () => {
	const handleClick = (e: any) => {
		console.log('click ', e)
	}
	return (
		<div className="my-layout-sider">
			<Menu
				onClick={handleClick}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
			>
				<SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
					<Menu.ItemGroup key='g1' title='Item 1'>
						<Menu.Item key='1'>Option 1</Menu.Item>
						<Menu.Item key='2'>Option 2</Menu.Item>
					</Menu.ItemGroup>
					<Menu.ItemGroup key='g2' title='Item 2'>
						<Menu.Item key='3'>Option 3</Menu.Item>
						<Menu.Item key='4'>Option 4</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
			</Menu>
		</div>
	)
}

export default LayoutSider

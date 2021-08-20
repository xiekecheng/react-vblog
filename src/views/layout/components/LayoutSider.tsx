/*
 * @Author: your name
 * @Date: 2021-08-17 20:26:48
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 11:42:23
 * @FilePath: /react-vblog/src/views/layout/components/LayoutSider.tsx
 */
import React from 'react'
import { Menu } from 'antd'
import routes from '@/routes'
import {  Link } from 'react-router-dom'

const { SubMenu } = Menu
const LayoutSider = () => {
	const handleClick = (e: any) => {
		console.log('click ', e)
	}
	// TODO: 使用<NavLink>完成路由菜单
	const renderMenu = () => {
		return routes.map((ele: any) => {
			return (
				<SubMenu key={ele.id} icon={ele.icon} title={ele.title}>
					{ele.children &&
						ele.children.map((item: any) => {
							return (
								<Menu.Item key={item.id}>
									<Link to={item.path}>{item.title}</Link>
								</Menu.Item>
							)
						})}
				</SubMenu>
			)
		})
	}
	return (
		<div className='my-layout-sider'>
			<Menu
				onClick={handleClick}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
			>
				{renderMenu()}
			</Menu>
		</div>
	)
}

export default LayoutSider

/*
 * @Author: your name
 * @Date: 2021-08-17 13:53:44
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 21:46:16
 * @FilePath: /react-vblog/src/routes/index.tsx
 */
import React from 'react'
import loadable from '@loadable/component'
import {
	AppstoreOutlined,
	BarChartOutlined,
	FormOutlined,
	UserOutlined,
} from '@ant-design/icons'
// const OtherComponent = loadable(() => import('./OtherComponent'))
// 懒加载来进行加载路由
// 文章模块
const ArticleAdd = loadable(() => import('@/views/article/ArticleAdd'))
const ArticleList = loadable(() => import('@/views/article/ArticleList'))
// 专栏模块
const ColumnManage = loadable(() => import('@/views/column/ColumnManage'))
// 用户模块
const UserManage = loadable(() => import('@/views/user/UserManage'))
// 数据统计
const Chart = loadable(() => import('@/views/statistics/Chart'))
const Map = loadable(() => import('@/views/statistics/Map.jsx'))

// 店铺模块
const ShopManage = loadable(() => import('@/views/shop/ShopManage'))
const routes = [
	{
		id: 1000,
		title: '文章管理',
		icon: <FormOutlined />,
		permission: ['admin', 'editor'],
		breadcrumbName: 'article',
		children: [
			{
				id: 1001,
				title: '文章列表',
				path: '/articleList',
				permission: ['admin', 'editor'],
				component: ArticleList,
				breadcrumbName: 'articleList',
			},
			{
				id: 1002,
				title: '发表文章',
				path: '/articleAdd',
				permission: ['admin', 'editor'],
				component: ArticleAdd ,
				breadcrumbName: 'articleAdd',
			},
		],
	},
	{
		id: 1100,
		title: '用户管理',
		icon: <UserOutlined />,
		permission: ['admin', 'editor'],
		breadcrumbName: 'user',
		children: [
			{
				id: 1101,
				title: '用户列表',
				path: '/userManage',
				component: UserManage ,
				permission: ['admin', 'editor'],
				breadcrumbName: 'userManage',
			},
			// {
			// 	title: '添加用户',
			// 	path: '',
			// 	component: '',
			// 	permission:['admin','editor'],
			// }
		],
	},
	{
		id: 1200,
		title: '栏目管理',
		icon: <AppstoreOutlined />,
		permission: ['admin', 'editor'],
		breadcrumbName: 'column',
		children: [
			{
				id: 1201,
				title: '栏目管理',
				path: '/columnManage',
				component: ColumnManage ,
				permission: ['admin', 'editor'],
				breadcrumbName: 'columnManage',
			},
		],
	},
	{
		id: 1300,
		title: '数据统计',
		permission: ['admin', 'editor'],
		icon: <BarChartOutlined />,
		breadcrumbName: 'statistics',
		children: [
			{
				id: 1301,
				title: '数据图表',
				path: '/chart',
				component: Chart ,
				permission: ['admin', 'editor'],
				breadcrumbName: 'chart',
			},
			{
				id: 1302,
				title: '地图图表',
				path: '/map',
				component: Map ,
				permission: ['admin', 'editor'],
				breadcrumbName: 'map',
			},
		],
	},
	{
		id: 1400,
		title: '店铺设置',
		permission: ['admin', 'editor'],
		icon: <BarChartOutlined />,
		breadcrumbName: 'home',
		children: [
			{
				id: 1401,
				title: '店铺管理',
				path: '/shop_manage',
				component: ShopManage ,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
			// {
			// 	id: 1402,
			// 	title: '地图图表',
			// 	path: '/map',
			// 	component: Map ,
			// 	permission: ['admin', 'editor'],
			// },
		],
	},
]
export default routes
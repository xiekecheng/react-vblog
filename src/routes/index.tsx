/*
 * @Author: your name
 * @Date: 2021-08-17 13:53:44
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-27 16:02:07
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
const RoleManage = loadable(() => import('@/views/shop/RoleManage'))
const StaffManage = loadable(() => import('@/views/shop/StaffManage'))

// 员工模块
const StaffList = loadable(() => import('@/views/staff/StaffList'))
const StaffAdd = loadable(() => import('@/views/staff/StaffAdd'))

// 权益管理
const RightCard = loadable(() => import('@/views/right/RightCard'))
const RightManage = loadable(() => import('@/views/right/RightManage'))
const RightAdd = loadable(() => import('@/views/right/RightAdd'))
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
				component: ArticleAdd,
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
				component: UserManage,
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
				component: ColumnManage,
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
				component: Chart,
				permission: ['admin', 'editor'],
				breadcrumbName: 'chart',
			},
			{
				id: 1302,
				title: '地图图表',
				path: '/map',
				component: Map,
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
				component: ShopManage,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
			{
				id: 1402,
				title: '角色管理',
				path: '/role_manage',
				component: RoleManage,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
			{
				id: 1403,
				title: '员工管理',
				path: '/staff_manage',
				component: StaffManage,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
		],
	},
	{
		id: 1500,
		title: '员工管理',
		permission: ['admin', 'editor'],
		icon: <BarChartOutlined />,
		breadcrumbName: 'home',
		children: [
			{
				id: 1501,
				title: '员工列表',
				path: '/staff_list',
				component: StaffList,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
			{
				id: 1502,
				title: '添加员工',
				path: '/staff_add',
				component: StaffAdd,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
		],
	},
	{
		id: 1600,
		title: '权益管理',
		permission: ['admin', 'editor'],
		icon: <BarChartOutlined />,
		breadcrumbName: 'right',
		children: [
			{
				id: 1601,
				title: '权益卡',
				path: '/right_card',
				component: RightCard,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
				// children:[
				// 	{
				// 		id:1611,
				// 		title:'权益卡管理',
				// 		path: '/right_manage',
				// 		component:RightManage,
				// 		permission:['admin', 'editor'],
				// 	}
				// ]
			},
			{
				id: 1602,
				title: '新建权益卡',
				path: '/right_add',
				component: RightAdd,
				permission: ['admin', 'editor'],
				breadcrumbName: 'home',
			},
		],
	},
]
export default routes

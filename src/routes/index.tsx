/*
 * @Author: your name
 * @Date: 2021-08-17 13:53:44
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 01:23:35
 * @FilePath: /react-vblog/src/routes/index.tsx
 */
import React from 'react'
import loadable from '@loadable/component'
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
// TODO: 添加icon图标
export const routes = [
	{
		title: '文章管理',
		path: '',
		component: '',
		// icon:,
		permission:['admin','editor'],
		children: [
			{
				title: '文章列表',
				path: '/articleList',
				permission:['admin','editor'],
				component: <ArticleList/>,
			},
			{
				title: '发表文章',
				path: '/articleAdd',
				permission:['admin','editor'],
				component: <ArticleAdd/>,
			}
		],
	},
	{
		title: '用户管理',
		path: '',
		component: '',
		icon:,
		permission:['admin','editor'],
		children: [
			{
				title: '用户列表',
				path: '',
				component: <UserManage/>,
				permission:['admin','editor'],
			},
			{
				title: '添加用户',
				path: '',
				component: '',
				permission:['admin','editor'],
			}
		],
	},
	{
		title: '栏目管理',
		path: '',
		component: '',
		icon:,
		permission:['admin','editor'],
		children: [
			{
				title: '栏目管理',
				path: '',
				component: '',
				permission:['admin','editor'],
			},
		],
	},
	{
		title: '数据统计',
		path: '',
		component: '',
		permission:['admin','editor'],
		icon:,
		children: [
			{
				title: '数据图表',
				path: '/chart',
				component: <Chart/>,
				permission:['admin','editor'],
			},
		],
	},
]

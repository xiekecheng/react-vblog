/*
 * @Author: your name
 * @Date: 2021-08-19 21:46:48
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 17:10:19
 * @FilePath: /react-vblog/src/views/layout/BreadcrumPage.tsx
 */
import React from 'react'
import routes from '@/routes'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
const BreadcrumPage = withRouter((props: any): any => {
	const { location } = props

	const breadcrumbNameMap: any = {
		'/article': '文章管理',
		'/article/articleList': '文章列表',
		'/article/articleAdd': '发表文章',
		// '/apps/1/detail': 'Detail',
		// '/apps/2/detail': 'Detail',
	}
	// const abc = {}
	// const routesmap = (arr)=>{
	//   arr.map(item=>{
	//     return
	//   })
	// }

	const pathSnippets = location.pathname.split('/').filter((i: any) => i)
	const extraBreadcrumbItems = pathSnippets.map((_: any, index: number) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
		return (
			<Breadcrumb.Item key={url}>
				{/* <Link to={url}>{breadcrumbNameMap[url]}</Link> */}
				{breadcrumbNameMap[url]}
			</Breadcrumb.Item>
		)
	})

	const breadcrumbItems = [
		// <Breadcrumb.Item key='home'>
		// 	Home
		// </Breadcrumb.Item>,
	].concat(extraBreadcrumbItems)
	return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
})

export default BreadcrumPage

/*
 * @Author: your name
 * @Date: 2021-08-19 09:17:18
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 16:19:11
 * @FilePath: /react-vblog/src/views/layout/components/LayoutContent.tsx
 */
import React from 'react'
// import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import routesArr from '@/routes'
import BreadcrumPage from '../BreadcrumPage'
import NoMatch from './NoMatch'
// import Welcome from './Welcome';
const LayoutContent = () => {
	const renderRoutes = (arr: any) => {
		let result: JSX.Element[] = []
		// eslint-disable-next-line
		arr.map((ele: any) => {
			if (ele.component) {
				result.push(
					<Route key={ele.id} path={ele.path} component={ele.component} />
				)
			}
			if (ele.children) {
				ele.children.map((item: any) =>
					result.push(
						<Route key={ele.id} path={item.path} component={item.component} />
					)
				)
			}
		})

		return result
	}

	return (
		<div className='my-layout-content'>
			{/* <h1>面包屑</h1> */}
			<BreadcrumPage />
			{/* TODO: 添加欢迎页  添加404NOT FOUND页面 */}
			{/* <Welcome/> */}
			<Switch>
				{renderRoutes(routesArr)}
				{/* <Route path='/articleList' component={<ArticleList/>}/> */}
				<Route path='*'>
					<NoMatch />
				</Route>
			</Switch>
		</div>
	)
}

export default LayoutContent

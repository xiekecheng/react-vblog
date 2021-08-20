/*
 * @Author: your name
 * @Date: 2021-08-19 09:17:18
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 11:51:13
 * @FilePath: /react-vblog/src/views/layout/components/LayoutContent.tsx
 */
import React from 'react'
// import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import routesArr from '@/routes'
// import Welcome from './Welcome';
const LayoutContent = () => {
	const renderRoutes = (arr: any) => {
		let result: JSX.Element[] = []
		// eslint-disable-next-line
		arr.map((ele:any) => {
			if(ele.component){
				result.push( <Route key={ele.id} path={ele.path} component={ele.component} />)
			}
			if(ele.children){
				ele.children.map((item:any)=>(
					result.push( <Route key={ele.id} path={item.path} component={item.component} />)
				))
			}
		})
		
		return result
	}

	return (
		<div className='my-layout-content'>
			{/* TODO: 添加欢迎页 */}
			{/* <Welcome/> */}
			<Switch>
				{renderRoutes(routesArr)}
				{/* <Route path='/articleList' component={<ArticleList/>}/> */}
			</Switch>
		</div>
	)
}

export default LayoutContent

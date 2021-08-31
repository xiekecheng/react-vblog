/*
 * @Author: your name
 * @Date: 2021-08-19 21:46:48
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 01:33:35
 * @FilePath: /react-vblog/src/views/layout/BreadcrumPage2.jsx
 */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import routes from '@/routes'
const BreadcrumPage = (props) => {
	const { location } = props
	console.log('location', location)

	function itemRender(route, params, routes, paths) {
		// 判断是否为最后一个元素
		const last = routes.indexOf(route) === routes.length - 1
		return last ? (
			<span>{route.breadcrumbName}</span>
		) : 
    (
			<Link to={paths.join('/')}>{route.breadcrumbName}</Link>
		)
	}
	return <Breadcrumb itemRender={itemRender} routes={routes} />

	// const pathSnippets = location.pathname.split('/').filter(i => i);
	// const extraBreadcrumbItems = pathSnippets.map((_, index) => {
	//   const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
	//   return (
	//     <Breadcrumb.Item key={url}>
	//       <Link to={url}>{breadcrumbNameMap[url]}</Link>
	//     </Breadcrumb.Item>
	//   );
	// });
	// const breadcrumbItems = [
	//   <Breadcrumb.Item key="home">
	//     <Link to="/">Home</Link>
	//   </Breadcrumb.Item>,
	// ].concat(extraBreadcrumbItems);
	// return (
	//   <div className="demo">
	//     <div className="demo-nav">
	//       <Link to="/">Home</Link>
	//       <Link to="/apps">Application List</Link>
	//     </div>
	//     <Switch>
	//       <Route path="/apps" component={Apps} />
	//       <Route render={() => <span>Home Page</span>} />
	//     </Switch>
	//     <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
	//     <Breadcrumb>{breadcrumbItems}</Breadcrumb>
	//   </div>
	// );
}

export default BreadcrumPage

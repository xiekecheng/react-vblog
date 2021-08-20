/*
 * @Author: your name
 * @Date: 2021-08-19 21:46:48
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-20 09:58:36
 * @FilePath: /react-vblog/src/views/layout/breadcrum.tsx
 */
import React from 'react';
import routes from '@/routes';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const breadcrum = () => {
	// function itemRender(route, params, routes, paths) {
	// 	const last = routes.indexOf(route) === routes.length - 1;
	// 	return last ? (
	// 		<span>{route.breadcrumbName}</span>
	// 	) : (
	// 		<Link to={paths.join('/')}>{route.breadcrumbName}</Link>
	// 	);
	// }
	// return (
	// 	<Breadcrumb itemRender={itemRender} routes={routes} />
	// );
};

export default breadcrum;
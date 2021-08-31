/*
 * @Author: your name
 * @Date: 2021-08-31 16:09:54
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 17:07:30
 * @FilePath: /react-vblog/src/views/layout/components/NoMatch.tsx
 */
import { Button, Result } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
	let location = useLocation();
	const Info = ()=>{
		return (
			<h1>{location.pathname} 页面不存在</h1>
		)
	}
	return (
		<div>
			<Result
				status='404'
				title='404'
				subTitle= {<Info/>}
				extra={<Button type='primary'>回到首页</Button>}
			/>
		</div>
	)
}

export default NoMatch

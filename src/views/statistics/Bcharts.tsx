/*
 * @Author: your name
 * @Date: 2021-08-29 14:39:10
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-29 14:39:11
 * @FilePath: /react-vblog/src/views/statistics/Bcharts.tsx
 */
import React, { useEffect } from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'
// import G2 from '@antv/g2';
const Bcharts = () => {
	// Bcharts
	const data = [
		{ year: '1951 年', sales: 0 },
		{ year: '1952 年', sales: 52 },
		{ year: '1956 年', sales: 61 },
		{ year: '1957 年', sales: 45 },
		{ year: '1958 年', sales: 48 },
		{ year: '1959 年', sales: 38 },
		{ year: '1960 年', sales: 38 },
		{ year: '1962 年', sales: 38 },
	]
	// Bcharts

	// antV


	useEffect(()=>{

	})
	// antV
	return (
		<div>
			<h1>Biz Charts</h1>
			<Chart height={300} autoFit data={data}>
				<Interval position='year*sales' />
				<Tooltip shared />
			</Chart>
			<div id='c1'>

			</div>
		</div>
	)
}

export default Bcharts

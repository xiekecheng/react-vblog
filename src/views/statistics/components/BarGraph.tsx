/*
 * @Author: your name
 * @Date: 2021-08-19 10:51:47
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 11:01:49
 * @FilePath: /react-vblog/src/views/statistics/components/BarGraph.tsx
 */
import React from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'

const BarGraph = () => {
	const data = [
		{ year: '1951 年', sales: 38 },
		{ year: '1952 年', sales: 52 },
		{ year: '1956 年', sales: 61 },
		{ year: '1957 年', sales: 45 },
		{ year: '1958 年', sales: 48 },
		{ year: '1959 年', sales: 38 },
		{ year: '1960 年', sales: 38 },
		{ year: '1962 年', sales: 38 },
	]
	return (
		<div className='my-bar-graph'>
			<h1>柱状图</h1>
			<Chart
				height={200}
				autoFit
				data={data}
				interactions={['active-region']}
				padding='auto'
			>
				<Interval position='year*sales' />
				<Tooltip shared />
			</Chart>
		</div>
	)
}

export default BarGraph

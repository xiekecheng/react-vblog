/*
 * @Author: your name
 * @Date: 2021-08-19 11:33:24
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 11:39:46
 * @FilePath: /react-vblog/src/views/statistics/components/BarEcharts.tsx
 */
import React, { useEffect } from 'react'
import * as echarts from 'echarts'
const BarEcharts = () => {
	useEffect(() => {
		var chartDom: any = document.getElementById('BarEcharts')
		var myChart = echarts.init(chartDom)
		var option

		option = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: 'bar',
				},
			],
		}

		option && myChart.setOption(option)
	})
	return <div id="BarEcharts" className='BarEcharts' style={{width:300,height:300}}></div>
}

export default BarEcharts

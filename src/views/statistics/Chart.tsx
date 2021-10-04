/*
 * @Author: your name
 * @Date: 2021-08-19 01:16:00
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-29 14:40:48
 * @FilePath: /react-vblog/src/views/statistics/Chart.tsx
 */
// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Divider } from 'antd'
import * as echarts from 'echarts'
// import ReactDOM from 'react-dom'
// import BarGraph from './components/BarGraph'
// import BarEcharts from './components/BarEcharts'
const ChartPage = () => {
	const echartRef = useRef(null)
	const echartRef2 = useRef(null)
	const echartRef3 = useRef(null)
	const echartRef4 = useRef(null)
	const echartRef5 = useRef(null)
	// 加载 Echarts1 Start
	useEffect(() => {
		// const dom1 = document.getElementById('echart1')
		const dom1 = echartRef.current
		var myChart = echarts.init(dom1)
		myChart.setOption({
			title: {
				text: '销量展示',
			},
			tooltip: {},
			xAxis: {
				data: ['蛋糕', '奶茶', '面包', '裤子', '高跟鞋', '袜子'],
			},
			yAxis: {},
			series: [
				{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20],
				},
			],
		})
	})
	// 加载 Echarts1 End

	// 加载 Echarts2 Start
	useEffect(() => {
		const dom2 = echartRef2.current
		var myChart2 = echarts.init(dom2)
		var option = {
			title: {
				text: '利润',
			},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					name: '销量',
					data: [150, 230, 224, 218, 135, 147, 260],
					type: 'line',
				},
			],
		}
		myChart2.setOption(option)
	})
	// 加载 Echarts2 End

	// 加载 Echarts3 Start
	useEffect(() => {
		const dom3 = echartRef3.current
		console.log(dom3)
		const myEchart3 = echarts.init(dom3)
		const option = {
			title: {
				text: '销售数据',
			},
			series: [
				{
					type: 'pie',
					data: [
						{
							value: 335,
							name: '直接访问',
						},
						{
							value: 234,
							name: '联盟广告',
						},
						{
							value: 1548,
							name: '搜索引擎',
						},
					],
				},
			],
		}
		myEchart3.setOption(option)
	})

	// 加载 Echarts3 End

	// 加载 Echarts4 Start
	useEffect(()=>{
		const dom4 = echartRef4.current
		const myEchart4 = echarts.init(dom4)
		const option = {
			title: {
				text: '饮品销量',
			},
			legend: {},
			tooltip: {},
			dataset: {
				// 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
				// 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
				// 如果不指定 dimensions，也可以通过指定 series.encode
				// 完成映射，参见后文。
				dimensions: ['product', '2015', '2016', '2017'],
				source: [
					{ product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
					{ product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
					{ product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
					{ product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
				]
			},
			xAxis: { type: 'category' },
			yAxis: {},
			series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
		};
		myEchart4.setOption(option)
	})
	// 加载 Echarts4 End

		// 加载 Echarts5 Start
		useEffect(()=>{
			const dom5 = echartRef5.current
			const myEchart5 = echarts.init(dom5)
			const option = {
				title: {
					text: '气候图',
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: { type: 'cross' }
				},
				legend: {},
				xAxis: [
					{
						type: 'category',
						axisTick: {
							alignWithLabel: true
						},
						data: [
							'1月',
							'2月',
							'3月',
							'4月',
							'5月',
							'6月',
							'7月',
							'8月',
							'9月',
							'10月',
							'11月',
							'12月'
						]
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '降水量',
						min: 0,
						max: 250,
						position: 'right',
						axisLabel: {
							formatter: '{value} ml'
						}
					},
					{
						type: 'value',
						name: '温度',
						min: 0,
						max: 25,
						position: 'left',
						axisLabel: {
							formatter: '{value} °C'
						}
					}
				],
				series: [
					{
						name: '降水量',
						type: 'bar',
						yAxisIndex: 0,
						data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
					},
					{
						name: '温度',
						type: 'line',
						smooth: true,
						yAxisIndex: 1,
						data: [
							6.0,
							10.2,
							10.3,
							11.5,
							10.3,
							13.2,
							14.3,
							16.4,
							18.0,
							16.5,
							12.0,
							5.2
						]
					}
				]
			};
			myEchart5.setOption(option)
		})
			// 加载 Echarts4 End
	return (
		<div className='my-chart'>
			<div>
				<h1>Echarts</h1>
				<div
					id='echart1'
					ref={echartRef}
					style={{ width: 'auto', height: 300 }}
				></div>
				<Divider plain>柱状图</Divider>
				<div ref={echartRef2} style={{ width: 'auto', height: 300 }}></div>
				<Divider plain>折线图</Divider>

				<div ref={echartRef3} style={{ width: 'auto', height: 300 }}></div>
				<Divider plain>饼状图</Divider>

				<div ref={echartRef4} style={{ width: 'auto', height: 300 }}></div>
				<Divider plain>饮品销量</Divider>

				<div ref={echartRef5} style={{ width: 'auto', height: 300 }}></div>
				<Divider plain>每月气候</Divider>
			</div>
		</div>
	)
}

export default ChartPage

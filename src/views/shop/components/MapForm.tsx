/* eslint-disable no-undef */
/*
 * @Author: your name
 * @Date: 2021-08-19 20:13:49
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 21:28:39
 * @FilePath: /react-vblog/src/views/shop/components/MapForm.tsx
 */
// @ts-nocheck
import React, { useEffect } from 'react'

const MapForm = () => {
	useEffect(() => {
		
		//地图初始化函数，本例取名为init，开发者可根据实际情况定义
		function initMap() {
			//定义地图中心点坐标
			var center = new TMap.LatLng(39.98412, 116.307484)
			//定义map变量，调用 TMap.Map() 构造函数创建地图
			var map = new TMap.Map(document.getElementById('map'), {
				center: center, //设置地图中心点坐标
				zoom: 17.2, //设置地图缩放级别
				pitch: 43.5, //设置俯仰角
				rotation: 45, //设置地图旋转角度
			})
		}
		initMap()
	})
	return (
		<div>
			<div id='map' style={{ width: 400, height: 400 }}></div>
		</div>
	)
}

export default MapForm

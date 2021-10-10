/* eslint-disable no-undef */
/*
 * @Author: your name
 * @Date: 2021-08-19 11:44:09
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-29 14:40:37
 * @FilePath: /react-vblog/src/views/statistics/Map.jsx
 */
import React, { useEffect, useState } from 'react'
import './map.scss'
// TODO: 地图有bug,显示不出来,待解决
const MapChart = () => {
	// 经度
	const [address, setAddress] = useState({
		longitude: 0,
		latitude: 0,
	})
	// 	useEffect(()=>{
	// 		var map = new BMapGL.Map("container");
	// // 创建地图实例
	// var point = new BMapGL.Point(116.404, 39.915);
	// // 创建点坐标
	// map.centerAndZoom(point, 15);
	// // 初始化地图，设置中心点坐标和地图级别
	// 	},[])
	useEffect(() => {
		// 创建地图实例
		var map = new BMapGL.Map('container')
		// 设置中心点坐标
		var point = new BMapGL.Point(116.404, 39.915)
		// 地图初始化
		map.centerAndZoom(point, 15)

		// 地图事件
		map.addEventListener('click', function (e) {
			alert('点击的经纬度：' + e.latlng.lng + ', ' + e.latlng.lat)
			setAddress({ longitude: e.latlng.lng, latitude: e.latlng.lat })
			// var mercator = map.lnglatToMercator(e.latlng.lng, e.latlng.lat);
			// alert('点的墨卡托坐标：' + mercator[0] + ', ' + mercator[1]);
		})

		// 开启鼠标滚轮缩放
		// map.enableScrollWheelZoom()

		// Start 地图中添加鼠标右键功能
		var txtMenuItem = [
			{
				text: '放大', // 定义菜单项的显示文本
				callback: function () {
					// 定义菜单项点击触发的回调函数
					map.zoomIn()
				},
			},
			{
				text: '缩小',
				callback: function () {
					map.zoomOut()
				},
			},
		]
		var menu = new BMapGL.ContextMenu();
		for (var i = 0; i < txtMenuItem.length; i++) {
			menu.addItem(
				new BMapGL.MenuItem( // 定义菜单项实例
					txtMenuItem[i].text, // 传入菜单项的显示文本
					txtMenuItem[i].callback, // 传入菜单项的回调函数
					{
						width: 100, // 指定菜单项的宽度
						id: 'menu' + i, // 指定菜单项dom的id
					}
				)
			)
		}
		map.addContextMenu(menu);                           // 给地图添加右键菜单

		// End 地图中添加鼠标右键功能
	})
	return (
		<div>
			<h1>地图</h1>
			当前经度: <span>{address.longitude}</span>
			当前纬度: <span>{address.latitude}</span>
			<div id='container'></div>
		</div>
	)
}

export default MapChart

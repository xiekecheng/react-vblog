/*
 * @Author: your name
 * @Date: 2021-08-19 21:04:40
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 21:29:03
 * @FilePath: /react-vblog/src/views/shop/components/Amap.tsx
 */
// @ts-nocheck
import React, { useEffect } from 'react'

const Amap = () => {
	useEffect(() => {
		//地图加载
		var map = new AMap.Map('AmapContainer', {
			resizeEnable: true,
		})
		//输入提示
		var autoOptions = {
			input: 'tipinput',
		}
		var auto = new AMap.Autocomplete(autoOptions)
		var placeSearch = new AMap.PlaceSearch({
			map: map,
		}) //构造地点查询类
		AMap.event.addListener(auto, 'select', select) //注册监听，当选中某条记录时会触发
		function select(e) {
			placeSearch.setCity(e.poi.adcode)
			placeSearch.search(e.poi.name) //关键字查询查询
		}
		
	})
	return (
		<div>
			<div id='AmapContainer' style={{ width: 600, height: 600 }}></div>
			<div id='myPageTop'>
				<table>
					<tr>
						<td>
							<label>请输入关键字：</label>
						</td>
					</tr>
					<tr>
						<td>
							<input id='tipinput' />
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default Amap

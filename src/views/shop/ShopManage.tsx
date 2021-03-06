/*
 * @Author: your name
 * @Date: 2021-08-19 18:59:34
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-31 11:48:45
 * @FilePath: /react-vblog/src/views/shop/ShopManage.tsx
 */
import { Col, Form, Input, Row } from 'antd'
import { Breadcrumb } from 'antd'
import React, { useEffect } from 'react'
import CascaderSelect from './components/CascaderSelect'
import { Radio, Space } from 'antd'
import Amap from './components/Amap'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import UploadImg from './components/UploadImg.jsx';
import './shop.scss'
const { TextArea } = Input
const ShopManage = (props: any) => {
	console.log('props', props)


	// Start 接入地图地图
	useEffect(() => {
		// 创建地图实例
		var map = new BMapGL.Map('shop-container')
		// 设置中心点坐标
		var point = new BMapGL.Point(116.404, 39.915)
		// 地图初始化
		map.centerAndZoom(point, 15)
	})
		// End 接入地图地图
	return (
		<div className='my-shop-manage'>
			{/* <div>
				<Breadcrumb>
					<Breadcrumb.Item href=''>
						<HomeOutlined />
					</Breadcrumb.Item>
					<Breadcrumb.Item href=''>
						<UserOutlined />
						<span>Application List</span>
					</Breadcrumb.Item>
					<Breadcrumb.Item>Application</Breadcrumb.Item>
				</Breadcrumb>
			</div> */}
			<h1>门店管理</h1>
			<Form labelCol={{ span: 4 }} wrapperCol={{ span: 7 }} >
				<Form.Item name='shopName' label='店铺名称' rules={[{ required: true, message: '请输入店铺名称!' }]} >
					<Input placeholder='门店名称最长20字'></Input>
				</Form.Item>
				<Form.Item name='phone' label='联系电话' rules={[{ required: true, message: '请输入联系电话!' }]}>
					<Input.Group size='large'>
						<Row gutter={8}>
							<Col span={8}>
								<Input defaultValue='0571' placeholder='区号' />
							</Col>
							<span>-</span>
							<Col span={14}>
								<Input
									defaultValue='26888888'
									placeholder='电话号(区号可留空)'
								/>
							</Col>
						</Row>
					</Input.Group>
				</Form.Item>
				<Form.Item name='region' label='所属区域' rules={[{ required: true, message: '请输入所属区域!' }]}>
					<CascaderSelect />
				</Form.Item>
				<Form.Item name='shopName' label='地图点位'>
					{/* <Amap /> */}
					<span>请在地图中确认地址信息</span>
					<div id='shop-container'></div>
				</Form.Item>
				<Form.Item name='shopName' label='门店照片'>
					{/* <Input></Input> */}
					<UploadImg/>
				</Form.Item>
				<Form.Item name='opening' label='营业时间'>
					<Radio.Group>
						<Space direction='vertical'>
							<Radio value={'fullday'}>全天</Radio>
							<Radio value={'custom'}>自定义</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>
				<Form.Item name='recommend' label='商家推荐'>
					<TextArea
						placeholder='你可以简述门店的推荐商品或者活动,也可以向卖家陈述特色服务,例如,免费停车和WIFI. (最多200个字)'
						rows={2}
					/>
				</Form.Item>
				{/* <Form.Item name='shopName' label='店铺名称'>
					<Input></Input>
				</Form.Item> */}
			</Form>
		</div>
	)
}

export default ShopManage

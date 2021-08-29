/*
 * @Author: your name
 * @Date: 2021-08-29 20:21:51
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-29 22:23:11
 * @FilePath: /react-vblog/src/views/goods/GoodsList.tsx
 */
import React from 'react'
import {
	Button,
	Form,
	DatePicker,
	Space,
	Select,
	Row,
	Col,
	Input,
	Tabs,
} from 'antd'
import { Cascader } from 'antd'
import './GoodsList.scss'
const { Option } = Select
const { RangePicker } = DatePicker
const { TabPane } = Tabs
const GoodsList = () => {
	// 级联选择 开始
	const options = [
		{
			value: 'all',
			label: '全部',
		},
		{
			value: 'otherGoods',
			label: '其他商品',
			children: [
				{
					value: 'crowdFunding',
					label: '众筹',
					children: [
						{
							value: 'book',
							label: '书籍',
						},
						{
							value: 'sport',
							label: '体育',
						},
						{
							value: 'xihu',
							label: '公益',
						},
						{
							value: 'other',
							label: '其他',
						},
					],
				},
			],
		},
		{
			value: 'medical',
			label: '医疗保健',
			children: [
				{
					value: 'nanjing',
					label: 'Nanjing',
					children: [
						{
							value: 'zhonghuamen',
							label: 'Zhong Hua Men',
						},
					],
				},
			],
		},
	]

	function onChange(value: any) {
		console.log(value)
	}
	// 级联选择 结束

	// 标签页 开始
	function callback(key: any) {
		console.log(key)
	}
	// 标签页 结束
	return (
		<div className='my-goods-list'>
			<h1>商品列表</h1>
			<Button type='primary'>发布商品</Button>
			{/* 搜索条件 开始 */}
			<div>
				<Form className='my-search-form'>
					<Form.Item label='创建时间'>
						<RangePicker />
					</Form.Item>
					<Row gutter={20}>
						<Col>
							<Form.Item label='商品名称'>
								<Input placeholder='输入商品名称 编/条码' />
							</Form.Item>
						</Col>
						<Col>
							<Form.Item label='商品编/条码'>
								<RangePicker />
							</Form.Item>
						</Col>
						<Col>
							<Form.Item label='商品分组'>
								<Select
									defaultValue='all'
									style={{ width: 120 }}
									// onChange={handleChange}
								>
									<Option value='all'>全部</Option>
									<Option value='hot'>最热商品</Option>
									<Option value='hide'>列表中隐藏</Option>
									<Option value='other'>其他</Option>
									<Option value='newest'>最新商品</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={30}>
						<Col span={6}>
							<Form.Item label='商品类型'>
								<Select
									showSearch
									style={{ width: 200 }}
									// placeholder='Search to Select'
									defaultValue='全部'
									optionFilterProp='children'
									filterOption={(input, option: any) =>
										option.children
											.toLowerCase()
											.indexOf(input.toLowerCase()) >= 0
									}
									filterSort={(optionA, optionB) =>
										optionA.children
											.toLowerCase()
											.localeCompare(optionB.children.toLowerCase())
									}
								>
									<Option value='1'>全部</Option>
									<Option value='2'>实体物品</Option>
									<Option value='3'>虚拟商品</Option>
									<Option value='4'>电子卡券</Option>
									<Option value='5'>付费等级</Option>
									<Option value='6'>付费会员卡</Option>
									<Option value='7'>酒店商品</Option>
									<Option value='8'>周期购商品</Option>
									<Option value='9'>分销商品</Option>
									<Option value='10'>海淘商品</Option>
									<Option value='11'>付费优惠券</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='销量'>
								<RangePicker />
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='价格'>
								<RangePicker />
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='商品类目'>
								<Cascader
									// style={{ width: 180 }}
									defaultValue={['全部']}
									options={options}
									onChange={onChange}
								/>
							</Form.Item>
						</Col>
					</Row>

					<Form.Item label='库存扣减方式'>
						<Select
							defaultValue='all'
							style={{ width: 120 }}
							// onChange={handleChange}
						>
							<Option value='all'>全部</Option>
							<Option value='hot'>拍下扣减库存</Option>
							<Option value='hide'>付款扣减库存</Option>
						</Select>
					</Form.Item>
					<Button type='primary'>筛选</Button>
				</Form>
			</div>
			{/* 搜索条件 结束 */}

			{/* 标签页 开始 */}
			<div className='my-tabs'>
				<Tabs size='large' onChange={callback} type='card'>
					<TabPane tab='全部' key='1'>
						Content of Tab Pane 1
					</TabPane>
					<TabPane tab='销售中' key='2'>
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab='已售罄' key='3'>
						Content of Tab Pane 3
					</TabPane>
					<TabPane tab='仓库中' key='4'>
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
			</div>
			{/* 标签页 结束 */}
		</div>
	)
}

export default GoodsList

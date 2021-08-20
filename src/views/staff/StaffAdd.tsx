/*
 * @Author: your name
 * @Date: 2021-08-20 10:16:03
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-20 11:35:39
 * @FilePath: /react-vblog/src/views/staff/StaffAdd.tsx
 */

import React from 'react'
import { Button, Form, Input, Select, Space } from 'antd'
import TreeWidget from './components/TreeWidget';
const { Option } = Select
const StaffAdd = () => {
	const onFinish = (values: any) => {
		console.log('values', values)
	}
	return (
		<div className='my-staff-add'>
			<Form
				onFinish={onFinish}
				labelCol={{ span: 3 }}
				wrapperCol={{ span: 6 }}
				labelAlign='right'
			>
				<Form.Item
					rules={[{ required: true, message: 'Please select your country!' }]}
					label='员工有赞账号'
					name='account'
				>
					<Space>
						<Select>
							<Option value='China'>中国 +86</Option>
							<Option value='Ireland'>爱尔兰 +54</Option>
							<Option value='Argentine'>阿根廷 +353</Option>
							<Option value='Australia'>澳大利亚 +61</Option>
							<Option value='Aomen'>中国澳门 +853</Option>
						</Select>
						<Input></Input>
					</Space>
				</Form.Item>
				<Form.Item
					label='员工姓名'
					name='emp_name'
					rules={[{ required: true, message: '姓名不能为空' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='员工编号' name='number'>
					<Input />
				</Form.Item>
				<Form.Item
					label='员工联系方式'
					name='tel'
					rules={[{ required: true, message: '联系方式不能为空' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='所属店铺角色'
					name='role'
					rules={[{ required: true, message: 'Please select your country!' }]}
				>
					<Select dropdownStyle={{ width: 50 }}>
						<Option value='advanced_manager'>高级管理员</Option>
						<Option value='services'>普通客服</Option>
						<Option value='verification'>核销员</Option>
						<Option value='finance'>财务</Option>
						<Option value='common_manager'>普通管理员</Option>
						<Option value='pre_sale'>售前客服</Option>
						<Option value='common_staff'>普通员工</Option>
						<Option value='goods_manager'>商品管理员</Option>
						<Option value='Advertiser'>广告投放员</Option>
						<Option value='art_designer'>美工</Option>
						<Option value='shopping_guider' disabled>
							导购
						</Option>
						<Option value='shopping_guide_manager' disabled>
							导购部门管理员
						</Option>
					</Select>
				</Form.Item>
				<Form.Item label='权限' name='authority'>
					<TreeWidget/>
				</Form.Item>
				<Form.Item>
				<Space>
					<Button>取消</Button>
					<Button type='primary' htmlType='submit'>保存</Button>
				</Space>
				</Form.Item>

			</Form>
		</div>
	)
}

export default StaffAdd

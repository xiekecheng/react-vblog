/*
 * @Author: your name
 * @Date: 2021-08-27 15:44:06
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-28 22:01:43
 * @FilePath: /react-vblog/src/views/right/RightAdd.tsx
 */
import React, { useState } from 'react'
import { Menu, Dropdown, Row, Col, Divider } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'
// import { Switch } from 'antd';

import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
	Space,
} from 'antd'
const { TextArea } = Input
const RightAdd = () => {
	const [validPeriodValue, setValidPeriodValue] = useState(1)
	const [color, setColor] = useState('#7D96D7')
	const [receiveSettingValue, setReceiveSettingValue] = useState('')
	const [limitTimes, setLimitTimes] = useState(1)
	const onValidPeriodValueChange: any = (e: { target: { value: any } }) => {
		console.log(e.target.value)
		setValidPeriodValue(e.target.value)
	}
	const handleMenuClick = (e: any) => {
		// message.info('Click on menu item.');
		console.log('click', e)
		setColor(e.key)
	}
	// 权益
	function onRightChange(checkedValues: any) {
		console.log('checked = ', checkedValues)
	}

	// 领卡礼包
	function onGiftChange(checkedValues: any) {
		console.log('checked = ', checkedValues)
	}

	// 激活设置
	const onActivateChange = (checked: any) => {
		console.log(`switch to ${checked}`)
	}

	const menu = (
		<Menu mode='vertical' onClick={handleMenuClick}>
			<Menu.Item key='#7D96D7'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#7D96D7' }}
				></div>
			</Menu.Item>
			<Menu.Item key='#494C50'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#494C50' }}
				></div>
			</Menu.Item>

			<Menu.Item key='#52BA88'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#52BA88' }}
				></div>
			</Menu.Item>
			<Menu.Item key='#F28C85'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#F28C85' }}
				></div>
			</Menu.Item>
			<Menu.Item key='#E9BD7F'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#E9BD7F' }}
				></div>
			</Menu.Item>
			<Menu.Item key='#EA758B'>
				<div
					style={{ width: 70, height: 30, backgroundColor: '#EA758B' }}
				></div>
			</Menu.Item>
		</Menu>
	)
	const onReceiveChange = () => {}
	return (
		<div>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 10 }}
				layout='horizontal'
			>
				<h1>基本信息</h1>
				{/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
				<Form.Item label='名称'>
					<Input placeholder='最多输入9个字符' />
				</Form.Item>
				<Form.Item label='背景设置'>
					<Dropdown trigger={['click']} overlay={menu} arrow>
						<a href='javascript:;' onClick={(e) => e.preventDefault()}>
							<div style={{ padding: 20, width: 50, height: 20 }}>
								<Button style={{ backgroundColor: color }}>color</Button>{' '}
								<DownOutlined />
							</div>
						</a>
					</Dropdown>
				</Form.Item>
				<Form.Item label='卡有效期'>
					<Radio.Group
						onChange={(e) => onValidPeriodValueChange(e)}
						value={validPeriodValue}
					>
						<Space direction='vertical'>
							<Radio value={1}>永久有效</Radio>
							<Radio value={2}>
								领卡时起
								<Input />
								天内有效
							</Radio>
							<Radio value={3}>Option C</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>

				<Form.Item label='领取设置'>
					<Radio.Group value={receiveSettingValue}>
						<Space direction='vertical'>
							<Radio value={1}>可直接领取</Radio>
							<Radio value={2}>需付费领取</Radio>
							<Radio value={3}>满足下列任一条件即到账</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>

				<Form.Item label='每人限领次数'>
					<Radio.Group value={limitTimes}>
						<Space direction='vertical'>
							<Radio value={1}>不限次数</Radio>
							<Radio value={2}>有效期内限领次数</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>
				<Form.Item label='使用须知'>
					<TextArea placeholder='请输入权益卡相关的补充信息,最多可输入800个字符' rows={3} />
				</Form.Item>
				<Form.Item label='客服电话' valuePropName='checked'>
					<Input size='large' placeholder='请输入手机号或固定电话' />
				</Form.Item>

				<h1>权益礼包</h1>
				<Form.Item label='权益'>
					<Checkbox.Group style={{ width: '100%' }} onChange={onRightChange}>
						<Row>
							<Col span={24}>
								<Checkbox value='A'>包邮</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='B'>消费折扣</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='C'>会员价</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='D'>积分回馈倍率</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='E'>获得好友体验卡</Checkbox>
							</Col>
						</Row>
					</Checkbox.Group>
				</Form.Item>
				<Form.Item label='领卡礼包'>
					<Checkbox.Group style={{ width: '100%' }} onChange={onGiftChange}>
						<Row>
							<Col span={24}>
								<Checkbox value='A'>送积分</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='B'>送优惠券</Checkbox>
							</Col>
							<Col span={24}>
								<Checkbox value='C'>送赠品</Checkbox>
							</Col>
							<Col span={24}>
								<h3>
									权益不够用?<a href='#'>去配置权益</a>
								</h3>
							</Col>
						</Row>
					</Checkbox.Group>
				</Form.Item>

				<h1>高级设置</h1>
				<Form.Item label='激活设置'>
					<Switch defaultChecked onChange={onActivateChange} /> <a>预览</a>
				</Form.Item>

				<Form.Item label='同步微信卡包'></Form.Item>
				<Form.Item label='分享设置'>
					<Checkbox value='A'>允许分享</Checkbox>
				</Form.Item>
				<Form.Item label='过期设置'>卡过期后,消费者变更至</Form.Item>
				<Form.Item label='协议确认'>
					《权益卡使用协议》是你提供给消费者的承诺，勾选后即表示同意协议中的所有条款。
				</Form.Item>

				<Form.Item label='协议确认'>
					《权益卡使用协议》是你提供给消费者的承诺，勾选后即表示同意协议中的所有条款。
				</Form.Item>
			</Form>
		</div>
	)
}

export default RightAdd

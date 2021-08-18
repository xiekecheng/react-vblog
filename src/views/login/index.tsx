/*
 * @Author: your name
 * @Date: 2021-08-17 18:27:07
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 20:00:13
 * @FilePath: /react-vblog/src/views/login/index.tsx
 */
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/hooks'
import { login } from '@/store/reducer/user'
const Login = () => {
	const dispatch = useAppDispatch()
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values)
		dispatch(login(values))
	}
	return (
		<div className='my-login'>
			<h1>登录</h1>

			<Form
				name='normal_login'
				className='login-form'
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item
					name='username'
					rules={[{ required: true, message: 'Please input your Username!' }]}
				>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						placeholder='Username'
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='Password'
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name='remember' valuePropName='checked' noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className='login-form-forgot' href=''>
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'
					>
						Log in
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login

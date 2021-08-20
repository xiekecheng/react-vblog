/*
 * @Author: your name
 * @Date: 2021-08-17 15:12:55
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 16:52:50
 * @FilePath: /react-vblog/src/views/article/ArticleAdd.tsx
 */
import { Button, Col, Form, Input, Row, Select, Space } from 'antd'
import React from 'react'
import QuillForm from './components/QuillForm'
const { Option } = Select
const ArticleAdd = () => {
	// const onChange = (e: any) => {
	// 	console.log(e)
	// }
	const onFinish = (values: any) => {
		console.log(values)
	}
	return (
		<div className='my-article-add'>
			<h1>发表文章</h1>
			<Form
				// labelCol={{ span: 4 }}
				// wrapperCol={{ span: 14 }}
				layout='horizontal'
				onFinish={onFinish}
			>
				<Space>
					<Form.Item name='article_type'>
						<Select
							size='large'
							placeholder='请选择文章类别'
							style={{ width: 200 }}
							allowClear
						>
							<Option value='news'>新闻</Option>
							<Option value='academic'>学术</Option>
							<Option value='Android'>安卓</Option>
							<Option value='front_end'>前端</Option>
							<Option value='back_end'>后端</Option>
							<Option value='operation'>运维</Option>
						</Select>
					</Form.Item>
					<Form.Item name='article_title'>
						<Input
							size='large'
							placeholder='请输入文章标题'
							style={{ width: 400 }}
							allowClear
						/>
					</Form.Item>
				</Space>
				<Form.Item name='article_content'>
					<QuillForm />
				</Form.Item>
				<Row style={{ marginTop: 50 }}>
					<Col offset={9}>
						<Space>
							<Button htmlType='submit' size='large'>
								保存到草稿箱
							</Button>
							<Button htmlType='submit' size='large' type='primary'>
								发布文章
							</Button>
						</Space>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default ArticleAdd

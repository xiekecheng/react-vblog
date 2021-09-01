/*
 * @Author: your name
 * @Date: 2021-08-29 20:22:14
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-01 12:58:54
 * @FilePath: /react-vblog/src/views/goods/GoodsAdd.tsx
 */
import React, { useState } from 'react';
import { Modal } from 'antd';
import { CloudUploadOutlined, DownloadOutlined } from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import ImageUpdate from './components/ImageUpdate';
const { Option } = Select

const ModelApp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

const GoodsAdd = () => {
	// function handleChange(value: any) {
	// 	console.log(`selected ${value}`)
	// }

	// 自定义模态框 开始
  const [visible, setVisible] = useState(false);
	// 自定义模态框 结束
	return (
		<div>
			<div>
				<Form wrapperCol={{ span: 8 }}>
					<h1>基本信息</h1>
					<Form.Item
						name='goodsName'
						label='商品名'
						rules={[{ required: true, message: '请输入商品名' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item label='商品类目'>
						<Select
							defaultValue='tea'
							style={{ width: 120 }}
							// onChange={handleChange}
						>
							<Option value='tea'>下午茶</Option>
							<Option value='cake'>蛋糕</Option>
							<Option value='bread'>面包</Option>
							<Option value='drink'>饮品</Option>
						</Select>
					</Form.Item>
					<Form.Item label='分享描述'>
						<Input />
						<span>微信分享给好友时会显示，建议36个字以内</span> <i>查看示例</i>
					</Form.Item>
					<Form.Item label='商品卖点'>
						<Input />
						<span>在商品详情页标题下面展示卖点信息，建议60字以内</span>
						<i>查看示例</i>
					</Form.Item>
					<Form.Item label='商品图'>
					<Button type="primary" shape="round" icon={<CloudUploadOutlined />} onClick={() => setVisible(true)} size={'middle'}>
          上传
        </Button>
				{/* 模态框 开始 */}
				<Modal
        title="我的图片"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {/* <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p> */}
				<ImageUpdate/>
				<span>支持 .jpg, .gif, .png, .bmp 格式，最多15张，单个图片不超过 10 MB。</span>
      </Modal>
				{/* 模态框 结束 */}
					</Form.Item>
					{/* <Form.Item label='主图视频'>
						<Input />
						<span>
							添加主图视频可提升商品的成交转化，有利于获取更多流量，建议时长
							9-30 秒、视频宽高和商品图一致。
						</span>
						<i>查看示例</i>
					</Form.Item> */}
					<Form.Item name='goodsGroup' label='商品分组'>
						<Select
							defaultValue='lucy'
							style={{ width: 120 }}
							// onChange={handleChange}
						>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
							<Option value='disabled'>Disabled</Option>
							<Option value='Yiminghe'>yiminghe</Option>
						</Select>
					</Form.Item>
					<h1>价格库存</h1>
					<Form.Item name='price' label='价格'>
						<InputNumber min={1} max={100000} defaultValue={3} />
					</Form.Item>

					<Form.Item name='stock' label='库存'>
						<InputNumber min={1} max={100000} defaultValue={3} />
					</Form.Item>
					<Form.Item wrapperCol={{span:3}}  label='商品编码'>
						<Input />
					</Form.Item>
					<Form.Item wrapperCol={{span:3}}  label='商品条码'>
						<Input />
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default GoodsAdd

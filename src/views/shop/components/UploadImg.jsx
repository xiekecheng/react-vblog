/*
 * @Author: your name
 * @Date: 2021-08-19 21:22:02
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 21:22:03
 * @FilePath: /react-vblog/src/views/shop/components/UploadImg.tsx
 */
import React, { useState } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
const UploadImg = () => {
	const [fileList, setFileList] = useState([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	])

	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList)
	}

	const onPreview = async (file) => {
		let src = file.url
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader()
				reader.readAsDataURL(file.originFileObj)
				reader.onload = () => resolve(reader.result)
			})
		}
		const image = new Image()
		image.src = src
		const imgWindow = window.open(src)
		imgWindow?.document.write(image.outerHTML)
	}
	return (
		<div>
			<ImgCrop rotate>
				<Upload
					action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
					listType='picture-card'
					fileList={fileList}
					onChange={onChange}
					onPreview={onPreview}
				>
					{fileList.length < 2 && '+ Upload'}
				</Upload>
			</ImgCrop>
		</div>
	)
}

export default UploadImg

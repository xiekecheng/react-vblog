/*
 * @Author: your name
 * @Date: 2021-08-19 15:03:45
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 16:38:32
 * @FilePath: /react-vblog/src/views/article/components/QuillForm.tsx
 */
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const QuillForm = (props: any) => {
	// const [value, setValue] = useState('')
	const {value,onChange} = props;
	return (
		<div >
			<ReactQuill theme='snow' style={{ height: 600 }} value={value} onChange={onChange} />
		</div>
	)
}

export default QuillForm

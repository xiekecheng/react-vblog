/*
 * @Author: your name
 * @Date: 2021-08-19 19:29:39
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 19:36:38
 * @FilePath: /react-vblog/src/views/shop/components/CascaderSelect.tsx
 */
import React from 'react';
import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
        ],
      },
    ],
  },
];

const CascaderSelect = (props: any) => {
	const {value,onChange} = props
	// function onChange(value: any) {
	// 	console.log(value);
	// }
	return (
		<div>
			    <Cascader size="large" options={options} value={value} onChange={onChange} />

		</div>
	);
};

export default CascaderSelect;
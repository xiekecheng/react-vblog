/*
 * @Author: your name
 * @Date: 2021-08-20 11:05:39
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-20 11:21:55
 * @FilePath: /react-vblog/src/views/staff/components/TreeWidget.tsx
 */
import React from 'react';
import { Tree } from 'antd';
import { CaretDownOutlined, DownOutlined } from '@ant-design/icons';
const TreeWidget = () => {
	const onSelect = (selectedKeys: any, info: any) => {
    console.log('selected', selectedKeys, info);
  };
	return (
		<div className='my-tree-widget'>
			<Tree
        
        switcherIcon={<CaretDownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={[
          {
            title: '概况',
            key: '0-0',
            children: [
              {
                title: '查看与操作',
                key: '0-0-0',
                // children: [
                //   {
                //     title: 'leaf',
                //     key: '0-0-0-0',
                //   },
                //   {
                //     title: 'leaf',
                //     key: '0-0-0-1',
                //   },
                //   {
                //     title: 'leaf',
                //     key: '0-0-0-2',
                //   },
                // ],
              },
              {
                title: '智能助手',
                key: '0-0-1',
                children: [
                  {
                    title: '查看智能助手',
                    key: '0-0-1-0',
                  },
                ],
              },
              {
                title: '实时概况',
                key: '0-0-2',
                children: [
                  {
                    title: '查看实时概况',
                    key: '0-0-2-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-2-1',
                  },
                ],
              },
              {
                title: '常用功能',
                key: '0-0-3',
                children: [
                  {
                    title: '查看常用功能',
                    key: '0-0-3-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-3-1',
                  },
                ],
              },
            ],
          },
        ]}
      />
		</div>
	);
};

export default TreeWidget;
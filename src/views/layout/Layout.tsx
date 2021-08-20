/*
 * @Author: your name
 * @Date: 2021-08-17 16:36:35
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 12:18:11
 * @FilePath: /react-vblog/src/views/layout/Layout.tsx
 */
import React from 'react';
import './Layout.scss' ;
import { Layout } from 'antd';
import LayoutSider from './components/LayoutSider';
import LayoutContent from './components/LayoutContent';
import LayoutHeader from './components/LayoutHeader';

const { Header, Sider, Content } = Layout;
const LayoutPage = () => {
	return (
		<>
    <Layout>
      <Header >
        <LayoutHeader/>
      </Header>
      <Layout>
        <Sider>
          <LayoutSider/>
        </Sider>
        <Content>
          <LayoutContent/>
        </Content>
      </Layout>
    </Layout>
		</>

	);
};

export default LayoutPage;
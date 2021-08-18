/*
 * @Author: your name
 * @Date: 2021-08-17 16:36:35
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 00:59:44
 * @FilePath: /react-vblog/src/views/layout/Layout.tsx
 */
import React from 'react';
import './Layout.scss' ;
import { Layout } from 'antd';
import LayoutSider from './components/LayoutSider';
const { Header, Footer, Sider, Content } = Layout;
const LayoutPage = () => {
	return (
		<>
    <Layout>
      <Header style={{backgroundColor:'#20A0FF'}}>
        <h1>V部落博客管理平台</h1>
      </Header>
      <Layout>
        <Sider>
          <LayoutSider/>
        </Sider>
        <Content>
          <h1>Content</h1>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
		</>

	);
};

export default LayoutPage;
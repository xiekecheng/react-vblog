/*
 * @Author: your name
 * @Date: 2021-08-17 12:26:01
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-27 16:45:53
 * @FilePath: /react-vblog/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import App from './App'
import { BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { store } from '@/store'
import { Provider } from 'react-redux'
// 实现国际化
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

// import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(
	<BrowserRouter>
	  <ConfigProvider locale={zhCN}>
		<Provider store={store}>
			<App />
		</Provider>
		</ConfigProvider>
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

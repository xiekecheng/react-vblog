/*
 * @Author: your name
 * @Date: 2021-08-17 19:08:04
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 20:10:20
 * @FilePath: /react-vblog/src/api/user.js
 */
import axios from '@/utils/axios'
export const fetchLogin = (data) =>
	axios({
		url: '/antd/login',
		method: 'POST',
		data,
	})


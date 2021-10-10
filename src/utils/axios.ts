/*
 * @Author: your name
 * @Date: 2021-08-17 19:11:28
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 00:56:06
 * @FilePath: /react-vblog/src/utils/axios.ts
 */

import axios from 'axios'
const baseUrl =  'http://localhost:8012'
const version =  '/api/v1'
const instance = axios.create({
	baseURL: baseUrl + version,
	timeout: 5000,
	// headers: { 'X-Custom-Header': 'foobar' },
})

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error)
	}
)

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

export default instance

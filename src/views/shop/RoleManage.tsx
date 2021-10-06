/*
 * @Author: your name
 * @Date: 2021-08-20 10:02:05
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-08 19:55:36
 * @FilePath: /react-vblog/src/views/shop/RoleManage.tsx
 */

import React, { Component } from 'react'

// const RoleManage = () => {
// 	return (
// 		<div>
// 			<h1>角色管理</h1>
// 		</div>
// 	);
// };

class RoleManage extends Component<any,any> {
	constructor(props: any) {
		super(props)
		this.state = {
			age: 18,
			name: 'jack',
			date: new Date(),
			counter:0
		}
		this.handlerClick = this.handlerClick.bind(this)
		// this.state = {date: new Date()};
	}
	handlerClick(){
		console.log('this',this);
		
		this.setState((state: { counter: number },props: any)=>({
			counter:state.counter+1,
			date: new Date(),
			name:'rose'
		}))
	}
	render() {
		return (
			<div>
				<h1>角色管理</h1>
				<h2>name:{this.state.name}</h2>
				<h2>name:{this.state.age}</h2>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				<h2>counter{this.state.counter}</h2>
				<button onClick={this.handlerClick}>添加</button>
			</div>
		)
	}
}

export default RoleManage

import { rejects } from 'assert';
import { resolve } from 'dns';
import React, { useEffect, useState } from 'react';

const TestPage = () => {
	const [name,setName] = useState('jack')

	useEffect(()=>{
		console.log('componentDidMount');
		console.log('componentDidUpdate');
		return ()=>{
			console.log('componentWillUnmount');
		}
	})
	const handleClick = async ()=>{
		console.log('handleClick');
		// console.log(this);

		setTimeout(() => {
			console.log(name);
			setName('tom')
			console.log(name);
		}, 1000);
		// console.log(name);
		// new Promise(resolve,rejects).then(()=>{
		// 				setName('tom')
		// 	console.log(name);
		// })
		// await (setName('tom'))
		
		
		
	}
	return (
		<div>
			<h1>我是测试页面2</h1>
			<h2>{name}</h2>
			<button onClick={()=>handleClick()}>修改</button>
		</div>
	);
};

export default TestPage;
import React, { useEffect, useState } from 'react';

const TestPage = () => {
	let timer: NodeJS.Timeout
	// const [timerId,setTimerId] = useState(null)

	useEffect(()=>{
		timer = setInterval(()=>{
			console.log(new Date().toLocaleTimeString());
			
		},1000)

		return ()=>{
			clearInterval(timer)
		}
	})
	return (
		<div>
			<h1>我是测试页面3</h1>
		</div>
	);
};

export default TestPage;
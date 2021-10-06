import React, { useContext } from 'react';
import ThemeContext from './context.js';
const Children = (props: any) => {
	console.log(props);
	const changeName = props.changeName
	const context = useContext(ThemeContext)
	console.log(context);
	
	return (
		<div>
			<h1>我是子组件</h1>
			<h2>{props.name}</h2>
			<button onClick={changeName}>修改父类</button>
		</div>
	);
};

export default Children;
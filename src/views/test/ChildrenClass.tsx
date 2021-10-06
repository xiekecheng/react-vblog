// import { react } from '@babel/types';
import React from 'react';

// const ChildrenClass = () => {
// 	return (
// 		<div>
			
// 		</div>
// 	);
// };

class ChildrenClass extends React.Component<any,any>{
	constructor(props:any){
		super(props)
		console.log('子组件constructor');
		
	}
	componentDidMount(){
		console.log('子组件componentDidMount');
		
	}
	componentDidUpdate(){
		console.log('子组件componentDidUpdate');
	}
	componentWillUnmount(){
		console.log('子组件componentWillUnmount');
	}
	render(){
		console.log('子组件render');
		
		return (
			<div>
			<h1>类子组件</h1>
			</div>
		)
	}
}

export default ChildrenClass;
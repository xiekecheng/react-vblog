import React from 'react'
import Children from './Children';
import ChildrenClass from './ChildrenClass';
import ThemeContext from './context.js';
// const TestPage = () => {
// 	return (
// 		<div>
// 			<h1>我是测试页面1</h1>
// 		</div>
// 	);
// };
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
// const ThemeContext = React.createContext(themes.light)

class TestPage extends React.Component<any,any> {
	constructor(props:any){
		console.log('父组件constructor');
		
		super(props)
		this.state = {
			name:'jack',
			date: new Date(),
			age:18
		}
	}
	componentDidMount(){
		console.log('父组件componentDidMount');
		// setInterval(()=>{
		// 	this.tick()
		// },1000)
	}

	componentDidUpdate(){
		console.log('父组件componentDidUpdate');

	}

	componentWillUnmount(){
		console.log('父组件componentWillUnmount');
	}
	handleClick(){
		// console.log('handleClick');
		// console.log(this);
		this.setState({
			// date:new Date()
			// console.log();
			name:'tom'
		},()=>{
			console.log('callback',this.state.name);
		})
		this.setState((state: any,props: any)=>({date:new Date(),age:state.age+1}),()=>{
			console.log('时间更新');
		})
		console.log('setState之后',this.state.name);
	}
	tick(){
		this.setState({
			name:'tom'
		})
		this.setState({date:new Date()})
		console.log(this.state.name);
	}
	handleChangeName(){
		this.setState({name:'rose'})
		console.log('handleChangeName');
	}
	
	render() {
		console.log('执行父组件render');
		return (
			<div>
				<h1>我是测试页面1</h1>
				<h2>{`我的名字叫${this.state.name},我今年${this.state.age}`}</h2>
				<h3>{this.state.date.toLocaleTimeString()}</h3>
				<button onClick={this.handleClick.bind(this)}>修改</button>
				<h3>子组件</h3>
				<ThemeContext.Provider value={themes.dark}>
				<Children name={this.state.name} changeName={this.handleChangeName.bind(this)}/>
				</ThemeContext.Provider>
			</div>
		)
	}
}

export default TestPage

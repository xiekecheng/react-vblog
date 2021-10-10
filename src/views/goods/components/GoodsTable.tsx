import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import { useAppDispatch } from '@/hooks'
import { fetchGoodsList } from '@/store/reducer/goods'

const GoodsTable = () => {

	const dispatch  = useAppDispatch()
	
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [loading, setLoading] = useState(false)
	const [goodsList,setGoodsList] = useState([])
	const columns = [
		{
			title: '商品名称',
			dataIndex: 'title',
			width:200
		},
		{
			title: '图片',
			dataIndex: 'img',
			render:(text:string)=>(
				<img style={{width:'40px' , height:'40px'}} src={text} alt="" />
			)
		},
		{
			title: '描述',
			dataIndex: 'description',
		},
		{
			title: '价格',
			dataIndex: 'price',
		},
	]
	// const data = []
	// for (let i = 0; i < 46; i++) {
	// 	data.push({
	// 		key: i,
	// 		name: `商品 ${i}`,
	// 		description: 32,
	// 		image:`图片${i}`,
	// 		price: `价格 ${i}`,
	// 	})
	// }

	

	const start = () => {
		// this.setState({ loading: true });
		setLoading(true)
		// ajax request after empty completing
		setTimeout(() => {
			// this.setState({
			// 	selectedRowKeys: [],
			// 	loading: false,
			// })
			setSelectedRowKeys([])
			setLoading(false)
		}, 1000)
	}

	const onSelectChange = (selectedRowKeys: any) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys)
		// this.setState({ selectedRowKeys });
		setSelectedRowKeys(selectedRowKeys)
	}

	// const { loading, selectedRowKeys } = this.state;
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0


	useEffect(()=>{
		dispatch(fetchGoodsList()).then(res=>{
			console.log('res',res.payload);
			setGoodsList(res.payload)
		})
	},[dispatch])
	return (
		<div>
			<div style={{ marginBottom: 16 }}>
				<Button
					type='primary'
					onClick={start}
					disabled={!hasSelected}
					loading={loading}
				>
					Reload
				</Button>
				<span style={{ marginLeft: 8 }}>
					{hasSelected ? `选中 ${selectedRowKeys.length} 件商品` : ''}
				</span>
			</div>
			<Table rowSelection={rowSelection} columns={columns} dataSource={goodsList} />
		</div>
	)
}

export default GoodsTable

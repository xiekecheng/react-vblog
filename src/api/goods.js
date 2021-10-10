import axios from '@/utils/axios';

export const fetchProducts = params => axios({
	url: '/antmobile/getProductList',
	method: 'get',
	params
})
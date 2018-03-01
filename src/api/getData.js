import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/api' : 'http://192.168.1.129:8081/';

let func_axios = (url = '', data = {}, type = 'POST') => {
	console.log(data)
	return new Promise((resolve, reject) => {
		
		axios({
			method: type,
			url: url,
			data: JSON.stringify(data),
			 headers: {
				'Content-Type': 'application/json'
		   } 
		}).then(function(res) {
			if(res.status >= 200 && res.status < 300) {
				let obj = res
				if (typeof obj !== 'object') {
					obj = JSON.parse(obj);
				}
				resolve(obj)
			}
		}).catch((error) => {
			// new Error('desc');
			reject(error)
		})
	})
}

export default {
	login: (data,type) => func_axios(url + '/login', data, type),  // 登录
	auth: (type) => func_axios(url + '/addRole', {roleName:'99'}, type),  // 登录
}
export default {
	theme: {
		backgroundColor: '#304156',
		textColor: '#FFFFFF',
		activeTextColor: '#409EFF'
	},
	cdn: 'https://cdn.cloud.undsky.com',
	request: {
		baseURL: 'development' === process.env.NODE_ENV ? 'http://localhost:7001' : 'https://www.undsky.com',
		custom: {
			auth: true
		}
	},
	pageSize: 10, // 10,15,20,50,100
}

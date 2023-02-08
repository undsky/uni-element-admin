export default {
	theme: {
		backgroundColor: '#304156',
		textColor: '#FFFFFF',
		activeTextColor: '#409EFF'
	},
	cdn: '//d.cloud.undsky.com/lib',
	request: {
		baseURL: 'development' === process.env.NODE_ENV ? 'http://localhost:7001' : window.location.origin,
		timeout: 600000,
		custom: {
			auth: true
		}
	},
	pageSize: 10, // 10,15,20,50,100
}

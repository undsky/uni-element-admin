export default {
	cdn: 'https://cdn.cloud.undsky.com/',
	request: {
		baseURL: 'development' === process.env.NODE_ENV ? 'http://localhost:7001' : '/',
		withCredentials: true,
		custom: {
			auth: true
		}
	}
}

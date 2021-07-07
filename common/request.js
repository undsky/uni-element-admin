import Request from 'luch-request'
import store from '../store/index.js'

const defaultConfig = {
	baseURL: 'development' === process.env.NODE_ENV ? 'http://localhost:7001' : '/',
	withCredentials: true,
	custom: {
		auth: true
	}
}

const http = new Request(defaultConfig)

http.interceptors.request.use(async config => {
	// if (config.custom.auth) {
	// 	if (!store.state.token) {
	// 		const token = uni.getStorageSync('token')
	// 		if (token) {
	// 			this.$store.commit('setToken', token)
	// 		} else {
	// 			uni.navigateTo({
	// 				url: '/pages/auth/auth'
	// 			})
	// 			return Promise.reject(config)
	// 		}
	// 	}
	// 	config.header.Authorization = 'Bearer ' + store.state.token
	// }
	return config
}, async config => {
	return Promise.reject(config)
})

http.interceptors.response.use(async response => {
	if ('development' === process.env.NODE_ENV) {
		console.log(response)
	}
	if (200 == response.data.code) {
		return response.data.data
	} else {
		return Promise.reject(response)
	}
}, async response => {
	if (response.data && ['credentials_required', 'invalid_token', 'revoked_token'].includes(response
			.data.code)) {
		store.commit('clearToken')
		uni.navigateTo({
			url: '/pages/auth/auth'
		})
	}
	return Promise.reject(response)
})

function get(url, params, options) {
	return http.get(url, Object.assign({}, {
		params
	}, false === options ? {
		custom: {
			auth: false
		}
	} : options))
}

async function post(url, data, options) {
	return await http.post(url, data, false === options ? {
		custom: {
			auth: false
		}
	} : options)
}

export default {
	defaultConfig,
	get,
	post
}

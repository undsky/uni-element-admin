import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import NProgress from 'nprogress'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.fullPath != from.fullPath) {
		NProgress.start()
		if ('development' === process.env.NODE_ENV) {
			console.log('路由开始')
			console.log(from)
		}
		next();
	}
});

// 全局路由后置守卫
router.afterEach((to, from) => {
	if ('development' === process.env.NODE_ENV) {
		console.log('路由结束')
		console.log(to)
	}
	NProgress.done()
})

export {
	router,
	RouterMount
}

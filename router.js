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
	if (to.path != from.path) {
		console.log('跳转开始')
		console.log(to)
		console.log(from)
		NProgress.start()
		next();
	}
});

// 全局路由后置守卫
router.afterEach((to, from) => {
	NProgress.done()
	console.log('跳转结束')
})

export {
	router,
	RouterMount
}

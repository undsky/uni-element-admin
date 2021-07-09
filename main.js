import Vue from 'vue'
import App from './App'

import {
	router,
	RouterMount
} from './router.js'
Vue.use(router)

import ElementUI from 'element-ui';
import './element-ui.scss'
Vue.use(ElementUI)

import utils from './common/utils.js'
Vue.prototype.$utils = utils

import VXETable from 'vxe-table'
import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table/lib/style.css'
VXETable.use(VXETablePluginElement)
Vue.use(VXETable)

import http from './common/request.js'
Vue.prototype.$http = http

import config from './common/config.js'
Vue.prototype.$config = config

import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

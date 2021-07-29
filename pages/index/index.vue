<template>
	<view class="padding">
		<h3>ID Card</h3>
		<view>deviceId：{{deviceId}}</view>
		<view>fingerprint：{{fingerprint}}</view>
		<view>model：{{model}}</view>
		<view>platform：{{platform}}</view>
		<view>system：{{system}}</view>
		<view>env：{{env}}</view>
		<view>ip：{{ip}}</view>
		<view>version：{{version}}</view>
	</view>
</template>

<script>
	import FingerprintJS from '@fingerprintjs/fingerprintjs';
	import Driver from 'driver.js';
	import 'driver.js/dist/driver.min.css';

	export default {
		name: 'index',
		data() {
			return {
				deviceId: '',
				fingerprint: '',
				model: '',
				platform: '',
				system: '',
				env: '',
				ip: '',
				version: ''
			};
		},
		methods: {
			guide() {
				const driver = new Driver({
					prevBtnText: "上一步",
					nextBtnText: "下一步",
					doneBtnText: "我知道了",
					closeBtnText: "关闭",
					onReset: ele => {
						uni.setStorageSync('guide', true)
					}
				});
				driver.defineSteps([{
					element: '#top-window',
					popover: {
						title: '导航栏',
						description: '导航栏',
						position: 'bottom'
					}
				}, {
					element: '#left-window',
					popover: {
						title: '菜单',
						description: '菜单',
						position: 'right'
					}
				}])
				driver.start()
			}
		},
		onLoad: async function() {
			const {
				deviceId,
				model,
				platform,
				system,
				env,
				screenWidth
			} = getApp().globalData.systemInfo
			this.deviceId = deviceId;
			this.model = model;
			this.platform = platform;
			this.system = system;
			this.env = env;

			const fpPromise = FingerprintJS.load()
			const fp = await fpPromise
			const result = await fp.get()
			this.fingerprint = result.visitorId

			const {
				ip,
				version
			} = await this.$http.post('/api/version', {
				deviceId,
				model,
				platform,
				system,
				env,
				fingerprint: this.fingerprint
			}, false);
			this.ip = ip;
			this.version = version;

			if (screenWidth > 767) {
				const hasGuide = uni.getStorageSync('guide')
				if (!hasGuide) {
					this.guide()
				}
			}
		}
	};
</script>

<style></style>

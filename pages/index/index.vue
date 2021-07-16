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
		methods: {},
		onLoad: async function() {
			const {
				deviceId,
				model,
				platform,
				system,
				env
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
				deviceId
			}, false);
			this.ip = ip;
			this.version = version;
		}
	};
</script>

<style></style>

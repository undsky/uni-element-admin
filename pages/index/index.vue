<template>
	<view class="padding">
		<h3>ID Card</h3>
		<view>deviceId：{{deviceId}}</view>
		<view>model：{{model}}</view>
		<view>platform：{{platform}}</view>
		<view>system：{{system}}</view>
		<view>env：{{env}}</view>
		<view>ip：{{ip}}</view>
		<view>token：{{token}}</view>
		<view>version：{{version}}</view>
	</view>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				deviceId: '',
				model: '',
				platform: '',
				system: '',
				env: '',
				ip: '',
				token: '',
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

			const {
				ip,
				token,
				version
			} = await this.$http.post('/api/version', {
				deviceId
			}, false);
			this.ip = ip;
			this.token = token;
			this.version = version;
		}
	};
</script>

<style></style>

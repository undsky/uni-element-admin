<template>
	<view class="padding">
		<h3>ID Card</h3>
		<view>visitorId：{{visitorId}}</view>
		<view>ip：{{ip}}</view>
		<view>token：{{token}}</view>
		<view>version：{{version}}</view>
	</view>
</template>

<script>
	import FingerprintJS from '@fingerprintjs/fingerprintjs';

	export default {
		name: 'index',
		data() {
			return {
				visitorId: '',
				ip: '',
				token: '',
				version: ''
			};
		},
		methods: {},
		onLoad: async function() {
			const {
				ip,
				version
			} = await this.$http.post('/api/version');
			this.ip = ip;
			this.version = version;

			this.$nextTick(async () => {
				const fpPromise = FingerprintJS.load()
				const fp = await fpPromise
				const result = await fp.get()
				this.visitorId = result.visitorId
			})
		}
	};
</script>

<style></style>

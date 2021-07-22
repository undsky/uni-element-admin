<template>
	<view>
		<image :src="qrcode" style="width: 200px; height: 200px;"></image>
	</view>
</template>

<script>
	import QRCode from 'qrcode'

	export default {
		data() {
			return {
				qrcode: null
			}
		},
		methods: {

		},
		onLoad: async function() {
			this.qrcode = await QRCode.toDataURL('https://www.undsky.com')
		}
	}
</script>

<style>

</style>

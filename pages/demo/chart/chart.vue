<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'https://demo.ucharts.cn/#/'
			}
		},
		methods: {

		},
		onLoad: function() {
			if (getApp().globalData.isXS) {
				this.url = 'https://www.ucharts.cn/H5/#/'
			}
		}
	}
</script>

<style>

</style>

<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: undefined
			}
		},
		methods: {

		},
		onLoad: function(options) {
			const {
				title,
				url
			} = options;

			if (title) {
				uni.setNavigationBarTitle({
					title
				});
			}

			this.url = decodeURIComponent(url);
		}
	}
</script>

<style>

</style>

<template>
	<view>v{{ version }}</view>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {
			version: ''
		};
	},
	methods: {},
	onLoad: async function() {
		const result = await this.$http.post('/api/version');
		this.version = result.version;
	}
};
</script>

<style></style>

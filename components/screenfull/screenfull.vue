<template>
	<el-tooltip :content="isFullscreen ? '退出全屏' : '全屏'" placement="bottom">
		<i @click="click" :class="isFullscreen ? 'vxe-icon--zoomout' : 'el-icon-full-screen'"></i>
	</el-tooltip>
</template>

<script>
	import screenfull from 'screenfull';

	export default {
		name: "screenfull",
		data() {
			return {
				isFullscreen: false,
			};
		},
		methods: {
			change() {
				this.isFullscreen = screenfull.isFullscreen
			},
			click() {
				screenfull.toggle();
			},
		},
		mounted: function() {
			screenfull.on('change', this.change)
		},
		beforeDestroy: function() {
			screenfull.off('change', this.change)
		}
	}
</script>

<style>

</style>

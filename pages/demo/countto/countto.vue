<template>
	<view>
		<countTo :startVal="startVal" :endVal="endVal"></countTo>
	</view>
</template>

<script>
	import countTo from 'vue-count-to';

	export default {
		name: 'countto',
		components: {
			countTo
		},
		data() {
			return {
				startVal: 0,
				endVal: this.$utils.now()
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>

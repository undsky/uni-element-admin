<template>
	<view>
		<map :latitude="lat" :longitude="long" :markers="markers" class="main" style="width: 100%;"></map>
	</view>
</template>

<script>
	export default {
		name: 'tencentMap',
		data() {
			return {
				lat: null,
				long: null,
				markers: []
			}
		},
		methods: {

		},
		onLoad: function() {
			uni.getLocation({
				type: 'gcj02',
				success: ({
					latitude,
					longitude
				}) => {
					this.lat = latitude
					this.long = longitude

					this.markers = [{
						id: 0,
						latitude,
						longitude
					}]
				},
				fail: err => {
					console.log(err)
				}
			});
		}
	}
</script>

<style>

</style>

<template>
	<div id="ss"></div>
</template>

<script>
	import S from './shape-shifter';

	export default {
		name: "mc-shape-shifter",
		data() {
			return {

			};
		},
		mounted: function() {
			const canvas = document.createElement('canvas')
			document.getElementById('ss').append(canvas)
			S.init(canvas);
			S.Drawing.loop(function() {
				S.Shape.render();
			});
		},
		destroyed() {
			S.Drawing.cancelAnimationFrame();
		},
		methods: {
			simulate(string) {
				S.UI.simulate(string);
			}
		}
	}
</script>

<style>

</style>

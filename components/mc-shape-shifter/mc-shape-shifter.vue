<template>
	<canvas id="ss"></canvas>
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
			S.init(document.getElementById('ss').getElementsByTagName('canvas')[0]);
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

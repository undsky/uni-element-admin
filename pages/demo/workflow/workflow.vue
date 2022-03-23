<template>
	<div class="container" ref="container"></div>
</template>

<script>
	import LogicFlow from "@logicflow/core";
	import "@logicflow/core/dist/style/index.css";

	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad: async function(options) {
			this.$nextTick(() => {
				this.lf = new LogicFlow({
					container: this.$refs.container,
					grid: true
				});
				this.lf.render();
			})
		},
	};
</script>
<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100vh;
	}
</style>

<template>
	<view class="login-container">
		<mc-shape-shifter class="hidden-sm-and-down" ref="shapeShifter" style="width: 60vw; height: 100vh">
		</mc-shape-shifter>
		<div class="content flex flex-align-center flex-justify-center"
			:style="{ width: (isXS ? '100' : '40') + 'vw' }">
			<view class="login-box margin-lr-lg">
				<mc-login theme="warning"></mc-login>
			</view>
		</div>
	</view>
</template>

<script>
	import login1 from '@/static/login1.png';

	export default {
		data() {
			return {
				isXS: false,
				simulateArr: ["#icon " + login1, "uni-psyduck-admin"],
				simulateIndex: 0,
				timer: null,
			};
		},
		methods: {
			clickHandler() {
				this.$refs.shapeShifter.simulate(this.simulateArr[this.simulateIndex]);
				this.simulateIndex = (this.simulateIndex + 1) % 2;
			},
			initTimer() {
				this.clearTimer();
				this.timer = setInterval(() => {
					this.clickHandler();
				}, 1000 * 5);
			},
			clearTimer() {
				if (this.timer) {
					clearInterval(this.timer);
					this.timer = null;
				}
			},
			doVisibilitychange() {
				// 页面变为不可见时触发
				if (document.visibilityState == "hidden") {
					this.clearTimer();
				}
				// 页面变为可见时触发
				if (document.visibilityState == "visible") {
					this.initTimer();
				}
			},
		},
		onLoad: function() {
			const {
				isXS
			} = getApp().globalData.systemInfo;
			this.isXS = isXS;

			if (!this.isXS)
				this.$nextTick(() => {
					this.$refs.shapeShifter.simulate(this.simulateArr[this.simulateIndex]);
					this.simulateIndex = (this.simulateIndex + 1) % 3;
					this.initTimer();
					// 当页面不可见时，清空定时器
					document.addEventListener("visibilitychange", this.doVisibilitychange);
				});
		},
		beforeDestroy: function() {
			this.clearTimer();
			document.removeEventListener("visibilitychange", this.doVisibilitychange);
		},
	};
</script>

<style lang="scss" scoped>
	.login-container {
		position: relative;
		height: 100vh;
		background: -webkit-linear-gradient(top, #fff6f2 0, #fbdd9f 120%);

		.content {
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;

			.login-box {
				width: 100%;
				padding: 50px 15px;
				background-color: #ffffff;
			}
		}
	}
</style>
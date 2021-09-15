<template>
	<view class="login-container">
		<shape-shifter ref="shapeShifter" style="width: 100vw; height: 100vh;"></shape-shifter>
		<div class="content">
		</div>
		<div class="info-footer">
			<div class="flex flex-column flex-justify-center">
				<el-link href="https://www.undsky.com/" :underline="false" target="_blank">© 2019-2021 undsky MIT
					license
				</el-link>
				<el-link href="https://beian.miit.gov.cn/" :underline="false" target="_blank">鲁ICP备14024938号</el-link>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				simulateArr: ['#icon /static/login1.png', 'mc-uniAdmin', ''],
				simulateIndex: 0,
				timerInter: null,
			}
		},
		methods: {
			clickHandler() {
				this.$refs.shapeShifter.simulate(this.simulateArr[this.simulateIndex]);
				this.simulateIndex = (this.simulateIndex + 1) % 3;
			},
			initTimer() {
				this.clearTimer();
				this.timerInter = setInterval(() => {
					this.clickHandler();
				}, 1000 * 5);
			},
			clearTimer() {
				if (this.timerInter) {
					clearInterval(this.timerInter);
					this.timerInter = null;
				}
			},
			doVisibilitychange() {
				// 页面变为不可见时触发
				if (document.visibilityState == 'hidden') {
					this.clearTimer();
				}
				// 页面变为可见时触发
				if (document.visibilityState == 'visible') {
					this.initTimer();
				}
			},
		},
		onLoad: function() {
			this.$nextTick(() => {
				this.$refs.shapeShifter.simulate(this.simulateArr[this.simulateIndex]);
				this.simulateIndex = (this.simulateIndex + 1) % 3;
				this.initTimer();
				// 当页面不可见时，清空定时器
				document.addEventListener('visibilitychange', this.doVisibilitychange);
			})
		},
		destroyed() {
			this.clearTimer();
			document.removeEventListener('visibilitychange', this.doVisibilitychange);
		}
	}
</script>

<style lang="scss" scoped>
	.login-container {
		position: relative;
		height: 100vh;
		background: -webkit-linear-gradient(top, #fff6f2 0, #fbdd9f 120%);

		.content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
		}

		.info-footer {
			position: absolute;
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			line-height: 14px;
			height: 60px;
		}
	}
</style>

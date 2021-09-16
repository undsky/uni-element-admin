<template>
	<div class="login">
		<div class="login-weaper">
			<div class="login-left hidden-sm-and-down">
				<div class="login-time">{{ time.txt }}</div>
				<div class="login-left-box">
					<div>
						<div class="logo">mc-uniAdmin</div>
						<h2 class="title">基于 uniapp 的后台框架</h2>
						<div class="msg">
							<div class="msg-txt">{{ quotation.content }}</div>
							<div class="msg-author">
								<span>{{ quotation.name }}</span>
								<span>{{ quotation.comeFrom }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="login-right" :style="{width:isXS ? 'auto' : '450px'}">
				<mc-login></mc-login>
			</div>
		</div>
		<div class="particles">
			<Particles style="width: 100%; height: 100%;" id="tsparticles" :options="options"></Particles>
		</div>
	</div>
</template>

<script>
	import particles from './particles'
	import quotations from './quotations'

	export default {
		data() {
			return {
				isXS: false,
				options: particles.noise,
				time: {
					txt: '',
					fun: null,
				},
				quotation: {}
			};
		},
		methods: {
			initRandomQuotations() {
				this.quotation = quotations[Math.floor(Math.random() * quotations.length)];
			},
			initTime() {
				this.time.txt = this.$utils.toDateString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒 星期E 第q季度');
				this.time.fun = setInterval(() => {
					this.time.txt = this.$utils.toDateString(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒 星期E 第q季度');
				}, 1000);
			},
		},
		created() {
			this.initTime();
		},
		mounted() {
			this.initRandomQuotations();
		},
		onLoad: function() {
			const {
				isXS
			} = getApp().globalData.systemInfo
			this.isXS = isXS
		},
		destroyed() {
			clearInterval(this.time.fun);
		}
	};
</script>

<style scoped lang="scss">
	.login {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		position: relative;

		.particles {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.login-weaper {
			margin: auto;
			height: 450px;
			display: flex;
			box-sizing: border-box;
			position: relative;
			z-index: 1;
			border: none;
			box-shadow: 0 1px 4px rgba(0, 21, 41, 0.09);

			.login-left {
				width: 450px;
				padding: 20px;
				font-size: 16px;
				color: #fff;
				position: relative;
				background-color: rgba(64, 158, 255, 0.9);
				display: flex;
				flex-direction: column;
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;

				.login-time {
					width: 100%;
					color: #fff;
					opacity: 0.9;
					font-size: 14px;
					overflow: hidden;
				}

				.login-left-box {
					flex: 1;
					overflow: hidden;
					position: relative;
					z-index: 1;
					display: flex;
					align-items: center;
					padding: 80px 45px;

					.logo {
						font-size: 22px;
						margin-bottom: 10px;
					}

					.title {
						color: #fff;
						font-weight: 300;
						letter-spacing: 2px;
						font-size: 16px;
					}

					.msg {
						color: #fff;
						font-size: 13px;
						margin-top: 35px;

						.msg-author {
							opacity: 0.7;
							text-align: right;

							span:last-of-type {
								margin-left: 15px;
							}
						}

						.msg-txt {
							margin-bottom: 15px;
							line-height: 22px;
						}
					}
				}
			}

			.login-right {
				width: 450px;
				padding: 20px;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: rgba(255, 255, 255, 1);
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
			}
		}
	}
</style>

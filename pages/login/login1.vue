<template>
	<view class="login-container">
		<shape-shifter ref="shapeShifter" style="width: 60vw; height: 100vh;"></shape-shifter>
		<div class="content">
			<el-tabs v-model="activeTab" stretch>
				<el-tab-pane name="account">
					<span slot="label">
						<i class="el-icon-user margin-right-sm"></i>
						{{i18n.accountLogin}}
					</span>
					<el-form ref="accountForm" :model="accountForm" :rules="accountRules" size="medium"
						label-width="75px" label-position="left">
						<el-form-item :label="i18n.account" prop="account">
							<el-input v-model="accountForm.account" :placeholder="i18n.please+i18n.account">
							</el-input>
						</el-form-item>
						<el-form-item :label="i18n.password" prop="password">
							<el-input v-model="accountForm.password" type="password"
								:placeholder="i18n.please+i18n.password" show-password>
							</el-input>
						</el-form-item>
						<el-form-item :label="i18n.captcha" prop="captcha">
							<el-input v-model="accountForm.captcha" :placeholder="i18n.please+i18n.captcha">
								<img slot="suffix" @click="changeCaptcha" :src="captcha" class="captcha" />
							</el-input>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane name="phone">
					<span slot="label">
						<i class="el-icon-mobile-phone margin-right-sm"></i>
						{{i18n.phoneLogin}}
					</span>
					<el-form ref="phoneForm" :model="phoneForm" :rules="phoneRules" size="medium" label-width="75px"
						label-position="left">
						<el-form-item :label="i18n.phone" prop="phone">
							<el-input v-model="phoneForm.phone" :placeholder="i18n.please+i18n.phone"></el-input>
						</el-form-item>
						<el-form-item :label="i18n.captcha" prop="smscode">
							<el-input v-model="phoneForm.smscode" :placeholder="i18n.please+i18n.smsCode">
								<el-button @click="getSmscode" :disabled="0!=smsCount" slot="suffix" type="text">
									{{smsCount ? smsCount+i18n.reGetCode : i18n.getCode}}
								</el-button>
							</el-input>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane v-if="!isXS" name="qrcode">
					<span slot="label">
						<i class="el-icon-full-screen margin-right-sm"></i>
						{{i18n.scanLogin}}
					</span>
					<view class="flex flex-justify-center">
						<img src="https://undsky.com/public/img/wx-undsky.jpeg" />
					</view>
				</el-tab-pane>
			</el-tabs>
			<view v-show="'qrcode' != activeTab" class="flex">
				<el-button class="flex1" type="warning" @click="login">{{i18n.login}}</el-button>
			</view>
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
	import keyboardJS from 'keyboardjs';

	export default {
		data() {
			return {
				simulateArr: ['#icon /static/login1.png', 'mc-uniAdmin', ''],
				simulateIndex: 0,
				timerInter: null,
				deviceId: '',
				isXS: false,
				activeTab: 'account',
				captcha: '',
				accountForm: {
					account: '',
					password: '',
					captcha: ''
				},
				accountRules: undefined,
				smsCount: 0,
				phoneForm: {
					phone: '',
					smscode: ''
				},
				phoneRules: undefined
			}
		},
		computed: {
			i18n() {
				return this.$t('login')
			}
		},
		watch: {
			i18n() {
				this.changeLanguage()
			}
		},
		methods: {
			changeLanguage() {
				const {
					please,
					account,
					password,
					captcha,
					phone,
					realPhone,
					smsCode
				} = this.i18n

				this.accountRules = {
					account: [{
						required: true,
						message: please + account,
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: please + password,
						trigger: 'blur'
					}],
					captcha: [{
						required: true,
						message: please + captcha,
						trigger: 'blur'
					}]
				}

				this.phoneRules = {
					phone: [{
						required: true,
						message: please + phone,
						trigger: 'blur'
					}, {
						pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
						message: please + realPhone,
						trigger: ['blur', 'change']
					}],
					smscode: [{
						required: true,
						message: please + smsCode,
						trigger: 'blur'
					}],
				}
			},
			changeCaptcha() {
				this.captcha = `${this.$config.request.baseURL}/captcha?deviceId=${this.deviceId}&t=${this.$utils.now()}`
			},
			getSmscode() {
				this.$refs.phoneForm.validateField('phone', err => {
					if (!err) {
						this.smsCount = 60
						const interval = setInterval(() => {
							this.smsCount--
							if (0 == this.smsCount) {
								clearInterval(interval)
							}
						}, 1000)
					}
				})
			},
			login: async function() {
				this.$refs[this.activeTab + 'Form'].validate(valid => {
					if (valid) {
						this.$store.commit('setToken', this.deviceId)
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				})
			},
			handleEnter(e) {
				if ('qrcode' != this.activeTab) this.login()
			},
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
			this.changeLanguage()
			this.changeCaptcha()

			const {
				deviceId,
				isXS
			} = getApp().globalData.systemInfo
			this.isXS = isXS
			this.deviceId = deviceId || this.$utils.now()

			keyboardJS.bind('enter', this.handleEnter);

			this.$nextTick(() => {
				this.$refs.shapeShifter.simulate(this.simulateArr[this.simulateIndex]);
				this.simulateIndex = (this.simulateIndex + 1) % 3;
				this.initTimer();
				// 当页面不可见时，清空定时器
				document.addEventListener('visibilitychange', this.doVisibilitychange);
			})
		},
		beforeDestroy: function() {
			this.clearTimer();
			document.removeEventListener('visibilitychange', this.doVisibilitychange);
			keyboardJS.unbind('enter', this.handleEnter);
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .el-tabs__item.is-active {
		color: #E6A23C !important;
	}

	/deep/ .el-tabs__active-bar {
		background-color: #E6A23C !important;
	}

	.login-container {
		position: relative;
		height: 100vh;
		background: -webkit-linear-gradient(top, #fff6f2 0, #fbdd9f 120%);

		.content {
			position: absolute;
			top: 0;
			right: 0;
			width: 40vw;

			.captcha {
				width: 100px;
				height: 36px;
			}
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

<template>
	<view class="login">
		<el-row>
			<el-col class="container padding" :xs="{ span: 20, offset: 2 }" :sm="{ span: 20, offset: 2 }"
				:md="{ span: 12, offset: 6 }" :lg="{ span: 8, offset: 8 }" :xl="{ span: 8, offset: 8 }">
				<view class="title">
					mc-uniAdmin
					<lang-select dropMenu style="float: right;"></lang-select>
				</view>
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
					<el-button class="flex1" type="primary" @click="login">{{i18n.login}}</el-button>
				</view>
			</el-col>
		</el-row>
		<view class="footer flex flex-column flex-justify-center padding-bottom">
			<el-link href="https://www.undsky.com/" :underline="false" target="_blank">© 2019-2021 undsky MIT license
			</el-link>
			<el-link href="https://beian.miit.gov.cn/" :underline="false" target="_blank">鲁ICP备14024938号</el-link>
		</view>
	</view>
</template>

<script>
	import keyboardJS from 'keyboardjs';

	export default {
		data() {
			return {
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
			};
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
			}
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
		},
		beforeDestroy: function() {
			keyboardJS.unbind('enter', this.handleEnter);
		}
	};
</script>

<style lang="scss" scoped>
	.login {
		width: 100vw;
		height: 100vh;
		background: url(../../static/bg.jpeg) center center fixed no-repeat;
		background-size: cover;

		.container {
			background-color: #ffffff;
			border-radius: 10px;
			position: relative;
			margin-top: calc((100vh - 500px) / 2);

			.title {
				font-size: 30px;
				padding-bottom: 30px;
				text-align: center;
			}

			.captcha {
				width: 100px;
				height: 36px;
			}
		}

		.footer {
			position: fixed;
			width: 100%;
			bottom: 0;
			bottom: constant(safe-area-inset-bottom);
			bottom: env(safe-area-inset-bottom);
		}
	}
</style>

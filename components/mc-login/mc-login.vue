<template>
	<view>
		<mc-lang dropMenu style="float: right; z-index: 999999999; cursor: pointer;"></mc-lang>
		<el-tabs v-model="activeTab" stretch>
			<el-tab-pane name="account">
				<span slot="label">
					<i class="el-icon-user margin-right-sm"></i>
					{{ i18n.accountLogin }}
				</span>
				<el-form ref="accountForm" :model="accountForm" :rules="accountRules"
					:validate-on-rule-change="validate" size="medium">
					<el-form-item prop="account">
						<el-input v-model="accountForm.account" :placeholder="this.message.account"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input v-model="accountForm.password" type="password" :placeholder="this.message.password"
							show-password></el-input>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane name="phone">
				<span slot="label">
					<i class="el-icon-mobile-phone margin-right-sm"></i>
					{{ i18n.phoneLogin }}
				</span>
				<el-form ref="phoneForm" :model="phoneForm" :rules="phoneRules" :validate-on-rule-change="validate"
					size="medium">
					<el-form-item prop="phone">
						<el-input v-model="phoneForm.phone" :placeholder="this.message.phone"></el-input>
					</el-form-item>
					<el-form-item prop="captcha">
						<el-input v-model="phoneForm.captcha" :placeholder="this.message.captcha">
							<el-button @click="getCaptcha" :disabled="0 != count" slot="suffix" type="text">
								{{ count ? count + i18n.reGetCaptcha : i18n.getCaptcha }}
							</el-button>
						</el-input>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane v-if="!isXS" name="qrcode">
				<span slot="label">
					<i class="el-icon-full-screen margin-right-sm"></i>
					{{ i18n.scanLogin }}
				</span>
				<view class="flex flex-justify-center"><img :src="qrcode" /></view>
			</el-tab-pane>
		</el-tabs>
		<view v-show="'qrcode' != activeTab" class="flex">
			<el-button class="flex1" :type="theme" @click="login">{{ i18n.login }}</el-button>
		</view>
		<view class="footer flex flex-column flex-justify-center padding-bottom">
			<el-link href="https://www.undsky.com/" :underline="false" target="_blank">© 2019-2021 undsky MIT license
			</el-link>
			<el-link href="https://beian.miit.gov.cn/" :underline="false" target="_blank">鲁ICP备14024938号</el-link>
		</view>
	</view>
</template>

<script>
	import keyboardJS from 'keyboardjs';
	import QRCode from 'qrcode';

	export default {
		name: 'mc-login',
		props: {
			theme: {
				type: String,
				default: 'primary',
				validator: function(value) {
					return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
				}
			}
		},
		data() {
			return {
				deviceId: '',
				isXS: false,
				activeTab: 'account',
				validate: false,
				accountForm: {
					account: '',
					password: ''
				},
				accountRules: undefined,
				count: 0,
				phoneForm: {
					phone: '',
					captcha: ''
				},
				phoneRules: undefined,
				colors: {
					primary: '#409EFF',
					success: '#67C23A',
					warning: '#E6A23C',
					danger: '#F56C6C',
					info: '#909399'
				},
				qrcode: null,
				message: {}
			};
		},
		computed: {
			i18n() {
				return this.$t('login');
			}
		},
		watch: {
			i18n() {
				this.validate = true;
				this.changeLanguage();
			}
		},
		methods: {
			changeLanguage() {
				const {
					please,
					account,
					username,
					email,
					password,
					captcha,
					phone,
					realPhone
				} = this.i18n;

				this.message = {
					account: `${please}${account}`,
					password: `${please}${password}`,
					phone: `${please}${phone}`,
					captcha: `${please}${captcha}`,
				}

				this.accountRules = {
					account: [{
						required: true,
						message: this.message.account,
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: this.message.password,
						trigger: 'blur'
					}]
				};

				this.phoneRules = {
					phone: [{
							required: true,
							message: this.message.phone,
							trigger: 'blur'
						},
						{
							pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
							message: please + realPhone,
							trigger: ['blur', 'change']
						}
					],
					captcha: [{
						required: true,
						message: this.message.captcha,
						trigger: 'blur'
					}]
				};
			},
			getCaptcha() {
				this.$refs.phoneForm.validateField('phone', err => {
					if (!err) {
						this.count = 60;
						const interval = setInterval(() => {
							this.count--;
							if (0 == this.count) {
								clearInterval(interval);
							}
						}, 1000);
					}
				});
			},
			login: async function() {
				const _form = this.activeTab + 'Form'
				this.$refs[_form].validate(async valid => {
					if (valid) {
						const loading = this.$loading()
						try {
							const {
								token
							} = await this.$http.post('/auth/admin/' + this.activeTab, this[
								_form], false)

							if (token) {
								this.$store.commit('setToken', token);
								uni.reLaunch({
									url: '/pages/index/index'
								});
							}
						} catch (e) {} finally {
							loading.close()
						}
					}
				});
			},
			handleEnter(e) {
				if ('qrcode' != this.activeTab) this.login();
			}
		},
		mounted: async function() {
			this.changeLanguage();
			this.qrcode = await QRCode.toDataURL('https://www.undsky.com');

			const {
				deviceId,
				isXS
			} = getApp().globalData.systemInfo;
			this.isXS = isXS;
			this.deviceId = deviceId || this.$utils.now();

			keyboardJS.bind('enter', this.handleEnter);

			this.$nextTick(() => {
				this.$el.style.setProperty('--color', this.colors[this.theme]);
			});
		},
		beforeDestroy: function() {
			keyboardJS.unbind('enter', this.handleEnter);
		}
	};
</script>

<style lang="scss" scoped>
	/deep/ .el-tabs__item.is-active {
		color: #{'var(--color)'} !important;
	}

	/deep/ .el-tabs__active-bar {
		background-color: #{'var(--color)'} !important;
	}

	.footer {
		position: fixed;
		width: 100%;
		left: 0;
		right: 0;
		bottom: 0;
		bottom: constant(safe-area-inset-bottom);
		bottom: env(safe-area-inset-bottom);
	}
</style>

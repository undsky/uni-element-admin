<template>
	<view class="login">
		<el-row>
			<el-col class="container padding" :xs="{ span: 20, offset: 2 }" :sm="{ span: 20, offset: 2 }"
				:md="{ span: 12, offset: 6 }" :lg="{ span: 8, offset: 8 }" :xl="{ span: 8, offset: 8 }">
				<view class="title">
					<b>MC</b>
					-framework
				</view>
				<el-tabs v-model="activeTab" stretch>
					<el-tab-pane name="account">
						<span slot="label">
							<i class="el-icon-user margin-right-sm"></i>
							账号密码登录
						</span>
						<el-form ref="accountForm" :model="accountForm" :rules="accountRules" size="medium"
							label-width="70px" label-position="left">
							<el-form-item label="账号" prop="account">
								<el-input v-model="accountForm.account" placeholder="请输入账号"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="password">
								<el-input v-model="accountForm.password" type="password" placeholder="请输入密码"
									show-password>
								</el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="captcha">
								<el-input v-model="accountForm.captcha" placeholder="请输入验证码">
									<img slot="suffix" @click="changeCaptcha" :src="captcha" class="captcha" />
								</el-input>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane name="phone">
						<span slot="label">
							<i class="el-icon-mobile-phone margin-right-sm"></i>
							手机号登录
						</span>
						<el-form ref="phoneForm" :model="phoneForm" :rules="phoneRules" size="medium" label-width="70px"
							label-position="left">
							<el-form-item label="手机号" prop="phone">
								<el-input v-model="phoneForm.phone" placeholder="请输入手机号"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="smscode">
								<el-input v-model="phoneForm.smscode" placeholder="请输入短信验证码">
									<el-button @click="getSmscode" :disabled="0!=smsCount" slot="suffix" type="text">
										{{smsCount ? smsCount+'秒后重新获取' : '获取验证码'}}
									</el-button>
								</el-input>
							</el-form-item>
						</el-form>
					</el-tab-pane>
					<el-tab-pane v-if="!isXS" name="qrcode">
						<span slot="label">
							<i class="el-icon-full-screen margin-right-sm"></i>
							扫码登录
						</span>
						<view class="flex flex-justify-center">
							<img src="https://undsky.com/public/img/wx-undsky.jpeg" />
						</view>
					</el-tab-pane>
				</el-tabs>
				<view v-show="'qrcode' != activeTab" class="flex">
					<el-button class="flex1" type="primary" @click="login">登录</el-button>
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
		name: 'login',
		data() {
			return {
				isXS: false,
				activeTab: 'account',
				captcha: '',
				accountForm: {
					account: '',
					password: '',
					captcha: ''
				},
				accountRules: {
					account: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				},
				smsCount: 0,
				phoneForm: {
					phone: '',
					smscode: ''
				},
				phoneRules: {
					phone: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}, {
						pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
						message: '请输入正确的手机号',
						trigger: ['blur', 'change']
					}],
					smscode: [{
						required: true,
						message: '请输入短信验证码',
						trigger: 'blur'
					}],
				},
			};
		},
		methods: {
			changeCaptcha() {
				this.captcha = 'https://www.undsky.com/captcha?t=' + new Date().getTime()
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
			this.changeCaptcha()

			keyboardJS.bind('enter', this.handleEnter);

			this.$nextTick(() => {
				this.isXS = getApp().globalData.isXS
			})
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

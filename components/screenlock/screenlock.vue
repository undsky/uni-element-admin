<template>
	<view>
		<el-tooltip content="锁屏" placement="bottom">
			<i @click="lock" class="el-icon-lock"></i>
		</el-tooltip>
		<el-dialog title="MC-framework" :visible="isLock" center append-to-body :close-on-click-modal="false"
			:close-on-press-escape="false" :show-close="false">
			<view class="flex flex-column flex-align-center margin-bottom-lg">
				<el-avatar :size="80" src="https://undsky.com/public/img/logo.png"></el-avatar>
				<view class="margin-top">admin</view>
			</view>
			<el-form :model="lockForm" :rules="lockRules" ref="lockForm" @submit.native.prevent>
				<el-form-item prop="password">
					<el-input v-model="lockForm.password" type="password" placeholder="请输入您的密码解锁屏幕" show-password>
					</el-input>
				</el-form-item>
				<view class="flex">
					<el-button class="flex1" type="primary" @click="unLock">解锁</el-button>
				</view>
			</el-form>
		</el-dialog>
	</view>
</template>

<script>
	import keyboardJS from 'keyboardjs';

	export default {
		name: "screenlock",
		data() {
			return {
				isLock: false,
				lockForm: {
					password: ''
				},
				lockRules: {
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				},
			};
		},
		methods: {
			lock() {
				this.isLock = true
			},
			unLock() {
				if (this.isLock)
					this.$refs.lockForm.validate(valid => {
						if (valid) {
							this.lockForm.password = ''
							this.isLock = false
						}
					})
			},
		},
		mounted: function() {
			keyboardJS.bind('enter', this.unLock);
		},
		beforeDestroy: function() {
			keyboardJS.unbind('enter', this.unLock);
		}
	}
</script>

<style>

</style>

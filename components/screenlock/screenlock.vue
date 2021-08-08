<template>
	<view>
		<el-dropdown-item v-if="isXS" icon="el-icon-lock" command="lock">{{ i18n.lockScreen }}</el-dropdown-item>
		<el-tooltip v-else :content="i18n.lockScreen" placement="bottom"><i @click="lock" class="el-icon-lock"></i></el-tooltip>
		<el-dialog
			title="mc-uniAdmin"
			:visible="isLock"
			center
			append-to-body
			:close-on-click-modal="false"
			:close-on-press-escape="false"
			:show-close="false"
			:width="isXS ? '90%' : '50%'"
		>
			<view class="flex flex-column flex-align-center margin-bottom-lg">
				<el-avatar :size="80" src="https://undsky.com/public/img/logo.png"></el-avatar>
				<view class="margin-top">admin</view>
			</view>
			<el-form :model="lockForm" :rules="lockRules" ref="lockForm" @submit.native.prevent>
				<el-form-item prop="password"><el-input v-model="lockForm.password" type="password" placeholder="请输入您的密码解锁屏幕" show-password></el-input></el-form-item>
				<view class="flex"><el-button class="flex1" type="primary" @click="unLock">解锁</el-button></view>
			</el-form>
		</el-dialog>
	</view>
</template>

<script>
import keyboardJS from 'keyboardjs';

export default {
	name: 'screenlock',
	data() {
		return {
			isXS: false,
			isLock: false,
			lockForm: {
				password: ''
			},
			lockRules: {
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				]
			}
		};
	},
	computed: {
		i18n() {
			return this.$t('index');
		}
	},
	methods: {
		lock() {
			this.isLock = true;
		},
		unLock() {
			if (this.isLock)
				this.$refs.lockForm.validate(valid => {
					if (valid) {
						this.lockForm.password = '';
						this.isLock = false;
					}
				});
		}
	},
	mounted: function() {
		this.$nextTick(() => {
			this.isXS = getApp().globalData.systemInfo.isXS;
		});

		keyboardJS.bind('enter', this.unLock);
	},
	beforeDestroy: function() {
		keyboardJS.unbind('enter', this.unLock);
	}
};
</script>

<style></style>

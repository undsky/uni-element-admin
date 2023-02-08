<template>
	<scroll-view class="main" scroll-y>
		<view class="padding">
			<el-divider content-position="left">滑块验证码</el-divider>
			<drag-verify
				ref="dragVerify"
				:isPassing.sync="dragVerifyPassing"
				text="请按住滑块拖动"
				successText="验证通过"
				handlerIcon="el-icon-d-arrow-right"
				successIcon="el-icon-circle-check"
				@passcallback="pass"
			></drag-verify>
		</view>
		<view class="padding">
			<el-divider content-position="left">图片验证码</el-divider>
			<drag-verify-img
				ref="dragVerify"
				:imgsrc="img"
				:isPassing.sync="dragVerifyImgPassing"
				:showRefresh="true"
				text="请按住滑块拖动"
				successText="验证通过"
				handlerIcon="el-icon-d-arrow-right"
				successIcon="el-icon-circle-check"
				@refresh="reimg"
				@passcallback="pass"
			></drag-verify-img>
		</view>
		<view class="padding">
			<el-divider content-position="left">拼图验证码</el-divider>
			<mc-verify-img-chip ref="verifyImgChip" @passcallback="verifyImgChipPasscallback" @passfail="verifyImgChipPassFail"></mc-verify-img-chip>
			<!-- <drag-verify-img-chip
				ref="dragVerify"
				:imgsrc="imgChip"
				:isPassing.sync="dragVerifyImgChipPassing"
				:showRefresh="true"
				text="请按住滑块拖动"
				successText="验证通过"
				handlerIcon="el-icon-d-arrow-right"
				successIcon="el-icon-circle-check"
				@refresh="reimg"
				@passcallback="pass"
			></drag-verify-img-chip> -->
		</view>
		<view class="padding">
			<el-divider content-position="left">旋转验证码</el-divider>
			<drag-verify-img-rotate
				ref="dragVerify"
				:imgsrc="imgRotate"
				:isPassing.sync="dragVerifyImgRotatePassing"
				:showTips="true"
				text="请按住滑块拖动"
				successText="验证通过"
				handlerIcon="el-icon-d-arrow-right"
				successIcon="el-icon-circle-check"
				@refresh="reimg"
				@passcallback="pass"
			></drag-verify-img-rotate>
		</view>
		<view class="padding">
			<el-divider content-position="left">手势验证码</el-divider>
			<button @click="showVaptcha()">打开手势验证</button>
			<vaptcha-v3 v-if="isShowVaptcha" :vid="vid" :scene="scene" :lang="lang" :area="area" :url="url" v-on:receive="handleMessage"></vaptcha-v3>
		</view>
	</scroll-view>
</template>

<script>
// 基本滑块验证组件
import dragVerify from 'vue-drag-verify2';
// 图片滑块组件
import dragVerifyImg from 'vue-drag-verify-img';
// 图片滑块组件(拼图)
import dragVerifyImgChip from 'vue-drag-verify-img-chip';
// 旋转图片滑块组件
import dragVerifyImgRotate from 'vue-drag-verify-img-rotate';

export default {
	components: {
		dragVerify,
		dragVerifyImg,
		dragVerifyImgChip,
		dragVerifyImgRotate
	},
	data() {
		return {
			dragVerifyPassing: false,
			dragVerifyImgPassing: false,
			dragVerifyImgChipPassing: false,
			dragVerifyImgRotatePassing: false,
			img: '//d.cloud.undsky.com/lib/img/captcha/1.jpg',
			imgChip: '//d.cloud.undsky.com/lib/img/captcha/2.jpg',
			imgRotate: '//d.cloud.undsky.com/lib/img/captcha/3.jpg',
			vid: '6138796f84ff87a9581a7cde', //验证单元vid,登录vaptcha用户后台创建
			scene: 0,
			lang: 'zh-CN',
			area: 'auto',
			url: 'https://www.undsky.com/vaptcha',
			isShowVaptcha: false //控制组件的显示与隐藏
		};
	},
	methods: {
		verifyImgChipPasscallback() {
			console.log('verify img chip pass');
		},
		verifyImgChipPassFail() {
			console.log('verify img chip pass fail');
		},
		reimg() {},
		pass() {},
		showVaptcha() {
			this.isShowVaptcha = true;
		},
		handleMessage(res) {
			this.isShowVaptcha = false;
			console.log(res)
			if (res.signal === 'pass') {
				//验证通过后获取到token和server进行后续操作
				console.log('验证通过');
				console.loe('token:' + res.data.token);
				console.log('server:' + res.data.server);
				this.$message({
					message: '验证通过。' + 'token:' + res.data.token + ' server:' + res.data.server
				});
			}
			if (res.signal === 'cancel') {
				this.$message({
					message: '取消验证'
				});
			}
			if (res.signal === 'error') {
				this.$message({
					message: '请求超时'
				});
			}
		}
	},
	onLoad: function() {
		this.$nextTick(() => {
			this.$refs.verifyImgChip.show();
		});
	}
};
</script>

<style scoped></style>

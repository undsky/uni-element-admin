<template>
	<view>
		<button @click="showVaptcha()">打开手势验证</button>
		<vaptcha-v3 v-if="isShowVaptcha" :vid="vid" :scene="0" :lang="lang" :area="area" v-on:receive="handleMessage">
		</vaptcha-v3>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vid: '6138796f84ff87a9581a7cde', //验证单元vid,登录vaptcha用户后台创建
				lang: 'zh-CN',
				area: 'cn',
				isShowVaptcha: false, //控制组件的显示与隐藏
			}
		},
		methods: {
			showVaptcha() {
				this.isShowVaptcha = true
			},
			handleMessage(res) {
				this.isShowVaptcha = false
				if (res.signal === 'pass') {
					//验证通过后获取到token和server进行后续操作
					console.log('验证通过')
					console.loe('token:' + res.data.token)
					console.log('server:' + res.data.server)
					this.$message({
						message: '验证通过。' + 'token:' + res.data.token + ' server:' + res.data.server
					})
				}
				if (res.signal === 'cancel') {
					this.$message({
						message: '取消验证'
					})
				}
				if (res.signal === 'error') {
					this.$message({
						message: '请求超时'
					})
				}
			}
		}
	}
</script>

<style>

</style>

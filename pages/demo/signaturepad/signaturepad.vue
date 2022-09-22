<template>
	<view>
		<!-- https://ext.dcloud.net.cn/plugin?id=6806 -->
		<v-sign width="100%" height="500px" @init="onSignInit">
			<view class="control-area">
				<view>按钮组件：</view>
				<view class="section">
					<v-sign-action></v-sign-action>
				</view>
				<view>画笔组件：</view>
				<view class="section">
					<v-sign-pen></v-sign-pen>
				</view>
				<view>颜色选择器组件：</view>
				<view class="section">
					<v-sign-color></v-sign-color>
				</view>
			</view>
		</v-sign>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onSignInit(signCtx) {
				this.signCtx = signCtx
			}
		}
	}
</script>

<style>

</style>

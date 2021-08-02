<template>
	<el-tabs value="alert" tab-position="left">
		<el-tab-pane name="alert">
			<span slot="label">警告<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/alert')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="loading">
			<span slot="label">加载<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/loading')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="message">
			<span slot="label">消息提示<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/message')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="messagebox">
			<span slot="label">弹窗<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/message-box')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="notification">
			<span slot="label">通知<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/notification')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="dialog">
			<span slot="label">对话框<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dialog')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="tooltip">
			<span slot="label">文字提示<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tooltip')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="popover">
			<span slot="label">弹出框<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/popover')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="popconfirm">
			<span slot="label">气泡确认框<i
					@click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/popconfirm')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left"></el-divider>
			</scroll-view>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>

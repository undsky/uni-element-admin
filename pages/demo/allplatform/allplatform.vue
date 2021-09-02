<template>
	<el-tabs value="notice-bar" tab-position="left">
		<el-tab-pane name="notice-bar">
			<span slot="label">通告栏<i @click="$utils.navigateTo('https://ext.dcloud.net.cn/plugin?name=uni-notice-bar')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>
				<el-divider content-position="left">基本用法</el-divider>
				<uni-notice-bar single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
				</uni-notice-bar>
				<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
				</uni-notice-bar>

				<el-divider content-position="left">文字滚动</el-divider>
				<uni-notice-bar scrollable="true" single="true"
					text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

				<el-divider content-position="left">显示图标</el-divider>
				<uni-notice-bar showIcon="true"
					text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
				</uni-notice-bar>

				<el-divider content-position="left">显示关闭按钮</el-divider>
				<uni-notice-bar showClose="true" showIcon="true"
					text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

				<el-divider content-position="left">查看更多</el-divider>
				<uni-notice-bar @getmore="getMore" :showGetMore="true" moreText="查看更多" single="true"
					text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
			</scroll-view>
		</el-tab-pane>
		<el-tab-pane name="paging">
			<span slot="label">分页<i @click="$utils.navigateTo('https://ext.dcloud.net.cn/plugin?name=z-paging')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<scroll-view class="main" scroll-y>

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

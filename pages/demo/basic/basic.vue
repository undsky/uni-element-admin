<template>
	<el-tabs value="layout" tab-position="left">
		<el-tab-pane class="padding-lg" name="layout">
			<span slot="label">布局<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/layout')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<el-divider content-position="left">基础布局</el-divider>
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purple-dark"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="12">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="button">
			<span slot="label">按钮<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/button')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="link">
			<span slot="label">文字链接<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/link')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="tag">
			<span slot="label">标签<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tag')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="progress">
			<span slot="label">进度条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/progress')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="tree">
			<span slot="label">树<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/tree')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="badge">
			<span slot="label">标记<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/badge')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="avatar">
			<span slot="label">头像<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/avatar')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<el-badge :value="200" :max="99">
				<el-avatar icon="el-icon-user-solid"></el-avatar>
			</el-badge>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="empty">
			<span slot="label">空状态<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/empty')"
					class="el-icon-question margin-left text-color-grey"></i></span>
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

<style scoped>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>

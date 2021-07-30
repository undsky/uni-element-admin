<template>
	<el-tabs value="countto" tab-position="left">
		<el-tab-pane class="padding-lg" name="countto">
			<span slot="label">数字滚动<i @click="$utils.navigateTo('https://github.com/PanJiaChen/vue-countTo')"
					class="el-icon-question margin-left text-color-grey"></i></span>
			<countTo :startVal="startVal" :endVal="endVal"></countTo>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="breadcrumb">
			<span slot="label">面包屑<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/breadcrumb')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="pageheader">
			<span slot="label">页头<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/page-header')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="dropdown">
			<span slot="label">下拉菜单<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/dropdown')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="step">
			<span slot="label">步骤条<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/steps')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="card">
			<span slot="label">卡片<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/card')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="carousel">
			<span slot="label">走马灯<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/carousel')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="collapse">
			<span slot="label">折叠面板<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/collapse')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="timeline">
			<span slot="label">时间线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/timeline')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="divider">
			<span slot="label">分割线<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/divider')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="backtop">
			<span slot="label">回到顶部<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/backtop')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="infiniteScroll">
			<span slot="label">无限滚动<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/infiniteScroll')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
		<el-tab-pane class="padding-lg" name="drawer">
			<span slot="label">抽屉<i @click="$utils.navigateTo('https://element.eleme.cn/#/zh-CN/component/drawer')"
					class="el-icon-question margin-left text-color-grey"></i></span>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import countTo from 'vue-count-to';

	export default {
		components: {
			countTo
		},
		data() {
			return {
				startVal: 0,
				endVal: this.$utils.now()
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>

<template>
	<scroll-view class="main" scroll-y>
		<uni-notice-bar showIcon="true" single="true" :text="noticeText" @getmore="getMore" :showGetMore="true" moreText="点击查看更多项目"></uni-notice-bar>
		<avue-data-tabs :option="option"></avue-data-tabs>
		<view class="charts-box"><qiun-data-charts type="column" :chartData="chartData" background="none" /></view>
		<el-row :gutter="0">
			<el-col :span="8"><qiun-data-charts type="ring" :chartData="chartData1" background="none" /></el-col>
			<el-col :span="8"><qiun-data-charts type="pie" :chartData="chartData1" background="none" /></el-col>
			<el-col :span="8"><qiun-data-charts type="rose" :chartData="chartData1" background="none" /></el-col>
		</el-row>
	</scroll-view>
</template>

<script>
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

export default {
	name: 'index',
	data() {
		return {
			chartData1: {
				series: [
					{
						data: [
							{
								name: '一班',
								value: 50
							},
							{
								name: '二班',
								value: 30
							},
							{
								name: '三班',
								value: 20
							},
							{
								name: '四班',
								value: 18
							},
							{
								name: '五班',
								value: 8
							}
						]
					}
				]
			},
			chartData: {
				categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
				series: [
					{
						name: '目标值',
						data: [35, 36, 31, 33, 13, 34]
					},
					{
						name: '完成量',
						data: [18, 27, 21, 24, 6, 28]
					}
				]
			},
			noticeText: '',
			option: {
				data: [
					{
						click: function(item) {
							alert(JSON.stringify(item));
						},
						title: '分类统计',
						subtitle: '实时',
						count: 7993,
						allcount: 10222,
						text: '当前分类总记录数',
						color: 'rgb(27, 201, 142)',
						key: '类'
					},
					{
						click: function(item) {
							alert(JSON.stringify(item));
						},
						title: '附件统计',
						subtitle: '实时',
						count: 3112,
						allcount: 10222,
						text: '当前上传的附件数',
						color: 'rgb(230, 71, 88)',
						key: '附'
					},
					{
						click: function(item) {
							alert(JSON.stringify(item));
						},
						title: '文章统计',
						subtitle: '实时',
						count: 908,
						allcount: 10222,
						text: '评论次数',
						color: 'rgb(178, 159, 255)',
						key: '评'
					}
				]
			}
		};
	},
	methods: {
		getMore() {
			this.$utils.navigateTo('https://www.undsky.com');
		},
		guide() {
			const _i18n = this.$t('index');

			const driver = new Driver({
				prevBtnText: _i18n.prevBtnText,
				nextBtnText: _i18n.nextBtnText,
				doneBtnText: _i18n.doneBtnText,
				closeBtnText: _i18n.closeBtnText,
				onReset: ele => {
					uni.setStorageSync('guide', true);
				}
			});
			driver.defineSteps([
				{
					element: '#top-window',
					popover: {
						title: _i18n.navbar,
						description: _i18n.navbar,
						position: 'bottom'
					}
				},
				{
					element: '#left-window',
					popover: {
						title: _i18n.menubar,
						description: _i18n.menubar,
						position: 'right'
					}
				}
			]);
			driver.start();
		}
	},
	onLoad: async function() {
		const { deviceId, model, platform, system, env, screenWidth } = getApp().globalData.systemInfo;

		let ip = '',
			version = '';
		try {
			const result = await this.$http.post(
				'/api/version',
				{
					deviceId,
					model,
					platform,
					system,
					env
				},
				false
			);
			ip = result.ip;
			version = result.version;
		} catch (e) {
			//TODO handle the exception
		} finally {
			this.noticeText = `deviceId:${deviceId} model:${model} platform:${platform} system:${system} env:${env} ip:${ip} version:${version}`;
		}

		if (screenWidth > 767) {
			const hasGuide = uni.getStorageSync('guide');
			if (!hasGuide) {
				this.guide();
			}
		}
	}
};
</script>

<style scoped>
.charts-box {
	width: 100%;
	height: 300px;
}
</style>

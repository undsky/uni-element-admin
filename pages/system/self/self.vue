<template>
	<el-row :gutter="0">
		<el-col :span="8"><avue-data-operatext :option="option"></avue-data-operatext></el-col>
		<el-col :span="16"></el-col>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			option: {
				span: 24,
				data: [
					{
						click: function(item) {
							alert(JSON.stringify(item));
						},
						title: 'undsky',
						subtitle: '女儿奴、全栈开发者、项目经理',
						img: 'https://undsky.com/public/img/logo.png',
						color: '#f39c12',
						list: [
							{
								label: '点赞',
								value: '3,200'
							},
							{
								label: '关注',
								value: '13,000'
							},
							{
								label: '项目',
								value: '13,000'
							}
						]
					}
				]
			}
		};
	},
	methods: {}
};
</script>

<style></style>

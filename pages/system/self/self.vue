<template>
	<el-row :gutter="0">
		<el-col :span="8"><avue-data-operatext :option="option"></avue-data-operatext></el-col>
		<el-col :span="16"></el-col>
	</el-row>
</template>

<script>
	import logo from '@/static/logo.png';

	export default {
		data() {
			return {
				option: {
					span: 24,
					data: [{
						click: function(item) {
							alert(JSON.stringify(item));
						},
						title: "undsky",
						subtitle: "女儿奴、全栈开发者",
						img: logo,
						color: "#f39c12",
						list: [{
								label: "点赞",
								value: "9",
							},
							{
								label: "关注",
								value: "2",
							},
							{
								label: "项目",
								value: "4",
							},
						],
					}, ],
				},
			};
		},
		methods: {},
	};
</script>

<style></style>
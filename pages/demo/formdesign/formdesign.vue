<template>
	<view style="height: 100vh;"><avue-form-design style="height: 100%;" storage :showGithubStar="false" :custom-fields="customFields"></avue-form-design></view>
</template>

<script>
export default {
	data() {
		return {
			customFields: [
				// {
				// 	component: 'el-button',
				// 	label: '按钮',
				// 	span: 24,
				// 	icon: 'el-icon-thumb',
				// 	params: {
				// 		// 组件的属性
				// 		html: '按钮'
				// 	},
				// 	event: {
				// 		// 组件的事件
				// 		click: () => {}
				// 	}
				// }
			]
		};
	},
	methods: {}
};
</script>

<style></style>

<template>
	<el-input v-model="text" placeholder="请输入内容">
		<el-button-group slot="suffix">
			<el-button @click="copy" type="primary">复制到剪切板</el-button>
			<el-button @click="paste" type="primary">获取当前剪切板内容</el-button>
		</el-button-group>
	</el-input>
</template>

<script>
	import {
		setClipboardData,
		getClipboardData
	} from '@/uni_modules/u-clipboard/js_sdk'

	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			copy: async function() {
				try {
					await setClipboardData('' + this.text)
					uni.showToast({
						title: '复制成功'
					})
				} catch (e) {
					uni.showToast({
						title: '复制失败',
						icon: 'error'
					})
				}
			},
			paste: async function() {
				this.text = await getClipboardData()
			}
		}
	}
</script>

<style>

</style>

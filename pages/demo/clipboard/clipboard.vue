<template>
	<div class="padding">
		<el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="100px">
			<el-form-item label="内容" prop="content">
				<el-input v-model="formData.content" placeholder="请输入内容" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<el-form-item size="large">
				<el-button @click="copy" type="primary">复制到剪切板</el-button>
				<el-button @click="paste" type="info">获取当前剪切板内容</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import {
		setClipboardData,
		getClipboardData
	} from '@/uni_modules/u-clipboard/js_sdk'

	export default {
		components: {},
		props: [],
		data() {
			return {
				formData: {
					content: undefined,
				},
				rules: {
					content: [{
						required: true,
						message: '请输入内容',
						trigger: 'blur'
					}],
				},
			}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods: {
			copy: async function() {
				this.$refs['elForm'].validate(async valid => {
					if (!valid) return

					try {
						await setClipboardData('' + this.formData.content)
						uni.showToast({
							title: '复制成功'
						})
					} catch (e) {
						uni.showToast({
							title: '复制失败',
							icon: 'error'
						})
					}
				})
			},
			paste: async function() {
				this.formData.content = await getClipboardData()
			}
		}
	}
</script>
<style>
</style>

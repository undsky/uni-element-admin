<template>
	<div class="padding">
		<el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="100px">
			<el-form-item label="内容" prop="content">
				<el-input v-model="formData.content" placeholder="请输入内容" clearable :style="{width: '100%'}">
				</el-input>
			</el-form-item>
			<el-form-item size="large">
				<el-button type="primary" @click="submitForm">生成</el-button>
			</el-form-item>
			<el-form-item>
				<image :src="qrcode" style="width: 200px; height: 200px;"></image>
			</el-form-item>
			<el-form-item>
				<svg id="barcode"></svg>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import QRCode from 'qrcode'
	import JsBarcode from 'jsbarcode'

	export default {
		components: {},
		props: [],
		data() {
			return {
				qrcode: null,
				formData: {
					content: 'https://www.undsky.com',
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
		onLoad: async function() {
			this.$nextTick(async () => {
				await this.submitForm()
			})
		},
		methods: {
			submitForm: async function() {
				this.$refs['elForm'].validate(async valid => {
					if (!valid) return
					this.qrcode = await QRCode.toDataURL(this.formData.content)
					JsBarcode("#barcode", this.formData.content);
				})
			}
		}
	}
</script>
<style>
</style>

<template>
	<view>
		<el-divider content-position="left">OSS 对象存储</el-divider>
		<el-upload action="" :http-request="handleUpload"><el-button size="small" type="primary">点击上传</el-button></el-upload>
	</view>
</template>

<script>
import aliyun from '../../../common/aliyun.js';

export default {
	data() {
		return {
			oss: null
		};
	},
	methods: {
		async handleUpload(option) {
			console.log(option);
			const { uid, name, size, type } = option.file;
			try {
				await this.oss.upload(`${uid}_${name}`, option.file, {
					progress: percent => {
						option.onProgress(percent * 100);
					}
				});
			} catch (e) {
				console.log(e);
			}
		}
	},
	onLoad: async function(options) {
		this.oss = await aliyun.OSS('assttest');
	}
};
</script>

<style></style>

<template>
	<MonacoEditor class="editor" v-model="code" :options="options" />
</template>

<script>
	import MonacoEditor from 'vue-monaco'

	export default {
		components: {
			MonacoEditor
		},
		data() {
			return {
				options: {
					language: 'javascript',
					theme: 'vs-dark',
					automaticLayout: true,
					glyphMargin: true,
					useTabStops: false,
					fontSize: 21,
					autoIndent: true
				},
				code: `function test() {
	console.log('hello world')
}`
			}
		},
		methods: {

		},
		onLoad: async function(options) {

		},
	};
</script>
<style lang="scss" scoped>
	.editor {
		width: 100%;
		height: 100vh;
	}
</style>

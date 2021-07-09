<template>
	<scroll-view class="main" scroll-y>
		<tinymce v-model="content"></tinymce>
		<button @click="getContent" type="default">get content</button>
	</scroll-view>
</template>

<script>
	export default {
		name: 'richeditor',
		data() {
			return {
				content: 'mc'
			};
		},
		methods: {
			getContent() {
				console.log(this.content)
			}
		}
	};
</script>

<style></style>

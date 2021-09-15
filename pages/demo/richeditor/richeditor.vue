<template>
	<scroll-view class="main" scroll-y>
		<mc-tinymce v-model="content"></mc-tinymce>
		<view class="padding" v-html="content"></view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'richeditor',
		data() {
			return {
				content: ''
			};
		},
		methods: {

		}
	};
</script>

<style></style>

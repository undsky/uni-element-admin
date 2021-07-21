<template>
	<view>
		<VueSignaturePad height="500px" ref="signaturePad"></VueSignaturePad>
		<div>
			<button @click="save">保存</button>
			<button @click="undo">撤销</button>
		</div>
	</view>
</template>

<script>
	import {
		VueSignaturePad
	} from 'vue-signature-pad';

	export default {
		name: 'signaturepad',
		components: {
			VueSignaturePad
		},
		data() {
			return {

			}
		},
		methods: {
			undo() {
				this.$refs.signaturePad.undoSignature();
			},
			save() {
				const {
					isEmpty,
					data
				} = this.$refs.signaturePad.saveSignature();
				console.log(isEmpty);
				console.log(data);
			}
		}
	}
</script>

<style>

</style>

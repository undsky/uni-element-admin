<template>
	<view>
		<div :id="tinymceId"></div>
	</view>
</template>

<script>
	import tinymce from 'tinymce/tinymce';
	import 'tinymce/icons/default';
	import 'tinymce/themes/silver';

	import 'tinymce/plugins/autoresize';
	import 'tinymce/plugins/advlist';
	// import 'tinymce/plugins/anchor';
	import 'tinymce/plugins/autolink';
	import 'tinymce/plugins/autosave';
	// import 'tinymce/plugins/bbcode';
	import 'tinymce/plugins/charmap';
	import 'tinymce/plugins/code';
	import 'tinymce/plugins/codesample';
	// import 'tinymce/plugins/colorpicker';
	// import 'tinymce/plugins/contextmenu';
	// import 'tinymce/plugins/directionality';
	import 'tinymce/plugins/emoticons';
	// import 'tinymce/plugins/fullpage';
	import 'tinymce/plugins/fullscreen';
	// import 'tinymce/plugins/help';
	import 'tinymce/plugins/hr';
	import 'tinymce/plugins/image';
	// import 'tinymce/plugins/importcss';
	import 'tinymce/plugins/insertdatetime';
	// import 'tinymce/plugins/legacyoutput';
	import 'tinymce/plugins/link';
	import 'tinymce/plugins/lists';
	import 'tinymce/plugins/media';
	// import 'tinymce/plugins/nonbreaking';
	// import 'tinymce/plugins/noneditable';
	import 'tinymce/plugins/pagebreak';
	import 'tinymce/plugins/paste';
	import 'tinymce/plugins/preview';
	import 'tinymce/plugins/print';
	import 'tinymce/plugins/quickbars';
	// import 'tinymce/plugins/save';
	import 'tinymce/plugins/searchreplace';
	// import 'tinymce/plugins/spellchecker';
	// import 'tinymce/plugins/tabfocus';
	import 'tinymce/plugins/template';
	// import 'tinymce/plugins/textcolor';
	import 'tinymce/plugins/textpattern';
	// import 'tinymce/plugins/toc';
	// import 'tinymce/plugins/visualblocks';
	// import 'tinymce/plugins/visualchars';
	// import 'tinymce/plugins/wordcount';

	// import 'tinymce/plugins/imagetools';
	// import 'tinymce/plugins/table';
	import {
		imagetools,
		table,
		indent2em,
		importword,
		layout,
		letterspacing,
		lineheight,
		upfile,
		bdmap,
		axupimgs,
		attachment
	} from '@npkg/tinymce-plugins'

	export default {
		name: "tinymce",
		props: {
			id: {
				type: String,
				default: function() {
					return 'tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
				}
			},
			value: {
				type: String,
				default: ''
			},
			height: {
				type: [Number, String],
				required: false,
				default: 427
			},
			placeholder: {
				type: String,
				default: ''
			},
			uploadLocation: { // 上传位置：local：本地；cos：腾讯云对象存储；oss：阿里云对象存储
				type: String,
				default: 'local'
			},
			imagesUploadUrl: { // 指定上传图片的后端处理程序的URL（上传位置为 local 时有效）
				type: String,
				default: '/upload'
			},
			imagesUploadBasePath: { // 给返回的相对路径指定它所相对的基本路径（上传位置为 local 时有效）
				type: String,
				default: ''
			}
		},
		data() {
			return {
				hasChange: false,
				hasInit: false,
				tinymceId: this.id,
				editor: null
			};
		},
		watch: {
			value(val) {
				if (!this.hasChange && this.hasInit) {
					this.$nextTick(() => {
						this.editor.setContent(val || '')
						this.editor.on('input keyup Change Undo Redo ExecCommand NodeChange', e => {
							this.hasChange = true
							this.$emit('input', this.editor.getContent())
						})
					})
				}
			}
		},
		mounted: async function() {
			const cdn = `${this.$config.cdn}/tinymce`

			let config = {
				selector: `#${this.tinymceId}`,
				min_height: this.height,
				placeholder: this.placeholder,
				mobile: {
					menubar: true
				},
				statusbar: false,
				language_url: `${cdn}/langs/zh_CN.js`,
				language: 'zh_CN',
				skin_url: `${cdn}/skins/ui/oxide`,
				emoticons_database_url: `${cdn}/plugins/emoticons/js/emojis.min.js`,
				quickbars_insert_toolbar: false,
				toolbar_mode: 'wrap',
				toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
					                     styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
					                     table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs importword kityformula-editor',
				plugins: ['autoresize',
					'advlist',
					// 'anchor',
					'autolink',
					'autosave',
					// 'bbcode',
					'charmap',
					'code',
					'codesample',
					// 'colorpicker',
					// 'contextmenu',
					// 'directionality',
					'emoticons',
					// 'fullpage',
					'fullscreen',
					// 'help',
					'hr',
					'image',
					// 'importcss',
					'insertdatetime',
					// 'legacyoutput',
					'link',
					'lists',
					'media',
					// 'nonbreaking',
					// 'noneditable',
					'pagebreak',
					'paste',
					'preview',
					'print',
					'quickbars',
					// 'save',
					'searchreplace',
					// 'spellchecker',
					// 'tabfocus',
					'template',
					// 'textcolor',
					'textpattern',
					// 'toc',
					// 'visualblocks',
					// 'visualchars',
					// 'wordcount',
					'imagetools',
					'table',
					'indent2em',
					'importword',
					'layout',
					'letterspacing',
					'lineheight',
					'upfile',
					'bdmap',
					'axupimgs',
					'attachment'
				]
			}

			if ('local' == this.uploadLocation) {
				config.images_upload_url = this.imagesUploadUrl
				config.images_upload_base_path = this.imagesUploadBasePath
			} else {

			}

			const editors = await tinymce.init(config);
			this.editor = editors[0]
			this.hasInit = true
		},
		beforeDestroy: function() {
			if (this.editor)
				this.editor.destroy()
		}
	}
</script>

<style>

</style>

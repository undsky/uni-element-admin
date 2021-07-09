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

	let _editor;

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

		},
		data() {
			return {
				tinymceId: this.id
			};
		},
		mounted: async function() {
			const base_url = `${this.$config.cdn}tinymce`

			const editors = await tinymce.init({
				selector: `#${this.tinymceId}`,
				mobile: {
					menubar: true
				},
				statusbar: false,
				language_url: `${base_url}/langs/zh_CN.js`,
				language: 'zh_CN',
				skin_url: `${base_url}/skins/ui/oxide`,
				emoticons_database_url: `${base_url}/plugins/emoticons/js/emojis.min.js`,
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
			});

			_editor = editors[0]
			_editor.setContent(this.value)
			_editor.on('input keyup Change Undo Redo ExecCommand NodeChange', e => {
				this.$emit('input', _editor.getContent())
			})
		},
		beforeDestroy: function() {
			_editor.destroy()
		}
	}
</script>

<style>

</style>

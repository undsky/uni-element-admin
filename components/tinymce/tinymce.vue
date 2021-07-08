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
	import 'tinymce/plugins/anchor';
	import 'tinymce/plugins/autolink';
	import 'tinymce/plugins/autosave';
	import 'tinymce/plugins/bbcode';
	import 'tinymce/plugins/charmap';
	import 'tinymce/plugins/code';
	import 'tinymce/plugins/codesample';
	import 'tinymce/plugins/colorpicker';
	import 'tinymce/plugins/contextmenu';
	import 'tinymce/plugins/directionality';
	import 'tinymce/plugins/emoticons';
	import 'tinymce/plugins/fullpage';
	import 'tinymce/plugins/fullscreen';
	import 'tinymce/plugins/help';
	import 'tinymce/plugins/hr';
	import 'tinymce/plugins/image';
	import 'tinymce/plugins/imagetools';
	import 'tinymce/plugins/importcss';
	import 'tinymce/plugins/insertdatetime';
	import 'tinymce/plugins/legacyoutput';
	import 'tinymce/plugins/link';
	import 'tinymce/plugins/lists';
	import 'tinymce/plugins/media';
	import 'tinymce/plugins/nonbreaking';
	import 'tinymce/plugins/noneditable';
	import 'tinymce/plugins/pagebreak';
	import 'tinymce/plugins/paste';
	import 'tinymce/plugins/preview';
	import 'tinymce/plugins/print';
	import 'tinymce/plugins/quickbars';
	import 'tinymce/plugins/save';
	import 'tinymce/plugins/searchreplace';
	import 'tinymce/plugins/spellchecker';
	import 'tinymce/plugins/tabfocus';
	import 'tinymce/plugins/table';
	import 'tinymce/plugins/template';
	import 'tinymce/plugins/textcolor';
	import 'tinymce/plugins/textpattern';
	import 'tinymce/plugins/toc';
	import 'tinymce/plugins/visualblocks';
	import 'tinymce/plugins/visualchars';
	import 'tinymce/plugins/wordcount';

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
			}
		},
		data() {
			return {
				tinymceId: this.id
			};
		},
		mounted: function() {
			tinymce.init({
				selector: `#${this.tinymceId}`,
				language_url: 'https://cdn.cloud.undsky.com/tinymce/langs/zh_CN.js',
				language: 'zh_CN',
				skin_url: 'https://cdn.cloud.undsky.com/tinymce/skins/ui/oxide',
				plugins: ['autoresize',
					'advlist',
					'anchor',
					'autolink',
					'autosave',
					'bbcode',
					'charmap',
					'code',
					'codesample',
					'colorpicker',
					'contextmenu',
					'directionality',
					'emoticons',
					'fullpage',
					'fullscreen',
					'help',
					'hr',
					'image',
					'imagetools',
					'importcss',
					'insertdatetime',
					'legacyoutput',
					'link',
					'lists',
					'media',
					'nonbreaking',
					'noneditable',
					'pagebreak',
					'paste',
					'preview',
					'print',
					'quickbars',
					'save',
					'searchreplace',
					'spellchecker',
					'tabfocus',
					'table',
					'template',
					'textcolor',
					'textpattern',
					'toc',
					'visualblocks',
					'visualchars',
					'wordcount'
				]
			});
		},
		beforeDestroy: function() {
			tinymce.remove()
		}
	}
</script>

<style>

</style>

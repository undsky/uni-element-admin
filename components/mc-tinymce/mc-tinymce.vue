<template>
	<view>
		<div :id="tinymceId"></div>
	</view>
</template>

<script>
	export default {
		name: "mc-tinymce",
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
			}
		},
		data() {
			return {
				tinymceId: this.id,
				editor: null,
				flag: true
			};
		},
		watch: {
			value(val) {
				if (this.editor && this.flag)
					this.editor.setContent(val || '')
				this.flag = true;
			}
		},
		methods: {
			upload(file, filename, success, failure, progress) {
				failure = failure || success
				const baseURL = this.$config.request.baseURL
				const xhr = new XMLHttpRequest();
				xhr.withCredentials = false;
				xhr.open('POST', baseURL + this.imagesUploadUrl);

				if (progress)
					xhr.upload.onprogress = function(e) {
						progress(e.loaded / e.total * 100);
					}

				xhr.onload = function() {
					if (xhr.status == 403) {
						failure('HTTP Error: ' + xhr.status, {
							remove: true
						});
						return;
					}
					if (xhr.status < 200 || xhr.status >= 300) {
						failure('HTTP Error: ' + xhr.status);
						return;
					}
					const result = JSON.parse(xhr.responseText);
					if (200 == result.code) {
						success(baseURL + result.data.url, {
							text: filename
						});
					} else {
						failure(result)
					}
				};

				xhr.onerror = function() {
					failure('upload failed due to a XHR Transport error. Code: ' + xhr.status);
				}

				const formData = new FormData();
				formData.append('file', file, filename);

				xhr.send(formData);
			}
		},
		mounted: async function() {
			const tinymceUrl = `${this.$config.cdn}static/tinymce/5.10.9/`

			let config = {
				selector: `#${this.tinymceId}`,
				min_height: this.height,
				placeholder: this.placeholder,
				mobile: {
					menubar: true
				},
				statusbar: false,
				language_url: `${tinymceUrl}langs/zh_CN.js`,
				language: 'zh_CN',
				skin_url: `${tinymceUrl}skins/ui/oxide`,
				emoticons_database_url: `${tinymceUrl}plugins/emoticons/js/emojis.min.js`,
				fontsize_formats: '8px 10px 11px 12px 13px 14px 15px 16px 17px 18px 24px 36px 48px',
				font_formats: '微软雅黑=微软雅黑, Microsoft YaHei; 宋体=宋体, SimSun; 楷体=楷体, 楷体_GB2312, SimKai; 黑体=黑体, SimHei; 隶书=隶书, SimLi; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
				quickbars_insert_toolbar: false,
				toolbar_mode: 'wrap',
				toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link | alignleft aligncenter alignright alignjustify outdent indent | \
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
				],
				images_upload_handler: (blobInfo, success, failure, progress) => {
					if ('local' == this.uploadLocation) {
						this.upload(blobInfo.blob(), blobInfo.filename(), success, failure, progress)
					} else {

					}
				},
				file_picker_callback: (callback, value, meta) => {
					let accept;
					switch (meta.filetype) {
						case 'image':
							accept = '.jpg, .jpeg, .png, .gif';
							break;
						case 'media':
							accept = '.mp3, .mp4';
							break;
						case 'file':
							accept = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx';
						default:
					}
					const input = document.createElement('input');
					input.setAttribute('type', 'file');
					input.setAttribute('accept', accept);
					input.click();
					const that = this;
					input.onchange = function() {
						const file = this.files[0];
						if ('local' == that.uploadLocation) {
							that.upload(file, file.name, callback)
						} else {

						}
					}
				}
			}

			const editors = await window.tinymce.init(config);
			this.editor = editors[0]
			this.editor.execCommand("fontSize", false, "16px");
			this.editor.execCommand("fontName", false, "微软雅黑");

			if (this.value) this.editor.setContent(this.value || '')
			this.editor.on('input keyup Change Undo Redo ExecCommand NodeChange', e => {
				this.flag = false;
				this.$emit('input', this.editor.getContent())
			})

		},
		beforeDestroy: function() {
			if (this.editor)
				this.editor.destroy()
		}
	}
</script>

<style>

</style>
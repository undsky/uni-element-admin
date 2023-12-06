<template>
	<scroll-view class="main" scroll-y>
		<el-divider content-position="left">视频</el-divider>
		<div style="width: 640px;">
			<div id="mse"></div>
		</div>
		<el-divider content-position="left">音乐</el-divider>
		<div id="vs"></div>
	</scroll-view>
</template>

<script>
	import demoMp4 from '@/static/demo/demo.mp4'
	import demoMp3 from '@/static/demo/demo.mp3'
	import demoGif from '@/static/demo/demo.gif'

	let _player = null;
	let _music = null;

	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad: async function() {
			this.$nextTick(async () => {
				_player = new window.Player({
					id: "mse",
					url: demoMp4,
					autoplay: true,
					poster: null,
					playbackRate: [0.5, 0.75, 1, 1.5, 2],
					closeVideoClick: true,
					closeVideoTouch: true,
					"playsinline": true,
					"fluid": true,
					lang: 'zh-cn',
					"x5-video-player-fullscreen": "true"
				})

				_music = new window.Player({
					id: 'vs',
					music: {
						list: [{
							src: demoMp3,
							name: '大田俊生仔',
							vid: '000001',
							poster: demoGif
						}]
					},
					preloadNext: true, // 预加载下一首
					switchKeepProgress: false, // 切换歌曲保持进度
					volume: 0.8,
					height: 50,
					mediaType: 'audio',
					presets: ['default', window.MusicPreset],
					ignores: ['playbackrate'],
					controls: {
						initShow: true,
						mode: 'flex'
					},
					marginControls: true,
					videoConfig: {
						crossOrigin: "anonymous"
					}
				})
				_music.crossOrigin = "anonymous";
			})
		},
		destroyed: function() {
			if (_player) {
				_player.destroy()
			}
			if (_music) {
				_music.destroy()
			}
		}
	}
</script>

<style>

</style>
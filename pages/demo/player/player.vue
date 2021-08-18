<template>
	<scroll-view class="main" scroll-y>
		<el-divider content-position="left">视频</el-divider>
		<div style="width: 640px;">
			<div id="mse"></div>
		</div>
		<el-divider content-position="left">音乐</el-divider>
		<div id="vs"></div>
		<el-divider content-position="left">动画</el-divider>
		<view>
			<canvas id="svga" style="width: 375px; height: 375px;"></canvas>
		</view>
	</scroll-view>
</template>

<script>
	import XGPlayer from 'xgplayer'
	// import 'xgplayer-mp4'

	import XGMusic from 'xgplayer-music'

	let _player = null;
	let _music = null;

	import {
		Parser,
		Player
	} from 'svga'

	let _svgaParser = null;
	let _svgaPlayer = null;

	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad: async function() {
			this.$nextTick(async () => {
				_player = new XGPlayer({
					id: "mse",
					url: 'https://undsky.com/public/media/demo.mp4',
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

				_music = new XGMusic({
					id: 'vs',
					url: [{
						src: 'https://undsky.com/public/media/demo.mp3',
						name: '大田俊生仔',
						vid: '000001',
						poster: 'https://undsky.com/public/img/demo.gif'
					}],
					volume: 0.8,
					volumeShow: true,
					preloadNext: true,
					switchKeepProgress: false
				})
				// _music.setIndex(0)

				_svgaParser = new Parser()
				const svga = await _svgaParser.load(
					'//raw.githubusercontent.com/svga/SVGAPlayer-Web/master/tests/samples/halloween.svga'
				)

				_svgaPlayer = new Player(document.getElementById('svga').getElementsByTagName('canvas')[0])
				await _svgaPlayer.mount(svga)

				_svgaPlayer.onStart = () => console.log('onStart')
				_svgaPlayer.onResume = () => console.log('onResume')
				_svgaPlayer.onPause = () => console.log('onPause')
				_svgaPlayer.onStop = () => console.log('onStop')
				_svgaPlayer.onProcess = () => console.log('onProcess', _svgaPlayer.progress)
				_svgaPlayer.onEnd = () => console.log('onEnd')

				// 开始播放动画
				_svgaPlayer.start()
				console.log(_svgaParser)

				// 暂停播放动画
				// _svgaPlayer.pause()

				// 继续播放动画
				// _svgaPlayer.resume()

				// 停止播放动画
				// _svgaPlayer.stop()

				// 清空动画
				// _svgaPlayer.clear()

				// 销毁
				// _svgaParser.destroy()
				// _svgaPlayer.destroy()
			})
		},
		destroyed: function() {
			if (_player) {
				_player.destroy()
			}
			if (_svgaPlayer) {
				_svgaParser.destroy()
				_svgaPlayer.destroy()
			}
		}
	}
</script>

<style>

</style>

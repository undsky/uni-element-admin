<template>
	<view>
		<div style="width: 640px;">
			<div id="mse"></div>
		</div>
		<div id="vs" class="margin-top"></div>
	</view>
</template>

<script>
	import Player from 'xgplayer'
	// import 'xgplayer-mp4'

	import Music from 'xgplayer-music'

	let _player = null;
	let _music = null;

	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad: function() {
			this.$nextTick(() => {
				_player = new Player({
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

				_music = new Music({
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
			})
		},
		destroyed: function() {
			if (_player) {
				_player.destroy()
			}
		}
	}
</script>

<style>

</style>

<script>
	export default {
		onLaunch: function() {
			uni.createMediaQueryObserver(this).observe({
					maxWidth: 767
				},
				matches => {
					this.globalData.isXS = matches
				}
			);
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/common/common.scss';
	@import 'nprogress/nprogress.css';

	html,
	body {
		user-select: text !important;
	}

	@media only screen and (min-width: 992px) {
		::-webkit-scrollbar-thumb:horizontal {
			width: 5px;
			background-color: #CCCCCC;
			-webkit-border-radius: 6px;
		}

		::-webkit-scrollbar-track-piece {
			background-color: #FFFFFF;
			-webkit-border-radius: 0;
		}

		::-webkit-scrollbar {
			width: 10px;
			height: 8px;
		}

		::-webkit-scrollbar-thumb:vertical {
			height: 50px;
			background-color: #999;
			-webkit-border-radius: 4px;
			outline: 2px solid #FFFFFF;
			outline-offset: -2px;
			border: 2px solid #FFFFFF;
		}

		::-webkit-scrollbar-thumb:hover {
			height: 50px;
			background-color: #9f9f9f;
			-webkit-border-radius: 4px;
		}
	}

	.main {
		height: calc(100vh - 40px);
	}

	#nprogress .spinner {
		top: 40px !important;
	}
</style>

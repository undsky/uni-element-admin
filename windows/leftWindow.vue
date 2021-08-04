<template>
	<scroll-view id="left-window" scroll-y class="main left-window" :class="{ 'left-window-unfold': !isCollapse }">
		<el-menu :default-active="activeMenu" :default-openeds="openeds" :collapse="isCollapse"
			:collapse-transition="false" background-color="#304156" text-color="#FFFFFF" class="side-menu">
			<el-menu-item index="index" @click="navigateTo('index', '首页', '/pages/index/index')">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<template v-for="menu in menus">
				<el-submenu v-if="!menu.pid" :index="menu.id" :key="menu.id">
					<template slot="title">
						<i v-if="menu.icon" :class="menu.icon"></i>
						<span>{{ menu.text }}</span>
					</template>
					<el-menu-item-group>
						<template v-for="child in menus">
							<el-menu-item v-if="child.pid == menu.id" :index="child.id" :key="child.id"
								@click="navigateTo(child.id, child.text, child.url, child.keepAlive)">
								{{ child.text }}
							</el-menu-item>
						</template>
					</el-menu-item-group>
				</el-submenu>
			</template>
		</el-menu>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			showLeftWindow: Boolean
		},
		data() {
			return {
				isCollapse: false,
				activeMenu: 'index',
				openeds: ['demo'],
				menus: [{
					id: 'basic',
					pid: 'demo',
					icon: '',
					text: '基础组件',
					url: '/pages/demo/basic/basic',
					keepAlive: true
				}, {
					id: 'notice',
					pid: 'demo',
					icon: '',
					text: '消息组件',
					url: '/pages/demo/notice/notice',
					keepAlive: true
				}, {
					id: 'other',
					pid: 'demo',
					icon: '',
					text: '其他组件',
					url: '/pages/demo/other/other',
					keepAlive: true
				}, {
					id: 'demo',
					pid: '',
					icon: 'el-icon-s-help',
					text: 'DEMO'
				}, {
					id: 'form',
					pid: 'demo',
					icon: '',
					text: '表单',
					url: '/pages/demo/form/form',
					keepAlive: true
				}, {
					id: 'table',
					pid: 'demo',
					icon: '',
					text: '表格',
					url: '/pages/demo/table/table',
					keepAlive: true
				}, {
					id: 'richeditor',
					pid: 'demo',
					icon: '',
					text: '富文本编辑器',
					url: '/pages/demo/richeditor/richeditor',
					keepAlive: false
				}, {
					id: 'chart',
					pid: 'demo',
					icon: '',
					text: '图表',
					url: '/pages/demo/chart/chart',
					keepAlive: true
				}, {
					id: 'datav',
					pid: 'demo',
					icon: '',
					text: '数据可视化大屏',
					url: '/pages/demo/datav/datav',
					keepAlive: true
				}, {
					id: 'player',
					pid: 'demo',
					icon: '',
					text: '播放器',
					url: '/pages/demo/player/player',
					keepAlive: true
				}, {
					id: 'image',
					pid: 'demo',
					icon: '',
					text: '图片',
					url: '/pages/demo/image/image',
					keepAlive: true
				}, {
					id: 'signaturepad',
					pid: 'demo',
					icon: '',
					text: '签字板',
					url: '/pages/demo/signaturepad/signaturepad',
					keepAlive: true
				}, {
					id: 'qrcode',
					pid: 'demo',
					icon: '',
					text: '二维码',
					url: '/pages/demo/qrcode/qrcode',
					keepAlive: true
				}, {
					id: 'clipboard',
					pid: 'demo',
					icon: '',
					text: '剪切板',
					url: '/pages/demo/clipboard/clipboard',
					keepAlive: true
				}, {
					id: 'map',
					pid: 'demo',
					icon: '',
					text: '地图',
					url: '/pages/demo/map/map',
					keepAlive: true
				}, {
					id: 'webSocket',
					pid: 'demo',
					icon: '',
					text: 'webSocket',
					url: '/pages/demo/webSocket/webSocket',
					keepAlive: true
				}]
			};
		},
		methods: {
			navigateTo(name, title, url, keepAlive) {
				this.activeMenu = name;
				if (this.showLeftWindow) uni.hideLeftWindow();
				if (this.$utils.navigateTo(url, false === keepAlive ? null : this)) {
					uni.$emit('activeTab', {
						name,
						title,
						url,
						keepAlive
					});
				}
			}
		},
		mounted: async function() {
			try {
				if (this.$store.state.auth.token) this.menus = await this.$http.post('/admin/menu');
			} catch (e) {}
			uni.$on('activeMenu', name => (this.activeMenu = name));
			uni.$on('collapseMenu', isCollapse => (this.isCollapse = isCollapse));

			const {
				launchPage
			} = getApp().globalData

			if (launchPage && -1 == this.$utils.indexOf(['/pages/index/index', '/pages/login/login'], launchPage)) {
				const {
					id,
					text,
					url,
					keepAlive
				} = this.$utils.find(this.menus, menu => launchPage == menu.url)
				if (id) {
					this.navigateTo(id, text, url, keepAlive)
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.left-window-unfold {
		width: 230px;
	}

	.left-window {
		background-color: #304156;

		.side-menu {
			height: 100%;
			border: 0 !important;

			.iconfont {
				margin-right: 5px;
				width: 24px;
				text-align: center;
				font-size: 18px;
				vertical-align: middle;
			}
		}
	}
</style>

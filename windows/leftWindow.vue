<template>
	<scroll-view id="left-window" scroll-y class="main left-window" :class="{ 'left-window-unfold': !isCollapse }">
		<el-menu :default-active="activeMenu" :default-openeds="openeds" :collapse="isCollapse"
			:collapse-transition="false" :background-color="$config.theme.backgroundColor"
			:text-color="$config.theme.textColor" :active-text-color="$config.theme.activeTextColor" class="side-menu">
			<el-menu-item index="home" @click="navigateTo('home', i18n.home, '/pages/index/index')">
				<i class="el-icon-s-home"></i>
				<span slot="title">{{ i18n.home }}</span>
			</el-menu-item>
			<template v-for="menu in menus">
				<el-submenu v-if="!menu.pid && false !== menu.show" :index="menu.id" :key="menu.id">
					<template slot="title">
						<i v-if="menu.icon" :class="menu.icon"></i>
						<span>{{ i18n[menu.id] }}</span>
					</template>
					<el-menu-item-group>
						<template v-for="child in menus">
							<el-menu-item v-if="child.pid == menu.id" :index="child.id" :key="child.id"
								@click="navigateTo(child.id, i18n[child.id], child.url, child.keepAlive)">
								{{ i18n[child.id] }}
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
				activeMenu: 'home',
				openeds: ['demo'],
				menus: [{
						id: 'message',
						pid: '',
						icon: '',
						url: '/pages/system/message/message',
						keepAlive: true,
						show: false
					}, {
						id: 'self',
						pid: '',
						icon: '',
						url: '/pages/system/self/self',
						keepAlive: true,
						show: false
					},
					{
						id: 'demo',
						pid: '',
						icon: 'el-icon-s-help',
					}, {
						id: 'basic',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/basic/basic',
						keepAlive: true
					}, {
						id: 'notice',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/notice/notice',
						keepAlive: true
					}, {
						id: 'other',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/other/other',
						keepAlive: true
					}, {
						id: 'allplatform',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/allplatform/allplatform',
						keepAlive: true
					}, {
						id: 'formdesign',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/formdesign/formdesign',
						keepAlive: true
					}, {
						id: 'table',
						pid: 'demo',
						icon: '',
						url: 'https://vxetable.cn/v3/#/table/start/install',
						keepAlive: true
					}, {
						id: 'excel',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/excel/excel',
						keepAlive: false
					}, {
						id: 'richeditor',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/richeditor/richeditor',
						keepAlive: false
					}, {
						id: 'captcha',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/captcha/captcha',
						keepAlive: false
					}, {
						id: 'chart',
						pid: 'demo',
						icon: '',
						url: '/pages/wv/wv?url=' + encodeURIComponent('https://demo.ucharts.cn'),
						keepAlive: false
					}, {
						id: 'datav',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/datav/datav',
						keepAlive: false
					}, {
						id: 'player',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/player/player',
						keepAlive: true
					}, {
						id: 'image',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/image/image',
						keepAlive: true
					}, {
						id: 'signaturepad',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/signaturepad/signaturepad',
						keepAlive: true
					}, {
						id: 'qrcode',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/qrcode/qrcode',
						keepAlive: true
					}, {
						id: 'clipboard',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/clipboard/clipboard',
						keepAlive: true
					}, {
						id: 'map',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/map/map',
						keepAlive: true
					}, {
						id: 'aliyun',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/aliyun/aliyun',
						keepAlive: true
					}, {
						id: 'tencentyun',
						pid: 'demo',
						icon: '',
						url: '/pages/demo/tencentyun/tencentyun',
						keepAlive: true
					}, {
						id: 'login',
						pid: '',
						icon: 'el-icon-s-platform',
					}, {
						id: 'login',
						pid: 'login',
						icon: '',
						url: '/pages/login/login',
						keepAlive: true
					}, {
						id: 'login1',
						pid: 'login',
						icon: '',
						url: '/pages/login/login1',
						keepAlive: true
					}, {
						id: 'login2',
						pid: 'login',
						icon: '',
						url: '/pages/login/login2',
						keepAlive: true
					}, {
						id: 'system',
						pid: '',
						icon: 'el-icon-s-tools',
					}, {
						id: 'menu',
						pid: 'system',
						icon: '',
						url: '/pages/system/menu/menu',
						keepAlive: true
					}, {
						id: 'user',
						pid: 'system',
						icon: '',
						url: '/pages/system/user/user',
						keepAlive: true
					}, {
						id: 'role',
						pid: 'system',
						icon: '',
						url: '/pages/system/role/role',
						keepAlive: true
					}
				]
			};
		},
		computed: {
			i18n() {
				return this.$t('index')
			}
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

			this.$nextTick(() => {
				const {
					launchPage
				} = getApp().globalData

				if (launchPage && -1 == this.$utils.indexOf(['/pages/index/index', '/pages/login/login'],
						launchPage)) {
					const _menu = this.$utils.find(this.menus, menu => launchPage == menu.url)
					if (_menu) {
						const {
							id,
							text,
							url,
							keepAlive
						} = _menu

						this.navigateTo(id, text, url, keepAlive)
					}
				}
			})
		}
	};
</script>

<style lang="scss" scoped>
	.left-window-unfold {
		width: 230px;
	}

	.left-window {
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
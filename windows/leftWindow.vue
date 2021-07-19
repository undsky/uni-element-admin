<template>
	<scroll-view scroll-y class="main left-window" :class="{ 'left-window-unfold': !isCollapse }">
		<el-menu :default-active="activeMenu" :default-openeds="openeds" :collapse="isCollapse"
			:collapse-transition="false" background-color="#304156" text-color="#FFFFFF" class="side-menu">
			<el-menu-item index="index" @click="navigateTo('index', '首页', '/pages/index/index')">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<template v-for="menu in menus">
				<el-submenu v-if="!menu.pid" :index="menu.id" :key="menu.id">
					<template slot="title">
						<i v-if="menu.icon" class="iconfont icon-add"></i>
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
					id: 'demo',
					pid: '',
					icon: 'el-icon-s-help',
					text: 'DEMO'
				}, {
					id: 'richeditor',
					pid: 'demo',
					icon: '',
					text: '富文本编辑器',
					url: '/pages/richeditor/richeditor',
					keepAlive: false
				}, {
					id: 'form',
					pid: 'demo',
					icon: '',
					text: '表单',
					url: '/pages/form/form',
					keepAlive: true
				}, {
					id: 'table',
					pid: 'demo',
					icon: '',
					text: '表格',
					url: '/pages/table/table',
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

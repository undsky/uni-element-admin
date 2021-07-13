<template>
	<scroll-view scroll-y class="main left-window" :class="{ 'left-window-unfold': !isCollapse }">
		<el-menu :default-active="activeMenu" :collapse="isCollapse" :collapse-transition="false"
			background-color="#304156" text-color="#FFFFFF" class="side-menu">
			<el-menu-item index="index" @click="navigateTo('index', '首页', '/pages/index/index')">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="richeditor"
				@click="navigateTo('richeditor', '富文本编辑器', '/pages/richeditor/richeditor', false)">
				<span slot="title">富文本编辑器</span>
			</el-menu-item>
			<el-menu-item index="form" @click="navigateTo('form', '表单', '/pages/form/form')"><span
					slot="title">表单</span></el-menu-item>
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
				menus: []
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
				this.menus = await this.$http.post('/admin/menu');
			} catch (e) {}
			uni.$on('activeMenu', name => (this.activeMenu = name));
			uni.$on('collapseMenu', isCollapse => (this.isCollapse = isCollapse));
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

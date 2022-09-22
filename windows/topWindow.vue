<template>
	<view id="top-window" class="top-window flex">
		<view v-if="!isXS" class="nav-header flex flex-justify-center flex-align-center"
			:style="{ minWidth: (isCollapse ? 64 : 230) + 'px','background-color':$config.theme.backgroundColor,color:$config.theme.textColor }">
			<el-avatar v-if="isCollapse" size="small" src="/static/logo.png"></el-avatar>
			<view v-else>mc-uniAdmin</view>
		</view>
		<view @click="toggleSidebar" class="toggle-sidebar flex flex-justify-center flex-align-center"><i
				:class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i></view>
		<view class="flex flex-align-end">
			<el-tabs v-contextmenu:contextmenu
				:style="{ width: 'calc(100vw - ' + (isXS ? 80 : isCollapse ? (64+40+userPanelWidth) : (230+40+userPanelWidth)) + 'px)' }"
				tab-position="bottom" v-model="activeTab" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
				<el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name"
					:closable="item.closable"></el-tab-pane>
			</el-tabs>
		</view>
		<view class="nav-right flex flex-align-center"
			:style="{width:userPanelWidth+'px',minWidth:userPanelWidth+'px'}">
			<template v-if="!isXS">
				<mc-message @message="navigateTo('message', '/pages/system/message/message', true)"></mc-message>
				<mc-screenfull></mc-screenfull>
				<mc-screenlock></mc-screenlock>
				<mc-lang></mc-lang>
			</template>
			<el-dropdown trigger="click" @command="userCommand">
				<view class="flex flex-align-center">
					<!-- <el-avatar size="small" icon="el-icon-user-solid"></el-avatar> -->
					<el-avatar size="small" src="/static/logo.png"></el-avatar>
					<text v-if="!isXS" class="margin-left-sm text-sm">管理员</text>
				</view>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item icon="el-icon-house" command="self">{{ i18n.self }}</el-dropdown-item>
					<template v-if="isXS">
						<mc-message ref="messageNotice"></mc-message>
						<mc-screenlock ref="screenLock"></mc-screenlock>
						<mc-lang ref="langSelect"></mc-lang>
					</template>
					<el-dropdown-item icon="el-icon-back" command="logout" divided>{{ i18n.logout }}</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</view>
		<v-contextmenu ref="contextmenu">
			<v-contextmenu-item @click="handleTab('refreshActiveTab')"><text
					class="cuIcon-refresh margin-right"></text>刷新当前页
			</v-contextmenu-item>
			<v-contextmenu-item divider></v-contextmenu-item>
			<v-contextmenu-item @click="handleTab('closeOther')"><text class="cuIcon-move margin-right"></text>关闭其他
			</v-contextmenu-item>
			<v-contextmenu-item divider></v-contextmenu-item>
			<v-contextmenu-item @click="handleTab('closeLeft')"><text class="cuIcon-back margin-right"></text>关闭左侧
			</v-contextmenu-item>
			<v-contextmenu-item divider></v-contextmenu-item>
			<v-contextmenu-item @click="handleTab('closeRight')"><text class="cuIcon-right margin-right"></text>关闭右侧
			</v-contextmenu-item>
			<v-contextmenu-item divider></v-contextmenu-item>
			<v-contextmenu-item @click="handleTab('closeAll')"><text class="cuIcon-all margin-right"></text>全部关闭
			</v-contextmenu-item>
		</v-contextmenu>
	</view>
</template>

<script>
	export default {
		props: {
			showLeftWindow: Boolean
		},
		data() {
			return {
				isXS: false,
				isCollapse: false,
				activeTab: 'home',
				tabs: [{
					title: this.$t('index').home,
					name: 'home',
					url: '/pages/index/index',
					closable: false
				}],
				userPanelWidth: 200
			};
		},
		computed: {
			i18n() {
				return this.$t('index');
			}
		},
		watch: {
			i18n() {
				this.changeLanguage();
			}
		},
		methods: {
			handleTab(action) {
				switch (action) {
					case 'refreshActiveTab':
						const {
							url,
							keepAlive
						} = this.$utils.find(this.tabs, tab => tab.name === this.activeTab);
						if (url) {
							uni.redirectTo({
								url: url + (-1 == url.indexOf('?') ? '?' : '&') + 't=' + new Date().getTime()
							})
						}
						break
					case 'closeOther':
						this.tabs = [{
							title: this.$t('index').home,
							name: 'home',
							url: '/pages/index/index',
							closable: false
						}, this.$utils.find(this.tabs, tab => tab.name === this.activeTab)];
						break;
					case 'closeLeft':
						this.tabs = [{
							title: this.$t('index').home,
							name: 'home',
							url: '/pages/index/index',
							closable: false
						}].concat(this.tabs.slice(parseInt(this.$utils.findKey(this.tabs, tab => tab.name === this
							.activeTab))));
						break;
					case 'closeRight':
						this.tabs = this.tabs.slice(0, parseInt(this.$utils.findKey(this.tabs, tab => tab.name === this
							.activeTab)) + 1);
						break;
					case 'closeAll':
						this.tabs = [{
							title: this.$t('index').home,
							name: 'home',
							url: '/pages/index/index',
							closable: false
						}];
						this.activeTab = 'home';
						uni.$on('activeTab', this.handleActiveTab);
						this.tabClick({
							name: this.activeTab
						});
						break;
					default:
						break
				}

			},
			changeLanguage() {
				const _i18n = this.$t('index');
				this.tabs = this.$utils.map(this.tabs, tab => {
					tab.title = _i18n[tab.name];
					return tab;
				});
			},
			toggleSidebar() {
				this.isCollapse = !this.isCollapse;
				if (this.isXS) {
					if (this.showLeftWindow) {
						uni.hideLeftWindow();
					} else {
						uni.showLeftWindow();
					}
				} else {
					uni.$emit('collapseMenu', this.isCollapse);
				}
			},
			tabClick({
				name
			}) {
				const {
					url,
					keepAlive
				} = this.$utils.find(this.tabs, tab => tab.name === name);
				this.$utils.navigateTo(url, false === keepAlive ? null : this);
				uni.$emit('activeMenu', name);
			},
			tabRemove(name) {
				let tabs = this.tabs;
				let activeName = this.activeTab;
				if (activeName === name) {
					tabs.forEach((tab, index) => {
						if (tab.name === name) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.activeTab = activeName;

				this.tabClick({
					name: activeName
				});

				this.tabs = tabs.filter(tab => tab.name !== name);
			},
			navigateTo(name, url, keepAlive) {
				if (this.$utils.navigateTo(url, false === keepAlive ? null : this)) {
					this.handleActiveTab({
						name,
						title: this.$t('index')[name],
						url,
						keepAlive
					});
				}
			},
			async userCommand(command) {
				switch (command) {
					case 'self':
						this.navigateTo(command, '/pages/system/self/self', true)
						break;
					case 'message':
						this.navigateTo(command, '/pages/system/message/message', true)
						break;
					case 'lock':
						this.$refs.screenLock.lock();
						break;
					case 'fanyi':
						this.$refs.langSelect.selectLanguage()
						break;
					case 'logout':
						try {
							await this.$http.post('/api/user/logout')
						} catch (e) {} finally {
							this.$store.commit('clearToken');
							uni.reLaunch({
								url: '/pages/login/login'
							});
						}
						break;
				}
			},
			handleActiveTab(tab) {
				if (!this.$utils.find(this.tabs, _tab => _tab.name == tab.name)) {
					this.tabs.push(
						Object.assign({
								closable: true
							},
							tab
						)
					);
					this.changeLanguage();
				}
				this.activeTab = tab.name;
			}
		},
		mounted: function() {
			this.$nextTick(() => {
				this.isXS = getApp().globalData.systemInfo.isXS;
				if (this.isXS) {
					this.userPanelWidth = 40
				}
			});

			uni.$on('activeTab', this.handleActiveTab);
		}
	};
</script>

<style lang="scss" scoped>
	.top-window {
		height: 40px;
		background-color: #ffffff;

		.toggle-sidebar {
			width: 40px;
			min-width: 40px;
			cursor: pointer;
		}

		@media only screen and (min-width: 768px) {


			.nav-right {
				justify-content: space-around;

				&>* {
					cursor: pointer;
				}
			}
		}

		@media only screen and (max-width: 767px) {
			.nav-right {
				justify-content: center;
			}
		}
	}
</style>

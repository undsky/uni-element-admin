<template>
	<el-dropdown trigger="click" @command="langCommand">
		<el-tooltip :content="i18n.changLanguage" placement="bottom">
			<i class="iconfont icon-fanyi"></i>
		</el-tooltip>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
			<el-dropdown-item :disabled="language==='en'" command="en" divided>English</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>

<script>
	export default {
		name: "langselect",
		data() {
			return {

			};
		},
		computed: {
			language() {
				return this.$store.state.i18n.language
			},
			i18n() {
				return this.$t('index')
			}
		},
		methods: {
			langCommand(command) {
				this.$i18n.locale = command
				this.$store.commit('setLanguage', command)
			},
		}
	}
</script>

<style>

</style>

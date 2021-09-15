<template>
	<z-paging style="height: 100%;" ref="paging" v-model="list" auto-show-back-to-top :fixed="false"
		autowire-query-name="query" :auto="false" :enable-back-to-top="currentIndex === tabIndex">
		<slot :list="list"></slot>
	</z-paging>
</template>

<script>
	export default {
		name: "mc-scroll-paging",
		props: {
			url: String,
			method: {
				type: String,
				default: 'post'
			},
			params: Object,
			options: [Boolean, Object],
			reload: {
				type: Boolean,
				default: false
			},
			tabIndex: {
				type: Number,
				default: 0
			},
			currentIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				firstLoaded: false
			};
		},
		watch: {
			params: function() {
				if (this.reload) this.$refs.paging.reload();
			},
			currentIndex: {
				handler(newVal) {
					if (newVal === this.tabIndex) {
						if (!this.firstLoaded) {
							this.$nextTick(() => {
								this.$refs.paging.reload();
							});
						}
					}
				},
				immediate: true
			}
		},
		methods: {
			query: async function(currentPage, pageSize) {
				let list = [];
				try {
					const {
						rows
					} = await this.$http[this.method](this.url, Object.assign({
						currentPage,
						pageSize
					}, this.params), this.options);
					list = rows
				} catch (e) {
					console.log(e)
				} finally {
					this.$refs.paging.complete(list);
					this.firstLoaded = true;
				}
			}
		}
	}
</script>

<style>
</style>

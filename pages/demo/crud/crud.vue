<template>
	<scroll-view scroll-y="true" class="main padding">
		<avue-form class="avue-form-inline" ref="formSearch" v-model="formSearchValue" :option="formSearchOption"
			@submit="formSearchSubmit" @reset-change="formSearchResetChange">
			<template slot="menuForm">
				<el-button @click="search" type="info">查询</el-button>
				<el-button @click="add" type="primary">新增</el-button>
				<el-button @click="edit" type="warning">修改</el-button>
				<el-button @click="del" type="danger">删除</el-button>
			</template>
		</avue-form>
		<view v-loading="tableLoading">
			<vxe-toolbar ref="xToolbar" custom>
				<template #buttons>
					<view class="margin-left">
						<el-button @click="add" type="primary">新增</el-button>
					</view>
				</template>
				<template #tools></template>
			</vxe-toolbar>
			<vxe-table :data="tableData" ref="xTable" :row-config="{ isCurrent: true, isHover: true }">
				<vxe-table-column field="name" title="名称"></vxe-table-column>
				<vxe-table-column title="操作" width="150">
					<template #default="{ row }">
						<el-button type="info" size="mini" @click="editRow(row)">修改</el-button>
						<el-button type="danger" size="mini" @click="delRow(row)">删除</el-button>
					</template>
				</vxe-table-column>
			</vxe-table>
			<vxe-pager :current-page="tablePage.currentPage" :page-size="tablePage.pageSize" :total="tablePage.total"
				@page-change="pageChange"></vxe-pager>
		</view>
		<vxe-modal v-model="formModalShow" :title="formModalTitle" @hide="formModalHide" width="50%"
			:position="{ top: '15vh' }">
			<template #default>
				<avue-form ref="form" v-model="formValue" :option="formOption" @submit="formSubmit"
					@reset-change="formResetChange"></avue-form>
			</template>
		</vxe-modal>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			const formSearch = {
				formSearchValue: {},
				formSearchOption: {}
			};

			const formModal = {
				formModalShow: false,
				formModalTitle: ' ',
				formValue: {},
				formOption: {}
			};

			const table = {
				tableLoading: false,
				tableData: [],
				tablePage: {
					currentPage: 1,
					pageSize: this.$config.pageSize,
					total: 0
				}
			};

			return {
				...formSearch,
				...formModal,
				...table
			};
		},
		methods: {
			async search() {
				this.tablePage.currentPage = 1;
				await this.loadData();
			},
			add() {
				this.formValue.id = 0;
				this.formModalShow = true;
			},
			edit() {},
			del() {},
			async loadData() {
				this.tableLoading = true;
				try {
					const result = await this.$http.post('/page', Object.assign({}, this.formSearchValue, this
						.tablePage));

					if (result) {
						this.tablePage.total = result.total;
						this.tableData = result.rows;
					}
				} catch (e) {} finally {
					this.tableLoading = false;
				}
			},
			async pageChange({
				currentPage,
				pageSize
			}) {
				this.tablePage.currentPage = currentPage;
				this.tablePage.pageSize = pageSize;
				await this.loadData();
			},
			editRow(row) {
				this.formValue = row;
				this.formModalShow = true;
			},
			async delRow(row) {
				try {
					await this.$confirm('您确定要删除该数据?', {
						type: 'warning'
					});

					const loading = this.$loading();
					try {
						const result = await this.$http.post('/del', {
							id: row.id
						});

						this.$message({
							type: 'success',
							message: '删除成功',
							showClose: true
						});

						await this.loadData();
					} catch (e) {} finally {
						loading.close();
					}
				} catch (e) {}
			},
			formModalHide() {
				this.$refs.form.resetForm();
			},
			async formSubmit(form, done) {
				const loading = this.$loading();
				try {
					const result = await this.$http.post('/save', Object.assign({}, this.formValue));

					this.$message({
						type: 'success',
						message: '保存成功',
						showClose: true
					});

					this.formModalShow = false;
					await this.loadData();
				} catch (e) {} finally {
					loading.close();
					done();
				}
			},
			formResetChange() {}
		},
		onLoad: async function(options) {
			this.$nextTick(() => {
				this.$refs.xTable.connect(this.$refs.xToolbar);
			});
		}
	};
</script>
<style lang="scss" scoped></style>

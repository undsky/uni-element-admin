<template>
	<scroll-view class="main" scroll-y>
		<el-row :gutter="10">
			<el-col :span="9">
				<view v-loading="treeRoleLoading">
					<vxe-toolbar ref="xToolbarRole">
						<template #buttons>
							<view class="margin-left"><el-button @click="addRole()" type="primary" size="small">添加角色</el-button></view>
						</template>
						<template #tools></template>
					</vxe-toolbar>
					<vxe-table ref="xTreeRole" :data="treeRoleData" :tree-config="{ transform: true, expandAll: true }">
						<vxe-column field="name" title="角色"></vxe-column>
						<vxe-column field="uname" title="创建人"></vxe-column>
						<vxe-table-column title="操作" width="210" show-overflow>
							<template #default="{ row }">
								<el-button type="primary" size="mini" @click="addRole(row)">添加</el-button>
								<el-button type="info" size="mini" @click="editRole(row)">修改</el-button>
								<el-button type="danger" size="mini" @click="delRole(row)">删除</el-button>
							</template>
						</vxe-table-column>
					</vxe-table>
				</view>
			</el-col>
			<el-col :span="15">
				<view v-loading="treeMenuLoading">
					<vxe-toolbar ref="xToolbarMenu">
						<template #buttons>
							<view class="margin-left"><el-button @click="saveAuth" type="success" size="small">保存授权</el-button></view>
						</template>
						<template #tools></template>
					</vxe-toolbar>
					<vxe-table ref="xTreeMenu" :data="treeMenuData" :tree-config="{ transform: true, expandAll: true }" :checkbox-config="{ labelField: 'name' }">
						<vxe-column field="name" title="页面"></vxe-column>
					</vxe-table>
				</view>
			</el-col>
		</el-row>
		<vxe-modal v-model="formRoleModalShow" @hide="formRoleModalHide" title="角色" width="50%" :position="{ top: '15vh' }">
			<template #default>
				<avue-form ref="formRole" v-model="formRoleValue" :option="formRoleOption" @submit="formRoleSubmit" @reset-change="formRoleResetChange"></avue-form>
			</template>
		</vxe-modal>
	</scroll-view>
</template>

<script>
export default {
	data() {
		const formRoleModal = {
			formRoleModalShow: false,
			formRoleModalTitle: ' ',
			formRoleValue: {},
			formRoleOption: {
				column: [
					{
						type: 'input',
						label: '',
						span: 24,
						display: false,
						prop: 'id'
					},
					{
						type: 'input',
						label: '',
						span: 24,
						display: false,
						prop: 'pid'
					},
					{
						type: 'input',
						label: '',
						span: 24,
						display: false,
						prop: 'pids'
					},
					{
						type: 'input',
						label: '上级',
						span: 24,
						display: true,
						prop: 'pname',
						readonly: true,
						placeholder: '无'
					},
					{
						type: 'input',
						label: '名称',
						span: 24,
						display: true,
						prop: 'name',
						required: true,
						rules: [
							{
								required: true,
								message: '名称必须填写'
							}
						]
					}
				],
				labelPosition: 'left',
				labelSuffix: '：',
				labelWidth: 120,
				gutter: 0,
				menuBtn: true,
				submitBtn: true,
				submitText: '提交',
				emptyBtn: false,
				emptyText: '清空',
				menuPosition: 'center',
				menuSpan: 24
			}
		};

		const treeRole = {
			treeRoleLoading: false,
			treeRoleData: []
		};

		const treeMenu = {
			treeMenuLoading: false,
			treeMenuData: []
		};

		return {
			pid: 0,
			pids: '0',
			...formRoleModal,
			...treeRole,
			...treeMenu
		};
	},
	methods: {
		async loadTreeRoleData() {
			try {
				this.treeRoleData = await this.$http.post('/api/role/selects');
			} catch (e) {}
		},
		addRole(row) {
			const _row = row || {
				id: 0,
				pid: this.pid,
				pids: this.pids
			};
			this.formRoleValue.id = 0;
			this.formRoleValue.pid = _row.id;
			this.formRoleValue.pids = `${_row.pids || '0'}${_row.id ? ',' + _row.id : ''}`;
			this.formRoleValue.parent = _row.name || '无';
			this.formRoleModalShow = true;
		},
		editRole(row) {},
		delRole(row) {},
		formRoleModalHide() {
			this.$refs.formRole.resetForm();
		},
		async formRoleSubmit(form, done) {
			try {
				const result = await this.$http.post('/api/role/save', form);

				this.$message({
					type: 'success',
					message: '保存成功',
					showClose: true
				});

				this.formRoleModalShow = false;
				await this.loadTreeRoleData();
			} catch (e) {
			} finally {
				done();
			}
		},
		formRoleResetChange() {},
		async saveAuth() {}
	},
	onLoad: async function(options) {
		this.$nextTick(() => {
			this.$refs.xTreeRole.connect(this.$refs.xToolbarRole);
			this.$refs.xTreeMenu.connect(this.$refs.xToolbarMenu);
		});

		await this.loadTreeRoleData();
	}
};
</script>
<style lang="scss" scoped></style>

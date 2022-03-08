<template>
	<el-row gutter="0">
		<el-col span="8">
			<vxe-toolbar ref="xToolbar">
				<template #buttons>
					<view class="margin-left">
						<el-button @click="add" type="primary">新增</el-button>
					</view>
				</template>
				<template #tools>
				</template>
			</vxe-toolbar>
			<vxe-table ref="xTree"
				:tree-config="{ transform: true, rowField: 'id', parentField: 'pid', expandAll: true }" resizable>
				<vxe-column field="name" title="角色"></vxe-column>
				<vxe-column field="uname" title="创建人"></vxe-column>
				<vxe-table-column title="操作" width="200" show-overflow>
					<template #default="{ row }">
						<el-button type="info" size="mini" @click="editRow(row)">修改</el-button>
						<el-button type="danger" size="mini" @click="delRow(row)">删除</el-button>
					</template>
				</vxe-table-column>
			</vxe-table>
		</el-col>
		<el-col span="16"></el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
		onLoad: async function(options) {
			this.$nextTick(() => {
				this.$refs.xTable.connect(this.$refs.xToolbar)
			})
		}
	};
</script>

<style></style>

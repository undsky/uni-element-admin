<template>
	<el-row gutter="20">
		<el-col span="8">
			<vxe-table ref="xTree" :tree-config="{ transform: true, rowField: 'id', parentField: 'pid' }" resizable>
				<vxe-column field="name" title="角色"></vxe-column>
				<vxe-column field="uname" title="创建人"></vxe-column>
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
	methods: {}
};
</script>

<style></style>
